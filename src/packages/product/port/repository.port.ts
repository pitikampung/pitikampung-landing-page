import { IRequestProduct } from "@/libs/product/dto/request";
import { IProduct } from "@/shared/domain/product";
import { ResponseREST } from "@/shared/utils/rest-api/types";

export interface IRepository {
  products: (params: IRequestProduct) => Promise<ResponseREST<Array<IProduct>>>;
}
