"use client";

import { Button } from "@/components/atoms";
import { Egg, Fish, HeartHandshake } from "lucide-react";
import Image from "next/image";

export const AboutUsView = () => {
  return (
    <main className="bg-white text-gray-800">
      <section className="relative w-full h-[400px] flex items-center justify-center bg-gray-100">
        <Image
          src="/assets/images/logo.png"
          alt="Pitikampung About Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Tentang Kami
          </h1>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Siapa Kami?</h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          <strong>Pitikampung</strong> adalah brand yang lahir dari semangat
          menghadirkan bahan pangan segar, sehat, dan terpercaya langsung dari
          peternak lokal ke meja makan keluarga Indonesia. Kami percaya bahwa
          setiap rumah tangga berhak mendapatkan ayam kampung, ikan, dan produk
          segar lainnya dengan kualitas terbaik, harga terjangkau, dan layanan
          yang memudahkan.
        </p>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Visi Kami</h3>
            <p className="leading-relaxed">
              Menjadi penyedia bahan pangan lokal yang sehat, aman, dan
              terpercaya, serta mendukung keberlanjutan peternakan dan perikanan
              di Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Misi Kami</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Menghadirkan produk ayam kampung, ikan, dan pangan segar
                berkualitas.
              </li>
              <li>
                Membangun jaringan distribusi yang cepat, higienis, dan efisien.
              </li>
              <li>Mendukung peternak lokal untuk tumbuh bersama.</li>
              <li>
                Mengedukasi masyarakat tentang pentingnya konsumsi pangan sehat.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Kenapa Memilih Pitikampung?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <Fish
              className="mx-auto mb-4 text-primary-default"
              size={64}
              strokeWidth={1.5}
            />
            <h4 className="font-semibold text-lg mb-2">Selalu Segar</h4>
            <p>
              Produk langsung dari peternak tanpa rantai distribusi panjang.
            </p>
          </div>
          <div className="text-center">
            <Egg
              className="mx-auto mb-4 text-warning-default"
              size={64}
              strokeWidth={1.5}
            />
            <h4 className="font-semibold text-lg mb-2">Kualitas Terjamin</h4>
            <p>
              Dari proses pemeliharaan hingga pengiriman, kami menjaga kualitas
              terbaik.
            </p>
          </div>
          <div className="text-center">
            <HeartHandshake
              className="mx-auto mb-4 text-danger-default"
              size={64}
              strokeWidth={1.5}
            />
            <h4 className="font-semibold text-lg mb-2">Dukung Lokal</h4>
            <p>Setiap pembelian Anda membantu peternak lokal berkembang.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Bergabunglah Bersama Kami
        </h2>
        <p className="max-w-2xl mx-auto mb-8 leading-relaxed">
          Pitikampung hadir bukan hanya sebagai penyedia bahan pangan, tetapi
          juga sebagai bagian dari solusi untuk hidup lebih sehat dan mendukung
          ekonomi lokal. Mari bersama-sama membangun kebiasaan konsumsi yang
          lebih baik.
        </p>
        <div className="w-fit mx-auto">
          <Button>Hubungi Kami</Button>
        </div>
      </section>
    </main>
  );
};
