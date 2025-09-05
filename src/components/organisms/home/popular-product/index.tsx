"use client";

import { productRoute } from "@/shared/constants";
import { ArrowRight, Drumstick, Egg, Fish, Infinity } from "lucide-react";
import Link from "next/link";
import { CardProductProps } from "../home";
import { CardProduct } from "./card-product";

const products: CardProductProps[] = [
  {
    id: 1,
    category: "Telur",
    name: "Telur Ayam Kampung Segar",
    price: 28000,
    oldPrice: 32000,
    img: "/images/telur.jpg",
    onSale: true,
    seoTitle: "telur-ayam-kampung-segar",
  },
  {
    id: 2,
    category: "Ayam",
    name: "Ayam Kampung Utuh",
    price: 75000,
    img: "/images/ayam.jpg",
    onSale: false,
    seoTitle: "ayam-kampung-utuh",
  },
  {
    id: 3,
    category: "Ikan",
    name: "Ikan Nila Segar",
    price: 35000,
    oldPrice: 40000,
    img: "/images/ikan.jpg",
    onSale: true,
    seoTitle: "ikan-nila-segar",
  },
];

export const PopularProducts = () => {
  return (
    <section className="padding-layout">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          Produk <span className="text-danger-default">Terlaris</span>
        </h2>
        <p className="text-gray-600">
          Pilihan terbaik dari telur, ayam, dan ikan segar setiap harinya.
        </p>
      </div>
      <div className="flex justify-center gap-4 mb-8 overflow-x-auto">
        <div className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md bg-warning-default text-white hover:bg-warning-600 transition">
          <Infinity className="w-4 h-4" /> Semua
        </div>
        <div className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-100">
          <Egg className="w-4 h-4" /> Telur
        </div>
        <div className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-100">
          <Drumstick className="w-4 h-4" /> Ayam
        </div>
        <div className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-md border border-gray-500 hover:bg-gray-100">
          <Fish className="w-4 h-4" /> Ikan
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <CardProduct key={item?.seoTitle} {...item} />
        ))}
      </div>
      <Link
        href={productRoute.index}
        className="flex items-center gap-1 text-md font-medium text-danger-default hover:underline transition-all group justify-center mt-8"
      >
        Lihat Semua Produk
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
};
