export function BlobDecor({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 blur-3xl opacity-70 ${className}`}
    >
      <div className="h-full w-full rounded-full bg-gradient-to-br from-[var(--blush)] via-[var(--lavender)] to-[var(--mint)]" />
    </div>
  );
}
