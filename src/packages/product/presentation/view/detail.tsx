"use client";

import { Button, Image } from "@/components/atoms";
import { IProduct } from "@/shared/domain/product";
import { formatRupiah } from "@/shared/utils";
import { useState } from "react";

// ✅ sample product data, consistent with IProduct
const productVariants: IProduct[] = [
  {
    id: 1,
    name: "Telur Ayam Kampung",
    category: "ayam-kampung",
    description:
      "Telur ayam kampung asli dari peternakan Sidoarjo. Dipanen segar, kaya nutrisi, dan cocok untuk kebutuhan harian keluarga.",
    price: 18000,
    img: "/images/products/telur-1.jpg",
    seoTitle: "telur-ayam-kampung-6-butir",
    size: "6 butir",
    onSale: false,
  },
  {
    id: 2,
    name: "Telur Ayam Kampung",
    category: "ayam-kampung",
    description:
      "Telur ayam kampung asli dari peternakan Sidoarjo. Dipanen segar, kaya nutrisi, dan cocok untuk kebutuhan harian keluarga.",
    price: 28000,
    img: "/images/products/telur-1.jpg",
    seoTitle: "telur-ayam-kampung-10-butir",
    size: "10 butir",
    onSale: false,
  },
  {
    id: 3,
    name: "Telur Ayam Kampung",
    category: "ayam-kampung",
    description:
      "Telur ayam kampung asli dari peternakan Sidoarjo. Dipanen segar, kaya nutrisi, dan cocok untuk kebutuhan harian keluarga.",
    price: 75000,
    img: "/images/products/telur-1.jpg",
    seoTitle: "telur-ayam-kampung-30-butir",
    size: "30 butir",
    onSale: false,
  },
];

export const ProductDetailView = () => {
  const [selectedVariant, setSelectedVariant] = useState<IProduct>(
    productVariants[0]
  );

  // ✅ WhatsApp link
  const phoneNumber = "628123456789"; // ganti nomor
  const message = `Halo, saya mau beli ${selectedVariant.name} ukuran ${
    selectedVariant.size
  } seharga ${formatRupiah(selectedVariant.price)}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className="padding-layout py-32 grid md:grid-cols-2 gap-10">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
          <Image
            src={selectedVariant.img}
            alt={selectedVariant.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        {/* thumbnails – pakai gambar sama aja dulu */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="w-full aspect-square rounded-md overflow-hidden border border-gray-100 cursor-pointer hover:opacity-80"
            >
              <Image
                src={selectedVariant.img}
                alt={`thumb-${idx}`}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4">
        <div className="border-b border-gray-300 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {selectedVariant.name}
          </h1>
          <p className="text-gray-500 mt-2">{selectedVariant.description}</p>

          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700">Harga</p>
            <p className="text-2xl font-bold text-primary-default">
              {formatRupiah(selectedVariant.price)}
            </p>
          </div>

          {/* Size selection */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-700">Pilih Ukuran</p>
            <div className="flex flex-wrap gap-2 mt-2 justify-start">
              {productVariants.map((variant) => (
                <div key={variant.size} className="w-fit">
                  <Button
                    variant={
                      selectedVariant.size === variant.size
                        ? "primary"
                        : "primaryOutline"
                    }
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant.size}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button size="xl" variant="primaryOutline">
            Tambah ke Keranjang
          </Button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button size="xl" variant="primary" className="w-full">
              Beli Sekarang
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
