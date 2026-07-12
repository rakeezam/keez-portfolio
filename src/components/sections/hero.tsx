import Image from "next/image";
import { Star, Squiggle, DownArrow } from "@/components/doodles";

const STACK = [
  { name: "React", tone: "bg-forest" },
  { name: "TypeScript", tone: "bg-terracotta" },
  { name: "Next.js", tone: "bg-marigold text-forest" },
  { name: "Node.js", tone: "bg-periwinkle" },
];

export function Hero() {
  return (
    <section id="top" className="relative px-6 pb-20 pt-16 sm:px-12 sm:pt-24">
      <Star className="absolute left-[44%] top-1 h-6 w-6 rotate-[8deg]" color="var(--marigold)" />
      <Star className="absolute right-[2%] top-14 h-4 w-4 rotate-[-14deg]" color="var(--periwinkle)" />
      <Star className="absolute left-[6%] top-24 h-3.5 w-3.5 rotate-[20deg]" color="var(--terracotta)" />
      <Star className="absolute right-[14%] top-0 h-3 w-3 rotate-[-6deg]" color="var(--forest)" />

      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[1.28fr_1fr] sm:gap-10">
        <div>
          <h1 className="font-display text-6xl leading-[0.98] sm:text-7xl">
            Hi, I&rsquo;m
            <br />
            <span className="relative inline-block">
              Rakeeza
              <Squiggle className="absolute -bottom-3.5 left-[-4px] h-[18px] w-[calc(100%+10px)]" />
            </span>{" "}
            <span className="text-[0.7em]">🌸</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60">
            Full-Stack Engineer and Senior Frontend Engineer building
            considered, high-impact products. Five years of commercial
            experience, deep React and TypeScript expertise, and a track
            record of taking things from zero to one.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {STACK.map((tech) => (
              <span
                key={tech.name}
                className={`px-3.5 py-1.5 text-xs font-semibold text-paper ${tech.tone}`}
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)" }}
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex items-center gap-2 bg-forest px-5.5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink"
            >
              See my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="border border-ink px-5.5 py-3 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-9 right-6 hidden flex-col items-end gap-0.5 font-hand text-xl sm:flex">
            <span className="rotate-2">that&rsquo;s me!</span>
            <DownArrow className="h-9 w-8" />
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest">
            <Image
              src="/rakeeza.jpg"
              alt="Rakeeza Malik"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 640px) 40vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
