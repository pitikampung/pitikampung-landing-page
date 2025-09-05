import { GlobalProvider } from "@/shared/providers";
import "@/shared/styles/fonts/nunito.font.css";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Pitikampung | Supplier Telur, Ayam, Lele & Pakan Organik",
  description:
    "Pitikampung menyediakan telur ayam kampung, ayam negeri, lele segar & marinasi, serta pakan ayam racikan organik untuk keluarga dan peternak.",
  metadataBase: new URL("https://pitikampung.vercel.app"),
  openGraph: {
    title: "Pitikampung | Supplier Telur, Ayam, Lele & Pakan Organik",
    description:
      "Pitikampung adalah supplier bahan makanan organik yang menyediakan telur ayam kampung, ayam negeri, lele segar & marinasi, serta pakan ayam racikan organik. Segar, higienis, dan berkualitas.",
    url: "https://pitikampung.vercel.app",
    siteName: "Pitikampung",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pitikampung - Telur, Ayam, Lele & Pakan Organik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitikampung | Supplier Telur, Ayam, Lele & Pakan Organik",
    description:
      "Telur ayam kampung, ayam negeri segar, lele bersih & marinasi, serta pakan ayam racikan organik. Pitikampung hadir untuk keluarga sehat & peternak mandiri.",
    images: ["/og-image.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Pitikampung",
  keywords: [
    "Pitikampung",
    "Telur Ayam Kampung",
    "Ayam Kampung",
    "Ayam Negeri",
    "Lele Segar",
    "Lele Marinasi",
    "Lele Bakar",
    "Lele Kuning",
    "Pakan Ayam Organik",
    "Pakan Ayam Racikan",
    "Supplier Bahan Makanan",
    "Supplier Pakan Ternak",
    "Produk Organik Indonesia",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
};

export default RootLayout;
