import type { Metadata } from "next";

const projects = [
  {
    title: "Launch Studio",
    type: "Brand system + website",
    description:
      "A polished identity and conversion-focused site for a new service offering, shaped from messy early notes into a launch-ready experience.",
    detail: "Positioning, UX writing, visual direction",
  },
  {
    title: "Client Portal",
    type: "Product design",
    description:
      "A calm workspace for tracking project milestones, approvals, and documents without burying people in operational clutter.",
    detail: "Dashboard design, workflows, handoff",
  },
  {
    title: "Editorial System",
    type: "Content strategy",
    description:
      "A reusable publishing framework with sharper messaging, page templates, and repeatable rules for consistent storytelling.",
    detail: "Content model, templates, governance",
  },
];

const strengths = [
  "Clear positioning",
  "Clean visual systems",
  "Useful prototypes",
  "Thoughtful writing",
  "Launch-ready details",
  "Human-centered workflows",
];

export const metadata: Metadata = {
  title: "Kristi Portfolio",
  description:
    "A focused portfolio for Kristi, featuring selected work, strengths, and contact information.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1e2722]">
      <section className="relative overflow-hidden border-b border-[#ddd2c2]">
        <div className="absolute inset-0 portfolio-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:py-12">
          <nav className="col-span-full flex items-center justify-between text-sm font-medium">
            <a href="#top" className="tracking-[0.28em] text-[#4d5b51]">
              KRISTI
            </a>
            <div className="flex items-center gap-5 text-[#5f665e]">
              <a href="#work" className="hover:text-[#1e2722]">
                Work
              </a>
              <a href="#about" className="hover:text-[#1e2722]">
                About
              </a>
              <a href="#contact" className="hover:text-[#1e2722]">
                Contact
              </a>
            </div>
          </nav>

          <div id="top" className="flex min-h-[68vh] flex-col justify-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#b45d4a]">
              Portfolio draft
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-[#18231d] sm:text-6xl lg:text-7xl">
              Thoughtful digital work with a sharp point of view.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#566057]">
              I help shape ideas into clear, beautiful, usable experiences:
              from early strategy and story to polished interfaces, launch
              pages, and presentation-ready systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#1e2722] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#344238]"
              >
                View selected work
              </a>
              <a
                href="mailto:hello@example.com"
                className="rounded-full border border-[#a8aa9f] px-6 py-3 text-sm font-semibold text-[#1e2722] transition hover:border-[#1e2722]"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center pb-12 lg:pb-0">
            <div className="portfolio-board" aria-label="Portfolio preview board">
              <div className="portfolio-board__panel portfolio-board__panel--large">
                <span>01</span>
                <strong>Strategy</strong>
              </div>
              <div className="portfolio-board__panel portfolio-board__panel--warm">
                <span>02</span>
                <strong>Design</strong>
              </div>
              <div className="portfolio-board__panel portfolio-board__panel--dark">
                <span>03</span>
                <strong>Launch</strong>
              </div>
              <div className="portfolio-board__note">
                <span>Selected work</span>
                <strong>3 case studies ready to personalize</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#ddd2c2] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b45d4a]">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Projects with room for your real story.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#626a63]">
            These are polished placeholders. Swap in your actual project names,
            outcomes, links, and visuals whenever you are ready.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-h-[360px] rounded-lg border border-[#d7ccbb] bg-[#fffdf8] p-6 shadow-[0_18px_50px_rgba(77,67,50,0.08)] transition hover:-translate-y-1 hover:border-[#b45d4a]"
            >
              <div className="mb-8 h-36 rounded-md bg-[linear-gradient(135deg,#25372e,#b45d4a_52%,#e7c77f)] p-4 text-white">
                <div className="flex h-full flex-col justify-between">
                  <span className="text-xs uppercase tracking-[0.22em] opacity-80">
                    {project.type}
                  </span>
                  <span className="text-3xl font-semibold">0{projects.indexOf(project) + 1}</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#626a63]">
                {project.description}
              </p>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#b45d4a]">
                {project.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-[#ddd2c2] bg-[#233229] text-[#f8f5ef]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#e7c77f]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A portfolio built to feel capable, direct, and personal.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[#e4dfd4]">
              Use this section for a short bio: who you are, what kind of work
              you want more of, and why people like working with you. The best
              version will sound specific, grounded, and confident without
              trying too hard.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-md border border-[#607064] bg-[#2d4035] px-4 py-3 text-sm font-semibold"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
        <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b45d4a]">
              Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Have a project, role, or collaboration in mind?
            </h2>
          </div>
          <div className="rounded-lg border border-[#d7ccbb] bg-[#fffdf8] p-6">
            <p className="text-base leading-7 text-[#626a63]">
              Replace this with your preferred email, LinkedIn, resume link, or
              booking link.
            </p>
            <a
              href="mailto:hello@example.com"
              className="mt-5 inline-flex rounded-full bg-[#b45d4a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#964836]"
            >
              hello@example.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
