"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images, navLinks, site } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className={`flex items-center gap-3 text-sm font-medium tracking-wide transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          <Image
            src={images.logo}
            alt={site.legalName}
            width={48}
            height={48}
            className="h-10 w-auto rounded-sm"
          />
          {site.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Цэс нээх"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block h-px w-6 transition-colors ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
          <span
            className={`mt-1.5 block h-px w-6 transition-colors ${scrolled ? "bg-foreground" : "bg-white"}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
