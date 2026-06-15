"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Header } from "@/components/Header";
import { ServiceImageShowcase } from "@/components/ServiceImageShowcase";
import {
  about,
  contact,
  hero,
  services,
  site,
} from "@/data/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();

      if (reduced) {
        gsap.set(
          "[data-animate='hero-line'], [data-animate='hero-sub'], [data-animate='about'], [data-animate='about-img'], [data-animate='stat'], [data-animate='contact']",
          { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        );
        about.stats.forEach((stat, i) => {
          const el = statRefs.current[i];
          if (el) el.textContent = stat.value.toLocaleString("mn-MN");
        });
        return;
      }

      if (heroBgRef.current) {
        gsap.fromTo(
          heroBgRef.current,
          { scale: 1.08 },
          { scale: 1, duration: 2.8, ease: "power2.out" },
        );
      }

      if (heroGlowRef.current) {
        gsap.to(heroGlowRef.current, {
          y: -24,
          x: 12,
          duration: 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      const heroTl = gsap.timeline({ delay: 0.4 });
      heroTl
        .from("[data-animate='hero-line']", {
          opacity: 0,
          y: 28,
          filter: "blur(8px)",
          duration: 1.1,
          stagger: 0.18,
          ease: "power2.out",
        })
        .from(
          "[data-animate='hero-sub']",
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3",
        );

      gsap.from("[data-animate='about']", {
        opacity: 0,
        y: 48,
        filter: "blur(6px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 72%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from("[data-animate='about-img']", {
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.create({
        trigger: "#about-stats",
        start: "top 75%",
        once: true,
        onEnter: () => {
          about.stats.forEach((stat, i) => {
            const el = statRefs.current[i];
            if (!el) return;
            const counter = { value: 0 };
            gsap.to(counter, {
              value: stat.value,
              duration: 2.2,
              delay: i * 0.12,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = Math.round(counter.value).toLocaleString(
                  "mn-MN",
                );
              },
            });
          });
        },
      });

      gsap.from("[data-animate='stat']", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about-stats",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from("[data-animate='contact']", {
        opacity: 0,
        y: 32,
        duration: 1.4,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#contact",
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <Header />

      <main>
        <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#0a0a0a] text-white">
          <div ref={heroBgRef} className="absolute inset-0 will-change-transform">
            <Image
              src={hero.background}
              alt={hero.intro}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 hero-glow" />
          </div>
          <div
            ref={heroGlowRef}
            className="pointer-events-none absolute -right-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl will-change-transform"
          />

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-40 sm:pb-32">
            <h1 className="max-w-4xl">
              <span
                data-animate="hero-line"
                className="block text-[clamp(2rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight"
              >
                {hero.title}
              </span>
              <span
                data-animate="hero-line"
                className="mt-2 block text-[clamp(1.5rem,4vw,3rem)] font-medium leading-tight tracking-tight text-white/80"
              >
                {hero.subtitle}
              </span>
            </h1>

            <div data-animate="hero-sub" className="mt-10 max-w-2xl space-y-3">
              <p className="text-lg font-medium text-white/90">{hero.intro}</p>
              <p className="text-base leading-relaxed text-white/55">
                {hero.location}
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div>
                <h2
                  data-animate="about"
                  className="text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  {about.title}
                </h2>
                <ul className="mt-10 space-y-4">
                  {about.lines.map((line) => (
                    <li
                      key={line}
                      data-animate="about"
                      className="text-base leading-relaxed text-muted"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                data-animate="about-img"
                className="overflow-hidden rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]"
              >
                <ServiceImageShowcase
                  images={about.images}
                  alt={about.title}
                />
              </div>
            </div>

            <div
              id="about-stats"
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {about.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-animate="stat"
                  className="border-l border-border pl-6"
                >
                  <span
                    ref={(el) => {
                      statRefs.current[index] = el;
                    }}
                    className="block text-4xl font-semibold tracking-tight sm:text-5xl"
                  >
                    0
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="service-card overflow-hidden rounded-2xl border border-border bg-white"
                >
                  <ServiceImageShowcase
                    images={service.images}
                    alt={service.title}
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {service.lines.map((line) => (
                        <li
                          key={line.slice(0, 40)}
                          className="text-sm leading-relaxed text-muted"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[#0a0a0a] text-white"
        >
          <div className="absolute inset-0">
            <Image
              src={contact.background}
              alt={contact.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-black/70" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

          <div className="relative mx-auto max-w-3xl px-6 py-32 text-center sm:py-40">
            <h2
              data-animate="contact"
              className="text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              {contact.title}
            </h2>
            <p
              data-animate="contact"
              className="mt-6 text-lg text-white/80"
            >
              {contact.company}
            </p>

            <div
              data-animate="contact"
              className="mx-auto mt-12 max-w-lg rounded-2xl border border-white/10 bg-black/25 px-8 py-8 backdrop-blur-sm"
            >
              <div className="space-y-4 text-sm leading-relaxed text-white/85">
                {contact.email.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block transition-colors hover:text-white"
                  >
                    {email}
                  </a>
                ))}
                <a
                  href={`tel:+976${contact.phone}`}
                  className="block transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
                <p className="pt-2 text-white/70">{contact.location}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0a0a0a] text-white/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs sm:flex-row">
          <p>{site.legalName}</p>
          <p>{site.year}</p>
        </div>
      </footer>
    </div>
  );
}
