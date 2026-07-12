import { Star } from "@/components/doodles";
import { LinkedinIcon } from "@/components/brand-icons";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink/10 px-6 py-20 text-center sm:px-12">
      <Star className="absolute left-[calc(50%-160px)] top-0 h-5.5 w-5.5 rotate-[-10deg]" color="var(--terracotta)" />
      <Star className="absolute right-[calc(50%-180px)] top-6 h-4 w-4 rotate-[16deg]" color="var(--marigold)" />
      <Star className="absolute left-[8%] top-16 h-3.5 w-3.5 rotate-[-20deg]" color="var(--periwinkle)" />
      <Star className="absolute right-[6%] bottom-10 h-4 w-4 rotate-[8deg]" color="var(--forest)" />
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Contact</p>
      <h2 className="font-display text-4xl sm:text-5xl">Let&rsquo;s talk about your project 🌸</h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/60">
        Freelance and contract work, remote or based in Dubai. If you&rsquo;re
        building something in PropTech, fintech, or consumer tech, I&rsquo;d
        like to hear about it.
      </p>
      <a
        href="mailto:rakeezamalik@gmail.com"
        className="mt-6 inline-block border-b-2 border-ink font-display text-2xl hover:border-terracotta hover:text-terracotta"
      >
        rakeezamalik@gmail.com
      </a>
      <div className="mt-8 flex justify-center gap-6 text-sm text-ink/60">
        <a
          href="https://www.linkedin.com/in/rakeeza-malik/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-ink"
        >
          <LinkedinIcon className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
