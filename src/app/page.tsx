import { ContactForm } from "@/components/ContactForm";
import { Header } from "@/components/Header";

const services = [
  {
    title: "Accommodation",
    description:
      "257 rooms across VIP, standard, and worker categories — each with private shower and air conditioning.",
  },
  {
    title: "Catering & Dining",
    description:
      "Professional kitchen and dining for up to 250 guests, with VIP seating and traditional Mongolian ger dining.",
  },
  {
    title: "Laundry",
    description:
      "Industrial laundry for work uniforms, bedding, and towels to recognized hygiene standards.",
  },
  {
    title: "Cleaning & Housekeeping",
    description:
      "Daily and deep cleaning of rooms, common areas, and sanitation facilities with structured waste management.",
  },
  {
    title: "Water Supply",
    description:
      "Dedicated groundwater infrastructure with transport, storage, and seasonal treatment for reliable clean water.",
  },
  {
    title: "Power Supply",
    description:
      "Grid connection via 10kV network with dual transformers and diesel generator backup for continuity.",
  },
  {
    title: "Heating & Hot Water",
    description:
      "Steam boiler system delivering reliable heat and hot water in extreme winter conditions.",
  },
  {
    title: "Wastewater Treatment",
    description:
      "On-site treatment with daily monitoring and seasonal lab testing, compliant with MNS 4943:2015.",
  },
  {
    title: "Recreation",
    description:
      "Outdoor sports courts plus indoor fitness, tennis, chess, and lounge spaces for resident wellbeing.",
  },
  {
    title: "Security",
    description:
      "24/7 access control and CCTV surveillance through a professional security partner.",
  },
];

const advantages = [
  "Capacity for 1,028 residents across integrated residential blocks",
  "End-to-end camp operations — housing, food, utilities, and facilities in one place",
  "Modern infrastructure built for remote, high-demand industrial environments",
  "Standards-compliant water, wastewater, and hygiene management",
  "Backup power and heating systems for year-round reliability",
  "On-site recreation and security supporting workforce retention",
];

const facilityStats = [
  { label: "Residents", value: "1,028" },
  { label: "Rooms", value: "257" },
  { label: "Dining capacity", value: "250" },
  { label: "Residential blocks", value: "3" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Worker Camp Services
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
              Tsaagan Delgerekh Orgo LLC
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Full-service worker camp operations for mining and industrial
              projects in Mongolia — accommodation, catering, utilities, and
              facility management in one integrated solution.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-surface"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              About Us
            </h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <p className="text-base leading-relaxed text-muted">
                Tsaagan Delgerekh Orgo LLC operates a modern worker camp in
                Ömnögovi Province, Khanbogd soum — 6 km from Tsagaan Khad. We
                provide turnkey residential and operational services for
                large-scale workforce deployments in Mongolia&apos;s mining
                region.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Our campus spans three contemporary residential blocks with 257
                rooms, supporting up to 1,028 residents. From housing and meals
                to power, water, heating, and security — we deliver a complete,
                standards-driven environment so your teams can focus on the
                work ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Integrated camp services designed for reliability, comfort, and
                compliance in remote industrial settings.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-lg border border-border bg-white p-6 transition-colors hover:border-accent/30"
                >
                  <h3 className="text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Why Choose Us
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Facility / Portfolio */}
        <section id="facility" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Tsagaan Khad Worker Camp
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Our flagship facility at Tsagaan Khad combines scalable
              accommodation with industrial-grade utilities and on-site
              amenities — built to support demanding project timelines in
              southern Mongolia.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {facilityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border p-6 text-center"
                >
                  <p className="text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "VIP Rooms",
                  detail: "10 hotel-style rooms, 21.4 m² each",
                },
                {
                  title: "Standard Rooms",
                  detail: "48 rooms for professional staff",
                },
                {
                  title: "Worker Rooms",
                  detail: "199 rooms for operational teams",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-surface p-5"
                >
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Contact
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  Reach out to discuss camp capacity, services, or partnership
                  opportunities.
                </p>

                <dl className="mt-10 space-y-6">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Email
                    </dt>
                    <dd className="mt-1 space-y-1 text-sm">
                      <a
                        href="mailto:ceo@tsdu.mn"
                        className="block transition-colors hover:text-accent"
                      >
                        ceo@tsdu.mn
                      </a>
                      <a
                        href="mailto:info@tsdu.mn"
                        className="block transition-colors hover:text-accent"
                      >
                        info@tsdu.mn
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href="tel:+97680884624"
                        className="transition-colors hover:text-accent"
                      >
                        +976 8088 4624
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-foreground">
                      Ömnögovi Province, Khanbogd soum
                      <br />
                      Nomgon, 1st bag — 6 km from Tsagaan Khad
                    </dd>
                  </div>
                </dl>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Tsaagan Delgerekh Orgo LLC
          </p>
          <p className="text-sm text-muted">Tsagaan Khad, Mongolia</p>
        </div>
      </footer>
    </>
  );
}
