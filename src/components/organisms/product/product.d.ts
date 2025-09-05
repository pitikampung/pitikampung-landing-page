import { ElementType } from "react";

export type TProductSort =
  | "name-asc"
  | "created_at-desc"
  | "price-asc"
  | "price-desc";

export interface IProductSort {
  label: string;
  value: TProductSort;
  icon: ElementType;
}
