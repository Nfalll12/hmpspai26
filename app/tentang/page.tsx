import Image from "next/image";
import type { Metadata } from "next";
import { BookHeart, Users2, HandHeart, Lightbulb } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Tentang HMPS",
  description: "Kenalan lebih dekat dengan HMPS PAI INISNU Temanggung, nilai, dan caranya berorganisasi.",
};

const values = [
  {
    icon: BookHeart,
    title: "Belajar Tanpa Tekanan",
    description: "Setiap program dirancang agar ilmu agama dan organisasi terasa ringan dan menyenangkan untuk dipelajari.",
  },
  {
    icon: Users2,
    title: "Ukhuwah di Atas Segalanya",
    description: "Kami percaya kekeluargaan antar anggota adalah fondasi sebelum bicara soal program kerja.",
  },
  {
    icon: HandHeart,
    title: "Manfaat untuk Sesama",
    description: "Lewat bakti sosial dan kajian, kami ingin kehadiran HMPS PAI dirasakan manfaatnya di luar kampus.",
  },
  {
    icon: Lightbulb,
    title: "Ruang untuk Berkreasi",
    description: "Dari seni, olahraga, sampai konten media sosial — setiap anggota punya tempat untuk berkarya.",
  },
];

export default function TentangPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-left-20 top-0 h-64 w-64" color="var(--primary)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Tentang Kami"
              title="HMPS PAI, Rumah Kedua untuk Mahasiswa PAI"
              description={siteConfig.fullName}
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-lift dark:border-card">
              <Image
                src="https://picsum.photos/seed/hmps-about/900/750"
                alt="Anggota HMPS PAI berdiskusi"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Siapa Kami
            </h3>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Himpunan Mahasiswa Program Studi (HMPS) Pendidikan Agama Islam adalah organisasi
              intra kampus yang menaungi seluruh mahasiswa Program Studi PAI di INISNU Temanggung.
              Kami menjadi jembatan antara mahasiswa, program studi, dan kampus dalam merancang
              kegiatan akademik maupun non-akademik.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Lewat enam divisi yang saling melengkapi, HMPS PAI menggerakkan kajian keislaman,
              forum ilmiah, kegiatan minat-bakat, publikasi, pengabdian masyarakat, hingga unit
              usaha kecil — semuanya dikelola langsung oleh mahasiswa, untuk mahasiswa.
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Kami percaya, berorganisasi bukan sekadar mengisi CV, tapi tempat berlatih
              bertanggung jawab, berempati, dan menemukan teman seperjuangan yang sevisi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Nilai Kami"
              title="Yang Kami Pegang Erat-Erat"
              description="Empat nilai kecil yang mewarnai cara kami berorganisasi sehari-hari."
            />
          </Reveal>
          <RevealGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <RevealItem key={value.title}>
                <FeatureCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  tone="secondary"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="relative rounded-[2rem] border border-dashed border-secondary/60 bg-primary/30 p-8 sm:p-12">
              <p className="font-heading text-balance text-xl leading-relaxed text-forest sm:text-2xl dark:text-secondary">
                “Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya.”
              </p>
              <p className="mt-4 font-body text-sm text-muted-foreground">
                Pegangan sederhana yang selalu kami ingat setiap merancang program kerja.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
