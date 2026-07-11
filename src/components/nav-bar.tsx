"use client";

import { buttonVariants } from "@/components/ui/button";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-border/60 bg-card/80 px-5 py-2.5 shadow-sm backdrop-blur-md">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          keez <span aria-hidden>ᐢ..ᐢ</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={buttonVariants({
            size: "sm",
            className: "rounded-full bg-primary text-primary-foreground hover:bg-primary/90",
          })}
        >
          Say hi
        </a>
      </nav>
    </header>
  );
}
