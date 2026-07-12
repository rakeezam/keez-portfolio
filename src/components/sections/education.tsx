export function Education() {
  return (
    <section id="education" className="border-t border-ink/10 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Education</p>
        <h2 className="mb-8 font-display text-3xl">Where it started</h2>
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-b border-ink/10 py-6">
          <div>
            <h3 className="font-display text-xl">BSc (Hons) Mathematics, First Class</h3>
            <p className="mt-1 text-sm text-ink/50">
              University of Birmingham &middot; ranked 76th in the QS World University Rankings
            </p>
          </div>
          <span className="text-sm text-ink/50">2017 – 2020</span>
        </div>
      </div>
    </section>
  );
}
