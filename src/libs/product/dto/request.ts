import { TProductCategory, TProductSize } from "@/shared/domain/product";
import { IQueryParams } from "@/shared/utils/rest-api/types";

export interface IRequestProduct extends IQueryParams {
  categries?: TProductCategory[];
  sizes?: TProductSize[];
}
