import { IRequestProduct } from "@/libs/product/dto/request";
import { http, RestAPI } from "@/shared/utils/rest-api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IController } from "../port/controller.port";
import { Repository } from "../repository/rest";
import { UseCase } from "../usecase";

export const useProduct = (
  callFor?: "products",
  query?: IRequestProduct
): IController => {
  const dataStoreApi = new RestAPI(http);

  const repository = new Repository(dataStoreApi);
  const useCase = new UseCase(repository);

  const products = useInfiniteQuery({
    queryKey: ["listVoucher", query],
    initialPageParam: 1,
    queryFn: async (req) => {
      console.log(req.pageParam);
      const data = await useCase.products({
        ...query,
        page: req.pageParam,
        limit: query?.limit ?? 9,
      });
      return data;
    },
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage && lastPage.length >= Number(query?.limit)) {
        return lastPageParam + 1;
      }
    },
    enabled: callFor === "products",
    refetchOnMount: "always",
  });

  return { products };
};
