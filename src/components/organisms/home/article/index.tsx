"use client";

import { articleRoute } from "@/shared/constants";
import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { ArticleCard } from "./card";
import { ArticleCardFeatured } from "./card-featured";

const articles = [
  {
    id: 1,
    category: "Fresh Chicken",
    date: "Aug 25, 2025",
    reads: "1.2k",
    title: "Tips Menyimpan Ayam Segar Agar Tahan Lama",
    seoKey: "tips-menyimpan-ayam-segar-agar-tahan-lama",
    desc: "Pelajari cara menyimpan ayam segar dengan benar supaya tetap higienis dan awet tanpa mengurangi kualitas rasa.",
    image: "/images/article-1.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Fresh Eggs",
    date: "Aug 20, 2025",
    reads: "850",
    title: "Manfaat Konsumsi Telur Setiap Hari",
    seoKey: "manfaat-konsumsi-telur-setiap-hari",
    desc: "Telur adalah sumber protein terbaik. Ketahui bagaimana konsumsi rutin bisa mendukung kesehatan tubuh Anda.",
    image: "/images/article-2.jpg",
  },
  {
    id: 3,
    category: "Fresh Fish",
    date: "Aug 15, 2025",
    reads: "920",
    title: "Kenali Ikan Segar Sebelum Membeli",
    seoKey: "kenali-ikan-segar-sebelum-membeli",
    desc: "Ada beberapa tanda penting untuk memastikan ikan yang Anda beli benar-benar segar dan aman dikonsumsi.",
    image: "/images/article-3.jpg",
  },
];

export const HomeArticle: FC = () => {
  return (
    <section className={cn("padding-layout")}>
      <div className={styles["home-article-header"]}>
        <h2 className={styles["home-article-title"]}>
          Artikel <span>Pitikampung</span>
        </h2>
        <p className={styles["home-article-subtitle"]}>
          Dapatkan tips, inspirasi, dan informasi terbaru seputar ayam, telur,
          dan ikan segar.
        </p>
      </div>
      <div className={styles["home-article-grid"]}>
        {articles
          ?.filter((a) => a.featured)
          ?.slice(0, 1)
          ?.map((a) => (
            <ArticleCardFeatured key={a.seoKey} {...a} />
          ))}
        <div className={styles["home-article-side"]}>
          {articles
            .filter((a) => !a.featured)
            .map((a) => (
              <ArticleCard {...a} key={a.seoKey} />
            ))}
        </div>
      </div>
      <Link
        href={articleRoute.index}
        className="flex items-center gap-1 text-md font-medium text-danger-default hover:underline transition-all group lg:mt-4 md:mt-8 mt-12"
      >
        Lihat Semua Artikel
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </section>
  );
};
