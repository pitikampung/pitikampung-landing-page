"use client";

import { InputText } from "@/components/molecules";
import { ArticleCard, ArticleCardFeatured } from "@/components/organisms/home";
import { cn } from "@/shared/utils";
import { Search } from "lucide-react";
import { FC, useState } from "react";

const articles = [
  {
    id: 1,
    category: "Kesehatan",
    date: "31 Agustus 2025",
    reads: "1.5k",
    title: "Mengenal Logo dan Simbol pada Kemasan Obat",
    seoKey: "mengenal-logo-dan-simbol-pada-kemasan-obat",
    desc: "Penjelasan tentang arti simbol dan logo yang ada pada kemasan obat.",
    image: "/images/article-featured.jpg",
    featured: true,
  },
  {
    id: 2,
    category: "Herbal",
    date: "25 Agustus 2025",
    reads: "890",
    title: "Menjaga Kesehatan Sehari-hari dengan Bahan Herbal",
    seoKey: "menjaga-kesehatan-dengan-bahan-herbal",
    desc: "Tips memilih dan mengonsumsi herbal untuk kesehatan tubuh.",
    image: "/images/article-2.jpg",
    popular: true,
  },
  {
    id: 3,
    category: "Kesehatan",
    date: "20 Agustus 2025",
    reads: "740",
    title: "Susah Tidur di Malam Hari? Kenali Penyebab dan Cara Mengatasinya",
    seoKey: "susah-tidur-dan-cara-mengatasinya",
    desc: "Faktor penyebab susah tidur dan cara alami mengatasinya.",
    image: "/images/article-3.jpg",
    popular: true,
  },
  {
    id: 4,
    category: "Penyakit",
    date: "1 Mei 2025",
    reads: "650",
    title: "Tuberkulosis (TBC): Penyebab, Gejala, dan Pengobatan",
    seoKey: "tuberkulosis-penyebab-gejala-pengobatan",
    desc: "Informasi seputar TBC dan metode pengobatan modern.",
    image: "/images/article-4.jpg",
  },
  {
    id: 5,
    category: "Lifestyle",
    date: "30 April 2025",
    reads: "530",
    title: "Bahaya Minum Kopi untuk Penderita GERD dan Cara Penanganannya",
    seoKey: "kopi-gerd-dan-penanganannya",
    desc: "Mengapa penderita GERD harus hati-hati dengan konsumsi kopi.",
    image: "/images/article-5.jpg",
  },
  {
    id: 6,
    category: "Kuliner",
    date: "19 Agustus 2024",
    reads: "1.1k",
    title: "Aneka Kuliner Sehat Nusantara",
    seoKey: "aneka-kuliner-sehat-nusantara",
    desc: "Kenali ragam kuliner tradisional nusantara yang menyehatkan.",
    image: "/images/article-6.jpg",
  },
  {
    id: 7,
    category: "Olahraga",
    date: "15 Agustus 2025",
    reads: "970",
    title: "Manfaat Lari Pagi untuk Kesehatan Fisik dan Mental",
    seoKey: "manfaat-lari-pagi",
    desc: "Mengapa lari pagi baik untuk kesehatan jantung dan pikiran.",
    image: "/images/article-7.jpg",
  },
  {
    id: 8,
    category: "Teknologi",
    date: "10 Agustus 2025",
    reads: "1.3k",
    title: "Peran Teknologi AI dalam Dunia Kesehatan",
    seoKey: "ai-dalam-dunia-kesehatan",
    desc: "Bagaimana kecerdasan buatan membantu diagnosis dan perawatan pasien.",
    image: "/images/article-8.jpg",
  },
  {
    id: 9,
    category: "Kesehatan",
    date: "5 Agustus 2025",
    reads: "810",
    title: "Tips Menjaga Imun Tubuh di Musim Hujan",
    seoKey: "tips-menjaga-imun-musim-hujan",
    desc: "Beberapa cara sederhana untuk menjaga imun agar tidak mudah sakit.",
    image: "/images/article-9.jpg",
  },
  {
    id: 10,
    category: "Kuliner",
    date: "28 Juli 2025",
    reads: "1.2k",
    title: "Resep Masakan Sehat Berbasis Sayuran Hijau",
    seoKey: "resep-masakan-sayuran-hijau",
    desc: "Olahan kreatif dari sayuran hijau untuk menu sehat keluarga.",
    image: "/images/article-10.jpg",
  },
  {
    id: 11,
    category: "Psikologi",
    date: "20 Juli 2025",
    reads: "690",
    title: "Cara Mengatasi Stress di Lingkungan Kerja",
    seoKey: "cara-mengatasi-stress-di-kerja",
    desc: "Tips manajemen stress agar tetap produktif di kantor.",
    image: "/images/article-11.jpg",
  },
  {
    id: 12,
    category: "Anak",
    date: "15 Juli 2025",
    reads: "780",
    title: "Nutrisi Penting untuk Pertumbuhan Anak",
    seoKey: "nutrisi-penting-anak",
    desc: "Asupan makanan terbaik untuk mendukung tumbuh kembang anak.",
    image: "/images/article-12.jpg",
  },
  {
    id: 13,
    category: "Lingkungan",
    date: "5 Juli 2025",
    reads: "1.0k",
    title: "Gaya Hidup Ramah Lingkungan untuk Kehidupan Sehat",
    seoKey: "gaya-hidup-ramah-lingkungan",
    desc: "Langkah kecil yang bisa berdampak besar bagi bumi dan kesehatan.",
    image: "/images/article-13.jpg",
  },
  {
    id: 14,
    category: "Travel",
    date: "25 Juni 2025",
    reads: "920",
    title: "Destinasi Wisata Kesehatan di Indonesia",
    seoKey: "destinasi-wisata-kesehatan",
    desc: "Tempat-tempat wisata yang mengutamakan konsep kesehatan & relaksasi.",
    image: "/images/article-14.jpg",
  },
];

export const ArticlesView: FC = () => {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const featured = filteredArticles.find((a) => a.featured);
  const popular = filteredArticles.filter((a) => a.popular);
  const latest = filteredArticles.filter((a) => !a.featured && !a.popular);

  return (
    <section className={cn("padding-layout space-y-10 py-24 mt-8")}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold">Artikel</h1>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <InputText
            placeholder="Cari artikel atau kategori artikel"
            value={search}
            setValue={setSearch}
            type="text"
            className="pl-10"
            size="md"
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Terpopuler</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {featured && <ArticleCardFeatured {...featured} />}
          </div>
          <div className="flex flex-col gap-6">
            {popular.map((a) => (
              <ArticleCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((a) => (
            <ArticleCard key={a.id} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
};
