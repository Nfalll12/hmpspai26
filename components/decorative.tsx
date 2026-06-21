import { cn } from "@/lib/utils";

/** Soft ambient blob, purely decorative — aria-hidden. */
export function AmbientBlob({
  className,
  color = "var(--secondary)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 blur-2xl", className)}
      style={{
        background: `hsl(${color})`,
        opacity: 0.45,
        borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      }}
    />
  );
}

/** A tiny four-point sparkle, used as a hand-drawn accent mark. */
export function SparkleMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-accent", className)}
    >
      <path
        d="M12 2c.6 3.2 1.6 5.4 3 6.8 1.4 1.4 3.6 2.4 6.8 3-3.2.6-5.4 1.6-6.8 3-1.4 1.4-2.4 3.6-3 6.8-.6-3.2-1.6-5.4-3-6.8-1.4-1.4-3.6-2.4-6.8-3 3.2-.6 5.4-1.6 6.8-3 1.4-1.4 2.4-3.6 3-6.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
