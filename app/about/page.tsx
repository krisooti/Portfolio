import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import ProfileCarousel from "./ProfileCarousel";
import { StickyNoteStack } from "./StickyNoteStack";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const toolkitGroups = [
  {
    title: "Design",
    tools: ["Figma", "FigJam", "Framer"],
  },
  {
    title: "Development",
    tools: ["React", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Research",
    tools: ["User Interviews", "Usability Testing", "Affinity Mapping"],
  },
  {
    title: "AI",
    tools: ["ChatGPT", "Claude", "Cursor", "GitHub Copilot"],
  },
];

function AboutSection({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="about-story-section">
      <CategoryTag>{tag}</CategoryTag>
      <h2>
        <HighlightText>{title}</HighlightText>
      </h2>
      {children}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <HighlightText>Kristi</HighlightText>
          <span className="flower-mark" aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          <Link href="/#work">
            <HighlightText>Work</HighlightText>
          </Link>
          <Link href="/about">
            <HighlightText>About</HighlightText>
          </Link>
          <a href="mailto:krisooti08@gmail.com">
            <HighlightText>Contact</HighlightText>
          </a>
        </nav>
      </header>

      <article className="about-page">
        <ProfileCarousel />

        <AboutSection tag="ABOUT ME" title="Designing with curiosity and empathy.">
          <div className="about-story-copy">
            <p>
              My interest in design began from wanting to understand
              people—their behaviors, frustrations, and everyday experiences.
              Through UX, I discovered that the best products aren&apos;t just
              functional—they make people feel understood.
            </p>
            <p>
              Whether I&apos;m conducting user research, prototyping ideas, or
              refining interaction details, I enjoy turning complex problems
              into experiences that feel simple, intuitive, and human.
            </p>
          </div>
        </AboutSection>

        <section className="about-story-section about-process-tools-section">
          <div className="about-process-tools-row">
            <div className="thought-process-column">
              <h2>
                <HighlightText>My Design Desk</HighlightText>
              </h2>
              <p className="design-desk-subtitle">
                Little reminders I keep while designing.
              </p>
              <StickyNoteStack />
            </div>

            <div className="toolkit-column">
              <h2>
                <HighlightText>How I shape ideas into products.</HighlightText>
              </h2>
              <div className="toolkit-notebook">
                <div className="toolkit-doodle toolkit-doodle--sparkle" aria-hidden="true" />
                <div className="toolkit-doodle toolkit-doodle--flower" aria-hidden="true" />
                <div className="toolkit-doodle toolkit-doodle--pencil" aria-hidden="true" />
                <h3>Design Toolbox</h3>
                {toolkitGroups.map((group) => (
                  <section className="toolkit-note-section" key={group.title}>
                    <h4>{group.title}</h4>
                    <ul>
                      {group.tools.map((tool) => (
                        <li key={tool}>
                          <HighlightText>{tool}</HighlightText>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
