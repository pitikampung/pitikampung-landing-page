import { IControllerResponse } from "@/libs/libs";
import { IProduct } from "@/shared/domain/product";
import { IRequestProduct } from "../dto/request";

export interface IController {
  list: (
    params: IRequestProduct
  ) => Promise<IControllerResponse<Array<IProduct>>>;
}
