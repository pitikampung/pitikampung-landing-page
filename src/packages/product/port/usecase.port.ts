import { IRequestProduct } from "@/libs/product/dto/request";
import { IProduct } from "@/shared/domain/product";

export interface IUseCase {
  products: (params: IRequestProduct) => Promise<Partial<Array<IProduct>>>;
}
