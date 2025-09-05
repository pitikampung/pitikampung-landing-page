import { IRequestProduct } from "@/libs/product/dto/request";
import { IRepository } from "../port/repository.port";
import { IUseCase } from "../port/usecase.port";

export class UseCase implements IUseCase {
  private repository: IRepository;

  constructor(repository: IRepository) {
    this.repository = repository;
  }

  products = async (params: IRequestProduct) => {
    try {
      console.log(params, " -->><< params params");
      const { code, data } = await this.repository.products(params);
      if (data?.length && code === 200) {
        return data;
      }
      return [];
    } catch (_) {
      return [];
    }
  };
}
