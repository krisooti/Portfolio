import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import ProfileCarousel from "./ProfileCarousel";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const designValues = [
  {
    number: "01",
    title: "Empathy",
    body: "Understanding people before solving problems.",
  },
  {
    number: "02",
    title: "Curiosity",
    body: 'Always asking "Why?" before jumping into solutions.',
  },
  {
    number: "03",
    title: "Craft",
    body: "Sweating the small details that make experiences feel effortless.",
  },
];

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

const funFacts = [
  { icon: "coffee", label: "Coffee over tea" },
  { icon: "perfume", label: "Floral perfumes" },
  { icon: "korea", label: "Korean" },
  { icon: "pin", label: "Based in Seattle" },
  { icon: "plane", label: "Loves traveling" },
  { icon: "sun", label: "Golden hour" },
  { icon: "paw", label: "Dog person" },
  { icon: "cursor", label: "Building side projects" },
  { icon: "camera", label: "Enjoys photography" },
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

        <AboutSection tag="DESIGN VALUES" title="The principles I return to.">
          <div className="design-values-grid">
            {designValues.map((value) => (
              <article className="design-value-card" key={value.title}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </AboutSection>

        <AboutSection tag="TOOLS" title="How I shape ideas into products.">
          <div className="toolkit-grid">
            {toolkitGroups.map((group) => (
              <article className="toolkit-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AboutSection>

        <AboutSection tag="FUN FACTS" title="A few things about me.">
          <div className="fun-fact-tags" aria-label="Fun facts">
            {funFacts.map((fact) => (
              <span className="fun-fact-tag" key={fact.label}>
                <span
                  className={`mono-icon mono-icon--${fact.icon}`}
                  aria-hidden="true"
                />
                <HighlightText>{fact.label}</HighlightText>
              </span>
            ))}
          </div>
        </AboutSection>
      </article>
    </main>
  );
}
