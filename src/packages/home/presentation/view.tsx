"use client";

import {
  FaqSection,
  HomeAboutUs,
  HomeArticle,
  HomeHero,
  PopularProducts,
} from "@/components/organisms/home";
import BenefitSection from "@/components/organisms/home/about-us/benefit";
import React from "react";

export const HomeView = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <div className="flex flex-col gap-20 mt-20 pb-20">
        <HomeAboutUs />
        <BenefitSection />
        <PopularProducts />
        <FaqSection />
        <HomeArticle />
      </div>
    </React.Fragment>
  );
};
