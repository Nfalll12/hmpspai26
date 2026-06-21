import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { MembersExplorer } from "@/components/members-explorer";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Anggota",
  description: "Kenalan dengan seluruh pengurus dan anggota HMPS PAI INISNU Temanggung.",
};

export default function AnggotaPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-right-16 top-0 h-64 w-64" color="var(--primary)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow={`${members.length} Wajah Hangat`}
              title="Kenalan Sama Kami, Yuk"
              description="Setiap individu, satu peran, satu tujuan yang sama. Klik kartu untuk membaca profil lengkapnya."
            />
          </Reveal>

          <div className="mt-12">
            <MembersExplorer members={members} />
          </div>
        </div>
      </section>
    </div>
  );
}
