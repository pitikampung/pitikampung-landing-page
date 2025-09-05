import { ProductsController } from "@/libs/product/controller";
import { IRequestProduct } from "@/libs/product/dto/request";
import { TProductCategory, TProductSize } from "@/shared/domain/product";
import Logger from "@/shared/utils/logger";
import response from "@/shared/utils/rest-api/response";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const productController = new ProductsController();

export const GET = async (req: NextRequest) => {
  try {
    const query = req.nextUrl.searchParams;
    const params: IRequestProduct = {
      limit: Number(query.get("limit")),
      page: Number(query.get("page")),
      ascDesc: (query.get("ascDesc") as "asc" | "desc") || undefined,
      sortBy: query.get("sortBy") || "",
      search: query.get("search") || "",
      sizes: query.getAll("sizes") as TProductSize[],
      categries: query.getAll("categries") as TProductCategory[],
    };
    const { data, error } = await productController.list(params);

    if (!data?.length) {
      return response[4004]({ message: error || "No products found" });
    }
    return response[2000]({ data });
  } catch (error) {
    Logger.error(error, { location: "GET /products" });
    return response[5000]();
  }
};
