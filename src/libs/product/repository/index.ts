import { IProduct } from "@/shared/domain/product";
import Logger from "@/shared/utils/logger";
import { promises as fs } from "fs";
import path from "path";
import { IRequestProduct } from "../dto/request";
import { IRepository } from "../port/repository.port";

export class ProductRepository implements IRepository {
  list = async ({
    limit,
    page,
    sortBy,
    ascDesc,
    categries,
    search,
    sizes,
  }: IRequestProduct): Promise<Array<IProduct> | undefined> => {
    try {
      const filePath = path.join(
        process.cwd(),
        "public/assets/data/products.json"
      );
      const jsonData = await fs.readFile(filePath, "utf-8");
      const data = JSON.parse(jsonData) as Array<IProduct>;

      const filteredData = data
        .filter(
          (product) =>
            !categries?.length || categries?.includes(product.category)
        )
        .filter((product) => !sizes?.length || sizes?.includes(product.size))
        .filter(
          (product) =>
            !search?.length ||
            product.name.toLowerCase().includes(search?.toLowerCase())
        );

      const sortedData = sortBy
        ? filteredData.sort((a, b) => {
            const aValue = a[sortBy as keyof IProduct] ?? "";
            const bValue = b[sortBy as keyof IProduct] ?? "";

            if (typeof aValue === "string" && typeof bValue === "string") {
              return ascDesc === "asc"
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
            } else {
              return ascDesc === "asc"
                ? aValue.toString().localeCompare(bValue.toString())
                : bValue.toString().localeCompare(aValue.toString());
            }
          })
        : filteredData;

      return sortedData.slice(limit * (page - 1), limit * page);
    } catch (error) {
      Logger.error(error, { location: "ProductRepository.list" });
      return;
    }
  };
}
