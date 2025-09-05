import { IRequestProduct } from "../dto/request";
import { IController } from "../port/controller.port";
import { IUsecase } from "../port/usecase.port";
import { ProductUsecase } from "../usecase";

export class ProductsController implements IController {
  private readonly usecase: IUsecase;

  constructor(usecase: IUsecase = new ProductUsecase()) {
    this.usecase = usecase;
  }

  list = async (params: IRequestProduct) => {
    try {
      const data = await this.usecase.list(params);
      return { data };
    } catch (error) {
      const err =
        error instanceof Error ? error.message : "An unexpected error occurred";
      return { error: err };
    }
  };
}
