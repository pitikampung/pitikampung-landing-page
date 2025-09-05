"use client";

import { Image } from "@/components/atoms";
import { articleRoute } from "@/shared/constants";
import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import Link from "next/link";
import { FC } from "react";
import { CardArticleProps } from "../home";

export const ArticleCardFeatured: FC<CardArticleProps> = ({
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
      className={cn(styles["home-article-featured"])}
    >
      <Image
        height={100}
        width={100}
        src={image}
        alt={title}
        className={cn(styles["home-article-image"])}
      />
      <div className={styles["home-article-overlay"]}>
        <div className={styles["home-article-meta"]}>
          <span>{category}</span> · <span>{date}</span> ·{" "}
          <span>{reads} dibaca</span>
        </div>
        <h3 className={cn("translate-y-2", styles["home-article-cardTitle"])}>
          {title}
        </h3>
        <p className={styles["home-article-desc"]}>{desc}</p>
      </div>
    </Link>
  );
};
