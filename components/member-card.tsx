import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle, Linkedin, Mail } from "lucide-react";

import type { Member } from "@/types";
import { getDivisionBySlug } from "@/data/divisions";
import { cn } from "@/lib/utils";

export function MemberCard({ member }: { member: Member }) {
  const division = member.division !== "inti" ? getDivisionBySlug(member.division) : null;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <Link
        href={`/anggota/${member.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`Lihat profil ${member.name}`}
      />

      <div className="pointer-events-none relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold",
            member.isCore
              ? "bg-accent text-accent-foreground"
              : "bg-white/90 text-forest dark:bg-card/90 dark:text-secondary"
          )}
        >
          {member.isCore ? "Pengurus Inti" : division?.name.split(" ")[0] ?? "Anggota"}
        </span>
      </div>

      <div className="pointer-events-none flex flex-1 flex-col gap-1.5 p-4">
        <h3 className="font-heading text-base font-semibold leading-snug text-foreground">
          {member.name}
        </h3>
        <p className="font-body text-sm text-forest dark:text-secondary">{member.position}</p>
        {division ? (
          <p className="font-body text-xs text-muted-foreground">{division.name}</p>
        ) : null}
      </div>

      <div className="relative z-20 flex items-center gap-2 border-t border-border/70 p-3">
        {member.social.instagram ? (
          <SocialLink href={member.social.instagram} label={`Instagram ${member.name}`}>
            <Instagram className="size-[15px]" />
          </SocialLink>
        ) : null}
        {member.social.whatsapp ? (
          <SocialLink href={member.social.whatsapp} label={`WhatsApp ${member.name}`}>
            <MessageCircle className="size-[15px]" />
          </SocialLink>
        ) : null}
        {member.social.linkedin ? (
          <SocialLink href={member.social.linkedin} label={`LinkedIn ${member.name}`}>
            <Linkedin className="size-[15px]" />
          </SocialLink>
        ) : null}
        {member.social.email ? (
          <SocialLink href={`mailto:${member.social.email}`} label={`Email ${member.name}`}>
            <Mail className="size-[15px]" />
          </SocialLink>
        ) : null}
      </div>
    </div>
  );
}

function SocialLink({
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
      className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-forest transition-colors hover:bg-secondary/40 dark:text-secondary"
    >
      {children}
    </a>
  );
}
