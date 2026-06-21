"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function ContactForm() {
  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = [
      `Halo HMPS PAI INISNU Temanggung 👋`,
      `Nama: ${name}`,
      `Kontak: ${contact}`,
      ``,
      message,
    ].join("\n");

    const waNumber = siteConfig.whatsapp.replace(/\D/g, "");
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">Nama</Label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama lengkap kamu"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact">Email atau No. WhatsApp</Label>
        <Input
          id="contact"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="agar kami bisa membalas"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pertanyaan, masukan, atau niat baikmu di sini…"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Kirim via WhatsApp <Send className="size-4" />
      </Button>
      <p className="font-body text-xs text-muted-foreground">
        Tombol ini akan membuka WhatsApp dengan pesanmu sudah terisi otomatis — tinggal kirim.
      </p>
    </form>
  );
}
