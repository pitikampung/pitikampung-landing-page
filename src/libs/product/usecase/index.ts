import Logger from "@/shared/utils/logger";
import { IRequestProduct } from "../dto/request";
import { IRepository } from "../port/repository.port";
import { IUsecase } from "../port/usecase.port";
import { ProductRepository } from "../repository";

export class ProductUsecase implements IUsecase {
  private readonly repository: IRepository;

  constructor(repository: IRepository = new ProductRepository()) {
    this.repository = repository;
  }

  list = async (params: IRequestProduct) => {
    try {
      return await this.repository.list(params);
    } catch (error) {
      Logger.error(error, { location: "ProductUsecase.list" });
      return;
    }
  };
}
