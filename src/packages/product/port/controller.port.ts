import { IProduct } from "@/shared/domain/product";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

export interface IController {
  products: UseInfiniteQueryResult<
    InfiniteData<Array<IProduct> | undefined>,
    Error
  >;
}
