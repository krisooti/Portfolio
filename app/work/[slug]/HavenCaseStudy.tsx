import Link from "next/link";
import { HighlightText } from "../../HighlightText";
import { CaseStudySection } from "../../../components/project/CaseStudySection";
import { ImageBlock } from "../../../components/project/ImageBlock";
import { InsightCard } from "../../../components/project/InsightCard";
import { ProcessStep } from "../../../components/project/ProcessStep";
import { ProjectHero } from "../../../components/project/ProjectHero";
import { ResultsGrid } from "../../../components/project/ResultsGrid";
import { ScreenFeature } from "../../../components/project/ScreenFeature";
import { SectionNavigation } from "../../../components/project/SectionNavigation";
import type {
  CaseStudySectionLink,
  Feature,
  MetadataItem,
  ProjectImage,
} from "../../../components/project/projectTypes";

const havenSections: CaseStudySectionLink[] = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "problem", label: "Problem", number: "02" },
  { id: "research", label: "Research", number: "03" },
  { id: "design-process", label: "Design Process", number: "04" },
  { id: "final-solution", label: "Final Solution", number: "05" },
  { id: "results-learnings", label: "Results & Learnings", number: "06" },
];

const havenMockup: ProjectImage = {
  src: "/images/haven/haven-desktop-mockup.png",
  alt: "Haven interior designer matching homepage displayed on a desktop monitor",
  width: 1484,
  height: 1060,
  fit: "contain",
};

const havenMetadata: MetadataItem[] = [
  { label: "Duration", value: "8 Weeks" },
  { label: "Role", value: "UX Research, Product Design, Prototyping" },
  { label: "Team", value: "Solo concept project" },
  { label: "Project Type", value: "AI matching platform" },
];

const painPoints = [
  "Difficult to find designers who match personal style.",
  "Hard to compare expertise, budget, and availability.",
  "Limited trust before contacting a designer.",
];

const methods = [
  "User Interviews",
  "Competitive Analysis",
  "Affinity Mapping",
  "User Flow",
  "Usability Testing",
];

const insights = [
  {
    title: "Style-Based Matching",
    body: "People wanted recommendations to start from visual taste, not just location or budget.",
  },
  {
    title: "Clear Recommendation Reasons",
    body: "Users felt more confident when the interface explained why each designer fit their preferences.",
  },
  {
    title: "Control Before Commitment",
    body: "Saving, comparing, and browsing helped the experience feel low-pressure before outreach.",
  },
];

const processSteps = [
  {
    title: "Research",
    body: "I explored how people currently find interior designers and where confidence breaks down.",
    caption: "Interview notes and discovery questions",
  },
  {
    title: "Synthesis",
    body: "Patterns were grouped around style fit, trust signals, budget clarity, and decision anxiety.",
    caption: "Affinity map and opportunity areas",
  },
  {
    title: "Ideation",
    body: "Early concepts focused on visual preference discovery and explainable recommendations.",
    caption: "Concept sketches for matching flows",
  },
  {
    title: "Wireframes",
    body: "I mapped the journey from style browsing to designer comparison and messaging.",
    caption: "Low-fidelity user flow and screen structure",
  },
  {
    title: "Prototype",
    body: "The prototype brought together style selection, AI room visualization, and designer matching.",
    caption: "Interactive prototype sequence",
  },
  {
    title: "Testing",
    body: "Usability testing clarified where users needed stronger hierarchy and recommendation context.",
    caption: "Task-based testing notes",
  },
  {
    title: "Iteration",
    body: "I refined designer cards, comparison details, and the messaging path based on feedback.",
    caption: "Final iteration priorities",
  },
];

const features: Feature[] = [
  {
    title: "Style Discovery",
    body: "Users browse visual styles and identify preferences before receiving recommendations.",
    rationale:
      "Starting with imagery helps users express taste without needing design vocabulary.",
    image: havenMockup,
  },
  {
    title: "AI Room Visualization",
    body: "Users generate a room visualization based on their selected style and home goals.",
    rationale:
      "The visualization makes abstract preferences feel tangible before contacting a designer.",
  },
  {
    title: "Designer Matching",
    body: "Users receive designer recommendations based on style, budget, and location.",
    rationale:
      "Matching criteria are visible so recommendations feel guided rather than mysterious.",
    image: havenMockup,
  },
  {
    title: "Designer Profiles",
    body: "Profiles organize expertise, tags, portfolio work, budget fit, and availability.",
    rationale:
      "A consistent profile structure makes designers easier to evaluate and compare.",
  },
  {
    title: "Compare and Save",
    body: "Users can compare multiple designers and save favorites while exploring options.",
    rationale:
      "Saving reduces pressure and supports a more considered decision-making process.",
  },
  {
    title: "Messaging",
    body: "Users contact designers directly before committing to a project.",
    rationale:
      "Messaging bridges discovery and action while preserving user control.",
  },
];

