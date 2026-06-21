import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { divisions } from "@/data/divisions";
import { getProgramsByDivision } from "@/data/programs";
import { getIcon } from "@/lib/icon-map";
import type { ProgramStatus } from "@/types";

export const metadata: Metadata = {
  title: "Program Kerja",
  description: "Daftar program kerja HMPS PAI INISNU Temanggung di setiap divisi.",
};

const statusLabel: Record<ProgramStatus, string> = {
  ongoing: "Berjalan",
  upcoming: "Segera",
  completed: "Selesai",
};

const statusVariant: Record<ProgramStatus, "secondary" | "accent" | "outline"> = {
  ongoing: "secondary",
  upcoming: "accent",
  completed: "outline",
};

export default function ProkerPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Program Kerja"
            title="Semua yang Kami Kerjakan, Divisi per Divisi"
            description="Klik salah satu divisi di halaman /divisi untuk langsung melompat ke bagian ini."
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {divisions.map((division) => {
            const items = getProgramsByDivision(division.slug);
            const DivisionIcon = getIcon(division.icon);

            return (
              <section key={division.slug} id={division.slug} className="scroll-mt-28">
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/60 text-forest dark:bg-secondary/15 dark:text-secondary">
                      <DivisionIcon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                        {division.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">{division.shortDesc}</p>
                    </div>
                  </div>
                </Reveal>

                <RevealGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((program) => {
                    const Icon = getIcon(program.icon);
                    return (
                      <RevealItem key={program.id}>
                        <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-5 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                          <div className="flex items-start justify-between gap-2">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-forest dark:text-secondary">
                              <Icon className="size-5" />
                            </span>
                            <Badge variant={statusVariant[program.status]}>
                              {statusLabel[program.status]}
                            </Badge>
                          </div>
                          <h4 className="font-heading text-base font-semibold leading-snug text-foreground">
                            {program.title}
                          </h4>
                          <p className="font-body text-sm leading-relaxed text-muted-foreground">
                            {program.description}
                          </p>
                          <div className="mt-auto flex items-center gap-1.5 pt-1 font-body text-xs text-muted-foreground">
                            <CalendarClock className="size-3.5" />
                            {program.schedule}
                          </div>
                        </div>
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
