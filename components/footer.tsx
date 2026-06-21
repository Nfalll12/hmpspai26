import Link from "next/link";
import type { ReactNode } from "react";
import { Instagram, Youtube, MessageCircle, Mail, MapPin, Sparkles } from "lucide-react";

import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-primary/40 dark:bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-forest shadow-soft dark:bg-secondary/20 dark:text-secondary">
                <Sparkles className="size-5" />
              </span>
              <span className="font-heading text-lg font-semibold text-foreground">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <SocialIcon href={siteConfig.instagram} label="Instagram">
                <Instagram className="size-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.youtube} label="YouTube">
                <Youtube className="size-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.whatsapp} label="WhatsApp">
                <MessageCircle className="size-4" />
              </SocialIcon>
              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
                <Mail className="size-4" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-foreground">Jelajahi</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-foreground/70 transition-colors hover:text-forest dark:hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-semibold text-foreground">Lainnya</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-foreground/70 transition-colors hover:text-forest dark:hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start gap-2 font-body text-sm text-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-center font-body text-xs text-foreground/60 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Dibuat dengan hangat untuk seluruh
            anggota.
          </p>
          <p>{siteConfig.period}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-forest shadow-softer transition-transform hover:-translate-y-0.5 dark:bg-secondary/15 dark:text-secondary"
    >
      {children}
    </a>
  );
}
