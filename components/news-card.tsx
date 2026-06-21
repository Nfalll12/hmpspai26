import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

import type { NewsItem } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function NewsCard({ news, featured = false }: { news: NewsItem; featured?: boolean }) {
  return (
    <Link
      href={`/berita/${news.slug}`}
      className={
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift " +
        (featured ? "sm:col-span-2 sm:flex-row" : "")
      }
    >
      <div
        className={
          "relative overflow-hidden " +
          (featured ? "aspect-[16/10] w-full sm:aspect-auto sm:w-1/2" : "aspect-[16/10] w-full")
        }
      >
        <Image
          src={news.cover}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <Badge variant="accent" className="absolute left-3 top-3">
          {news.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-1.5 font-body text-xs text-muted-foreground">
          <CalendarDays className="size-3.5" />
          {formatDate(news.date)}
        </div>
        <h3
          className={
            "font-heading font-semibold leading-snug text-foreground " +
            (featured ? "text-2xl" : "text-lg")
          }
        >
          {news.title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {news.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-1 font-body text-sm font-semibold text-forest dark:text-secondary">
          Baca selengkapnya
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
