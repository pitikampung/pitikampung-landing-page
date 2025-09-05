"use client";

import { Skeleton } from "@/components/atoms";
import InputTextSearch from "@/components/molecules/input/search";
import { CardProduct } from "@/components/organisms/home/popular-product/card-product";
import { ProductFilter, ProductSort } from "@/components/organisms/product";
import styles from "@/shared/styles/packages/product.module.css";
import { cn } from "@/shared/utils";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IFilter } from "../../domain/product";
import { useProduct } from "../controller";

export const ProductView = () => {
  const LIMIT = 9;
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const {
    products: { data: data, hasNextPage, isLoading, fetchNextPage },
  } = useProduct("products", {
    limit: LIMIT,
    page: 1,
  });

  console.log(hasNextPage);
  console.log(data?.pages?.flatMap((page) => page)?.length || 0);

  // eslint-disable-next-line
  const onFilter = (payload?: IFilter) => {
    // if (!payload) {
    //   return setData(products);
    // }
    // const filteredData = products.filter((p) => {
    //   if (payload.category && !payload.category.includes(p.category))
    //     return false;
    //   if (payload.size && !payload.size.includes(p.size)) return false;
    //   if (payload.priceMin && payload.priceMax) {
    //     if (p.price < payload.priceMin || p.price > payload.priceMax)
    //       return false;
    //   }
    //   return true;
    // });
    // setData(filteredData);
  };

  return (
    <section className="py-20 md:pt-28 pt-24">
      <div className={cn("padding-layout", styles.container)}>
        <div className="bg-white box-shadow rounded-lg p-4">
          <div className="flex items-center justify-between gap-2">
            <ProductFilter
              openFilter={openFilter}
              setOpenFilter={setOpenFilter}
              onSubmitFilter={onFilter}
            />
            <div className="flex justify-end items-center gap-3">
              <ProductSort openSort={openSort} setOpenSort={setOpenSort} />
              <InputTextSearch
                search={search}
                setSearch={setSearch}
                className="!py-[9px] md:!w-72 !w-full"
                placeholder="Cari Produk"
              />
            </div>
          </div>
        </div>
      </div>
      <InfiniteScroll
        loader={
          data?.pages?.flatMap((page) => page)?.length === LIMIT ? (
            <></>
          ) : (
            Array.from({ length: LIMIT }).map((_, i) => (
              <Skeleton
                key={i}
                variant="square"
                className="h-80 w-full rounded-xl"
              />
            ))
          )
        }
        dataLength={data?.pages?.flatMap((page) => page)?.length || 0}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        scrollThreshold={0.7}
        className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 md:pt-6 pt-4 pb-2 padding-layout"
        scrollableTarget="layout"
      >
        {data?.pages
          ?.flatMap((page) => page)
          ?.map((product) =>
            product ? (
              <CardProduct
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                img={product.img}
                price={product.price}
                oldPrice={product.oldPrice}
                seoTitle={product.seoTitle}
                onSale={product.onSale}
              />
            ) : (
              <p key="notfound">Data tidak ditemukan</p>
            )
          )}
        {isLoading &&
          Array.from({ length: LIMIT }).map((_, i) => (
            <Skeleton
              key={i}
              variant="square"
              className="h-80 w-full rounded-xl"
            />
          ))}
      </InfiniteScroll>
    </section>
  );
};
