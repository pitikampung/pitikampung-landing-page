"use client";

import { Button } from "@/components/atoms";
import { Accordion } from "@/components/molecules";
import { productRoute } from "@/shared/constants";
import Link from "next/link";
import { FC } from "react";

const faqItems = [
  {
    value: "item-1",
    trigger: "Apakah produk Pitikampung selalu segar?",
    content:
      "Ya, semua produk ayam, telur, dan ikan di Pitikampung dikirim langsung dari peternakan dan pasar ikan lokal setiap hari. Kami pastikan produk sampai ke pelanggan dalam kondisi segar dan higienis.",
  },
  {
    value: "item-2",
    trigger: "Apakah ada layanan pengiriman gratis?",
    content:
      "Betul! Kami menyediakan layanan gratis ongkir khusus wilayah Sidoarjo. Untuk wilayah lain, ongkos kirim akan menyesuaikan jarak dan ekspedisi yang digunakan.",
  },
  {
    value: "item-3",
    trigger: "Bagaimana cara memastikan kualitas ayam dan ikan?",
    content:
      "Produk kami dipilih dari peternakan dan pasar ikan yang terpercaya. Setiap pesanan dikemas dengan standar higienis agar kesegaran tetap terjaga hingga sampai di rumah Anda.",
  },
  {
    value: "item-4",
    trigger: "Apakah bisa pesan dalam jumlah besar?",
    content:
      "Tentu saja! Pitikampung melayani pembelian ecer maupun grosir. Cocok untuk kebutuhan rumah tangga, restoran, maupun acara besar.",
  },
];

export const FaqSection: FC = () => {
  return (
    <section className="padding-layout py-24 bg-warning-500/20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="my-auto">
          <h2 className="text-2xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-gray-600 mb-6">
            Punya pertanyaan? Tenang, kami sudah siapkan jawabannya.
          </p>
          <Link
            href="/faq"
            className="text-primary-default font-medium hover:underline"
          >
            Lihat FAQ Lainnya →
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <Accordion
            type="single"
            collapsible
            items={faqItems.map((item) => ({
              value: item.value,
              trigger: item.trigger,
              content: (
                <div className="flex flex-col gap-2">
                  <div>{item.content}</div>
                  <Button
                    type="button"
                    variant="warning"
                    size="lg"
                    className="w-1/2"
                  >
                    <Link href={productRoute.index}>Belanja Sekarang</Link>
                  </Button>
                </div>
              ),
              triggerClassName: "text-left font-medium py-4",
              contentClassName: "text-gray-600 pb-4",
              className: "border-b border-gray-200",
            }))}
          />
        </div>
      </div>
    </section>
  );
};
