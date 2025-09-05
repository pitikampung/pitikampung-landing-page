"use client";

import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import { Gift, Package, Truck } from "lucide-react";

const items = [
  {
    icon: Gift,
    title: "Gratis Ongkir Sidoarjo",
    desc: "Setiap pembelian di wilayah Sidoarjo akan langsung mendapatkan layanan gratis ongkir tanpa syarat. Pesan kapan saja, produk segar siap kami antar ke depan pintu rumah Anda.",
  },
  {
    icon: Truck,
    title: "Pengiriman Cepat",
    desc: "Kami memastikan semua pesanan Anda dikirim dengan cepat dan tepat waktu. Tanpa ribet, tanpa harus menunggu lama, produk sampai dalam kondisi segar dan siap digunakan.",
  },
  {
    icon: Package,
    title: "Kemasan Aman",
    desc: "Semua produk kami dikemas dengan rapi, higienis, dan menggunakan bahan aman. Tujuannya agar ayam, telur, dan ikan tetap segar, bersih, serta terjaga kualitasnya hingga sampai di rumah Anda.",
  },
];

const BenefitSection = () => {
  return (
    <section className={cn("padding-layout", styles["benefit-section"])}>
      <div className="flex md:flex-row flex-col justify-between items-start md:gap-2 gap-8">
        <h2 className="text-3xl font-extrabold text-left tracking-wider leading-snug w-full">
          Dapatkan Semua ini <span className="block">Bersama Kami</span>
        </h2>
        <div className="md:w-1/2 w-full text-gray-800 tracking-wider pl-2 border-l-4 border-primary-default">
          Telur segar, daging ayam kampung, dan ikan berkualitas. Semua langsung
          dari sumbernya, untuk kesehatan keluarga Anda.
        </div>
      </div>
      <div className="grid md:gap-12 gap-6 md:grid-cols-3 relative">
        {items.map(({ icon: Icon, ...item }, idx) => (
          <div key={idx} className={styles["benefit-card"]}>
            {!idx ? <div className={styles["benefit-line"]} /> : undefined}
            <div className={styles["benefit-card-icon"]}>
              <Icon className={styles["benefit-icon"]} />
            </div>
            <h2 className={styles["benefit-title"]}>{item.title}</h2>
            <p className={styles["benefit-desc"]}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
