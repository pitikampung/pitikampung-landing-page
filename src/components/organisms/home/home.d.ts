import { IProduct } from "@/shared/domain/product";
import { ElementType } from "react";

export interface HomeAboutUsProps {
  icon: ElementType;
  title: string;
  description: string;
  imageBackground: string;
}

export interface CardArticleProps {
  id: number;
  category: string;
  date: string;
  reads: string;
  title: string;
  seoKey: string;
  desc: string;
  image: string;
  featured?: boolean;
}

export interface CardProductProps extends Partial<IProduct> {
  id: number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number;
  img: string;
  onSale: boolean;
  seoTitle: string;
}
