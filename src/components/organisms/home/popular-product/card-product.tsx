"use client";

import { Button, Card, Image } from "@/components/atoms";
import { Stars } from "@/components/molecules";
import { productRoute } from "@/shared/constants";
import { formatRupiah } from "@/shared/utils";
import { FC } from "react";
import { CardProductProps } from "../home";

export const CardProduct: FC<CardProductProps> = ({
  category,
  id,
  img,
  name,
  onSale,
  price,
  oldPrice,
  seoTitle,
  stars,
}) => {
  return (
    <Card
      href={productRoute.detail(seoTitle)}
      key={id}
      className="p-4 bg-white shadow-md rounded-xl flex flex-col gap-3 relative"
    >
      {onSale && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Sale
        </span>
      )}
      <Image
        height={200}
        width={200}
        src={img}
        alt={name}
        className="w-full h-40 object-contain rounded"
      />
      <p className="text-sm text-gray-500">
        {category
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </p>
      <h3 className="font-semibold">{name}</h3>
      <div className="flex items-center gap-2">
        {oldPrice ? (
          <span className="line-through text-gray-400 text-sm">
            {formatRupiah(oldPrice)}
          </span>
        ) : undefined}
        <span className="text-red-500 font-bold">{formatRupiah(price)}</span>
      </div>
      {stars ? <Stars count={id} /> : undefined}
      <Button type="button" variant="warning" size="lg">
        Tambah ke Keranjang
      </Button>
    </Card>
  );
};
