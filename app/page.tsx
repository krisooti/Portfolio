import type { Metadata } from "next";
import Link from "next/link";
import { HighlightText } from "./HighlightText";
import { projects } from "./projects";
import { SeattleStatus } from "./SeattleStatus";

export const metadata: Metadata = {
  title: "Kristi Kim UX Portfolio",
  description:
    "A simple, minimal UX portfolio with centered project cards and a clean modern aesthetic.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <HighlightText>Kristi</HighlightText>
          <span className="flower-mark" aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          <a href="#work">
            <HighlightText>Work</HighlightText>
          </a>
          <Link href="/about">
            <HighlightText>About</HighlightText>
          </Link>
          <a href="#contact">
            <HighlightText>Contact</HighlightText>
          </a>
        </nav>
      </header>

      <section className="home-center" id="work" aria-labelledby="intro-title">
        <div className="intro-row">
          <div className="intro-block">
            <h1 id="intro-title">
              Hi there, I&apos;m{" "}
              <HighlightText persistent>Kristi</HighlightText>, I design
              minimal, readable experiences that help people move through
              digital products with clarity and confidence.
            </h1>
            <p className="intro-status">
              <span aria-hidden="true" />
              Recent graduate from the University of Washington · B.S. in Human
              Centered Design &amp; Engineering
            </p>
          </div>
          <a className="intro-email" href="mailto:krisooti08@gmail.com">
            <HighlightText>krisooti08@gmail.com</HighlightText>
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
                {project.cardImage ? (
                  <img src={project.cardImage.src} alt={project.cardImage.alt} />
                ) : (
                  <div className="image-system" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
              <div className="project-meta">
                <p className="project-category">{project.category}</p>
                <h2>
                  <HighlightText>{project.title}</HighlightText>
                </h2>
                <p>{project.summary}</p>
                <p className="project-keywords">{project.tags.join(" · ")}</p>
                <span className="project-link">
                  View Project <span aria-hidden="true">-&gt;</span>
                </span>
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
