import { ContactUsView } from "@/packages/contact-us/presentations/view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak Kami | Pitikampung",
  description:
    "Hubungi Pitikampung untuk pemesanan telur, ayam, lele segar, dan pakan organik. Tersedia WhatsApp, email, dan alamat asal Sidoarjo untuk melayani kebutuhan Anda.",
  metadataBase: new URL("https://pitikampung.vercel.app"),
  openGraph: {
    title: "Kontak Kami | Pitikampung",
    description:
      "Butuh telur, ayam, lele segar, atau pakan organik? Hubungi Pitikampung melalui WhatsApp 0821-3999-4797 atau email: ternakayamsidoarjo@gmail.com.",
    url: "https://pitikampung.vercel.app/contact",
    siteName: "Pitikampung",
    images: [
      {
        url: "/og-image-contact.png", // bikin beda sama about biar unik
        width: 1200,
        height: 630,
        alt: "Kontak Pitikampung - Supplier Telur, Ayam, Lele & Pakan Organik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak Kami | Pitikampung",
    description:
      "Hubungi Pitikampung untuk kebutuhan telur, ayam, lele, dan pakan organik. WhatsApp: 0821-3999-4797 | Email: ternakayamsidoarjo@gmail.com",
    images: ["/og-image-contact.png"],
  },
  authors: [
    {
      name: "Brilian Rachmad",
      url: "https://brilianrachmad.vercel.app/",
    },
  ],
  publisher: "Pitikampung",
  keywords: [
    "Kontak Pitikampung",
    "Hubungi Pitikampung",
    "Supplier Telur Sidoarjo",
    "Supplier Ayam Kampung",
    "Supplier Lele Segar",
    "Supplier Pakan Organik",
    "Kontak Kami Pitikampung",
    "Pesan Telur Ayam",
    "Pesan Ayam Kampung",
    "Pesan Lele Segar",
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

export default ContactUsView;
