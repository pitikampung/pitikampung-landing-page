export type TProductCategory =
  | "ayam-kampung"
  | "ayam-negeri"
  | "ikan"
  | "pakan-ternak";

export type TProductSize =
  | "250gr"
  | "500gr"
  | "1kg"
  | "2kg"
  | "3kg"
  | "6 butir"
  | "10 butir"
  | "12 butir"
  | "20 butir"
  | "30 butir";

export interface IProduct {
  id: number;
  name: string;
  category: TProductCategory;
  description: string;
  price: number;
  img: string;
  seoTitle: string;
  size: TProductSize;
  onSale: boolean;
  oldPrice?: number;
  stars?: 1 | 2 | 3 | 4 | 5;
}
