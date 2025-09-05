import { IRequestProduct } from "@/libs/product/dto/request";
import { IProduct } from "@/shared/domain/product";
import { RestAPI } from "@/shared/utils/rest-api";
import { IRepository } from "../../port/repository.port";
import path from "../path";

export class Repository implements IRepository {
  private api: RestAPI;

  constructor(api: RestAPI) {
    this.api = api;
  }

  products = async (queryParam: IRequestProduct) => {
    console.log(queryParam, " -->>>>");
    const response = await this.api.get<Array<IProduct>>({
      endpoint: path.products,
      queryParam,
      isNextApi: true,
    });
    return response;
  };
}
