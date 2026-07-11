import { Mail } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { BlobDecor } from "@/components/blob-decor";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <BlobDecor className="-bottom-32 left-1/2 h-[380px] w-[380px] -translate-x-1/2" />

      <FadeIn className="mx-auto max-w-xl text-center">
        <div className="rounded-4xl border border-border/60 bg-card p-10 shadow-sm">
          <p className="text-3xl">💌</p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Have a project in mind or just want to say hi? My inbox is always
            open — placeholder text, swap in your real pitch here.
          </p>

          <a
            href="mailto:hello@example.com"
            className={buttonVariants({
              size: "lg",
              className: "mt-6 rounded-full bg-primary px-6 text-primary-foreground shadow-md hover:bg-primary/90",
            })}
          >
            <Mail className="mr-1 h-4 w-4" /> hello@example.com
          </a>

          <div className="mt-6 flex justify-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
