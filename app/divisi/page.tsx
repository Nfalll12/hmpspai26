import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { DivisionCard } from "@/components/division-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Divisi",
  description: "Enam divisi HMPS PAI INISNU Temanggung yang menggerakkan beragam program kerja.",
};

export default function DivisiPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-left-16 top-0 h-64 w-64" color="var(--secondary)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Divisi Kami"
              title="Enam Divisi, Satu Tujuan"
              description="Setiap divisi punya fokusnya masing-masing, tapi semuanya bergerak untuk membuat HMPS PAI terasa hangat dan bermanfaat."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division, i) => (
              <RevealItem key={division.slug}>
                <DivisionCard division={division} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
