import Image from "next/image";
import Link from "next/link";

import type { Member } from "@/types";
import { cn } from "@/lib/utils";

export function OrgNode({
  member,
  size = "md",
  className,
}: {
  member: Member;
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const dims = {
    lg: "h-20 w-20",
    md: "h-16 w-16",
    sm: "h-12 w-12",
  }[size];

  return (
    <Link
      href={`/anggota/${member.slug}`}
      className={cn(
        "group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-4 py-4 text-center shadow-softer transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      <div className={cn("relative overflow-hidden rounded-full ring-4 ring-primary/60 dark:ring-secondary/20", dims)}>
        <Image src={member.photo} alt={member.name} fill className="object-cover" />
      </div>
      <div>
        <p className="font-heading text-sm font-semibold leading-snug text-foreground group-hover:text-forest dark:group-hover:text-secondary">
          {member.name}
        </p>
        <p className="font-body text-xs text-muted-foreground">{member.position}</p>
      </div>
    </Link>
  );
}
