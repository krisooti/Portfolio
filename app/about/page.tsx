import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import ProfileCarousel from "./ProfileCarousel";
import { StickyNoteStack } from "./StickyNoteStack";
import { SiteNav } from "../SiteNav";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const toolkitGroups = [
  {
    title: "Research",
    tools: ["User Interviews", "Usability Testing", "Affinity Mapping", "Thematic Analysis"],
    note: "daily ->",
  },
  {
    title: "Design",
    tools: ["Figma", "Prototyping", "Design Systems", "Interaction Design"],
  },
  {
    title: "Build",
    tools: ["React", "Next.js", "HTML/CSS"],
    note: "currently building",
  },
  {
    title: "AI",
    tools: ["AI Prototyping", "Prompt Engineering", "AI-Assisted Workflows"],
    note: "exploring lately",
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
      <SiteNav />

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
                <h3>
                  <span>Design Toolbox</span>
                </h3>
                {toolkitGroups.map((group) => (
                  <section className="toolkit-note-section" key={group.title}>
                    <div className="toolkit-note-heading">
                      <h4>{group.title}</h4>
                      {group.note ? <span>{group.note}</span> : null}
                    </div>
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
