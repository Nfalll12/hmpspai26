"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <span className="sticker rotate-[-3deg] border-destructive/40 bg-destructive/10 text-destructive">
        Oops, ada yang nyangkut
      </span>
      <h1 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
        Halaman ini sedang ngambek sebentar
      </h1>
      <p className="max-w-md font-body text-sm text-muted-foreground">
        Tenang, ini bukan salahmu. Coba muat ulang halamannya, atau balik dulu ke beranda sambil
        kami rapikan lagi.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Button onClick={() => reset()}>
          <RefreshCcw className="size-4" /> Coba Lagi
        </Button>
        <Button asChild variant="outline">
          <Link href="/">
            <Home className="size-4" /> Ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  );
}
