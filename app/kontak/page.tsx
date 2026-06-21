import type { Metadata } from "next";
import { MapPin, Mail, MessageCircle, Instagram, Clock } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { AmbientBlob } from "@/components/decorative";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi HMPS PAI INISNU Temanggung lewat WhatsApp, email, atau media sosial.",
};

const infoItems = [
  {
    icon: MapPin,
    title: "Sekretariat",
    value: siteConfig.address,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Klik untuk chat langsung",
    href: siteConfig.whatsapp,
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@hmpspai.inisnu",
    href: siteConfig.instagram,
  },
  {
    icon: Clock,
    title: "Jam Sekretariat",
    value: "Senin–Jumat, 09.00–15.00 WIB",
  },
];

export default function KontakPage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="relative">
        <AmbientBlob className="-left-16 top-0 h-64 w-64" color="var(--primary)" />
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Sapa Kami"
              title="Ada Pertanyaan atau Mau Gabung?"
              description="Jangan sungkan, kami senang dihubungi siapa saja — mahasiswa baru, alumni, atau organisasi lain yang mau berkolaborasi."
            />
          </Reveal>
        </div>
      </section>

      <section className="mt-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-3 rounded-3xl border border-border bg-card p-5 shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/60 text-forest dark:bg-secondary/15 dark:text-secondary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-0.5 font-body text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}

            <div className="overflow-hidden rounded-3xl border border-border shadow-softer">
              <iframe
                title="Lokasi INISNU Temanggung"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteConfig.mapEmbedQuery
                )}&output=embed`}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-border bg-card p-7 shadow-softer sm:p-9">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Kirim Pesan Langsung
              </h3>
              <p className="mt-1.5 font-body text-sm text-muted-foreground">
                Isi formulir di bawah, nanti otomatis terbuka di WhatsApp supaya kami bisa
                langsung membalas.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
