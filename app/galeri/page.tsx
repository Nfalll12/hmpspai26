import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { GalleryExplorer } from "@/components/gallery-explorer";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Kumpulan momen MUSWA, Seminar, Kajian, PHBI, dan Bakti Sosial HMPS PAI INISNU Temanggung.",
};

export default function GaleriPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-left-16 top-10 h-64 w-64" color="var(--blush)" />
        <AmbientBlob className="-right-10 top-32 h-56 w-56" color="var(--sky)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Buku Tempel Kami"
              title="Galeri Momen HMPS PAI"
              description="Sekumpulan foto yang kami tempel seperti scrapbook — dari MUSWA, seminar, kajian, PHBI, sampai bakti sosial."
            />
          </Reveal>

          <div className="mt-12">
            <GalleryExplorer items={galleryItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
