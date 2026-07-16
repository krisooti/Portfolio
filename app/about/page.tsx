import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import { AboutSeattleTime } from "./AboutSeattleTime";
import ProfileCarousel from "./ProfileCarousel";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const perfumeCollection = [
  {
    brand: "Diptyque",
    name: "Do Son",
    notes: ["Tuberose", "Orange Blossom", "Jasmine"],
  },
  {
    brand: "Jo Malone",
    name: "Peony & Blush Suede",
    notes: ["Peony", "Red Apple", "Suede"],
  },
  {
    brand: "Byredo",
    name: "Blanche",
    notes: ["Aldehyde", "Rose", "Musk"],
  },
];

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
  "☕ Coffee over tea",
  "🌸 Floral perfumes",
  "🇰🇷 Korean",
  "📍 Seattle",
  "✈️ Loves traveling",
  "🌅 Golden hour",
  "🐶 Dog person",
  "💻 Loves building side projects",
  "📷 Enjoys taking photos",
];

const currentlyItems = [
  "📍 Seattle",
  "🎓 Recent University of Washington HCDE Graduate",
  "💻 Building new UX case studies",
  "🌱 Looking for Product Design & UX opportunities",
  "☕ Probably working from a café",
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

        <AboutSection tag="OUTSIDE OF DESIGN" title="Small rituals that keep me curious.">
          <div className="about-editorial-grid">
            <article className="about-editorial-card">
              <div className="about-card-media cafe-carousel" aria-label="Favorite café photos">
                <span>Café window</span>
                <span>Latte notes</span>
                <span>Quiet corner</span>
              </div>
              <h3>☕ Cafés</h3>
              <p>
                I love exploring independent cafés and trying different coffees.
                Many of my best ideas begin with a quiet corner, a notebook, and
                a good latte.
              </p>
            </article>

            <article className="about-editorial-card about-editorial-card--wide">
              <div className="perfume-collection" aria-label="Favorite perfume collection">
                {perfumeCollection.map((perfume) => (
                  <div className="perfume-item" key={perfume.name}>
                    <div className="perfume-bottle" aria-hidden="true">
                      <span />
                    </div>
                    <div>
                      <p>{perfume.brand}</p>
                      <h4>{perfume.name}</h4>
                      <ul>
                        {perfume.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <h3>🌸 Perfumes</h3>
              <p>
                Collecting fragrances has taught me that thoughtful details
                create memorable experiences—just like great product design.
              </p>
            </article>

            <article className="about-editorial-card">
              <div className="about-card-media dog-memory" aria-label="Dog photo placeholder">
                <span>Hodoo photo</span>
              </div>
              <h3>🐶 Dogs</h3>
              <p>
                My dogs are my favorite coworkers during late-night design
                sessions. They remind me to take breaks, enjoy the little
                moments, and keep things playful.
              </p>
            </article>
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
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </AboutSection>

        <AboutSection tag="CURRENTLY" title="What I'm up to right now.">
          <div className="currently-card">
            <ul>
              {currentlyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <span>Seattle time</span>
              <AboutSeattleTime />
            </p>
          </div>
        </AboutSection>
      </article>
    </main>
  );
}
