"use client";

import { Button } from "@/components/atoms";
import { DialogDrawer, InputText } from "@/components/molecules";
import {
  IFilter,
  TProductCategory,
  TProductSize,
} from "@/packages/product/domain/product";
import { Filter } from "lucide-react";
import React, { FC, useEffect, useState } from "react";

const categories: { label: string; value: TProductCategory }[] = [
  { label: "Ayam Kampung", value: "ayam-kampung" },
  { label: "Ayam Negeri", value: "ayam-negeri" },
  { label: "Ikan", value: "ikan" },
  { label: "Pakan Ternak", value: "pakan-ternak" },
];

const sizes: TProductSize[] = [
  "250gr",
  "500gr",
  "1kg",
  "2kg",
  "3kg",
  "6 butir",
  "10 butir",
  "12 butir",
  "20 butir",
  "30 butir",
];

interface ProductFilterProps {
  openFilter: boolean;
  setOpenFilter: (open: boolean) => void;
  onSubmitFilter: (payload?: IFilter) => void;
}

export const ProductFilter: FC<ProductFilterProps> = ({
  setOpenFilter,
  openFilter,
  onSubmitFilter,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<Array<TProductCategory>>();
  const [activeSize, setActiveSize] = useState<Array<TProductSize>>();
  const [search, setSearch] = useState<string>("");
  const [priceMin, setPriceMin] = useState<string>();
  const [priceMax, setPriceMax] = useState<string>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (
      !openFilter &&
      !activeCategory &&
      !activeSize &&
      !priceMax &&
      !priceMin
    ) {
      setTimeout(() => {
        setIsSubmit(false);
      }, 300);
    }
  }, [openFilter, activeCategory, activeSize, priceMax, priceMin]);

  const onReset = () => {
    setActiveCategory(undefined);
    setActiveSize(undefined);
    setSearch("");
    setPriceMin(undefined);
    setPriceMax(undefined);
    setOpenFilter(false);
    onSubmitFilter();
  };

  const onSubmit = () => {
    const payload: IFilter = {
      category: activeCategory,
      size: activeSize,
      priceMin: Number(priceMin),
      priceMax: Number(priceMax),
    };
    setOpenFilter(false);
    setIsSubmit(true);
    onSubmitFilter(payload);
  };

  return (
    <React.Fragment>
      <div className="relative">
        {activeCategory?.length ||
        activeSize?.length ||
        priceMax ||
        priceMin ? (
          <div className="bg-danger-default size-3 rounded-full absolute -top-1 -right-1" />
        ) : undefined}
        <Button
          variant={
            activeCategory?.length || activeSize?.length || priceMax || priceMin
              ? "primary"
              : "secondaryOutline"
          }
          className="flex justify-center items-center gap-2"
          onClick={() => setOpenFilter(true)}
          size="lg"
        >
          <span className="md:flex hidden">Filter</span>
          <Filter size={16} />
        </Button>
      </div>
      <DialogDrawer
        submitButton="Terapkan"
        cancelButton="Atur Ulang"
        onCancel={onReset}
        onSubmit={onSubmit}
        title="Filter"
        open={openFilter}
        setOpen={(flag) => {
          setOpenFilter(flag);
          if (!isSubmit) onReset();
        }}
        disabledSubmitButton={
          !activeCategory?.length &&
          !activeSize?.length &&
          !search &&
          !priceMin &&
          !priceMax
        }
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold">Kategori</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat?.value}
                  variant={
                    activeCategory?.includes(cat?.value)
                      ? "primary"
                      : "primaryOutline"
                  }
                  onClick={() => {
                    setActiveCategory(
                      activeCategory?.includes(cat?.value)
                        ? activeCategory?.filter((c) => c !== cat?.value)
                        : [...(activeCategory ?? []), cat?.value]
                    );
                  }}
                >
                  {cat?.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold">Ukuran</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={
                    activeSize?.includes(size) ? "primary" : "primaryOutline"
                  }
                  onClick={() => {
                    setActiveSize(
                      activeSize?.includes(size)
                        ? activeSize?.filter((c) => c !== size)
                        : [...(activeSize ?? []), size]
                    );
                  }}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-md font-bold">Harga</h2>
            <div className="flex justify-between items-start gap-2">
              <InputText
                type="price"
                size="md"
                value={priceMin}
                setValue={setPriceMin}
                placeholder="Harga Terendah"
              />
              <InputText
                type="price"
                size="md"
                value={priceMax}
                setValue={setPriceMax}
                placeholder="Harga Tertinggi"
                errorMessage={
                  (priceMin &&
                    priceMax &&
                    Number(priceMin ?? 0) >= Number(priceMax ?? 0) &&
                    "Harga tertinggi harus lebih besar dari harga terendah") ||
                  undefined
                }
              />
            </div>
          </div>
        </div>
      </DialogDrawer>
    </React.Fragment>
  );
};
