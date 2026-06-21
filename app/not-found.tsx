import Link from "next/link";
import { Compass, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-primary/60 dark:bg-secondary/15">
        <span className="font-heading text-4xl font-semibold text-forest dark:text-secondary">
          404
        </span>
        <span className="sticker absolute -right-3 -top-2 rotate-6 border-accent/60 bg-accent/90 text-[11px] text-accent-foreground">
          tersesat?
        </span>
      </div>
      <h1 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        Halaman yang kamu cari belum ada di peta kami
      </h1>
      <p className="max-w-md font-body text-sm text-muted-foreground">
        Mungkin tautannya berubah atau memang belum pernah ada. Yuk balik ke beranda dan jelajahi
        lagi dari sana.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/">
            <Home className="size-4" /> Ke Beranda
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/galeri">
            <Compass className="size-4" /> Jelajahi Galeri
          </Link>
        </Button>
      </div>
    </div>
  );
}
