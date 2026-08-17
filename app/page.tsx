import type { Metadata } from "next";
import Link from "next/link";
import { HighlightText } from "./HighlightText";
import { LoopingTypedPhrase } from "./LoopingTypedPhrase";
import { type Project, projects } from "./projects";
import { SiteNav } from "./SiteNav";

export const metadata: Metadata = {
  title: "Kristi Kim UX Portfolio",
  description:
    "A simple, minimal UX portfolio with centered project cards and a clean modern aesthetic.",
};

const featuredProjectOrder = ["tmind-ai", "Leafy", "Haven"];
const featuredProjects = featuredProjectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

function CollaborateCard() {
  return (
    <a
      href="mailto:krisooti08@gmail.com"
      className="project-card project-card--glass group relative grid h-full w-full grid-cols-1 content-start focus-visible:outline-none"
      aria-label="This could be our project together"
      data-gsap-card
      data-project-card
    >
      <div className="project-image project-card__image relative aspect-[4/3] w-full overflow-hidden p-0">
        <div
          className="flex h-full w-full items-center justify-center bg-[rgba(255,255,255,0.35)]"
          aria-hidden="true"
        />
      </div>
      <div className="project-card__content">
        <h2 className="project-card__title">
          <HighlightText>this could be our project together...</HighlightText>
        </h2>
        <p className="project-card__description">
          let&apos;s build something together
        </p>
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const displayTitle =
    project.slug === "tmind-ai"
      ? "AI-Powered Supervisor Matching System"
      : project.title;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card project-card--glass group relative grid h-full w-full grid-cols-1 content-start focus-visible:outline-none"
      aria-label={`Open ${project.title} case study`}
      data-gsap-card
      data-project-card
    >
      <div
        className={`project-image project-card__image relative aspect-[4/3] w-full overflow-hidden p-0 ${project.imageClass}`}
      >
        {project.slug === "tmind-ai" ? (
          <div className="tmind-thumbnail">
            <div className="tmind-gradient" aria-hidden="true" />
            <h3 className="tmind-title">Tmind AI</h3>
          </div>
        ) : project.cardImage ? (
          <img
            className="block h-full w-full object-cover object-center"
            src={project.cardImage.src}
            alt={project.cardImage.alt}
          />
        ) : (
          <div className="image-system" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
      <div className="project-card__content">
        <p className="project-card__category">
          <HighlightText>{project.category}</HighlightText>
        </p>
        <h2 className="project-card__title">
          <HighlightText>{displayTitle}</HighlightText>
        </h2>
        <p className="project-card__description">{project.overview}</p>
        <ul className="project-card__supporting">
          {project.tags.slice(0, 3).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <SiteNav home />

      <section
        className="mx-auto w-full max-w-[1400px] px-8 pt-[140px] pb-[72px] max-[560px]:px-[22px] max-[560px]:pb-[56px] max-[560px]:pt-[120px]"
        aria-labelledby="hero-title"
        data-home-hero
      >
        <div className="flex w-full flex-col items-start gap-8 text-left">
          <h1
            aria-label="Kristi designs for people, obsesses over the details, and occasionally turns her ideas into code"
            id="hero-title"
            className="home-hero-title mb-0 mt-0 w-fit max-w-[860px]"
            data-home-hero-title
          >
            Kristi designs for people, obsesses over the details, and occasionally{" "}
            <LoopingTypedPhrase key="turns-her-ideas-into-code" />
          </h1>

          <p
            className="home-hero-meta mb-0 mt-0"
            data-home-about-meta
          >
            Born in South Korea
            <br />
            Studied at the University of Washington
            <br />
            Currently based in Seattle, WA
          </p>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-[1400px] px-8 pb-[104px] pt-0 max-[560px]:px-[22px] max-[560px]:pb-[76px]"
        id="work"
        aria-label="Featured projects"
        data-gsap-section
        data-projects-section
      >
        <div
          className="grid min-w-0 grid-cols-2 items-stretch gap-8 max-[760px]:grid-cols-1 max-[560px]:gap-6"
          data-gsap-body
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <CollaborateCard />
        </div>
      </section>
    </main>
  );
}
