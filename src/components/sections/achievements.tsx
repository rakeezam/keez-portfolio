const ACHIEVEMENTS = [
  {
    title: "BIMA 100 Rising Star",
    period: "2024",
    desc: "Recognised among the UK's top emerging digital professionals.",
    dot: "bg-terracotta",
  },
  {
    title: "AND She Can Lead & Mentor",
    period: "2021 – 2024",
    desc: "Designed and led a three-week annual bootcamp for around 20 sixth-form students through end-to-end product development.",
    dot: "bg-marigold",
  },
  {
    title: "DEI Committee Lead, Embrace",
    period: "",
    desc: "Led inclusivity initiatives including cultural celebrations, panel talks, and newsletters.",
    dot: "bg-periwinkle",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-ink/10 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Achievements &amp; Leadership</p>
        <h2 className="mb-8 font-display text-3xl">Beyond the day job</h2>
        <div className="border-t border-ink/10">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.title} className="grid grid-cols-[16px_1fr] items-baseline gap-4 border-b border-ink/10 py-5 sm:grid-cols-[22px_1fr_auto] sm:gap-6">
              <span className={`h-2.5 w-2.5 self-center ${item.dot}`} />
              <div className="col-span-2 sm:col-span-1">
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.desc}</p>
              </div>
              {item.period && <span className="col-span-2 text-sm text-ink/50 sm:col-span-1 sm:text-right">{item.period}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
