"use client";

import { Image } from "@/components/atoms";
import {
  aboutUsRoute,
  articleRoute,
  contactUsRoute,
  productRoute,
} from "@/shared/constants";
import styles from "@/shared/styles/components/footer.module.css";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { IcTiktok } from "../../../../public/assets/icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Belanja Ayam, Telur & Ikan Segar <br /> Lebih Mudah di Pitikampung!
          </h2>
          <Link href={productRoute.index} className={styles.ctaButton}>
            Belanja Sekarang
          </Link>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>
          <div>
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="logo pitikampung"
                height={100}
                width={100}
                className="mb-4 rounded-md"
              />
            </Link>
            <p className={styles.desc}>
              Solusi belanja daging ayam, telur, dan ikan segar langsung dari
              peternak & nelayan. Higienis, aman, dan terpercaya.
            </p>
            <div className={styles.socials}>
              <a
                target="_blank"
                href="https://www.instagram.com/pitikampung_id/"
              >
                <Instagram size={20} />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Pitikampung-ID/61575872562147/"
              >
                <Facebook size={20} />
              </a>
              <a
                className="group"
                target="_blank"
                href="https://www.tiktok.com/@pitikampung"
              >
                <IcTiktok className="size-5 fill-black group-hover:fill-white" />
              </a>
            </div>
          </div>
          <div className="md:mt-6 mt-0">
            <h4 className={styles.columnTitle}>Explore</h4>
            <ul>
              <li>
                <Link href="/">Beranda</Link>
              </li>
              <li>
                <Link href={aboutUsRoute}>Tentang Kami</Link>
              </li>
              <li>
                <Link href={productRoute.index}>Produk</Link>
              </li>
              <li>
                <Link href={articleRoute.index}>Artikel</Link>
              </li>
            </ul>
          </div>
          <div className="md:mt-6 mt-0">
            <h4 className={styles.columnTitle}>Get In Touch</h4>
            <ul>
              <li>
                <Link href={contactUsRoute}>Hubungi Kami</Link>
              </li>
              <li>
                <Link href="/delivery">Info Pengiriman</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="md:mt-6 mt-0">
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Kebijakan Privasi</Link>
              </li>
              <li>
                <Link href="/terms">Syarat & Ketentuan</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Pitikampung. All rights reserved.</p>
      </div>
    </footer>
  );
};
