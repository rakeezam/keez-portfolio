import {
  Atom,
  Braces,
  Layers,
  Palette,
  Server,
  Sparkle,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const SKILLS = [
  {
    icon: Atom,
    name: "React",
    desc: "Component-driven UIs, hooks, state management",
    tone: "bg-[var(--blush)] text-[var(--blush-foreground)]",
  },
  {
    icon: Layers,
    name: "Next.js",
    desc: "App router, SSG/SSR, performance-first builds",
    tone: "bg-[var(--lavender)] text-[var(--lavender-foreground)]",
  },
  {
    icon: Braces,
    name: "TypeScript",
    desc: "Type-safe apps that scale with the team",
    tone: "bg-[var(--mint)] text-[var(--mint-foreground)]",
  },
  {
    icon: Server,
    name: "Node.js",
    desc: "APIs, tooling, and backend services",
    tone: "bg-[var(--butter)] text-[var(--butter-foreground)]",
  },
  {
    icon: Palette,
    name: "UI / Design systems",
    desc: "Design-forward, accessible interfaces",
    tone: "bg-[var(--blush)] text-[var(--blush-foreground)]",
  },
  {
    icon: Sparkle,
    name: "Animation",
    desc: "Framer Motion micro-interactions & polish",
    tone: "bg-[var(--lavender)] text-[var(--lavender-foreground)]",
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-primary">
            Skills
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Things I&apos;m good at
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border/60 bg-card p-5 shadow-sm transition-transform hover:-translate-y-1">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${skill.tone}`}
                >
                  <skill.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-heading text-base font-semibold text-foreground">
                  {skill.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {skill.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
