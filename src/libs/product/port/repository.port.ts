import { IProduct } from "@/shared/domain/product";
import { IRequestProduct } from "../dto/request";

export interface IRepository {
  list: (params: IRequestProduct) => Promise<Array<IProduct> | undefined>;
}
