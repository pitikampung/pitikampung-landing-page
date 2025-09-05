"use client";

import { aboutUsRoute, homeRoute, productRoute } from "@/shared/constants";
import styles from "@/shared/styles/components/topbar.module.css";
import { cn } from "@/shared/utils";
import classNames from "clsx";
import { Handbag, MapPin, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IcWhatsapp } from "../../../../public/assets/icons";
import { Menu } from "../menu";
import { ModalCart } from "../modal-cart";

const topbarMenu = [
  {
    label: "Beranda",
    href: homeRoute,
  },
  {
    label: "Tentang Kami",
    href: aboutUsRoute,
  },
  {
    label: "Produk",
    subs: [
      {
        label: "Ayam Kampung",
        href: `${productRoute.index}?category=ayam-kampung`,
      },
      {
        label: "Ayam Negeri",
        href: `${productRoute.index}?category=ayam-negeri`,
      },
      {
        label: "Ikan",
        href: `${productRoute.index}?category=ikan`,
      },
      {
        label: "Pakan Ternak",
        href: `${productRoute.index}?category=pakan-ternak`,
      },
    ],
  },
  {
    label: "Artikel",
    href: "/article",
  },
  {
    label: "Kontak Kami",
    href: "/contact-us",
  },
];

export const Topbar = () => {
  const [openCart, setOpenCart] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <React.Fragment>
      <ModalCart open={openCart} setOpen={setOpenCart} />
      <div className={cn("padding-layout", styles["topbar-header"])}>
        <p>
          Selamat datang di{" "}
          <span className="text-warning-default font-bold">Pitikampung</span>
        </p>
        <div className="flex justify-end gap-4 items-center">
          <a
            href="https://wa.me/6282139994797?text=Halo Pitikampung, saya tertarik dengan produk ayam dan ikan. Bisa dibantu infonya?"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline transition-all duration-200"
          >
            <IcWhatsapp className="size-4" />
            <p>0821-3999-4797</p>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            <p>Sidoarjo, Jawa Timur</p>
          </div>
        </div>
      </div>
      <div className={classNames([styles.topbar])}>
        <Link href={homeRoute} className={classNames(styles.logo)} />
        <div className="md:flex hidden justify-center gap-8 items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4/5">
          {topbarMenu.map((item, index) => (
            <Menu
              key={item?.label + index}
              menuClassName={
                styles[
                  `topbar-menu${
                    (
                      item?.subs
                        ? item?.subs?.some(
                            (sub) => pathname === sub?.href?.split("?")[0]
                          )
                        : pathname === item?.href?.split("?")[0]
                    )
                      ? "-active"
                      : ""
                  }`
                ]
              }
              useChevron={item?.subs && item?.subs?.length > 0}
              items={item?.subs}
              trigger={
                item?.href ? (
                  <Link href={item?.href}>{item?.label}</Link>
                ) : (
                  item?.label
                )
              }
            />
          ))}
        </div>
        <div className="md:flex hidden justify-end items-center gap-6">
          <Search className={classNames(["icon text-dark-600 size-5"])} />
          <Handbag
            className={classNames(["icon text-dark-600 size-5"])}
            onClick={() => setOpenCart(true)}
          />
          <UserRound className={classNames(["icon text-dark-600 size-5"])} />
        </div>
      </div>
    </React.Fragment>
  );
};
