"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AmbientBlob, SparkleMark } from "@/components/decorative";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <AmbientBlob className="-left-24 top-10 h-72 w-72" color="var(--primary)" />
      <AmbientBlob className="-right-16 top-40 h-64 w-64" color="var(--accent)" />
      <AmbientBlob className="left-1/3 top-[28rem] h-56 w-56 opacity-30" color="var(--secondary)" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sticker rotate-[-2deg] border-secondary/50 bg-primary/70 text-forest dark:bg-secondary/20 dark:text-secondary">
            <SparkleMark className="size-3.5" /> Prodi PAI · INISNU Temanggung
          </span>

          <h1 className="mt-5 font-heading text-balance text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Rumah hangat untuk bertumbuh,{" "}
            <span className="relative inline-block text-forest dark:text-secondary">
              berkarya
              <svg
                aria-hidden
                viewBox="0 0 200 16"
                className="absolute -bottom-1 left-0 w-full text-accent"
              >
                <path
                  d="M2 12C40 4 100 2 198 9"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            , dan berukhuwah.
          </h1>

          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="lg">
              <Link href="/tentang">
                Kenalan Yuk <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/anggota">
                <Users className="size-4" /> Lihat Anggota
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-[2.75rem] bg-primary/70 dark:bg-secondary/15" />
          <div className="absolute inset-0 overflow-hidden rounded-[2.75rem] border-4 border-white shadow-lift dark:border-card">
            <Image
              src="https://picsum.photos/seed/hmps-hero-main/800/800"
              alt="Kegiatan anggota HMPS PAI INISNU Temanggung"
              fill
              priority
              className="object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-6, -3, -6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="polaroid absolute -left-10 top-10 w-32 -rotate-6 sm:-left-14 sm:w-36"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[0.4rem]">
              <Image
                src="https://picsum.photos/seed/hmps-hero-sticker-1/300/300"
                alt="Momen kajian"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center font-heading text-[11px] text-foreground/70">Kajian Jumat</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0], rotate: [6, 9, 6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="polaroid absolute -bottom-6 -right-8 w-28 rotate-6 sm:-right-12 sm:w-32"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[0.4rem]">
              <Image
                src="https://picsum.photos/seed/hmps-hero-sticker-2/300/300"
                alt="Momen bakti sosial"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-center font-heading text-[11px] text-foreground/70">Bakti Sosial</p>
          </motion.div>

          <span className="sticker absolute -top-4 right-6 rotate-3 border-accent/60 bg-accent/90 text-accent-foreground shadow-sticker">
            Ahlan wa Sahlan
          </span>
        </motion.div>
      </div>
    </section>
  );
}
