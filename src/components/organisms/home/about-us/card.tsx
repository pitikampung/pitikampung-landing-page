"use client";

import { Card } from "@/components/atoms";
import { ArrowDown } from "lucide-react";
import { FC } from "react";
import { HomeAboutUsProps } from "../home";

export const HomeAboutUsCard: FC<HomeAboutUsProps> = ({
  description,
  icon: Icon,
  title,
  imageBackground,
}) => {
  return (
    <Card className="group relative items-center !p-10 flex flex-col gap-6 h-full transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
      {imageBackground && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
          style={{ backgroundImage: `url(${imageBackground})` }}
        />
      )}
      {imageBackground && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      )}
      <div className="relative z-[1] flex flex-col gap-4 items-center text-center">
        <Icon className="size-20 text-warning-default group-hover:text-white transition-colors duration-500" />
        <h3 className="font-bold tracking-wide text-xl group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
      </div>
      <p className="relative z-[1] text-sm text-gray-600 text-center group-hover:text-gray-200 transition-colors duration-500">
        {description}
      </p>
      <div className="relative z-[1] flex justify-center gap-1 items-center">
        <p className="text-sm group-hover:text-warning-default group-hover:uppercase group-hover:font-bold group-hover:text-md transition-colors duration-500">
          Pesan Sekarang
        </p>
        <ArrowDown className="size-4 group-hover:size-6 rotate-[225deg] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-warning-default transition-all duration-300" />
      </div>
    </Card>
  );
};
