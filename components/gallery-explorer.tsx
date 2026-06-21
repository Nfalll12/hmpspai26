"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";

import type { GalleryItem } from "@/types";
import { galleryCategories } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery-card";
import { cn } from "@/lib/utils";

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = React.useState<string>("Semua");

  const filtered = active === "Semua" ? items : items.filter((i) => i.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {["Semua", ...galleryCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border-2 px-4 py-1.5 text-sm font-medium font-body transition-colors",
              active === cat
                ? "border-forest bg-forest text-white dark:border-secondary dark:bg-secondary/30 dark:text-secondary"
                : "border-border bg-card text-foreground/70 hover:border-secondary/60"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-2 gap-5 sm:columns-3 lg:columns-4">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-body text-sm text-muted-foreground">
          Belum ada momen di kategori ini.
        </p>
      ) : null}
    </div>
  );
}
