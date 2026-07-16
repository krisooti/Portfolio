import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./projects";

export const metadata: Metadata = {
  title: "Kristi Kim - UX Portfolio",
  description:
    "A modern, minimal UX portfolio with selected case studies and an editorial design sensibility.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          Kristi Kim
        </Link>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <section className="hero-section">
        <p className="eyebrow">UX portfolio</p>
        <h1>
          Design is more than just aesthetics. I focus on what users want.
        </h1>
      </section>

      <section id="work" className="work-section" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2 id="work-title">Three case studies.</h2>
        </div>

        <div className="project-stack">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="project-card"
              aria-label={`Open ${project.title} case study`}
            >
              <div className={`project-image ${project.imageClass}`}>
                <div className="image-system" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="project-meta">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <p className="eyebrow">About</p>
        <div className="about-grid">
          <h2>Minimal structure. Sharp rationale. Human outcomes.</h2>
          <p>
            I use research, systems thinking, and visual restraint to make
            digital products easier to understand. This portfolio is set up for
            concise storytelling: problem, process, and impact without excess
            decoration.
          </p>
        </div>
      </section>

      <section id="resume" className="resume-section">
        <p className="eyebrow">Resume</p>
        <h2>Available for UX, product design, and creative systems work.</h2>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </section>
    </main>
  );
}
