"use client";

import styles from "@/shared/styles/packages/home.module.css";
import { cn } from "@/shared/utils";
import {
  IcChickenMeat,
  IcEgg,
  IcFishMeat,
} from "../../../../../public/assets/icons";
import { HomeAboutUsProps } from "../home";
import { HomeAboutUsCard } from "./card";

const categories: HomeAboutUsProps[] = [
  {
    icon: IcEgg,
    title: "Telur Ayam",
    description:
      "Telur ayam kampung segar, bergizi, dan higienis. Bebas bahan kimia berbahaya serta dipastikan halal.",
    imageBackground: "/assets/images/category-egg-white.webp",
  },
  {
    icon: IcChickenMeat,
    title: "Ayam Segar",
    description:
      "Daging ayam kampung segar dengan kualitas terjamin. Tanpa obat-obatan berbahaya, aman, dan halal.",
    imageBackground: "/assets/images/category-chicken.webp",
  },
  {
    icon: IcFishMeat,
    title: "Ikan Segar",
    description:
      "Ikan segar pilihan dari sumber terpercaya. Bebas bahan kimia dan dijamin halal.",
    imageBackground: "/assets/images/category-fish.webp",
  },
];

export const HomeAboutUs = () => {
  return (
    <div className={cn("padding-layout", styles["home-about-us"])}>
      <h1 className="text-3xl font-bold">
        Kami Menyediakan{" "}
        <span className="text-danger-default font-extrabold">Protein</span>{" "}
        <span className="block">
          Kategori{" "}
          <span className="text-danger-default font-extrabold">Terbaik</span>
        </span>
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {categories?.map((item, index) => (
          <HomeAboutUsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
