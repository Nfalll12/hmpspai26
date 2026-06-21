import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { NewsCard } from "@/components/news-card";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "Berita",
  description: "Kabar dan dokumentasi kegiatan terbaru HMPS PAI INISNU Temanggung.",
};

export default function BeritaPage() {
  const [first, ...rest] = newsItems;

  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-right-16 top-0 h-64 w-64" color="var(--accent)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Kabar Terbaru"
              title="Berita & Dokumentasi Kegiatan"
              description="Catatan kecil dari setiap kegiatan yang sudah kami jalani bersama."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {first ? (
              <RevealItem className="sm:col-span-2">
                <NewsCard news={first} featured />
              </RevealItem>
            ) : null}
            {rest.map((news) => (
              <RevealItem key={news.id}>
                <NewsCard news={news} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
