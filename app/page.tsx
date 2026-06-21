import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/site";
import { getIcon } from "@/lib/icon-map";

export const metadata: Metadata = {
  title: "Beranda",
  description: siteConfig.description,
};

const featured = programs.filter((p) => p.status === "ongoing").slice(0, 6);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-lift dark:border-card">
              <Image
                src="https://picsum.photos/seed/hmps-intro/900/720"
                alt="Suasana kekeluargaan anggota HMPS PAI"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="sticker -rotate-2 border-secondary/50 bg-primary/70 text-forest dark:bg-secondary/20 dark:text-secondary">
              <Sparkles className="size-3.5" /> Tentang Kami
            </span>
            <h2 className="mt-4 font-heading text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Satu Himpunan, Banyak Cerita Hangat
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              HMPS PAI INISNU Temanggung adalah rumah bagi mahasiswa Pendidikan Agama Islam untuk
              belajar berorganisasi, mengasah kepedulian sosial, dan merawat ukhuwah lewat kajian,
              seminar, hingga bakti sosial. Kami percaya organisasi terbaik tumbuh dari kebersamaan
              yang sederhana dan tulus.
            </p>
            <Button asChild className="mt-6">
              <Link href="/tentang">
                Selengkapnya Tentang Kami <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <Reveal>
        <StatsSection />
      </Reveal>

      {/* Featured Programs */}
      <section className="relative py-20 sm:py-24">
        <AmbientBlob className="left-1/2 top-0 h-72 w-72 -translate-x-1/2 opacity-30" color="var(--accent)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Sedang Berjalan"
              title="Program Kerja Unggulan"
              description="Sebagian kegiatan yang sedang kami jalankan sepanjang periode ini — dari kajian rutin sampai liga futsal antar kelas."
            />
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((program) => {
              const Icon = getIcon(program.icon);
              return (
                <RevealItem key={program.id}>
                  <FeatureCard
                    icon={Icon}
                    title={program.title}
                    description={program.description}
                    tag={program.schedule}
                  />
                </RevealItem>
              );
            })}
          </RevealGroup>

          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/proker">
                Lihat Semua Program Kerja <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-8 py-14 text-center sm:px-16">
              <AmbientBlob className="-left-10 -top-10 h-48 w-48 opacity-40" color="var(--accent)" />
              <AmbientBlob className="-bottom-14 -right-10 h-56 w-56 opacity-30" color="var(--secondary)" />
              <span className="sticker rotate-2 border-white/30 bg-white/10 text-white">
                Yuk, Gabung
              </span>
              <h2 className="mx-auto mt-5 max-w-xl font-heading text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ada tempat hangat untukmu di HMPS PAI
              </h2>
              <p className="mx-auto mt-4 max-w-md font-body text-sm text-white/80 sm:text-base">
                Tidak perlu pengalaman berorganisasi sebelumnya — yang penting niat untuk belajar
                dan bertumbuh bersama.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" variant="accent">
                  <Link href="/kontak">
                    Hubungi Kami <MessageCircle className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  <Link href="/anggota">Kenalan Dengan Pengurus</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
