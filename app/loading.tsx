export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <div className="relative h-16 w-16">
        <span className="absolute inset-0 animate-spin-slow rounded-full border-4 border-dashed border-secondary" />
        <span className="absolute inset-3 rounded-full bg-accent/80 animate-wiggle" />
      </div>
      <p className="font-heading text-lg text-foreground/70">Sedang menyiapkan halaman…</p>
      <div className="flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-secondary [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-secondary [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-secondary" />
      </div>
    </div>
  );
}
