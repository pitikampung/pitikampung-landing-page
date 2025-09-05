"use client";

import { Topbar } from "@/components/templates";
import { Footer } from "@/components/templates/footer";
import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      id="layout"
      className="h-screen min-h-screen w-screen overflow-x-hidden relative"
    >
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
