"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { GalleryItem } from "@/types";
import { formatDate } from "@/lib/utils";

const tapeColors = ["bg-blush", "bg-sky", "bg-accent/70", "bg-secondary/70"];

export function GalleryCard({ item, index = 0 }: { item: GalleryItem; index?: number }) {
  const tape = tapeColors[index % tapeColors.length];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24, rotate: item.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginTop: item.offsetY }}
      className="polaroid relative mb-6 w-full cursor-default break-inside-avoid"
    >
      <span className={`washi-tape left-1/2 -top-3 -translate-x-1/2 ${tape}`} />
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[0.4rem] bg-muted">
        <Image
          src={item.image}
          alt={item.caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <figcaption className="mt-3 px-1 text-center">
        <p className="font-heading text-[13px] leading-snug text-foreground/80">{item.caption}</p>
        <p className="mt-1 font-body text-[11px] text-muted-foreground">{formatDate(item.date)}</p>
      </figcaption>
    </motion.figure>
  );
}
