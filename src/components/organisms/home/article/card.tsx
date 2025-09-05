"use client";

import { Image } from "@/components/atoms";
import { articleRoute } from "@/shared/constants";
import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import Link from "next/link";
import { FC } from "react";
import { CardArticleProps } from "../home";

export const ArticleCard: FC<CardArticleProps> = ({
  category,
  date,
  desc,
  id,
  image,
  reads,
  seoKey,
  title,
}) => {
  return (
    <Link
      href={articleRoute.detail(seoKey)}
      key={id}
      className={styles["home-article-card"]}
    >
      <Image
        height={200}
        width={200}
        src={image}
        alt={title}
        className={cn(styles["home-article-image"])}
      />
      <div className={styles["home-article-overlay"]}>
        <div className={styles["home-article-meta"]}>
          <span>{category}</span> · <span>{date}</span> ·{" "}
          <span>{reads} dibaca</span>
        </div>
        <h3
          className={cn(
            "lg:translate-y-12 md:translate-y-2 translate-y-10",
            styles["home-article-cardTitle"]
          )}
        >
          {title}
        </h3>
        <p className={styles["home-article-desc"]}>{desc}</p>
      </div>
    </Link>
  );
};
