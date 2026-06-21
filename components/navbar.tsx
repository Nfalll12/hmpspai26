"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:mt-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2.5 shadow-softer backdrop-blur-md sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-forest dark:bg-secondary/30 dark:text-secondary">
              <Sparkles className="size-[18px]" />
            </span>
            <span className="font-heading text-base font-semibold leading-none text-foreground sm:text-lg">
              {siteConfig.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium font-body text-foreground/70 transition-colors hover:bg-muted hover:text-foreground",
                    active && "bg-primary/70 text-forest dark:bg-secondary/25 dark:text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:inline-flex" />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Buka menu navigasi"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-foreground xl:hidden"
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{siteConfig.shortName}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const active =
                      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "rounded-2xl px-4 py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:bg-muted",
                            active && "bg-primary/70 text-forest dark:bg-secondary/25 dark:text-secondary"
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                  <span className="font-body text-sm text-muted-foreground">Mode Tampilan</span>
                  <ThemeToggle />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
