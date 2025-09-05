import { IProduct } from "@/shared/domain/product";
import { IRequestProduct } from "../dto/request";

export interface IUsecase {
  list: (params: IRequestProduct) => Promise<Array<IProduct> | undefined>;
}
