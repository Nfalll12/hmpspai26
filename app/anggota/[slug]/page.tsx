import type { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Instagram, MessageCircle, Linkedin, Mail, Quote, Heart } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { MemberCard } from "@/components/member-card";
import { Badge } from "@/components/ui/badge";
import { members, getMemberBySlug, getMembersByDivision } from "@/data/members";
import { getDivisionBySlug } from "@/data/divisions";

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return { title: "Anggota Tidak Ditemukan" };

  return {
    title: member.name,
    description: `${member.position} HMPS PAI INISNU Temanggung — ${member.bio}`,
  };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMemberBySlug(slug);
  if (!member) return notFound();

  const division = member.division !== "inti" ? getDivisionBySlug(member.division) : null;
  const others = (
    member.division !== "inti" ? getMembersByDivision(member.division) : members.filter((m) => m.isCore)
  )
    .filter((m) => m.slug !== member.slug)
    .slice(0, 4);

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/anggota"
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-muted-foreground transition-colors hover:text-forest dark:hover:text-secondary"
        >
          <ArrowLeft className="size-4" /> Kembali ke semua anggota
        </Link>

        <Reveal className="mt-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[260px_1fr]">
            <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-[1.75rem] border-4 border-white shadow-lift dark:border-card sm:w-full">
              <Image src={member.photo} alt={member.name} fill className="object-cover" priority />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={member.isCore ? "accent" : "secondary"}>{member.position}</Badge>
                  {division ? <Badge variant="outline">{division.name}</Badge> : null}
                  <Badge variant="outline">{member.period}</Badge>
                </div>
                <h1 className="mt-3 font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                  {member.name}
                </h1>
              </div>

              <div className="flex items-start gap-2 rounded-2xl bg-primary/30 p-4 dark:bg-secondary/10">
                <Quote className="mt-0.5 size-4 shrink-0 text-forest dark:text-secondary" />
                <p className="font-heading text-base leading-relaxed text-forest dark:text-secondary">
                  {member.quote}
                </p>
              </div>

              <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                {member.bio}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 font-body text-xs font-semibold text-foreground/60">
                  <Heart className="size-3.5" /> Suka:
                </span>
                {member.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="rounded-full border border-dashed border-border px-3 py-1 text-xs font-medium text-foreground/70"
                  >
                    {hobby}
                  </span>
                ))}
              </div>

              <div className="mt-2 flex items-center gap-2.5">
                {member.social.instagram ? (
                  <SocialButton href={member.social.instagram} label="Instagram">
                    <Instagram className="size-4" />
                  </SocialButton>
                ) : null}
                {member.social.whatsapp ? (
                  <SocialButton href={member.social.whatsapp} label="WhatsApp">
                    <MessageCircle className="size-4" />
                  </SocialButton>
                ) : null}
                {member.social.linkedin ? (
                  <SocialButton href={member.social.linkedin} label="LinkedIn">
                    <Linkedin className="size-4" />
                  </SocialButton>
                ) : null}
                {member.social.email ? (
                  <SocialButton href={`mailto:${member.social.email}`} label="Email">
                    <Mail className="size-4" />
                  </SocialButton>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>

        {others.length > 0 ? (
          <Reveal delay={0.1} className="mt-20">
            <p className="font-heading text-lg font-semibold text-foreground">
              {member.division !== "inti" ? "Satu Divisi Dengannya" : "Pengurus Inti Lainnya"}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {others.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

function SocialButton({
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-forest transition-transform hover:-translate-y-0.5 hover:bg-secondary/40 dark:text-secondary"
    >
      {children}
    </a>
  );
}
