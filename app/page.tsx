import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./projects";
import { SeattleStatus } from "./SeattleStatus";

export const metadata: Metadata = {
  title: "Kristi - UX Portfolio",
  description:
    "A simple, minimal UX portfolio with centered project cards and a clean modern aesthetic.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          Kristi
          <span className="flower-mark" aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <Link href="/about">About</Link>
          <a href="mailto:krisooti08@gmail.com">Contact</a>
        </nav>
      </header>

      <section className="home-center" id="work" aria-labelledby="intro-title">
        <div className="intro-row">
          <div className="intro-block">
            <h1 id="intro-title">
              Hi there, I&apos;m <span className="intro-highlight">Kristi</span>,
              I design minimal, readable experiences that help people move
              through digital products with clarity and confidence.
            </h1>
          </div>
          <a className="intro-email" href="mailto:krisooti08@gmail.com">
            krisooti08@gmail.com
          </a>
        </div>

        <div className="project-grid" aria-label="Featured projects">
          {projects.map((project) => (
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
                </div>
              </div>
              <div className="project-meta">
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-tags" aria-label={`${project.title} keywords`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>I&apos;m currently in Seattle.</p>
        <SeattleStatus />
      </footer>
    </main>
  );
}
