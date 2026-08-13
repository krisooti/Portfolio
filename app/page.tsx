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

function ProjectCard({ project }: { project: Project }) {
  const displayTitle =
    project.slug === "tmind-ai" ? "AI-Powered Supervisor Matching System, Tmind AI" : project.title;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card group relative grid h-full w-full grid-cols-1 content-start gap-[18px] bg-transparent transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none"
      aria-label={`Open ${project.title} case study`}
      data-gsap-card
    >
      <div
        className={`project-image relative aspect-[4/3] w-full overflow-hidden bg-transparent p-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${project.imageClass}`}
      >
        {project.slug === "tmind-ai" ? (
          <div className="tmind-thumbnail">
            <div className="tmind-gradient" aria-hidden="true" />
            <h3 className="tmind-title">Tmind AI</h3>
          </div>
        ) : project.cardImage ? (
          <img
            className="block h-full w-full object-contain object-center transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015] group-focus-visible:scale-[1.015]"
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
      <div className="grid content-center gap-[7px] p-0">
        <p className="m-0 text-[11px] font-light uppercase leading-[1.3] tracking-normal text-[#8a8583]">
          {project.category}
        </p>
        <h2 className="m-0 font-sans text-[20px] font-medium leading-[1.15] tracking-normal text-[#343434]">
          <HighlightText>{displayTitle}</HighlightText>
        </h2>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav home />

      <section
        className="mx-auto min-h-[clamp(620px,86vh,900px)] w-full max-w-[1400px] px-8 pb-[clamp(64px,8vh,96px)] pt-[140px] max-[820px]:min-h-[clamp(540px,78vh,700px)] max-[560px]:min-h-0 max-[560px]:px-[22px] max-[560px]:pb-[72px] max-[560px]:pt-[124px]"
        aria-labelledby="hero-title"
        data-home-hero
      >
        <div className="grid grid-cols-12 items-start gap-[clamp(80px,7vw,120px)] max-[980px]:gap-16 max-[820px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-8">
          <h1
            aria-label="Kristi is an interdisciplinary product designer, thinker, and creator who sometimes codes"
            id="hero-title"
            className="col-span-5 mb-0 mt-0 font-serif text-[36px] font-medium leading-[1.05] tracking-[-0.03em] text-[#171717] max-[820px]:col-span-1 max-[560px]:col-span-1"
            data-home-hero-title
          >
            <span className="block">
              Kristi is an interdisciplinary product designer, thinker, and{" "}
              <span className="inline-block whitespace-nowrap">
                creator who <LoopingTypedPhrase />
              </span>
            </span>
          </h1>

          <p
            className="col-start-7 col-end-13 mb-0 mt-8 w-full max-w-[560px] whitespace-nowrap text-left font-mono text-[14px] font-light uppercase leading-[1.55] tracking-[0.08em] text-[#6f6a67] max-[820px]:col-start-2 max-[820px]:col-end-3 max-[820px]:mt-12 max-[820px]:whitespace-normal max-[600px]:col-span-1 max-[560px]:col-start-auto max-[560px]:mt-4"
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
        className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-start gap-[clamp(54px,7vw,92px)] px-8 pb-[104px] pt-0 max-[980px]:gap-[clamp(40px,6vw,64px)] max-[560px]:gap-[48px] max-[560px]:px-[22px] max-[560px]:pb-[76px]"
        id="work"
        aria-label="Featured projects"
        data-gsap-section
      >
        <div
          className="grid min-w-0 grid-cols-2 items-stretch gap-[clamp(22px,2.4vw,36px)] max-[760px]:grid-cols-1 max-[560px]:gap-7"
          data-gsap-body
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

    </main>
  );
}
