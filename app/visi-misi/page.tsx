import type { Metadata } from "next";
import { Target, Compass, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";

export const metadata: Metadata = {
  title: "Visi & Misi",
  description: "Visi dan misi HMPS PAI INISNU Temanggung dalam menjalankan organisasi.",
};

const missions = [
  "Menyelenggarakan kajian dan dakwah yang dekat dengan keseharian mahasiswa.",
  "Mendorong budaya literasi, riset, dan diskusi ilmiah di kalangan mahasiswa PAI.",
  "Menyediakan ruang pengembangan minat, bakat, dan olahraga yang inklusif.",
  "Membangun citra dan relasi HMPS PAI lewat publikasi yang rapi dan hangat.",
  "Menumbuhkan kepedulian sosial lewat bakti sosial dan pengabdian masyarakat.",
  "Melatih jiwa kewirausahaan anggota sekaligus menopang kemandirian dana organisasi.",
];

export default function VisiMisiPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-right-20 top-0 h-64 w-64" color="var(--accent)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Arah Kami"
              title="Visi & Misi"
              description="Arah dan langkah yang menuntun setiap program kerja HMPS PAI INISNU Temanggung."
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] bg-forest px-8 py-12 text-center text-white sm:px-14 sm:py-16">
              <span className="sticker mx-auto rotate-[-2deg] border-white/30 bg-white/10 text-white">
                <Compass className="size-3.5" /> Visi
              </span>
              <p className="mx-auto mt-5 max-w-2xl font-heading text-balance text-2xl font-semibold leading-relaxed sm:text-3xl">
                Menjadi himpunan mahasiswa yang religius, kolaboratif, dan bermanfaat bagi
                program studi, kampus, serta masyarakat sekitar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex items-center justify-center gap-2">
              <span className="sticker rotate-2 border-secondary/50 bg-primary/70 text-forest dark:bg-secondary/20 dark:text-secondary">
                <Target className="size-3.5" /> Misi
              </span>
            </div>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {missions.map((mission, i) => (
              <RevealItem key={mission}>
                <div className="flex h-full items-start gap-3 rounded-3xl border border-border bg-card p-5 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/70 text-sm font-semibold text-forest dark:bg-secondary/20 dark:text-secondary">
                    {i + 1}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-foreground/80">
                    {mission}
                  </p>
                  <CheckCircle2 className="ml-auto size-4 shrink-0 text-secondary" />
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
