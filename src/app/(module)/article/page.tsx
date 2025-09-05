import { ArticlesView } from "@/packages/article/presentation/view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel | Pitikampung",
  description:
    "Kumpulan artikel informatif seputar kesehatan, ayam, telur, lele segar, pakan organik, dan gaya hidup sehat dari Pitikampung.",
  metadataBase: new URL("https://pitikampung.vercel.app"),
  openGraph: {
    title: "Artikel | Pitikampung",
    description:
      "Baca artikel menarik tentang kesehatan, peternakan, ayam, telur, lele segar, hingga pakan organik. Sumber bacaan terpercaya dari Pitikampung.",
    url: "https://pitikampung.vercel.app/articles",
    siteName: "Pitikampung",
    images: [
      {
        url: "/og-image-articles.png", // beda dari about & contact biar unik
        width: 1200,
        height: 630,
        alt: "Artikel Pitikampung - Kesehatan, Ayam, Telur, Lele & Pakan Organik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel | Pitikampung",
    description:
      "Kumpulan artikel seputar ayam, telur, lele, pakan organik, dan gaya hidup sehat. Bacaan bermanfaat hanya di Pitikampung.",
    images: ["/og-image-articles.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Pitikampung",
  keywords: [
    "Artikel Pitikampung",
    "Artikel Kesehatan",
    "Artikel Ayam Kampung",
    "Artikel Telur Ayam",
    "Artikel Lele Segar",
    "Artikel Pakan Organik",
    "Tips Gaya Hidup Sehat",
    "Artikel Kuliner Nusantara",
    "Artikel Peternakan Indonesia",
    "Berita Kesehatan Pitikampung",
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

export default ArticlesView;
