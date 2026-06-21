import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { OrgNode } from "@/components/org-node";
import { getIcon } from "@/lib/icon-map";
import { members, getMembersByDivision } from "@/data/members";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Struktur Organisasi",
  description: "Susunan pengurus inti dan koordinator divisi HMPS PAI INISNU Temanggung.",
};

const findBySlug = (slug: string) => members.find((m) => m.slug === slug)!;

const ketua = findBySlug("ahmad-fauzan-nuruddin");
const wakil = findBySlug("nur-laila-rahmawati");
const inti = [
  findBySlug("siti-khoirun-nisa"),
  findBySlug("dewi-anggraini"),
  findBySlug("muhammad-rizky-hidayat"),
  findBySlug("putri-ayu-lestari"),
];

function Connector() {
  return <div aria-hidden className="mx-auto h-8 w-px bg-border" />;
}

export default function StrukturPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Struktur Organisasi"
            title="Pengurus HMPS PAI Periode 2025/2026"
            description="Mulai dari pucuk pimpinan sampai koordinator tiap divisi, semua bergerak untuk satu tujuan yang sama."
          />
        </Reveal>

        {/* Pucuk pimpinan */}
        <div className="mt-14 flex flex-col items-center">
          <Reveal>
            <OrgNode member={ketua} size="lg" className="w-56" />
          </Reveal>
          <Connector />
          <Reveal delay={0.05}>
            <OrgNode member={wakil} size="md" className="w-52" />
          </Reveal>
          <Connector />

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {inti.map((m) => (
                <OrgNode key={m.id} member={m} size="sm" className="w-40" />
              ))}
            </div>
          </Reveal>
          <Connector />
        </div>

        {/* Divisi */}
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division) => {
            const Icon = getIcon(division.icon);
            const team = getMembersByDivision(division.slug);
            const coordinator = team.find((m) => m.position.includes("Koordinator"));
            const staff = team.filter((m) => !m.position.includes("Koordinator"));

            return (
              <RevealItem key={division.slug}>
                <div id={division.slug} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-dashed border-border bg-primary/15 p-5 dark:bg-secondary/5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-forest shadow-softer dark:bg-card dark:text-secondary">
                      <Icon className="size-5" />
                    </span>
                    <p className="font-heading text-sm font-semibold leading-snug text-foreground">
                      {division.name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    {coordinator ? <OrgNode member={coordinator} size="sm" /> : null}
                    {staff.map((m) => (
                      <OrgNode key={m.id} member={m} size="sm" />
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}
