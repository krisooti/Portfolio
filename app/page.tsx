import type { Metadata } from "next";
import Link from "next/link";
import { HighlightText } from "./HighlightText";
import { type Project, projects } from "./projects";
import { SeattleStatus } from "./SeattleStatus";

export const metadata: Metadata = {
  title: "Kristi Kim UX Portfolio",
  description:
    "A simple, minimal UX portfolio with centered project cards and a clean modern aesthetic.",
};

const featuredProjects = projects.slice(0, 3);

function ProjectCard({ project }: { project: Project }) {
  const displayTitle =
    project.slug === "tmind-ai" ? "MindBridge" : project.title;

  return (
    <Link
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
      <div className="project-card-header">
        <p>{project.category}</p>
        <h2>
          <HighlightText>{displayTitle}</HighlightText>
        </h2>
      </div>
    </Link>
  );
}

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
          <Link
            href="https://drive.google.com/file/d/136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link resume-link"
            aria-label="Open Kristi's resume in a new tab"
          >
            <HighlightText>Resume ↗</HighlightText>
          </Link>
          <a href="#contact">
            <HighlightText>Contact</HighlightText>
          </a>
        </nav>
      </header>

      <section className="home-editorial" id="work" aria-labelledby="intro-title">
        <aside className="bio-column">
          <div className="intro-block">
            <h1 id="intro-title">
              <HighlightText className="intro-emphasis" persistent>
                Kristi
              </HighlightText>{" "}
              is a{" "}
              <HighlightText className="intro-emphasis" persistent>
                Product Designer
              </HighlightText>{" "}
              passionate about designing{" "}
              <HighlightText className="intro-emphasis">
                human-centered AI experiences
              </HighlightText>
              . She combines{" "}
              <HighlightText className="intro-emphasis">
                user research
              </HighlightText>
              ,{" "}
              <HighlightText className="intro-emphasis">
                interaction design
              </HighlightText>
              , and <HighlightText className="intro-emphasis">AI</HighlightText>{" "}
              to create{" "}
              <HighlightText className="intro-emphasis">
                intuitive products
              </HighlightText>{" "}
              that help people make{" "}
              <HighlightText className="intro-emphasis">
                confident decisions
              </HighlightText>
              .
            </h1>
            <p className="intro-status">
              <span aria-hidden="true" />
              Recent graduate from the University of Washington · B.S. in Human
              Centered Design &amp; Engineering
            </p>
          </div>
        </aside>
        <div className="project-list" aria-label="Featured projects">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <article
            className="project-card project-card--placeholder"
            aria-label="Coming soon project"
          >
            <div className="project-image coming-soon-visual" aria-hidden="true">
              <div className="placeholder-graphic">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="project-card-header">
              <p>Coming Soon</p>
              <h2>
                <HighlightText>New Project</HighlightText>
              </h2>
            </div>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <p>I&apos;m currently in Seattle.</p>
        <SeattleStatus />
      </footer>
    </main>
  );
}