const results = [
  "Simplified designer discovery.",
  "Improved clarity around fit.",
  "Supported low-pressure exploration.",
  "Made recommendations easier to understand.",
];

const learnings = [
  "AI should support decisions, not make them for users.",
  "Visual preference tools reduce ambiguity.",
  "Early usability testing reveals unclear assumptions.",
  "Strong hierarchy makes complex products easier to understand.",
];

export function HavenCaseStudy() {
  return (
    <>
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <HighlightText>Kristi Kim</HighlightText>
        </Link>
        <nav className="nav-links">
          <Link href="/#work">
            <HighlightText>Work</HighlightText>
          </Link>
          <Link href="/about">
            <HighlightText>About</HighlightText>
          </Link>
          <Link href="mailto:krisooti08@gmail.com">
            <HighlightText>Contact</HighlightText>
          </Link>
        </nav>
      </header>

      <article className="project-detail-shell">
        <SectionNavigation sections={havenSections} />

        <div className="project-detail-main">
          <Link href="/#work" className="back-link">
            <HighlightText>Back to work</HighlightText>
          </Link>
          <ProjectHero
            title="Haven"
            subtitle="AI-Powered Interior Designer Matching Platform"
            summary="A refined matching platform that helps people discover interior designers aligned with their taste, budget, and location."
            metadata={havenMetadata}
            image={havenMockup}
          />

          <CaseStudySection
            id="overview"
            eyebrow="Overview"
            number="01"
            title="Helping people find the right designer through visual preference and clear fit."
          >
            <div className="project-detail-copy-grid">
              <p>
                Haven helps homeowners and renters find interior designers whose
                work aligns with their personal style, project needs, and budget.
                My role covered research synthesis, product strategy,
                interaction design, visual direction, and prototyping.
              </p>
              <p>
                The core contribution was shaping a calm discovery flow that
                turns vague taste preferences into understandable designer
                recommendations.
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="problem"
            eyebrow="Problem"
            number="02"
            title="Finding a designer can feel too subjective, scattered, and high commitment."
          >
            <div className="project-callout">
              How might we help people confidently find an interior designer who
              fits their taste, budget, and project goals?
            </div>
            <div className="project-card-grid">
              {painPoints.map((painPoint, index) => (
                <InsightCard
                  key={painPoint}
                  title={String(index + 1).padStart(2, "0")}
                  body={painPoint}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="research"
            eyebrow="Research"
            number="03"
            title="Research showed that visual taste and trust signals drive confidence."
          >
            <div className="project-method-grid">
              {methods.map((method) => (
                <article className="project-method-card" key={method}>
                  {method}
                </article>
              ))}
            </div>
            <div className="project-card-grid">
              {insights.map((insight) => (
                <InsightCard
                  key={insight.title}
                  title={insight.title}
                  body={insight.body}
                />
              ))}
            </div>
            <div className="project-artifact-grid">
              {[
                "Affinity map",
                "Interview notes",
                "User journey",
                "Competitive analysis",
              ].map((artifact) => (
                <ImageBlock key={artifact} caption={artifact} tone="artifact" />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="design-process"
            eyebrow="Design Process"
            number="04"
            title="The design moved from broad discovery patterns to a focused matching journey."
          >
            <div className="project-process-list">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  number={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  body={step.body}
                  caption={step.caption}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="final-solution"
            eyebrow="Final Solution"
            number="05"
            title="A visual matching experience that makes designer fit easier to understand."
          >
            <div className="project-feature-stack">
              {features.map((feature, index) => (
                <ScreenFeature
                  key={feature.title}
                  feature={feature}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection
            id="results-learnings"
            eyebrow="Results & Learnings"
            number="06"
            title="The final direction made designer discovery feel calmer and more explainable."
          >
            <ResultsGrid results={results} learnings={learnings} />
          </CaseStudySection>

          <section className="next-section">
            <p className="eyebrow">Next</p>
            <Link href="/#work">
              <HighlightText>Return to selected work</HighlightText>
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
