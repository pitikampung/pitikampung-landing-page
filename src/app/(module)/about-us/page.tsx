import { AboutUsView } from "@/packages/about-us/presentation/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Pitikampung",
  description:
    "Kenali lebih dekat Pitikampung, supplier telur, ayam, lele segar, dan pakan organik terpercaya. Kami berkomitmen menyediakan produk sehat, higienis, dan berkualitas bagi keluarga dan peternak.",
  metadataBase: new URL("https://pitikampung.vercel.app"),
  openGraph: {
    title: "Tentang Kami | Pitikampung",
    description:
      "Pitikampung adalah supplier bahan makanan dan pakan organik terpercaya. Kami menghadirkan telur ayam kampung, ayam negeri, lele segar & marinasi, serta pakan ayam racikan organik untuk keluarga dan peternak Indonesia.",
    url: "https://pitikampung.vercel.app/about",
    siteName: "Pitikampung",
    images: [
      {
        url: "/og-image-about.png", // sebaiknya beda dengan homepage biar unik
        width: 1200,
        height: 630,
        alt: "Tentang Pitikampung - Supplier Telur, Ayam, Lele & Pakan Organik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Kami | Pitikampung",
    description:
      "Pitikampung hadir untuk menyediakan bahan pangan sehat & pakan ternak organik. Komitmen kami adalah kualitas, kepercayaan, dan keberlanjutan.",
    images: ["/og-image-about.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Pitikampung",
  keywords: [
    "Tentang Pitikampung",
    "Profil Pitikampung",
    "Supplier Telur Ayam",
    "Supplier Ayam Kampung",
    "Supplier Lele Segar",
    "Supplier Pakan Organik",
    "Tentang Kami Pitikampung",
    "Supplier Bahan Makanan Organik",
    "Peternakan Organik Indonesia",
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

export default AboutUsView;
