import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  className?: string;
  tone?: "primary" | "secondary" | "accent";
}

const toneStyles: Record<NonNullable<FeatureCardProps["tone"]>, string> = {
  primary: "bg-primary/60 text-forest dark:bg-secondary/15 dark:text-secondary",
  secondary: "bg-secondary/30 text-forest dark:bg-secondary/20 dark:text-secondary",
  accent: "bg-accent/30 text-accent-foreground dark:bg-accent/20",
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tag,
  className,
  tone = "primary",
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift",
        className
      )}
    >
      {tag ? (
        <span className="sticker absolute -right-2 -top-3 rotate-3 border-accent/50 bg-accent/90 text-[11px] text-accent-foreground">
          {tag}
        </span>
      ) : null}
      <span
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:rotate-6",
          toneStyles[tone]
        )}
      >
        <Icon className="size-6" />
      </span>
      <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{title}</h3>
      <p className="font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
