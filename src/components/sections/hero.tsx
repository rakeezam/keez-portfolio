import { ArrowRight, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BlobDecor } from "@/components/blob-decor";

const STACK = ["React", "Next.js", "TypeScript", "Node.js"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-center overflow-hidden px-6 pb-24 pt-20 text-center sm:pt-28"
    >
      <BlobDecor className="-top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2" />

      <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        available for freelance &amp; full-time work
      </div>

      <h1 className="font-heading max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
        Hi, I&apos;m Keez <span aria-hidden>🌸</span>
        <br />I build cute, clean web things.
      </h1>

      <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
        A full-stack developer with 5 years of experience turning ideas into
        fast, polished products — placeholder bio, swap this in for your own
        story.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href="#projects"
          className={buttonVariants({
            size: "lg",
            className: "rounded-full bg-primary px-6 text-primary-foreground shadow-md hover:bg-primary/90",
          })}
        >
          View my work <ArrowRight className="ml-1 h-4 w-4" />
        </a>
        <a
          href="#contact"
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "rounded-full border-border bg-card px-6 hover:bg-muted",
          })}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
