"use client";

import { Button } from "@/components/atoms";
import { DialogDrawer } from "@/components/molecules";
import { cn } from "@/shared/utils";
import {
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowUpDown,
  ClockArrowUp,
} from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { IProductSort } from "../product";

const sorts: IProductSort[] = [
  {
    label: "Nama Produk A-Z",
    value: "name-asc",
    icon: ArrowDownAZ,
  },
  {
    label: "Produk Terbaru",
    value: "created_at-desc",
    icon: ClockArrowUp,
  },
  {
    label: "Harga Terendah",
    value: "price-asc",
    icon: ArrowDown01,
  },
  {
    label: "Harga Tertinggi",
    value: "price-desc",
    icon: ArrowDown10,
  },
];

interface ProductSortProps {
  openSort: boolean;
  setOpenSort: (open: boolean) => void;
}

export const ProductSort: FC<ProductSortProps> = ({
  setOpenSort,
  openSort,
}) => {
  const [sortOrder, setSortOrder] = useState<IProductSort>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (!openSort && !sortOrder) {
      setTimeout(() => {
        setIsSubmit(false);
      }, 300);
    }
  }, [openSort, sortOrder]);

  const onReset = () => {
    setSortOrder(undefined);
    setOpenSort(false);
  };

  return (
    <React.Fragment>
      <Button
        variant={sortOrder ? "primary" : "secondaryOutline"}
        className="flex justify-center items-center gap-2"
        onClick={() => setOpenSort(true)}
        size="lg"
      >
        <span className="md:flex hidden">Urutkan</span>
        {sortOrder?.icon ? (
          <sortOrder.icon size="100%" />
        ) : (
          <ArrowUpDown size="100%" />
        )}
      </Button>
      <DialogDrawer
        submitButton="Urutkan"
        cancelButton="Atur Ulang"
        onCancel={onReset}
        onSubmit={console.log}
        title="Urut Berdasarkan"
        open={openSort}
        setOpen={(flag) => {
          setOpenSort(flag);
          if (!isSubmit) onReset();
        }}
        disabledSubmitButton={!sortOrder}
        className="!px-0 flex flex-col gap-2"
      >
        {sorts.map(({ icon: Icon, label, value }) => (
          <div
            key={value}
            className={cn(
              sortOrder?.value === value &&
                "bg-primary-lighter/20 border-l-[6px] border-primary-default",
              "px-4 py-2 cursor-pointer flex group justify-start gap-2 items-center hover:bg-primary-lighter/20 transition-all duration-200"
            )}
            onClick={() => setSortOrder({ label, value, icon: Icon })}
          >
            <Icon
              className={cn(
                sortOrder?.value === value && "text-primary-default",
                "size-4 transition-all duration-200"
              )}
            />
            {label}
          </div>
        ))}
      </DialogDrawer>
    </React.Fragment>
  );
};
