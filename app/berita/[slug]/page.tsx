import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { NewsCard } from "@/components/news-card";
import { Badge } from "@/components/ui/badge";
import { newsItems, getNewsBySlug } from "@/data/news";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return { title: "Berita Tidak Ditemukan" };

  return {
    title: news.title,
    description: news.excerpt,
    openGraph: { images: [news.cover] },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return notFound();

  const related = newsItems.filter((n) => n.slug !== news.slug).slice(0, 2);

  return (
    <article className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/berita"
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-forest dark:hover:text-secondary"
        >
          <ArrowLeft className="size-4" /> Kembali ke semua berita
        </Link>

        <Reveal className="mt-6">
          <Badge variant="accent">{news.category}</Badge>
          <h1 className="mt-3 font-heading text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {news.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 font-body text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" /> {formatDate(news.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="size-4" /> {news.author}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-lift dark:border-card">
          <Image src={news.cover} alt={news.title} fill priority className="object-cover" />
        </Reveal>

        <Reveal delay={0.1} className="prose-custom mt-10 space-y-5">
          {news.content.map((paragraph, i) => (
            <p key={i} className="font-body text-base leading-relaxed text-foreground/80">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-2">
          {news.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-foreground/70"
            >
              #{tag}
            </span>
          ))}
        </Reveal>
      </div>

      {related.length > 0 ? (
        <div className="mx-auto mt-20 max-w-5xl px-6">
          <Reveal>
            <p className="font-heading text-lg font-semibold text-foreground">Berita Lainnya</p>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {related.map((n) => (
                <NewsCard key={n.id} news={n} />
              ))}
            </div>
          </Reveal>
        </div>
      ) : null}
    </article>
  );
}
