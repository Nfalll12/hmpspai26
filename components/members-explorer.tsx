"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users } from "lucide-react";

import type { Member } from "@/types";
import { divisions } from "@/data/divisions";
import { MemberCard } from "@/components/member-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "inti" | (typeof divisions)[number]["slug"];

export function MembersExplorer({ members }: { members: Member[] }) {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: "Semua" },
    { key: "inti", label: "Pengurus Inti" },
    ...divisions.map((d) => ({ key: d.slug as FilterKey, label: d.name })),
  ];

  const filtered = members.filter((m) => {
    const matchesFilter = filter === "all" ? true : m.division === filter;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q.length === 0 ||
      m.name.toLowerCase().includes(q) ||
      m.position.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama atau jabatan…"
            className="pl-11"
          />
        </div>
        <p className="font-body text-sm text-muted-foreground">
          Menampilkan <span className="font-semibold text-forest dark:text-secondary">{filtered.length}</span> dari{" "}
          {members.length} anggota
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={cn(
              "rounded-full border-2 px-4 py-1.5 text-sm font-medium font-body transition-colors",
              filter === f.key
                ? "border-forest bg-forest text-white dark:border-secondary dark:bg-secondary/30 dark:text-secondary"
                : "border-border bg-card text-foreground/70 hover:border-secondary/60"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((member) => (
            <motion.div
              key={member.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
            >
              <MemberCard member={member} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Users className="size-6" />
          </span>
          <p className="font-heading text-lg font-semibold text-foreground">
            Belum ketemu anggotanya
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Coba kata kunci lain atau pilih kategori yang berbeda.
          </p>
        </div>
      ) : null}
    </div>
  );
}
