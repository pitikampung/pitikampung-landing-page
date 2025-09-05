"use client";

import { Button } from "@/components/atoms";
import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import { ArrowDown, Facebook, Instagram } from "lucide-react";
import { IcTiktok, IcWhatsapp } from "../../../../../public/assets/icons";

export const HomeHero = () => {
  return (
    <div className={styles.home}>
      <div className={cn("padding-layout", styles["home-content"])}>
        <div className={cn("-top-20 left-1/12", styles["chicken-icon"])} />
        <div className={styles["left-content"]}>
          <h2 className="font-extrabold text-3xl">
            Ayam Kampung, Negeri, dan Ikan
          </h2>
          <h1 className="font-extrabold uppercase text-5xl">
            <span className="font-black text-danger-default">Protein</span>{" "}
            Lengkap Setiap Hari
          </h1>
          <div className="flex flex-col gap-8">
            <p className="mt-8 tracking-wide text-lg">
              Sumber protein sehat untuk keluarga Indonesia, langsung dari
              peternakan terpercaya.
            </p>
            <Button
              type="button"
              variant="warning"
              className="w-fit group uppercase"
              size="lg"
            >
              Pesan Sekarang
              <ArrowDown className="size-5 rotate-[225deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 right-1/6 opacity-65">
          <div className={styles["paprica-cut-green"]} />
          <div className={styles["paprica-cut-yellow"]} />
          <div className={styles["paprica-cut-red"]} />
        </div>
        <div className={styles.carousel}>
          <div className={cn(styles.item, styles["white-egg"])} />
          <div className={cn(styles.item, styles["chicken-meat"])} />
          <div className={cn(styles.item, styles["chicken-meat-free-range"])} />
        </div>
        <div className={styles["follow-sosmed"]}>
          <span className="border-b-2 rounded-full border-danger-default w-12 absolute bottom-2 -left-12" />
          <p className="text-sm text-gray-700">Follow on</p>
          <a
            target="_blank"
            href="https://www.instagram.com/pitikampung_id/"
            className={styles.sosmed}
          >
            <Instagram className="size-4 text-danger-default" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Pitikampung-ID/61575872562147/"
            className={styles.sosmed}
          >
            <Facebook className="size-4 fill-blue-600 text-blue-600" />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@pitikampung"
            className={styles.sosmed}
          >
            <IcTiktok className="size-4 fill-black" />
          </a>
          <a
            target="_blank"
            href="https://wa.me/6282139994797?text=Halo Pitikampung, saya tertarik dengan produk ayam dan ikan. Bisa dibantu infonya?"
            className={styles.sosmed}
          >
            <IcWhatsapp className="size-4 fill-green-600 text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
};
