export function DraftBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/50 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      Черновик — ждёт данных
    </span>
  );
}
