import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Division } from "@/types";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

const toneBg: Record<Division["color"], string> = {
  primary: "bg-primary/60 text-forest dark:bg-secondary/15 dark:text-secondary",
  secondary: "bg-secondary/35 text-forest dark:bg-secondary/25 dark:text-secondary",
  accent: "bg-accent/35 text-accent-foreground dark:bg-accent/25",
  forest: "bg-forest/15 text-forest dark:bg-forest/25 dark:text-secondary",
  blush: "bg-blush/60 text-[#9c4a55] dark:bg-blush/30 dark:text-blush",
  sky: "bg-sky/60 text-[#2f6079] dark:bg-sky/30 dark:text-sky",
};

export function DivisionCard({ division, index = 0 }: { division: Division; index?: number }) {
  const Icon = getIcon(division.icon);

  return (
    <div
      className="group flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("flex h-14 w-14 items-center justify-center rounded-2xl", toneBg[division.color])}>
          <Icon className="size-7" />
        </span>
        <Link
          href={`/proker#${division.slug}`}
          className="flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-secondary hover:text-forest dark:hover:text-secondary"
        >
          Program kerja <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div>
        <h3 className="font-heading text-xl font-semibold text-foreground">{division.name}</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
          {division.shortDesc}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {division.focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-foreground/70"
          >
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}
