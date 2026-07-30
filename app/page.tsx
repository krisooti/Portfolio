import type { Metadata } from "next";
import Link from "next/link";
import { HighlightText } from "./HighlightText";
import { type Project, projects } from "./projects";
import { SeattleStatus } from "./SeattleStatus";
import { SiteNav } from "./SiteNav";

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
      className="project-card group relative grid h-full grid-cols-1 content-start gap-[18px] rounded-[18px] bg-[var(--surface-neutral)] p-[clamp(18px,2vw,28px)] shadow-[0_4px_18px_rgba(190,190,190,0.035)] transition-[background-color,box-shadow,transform] duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[var(--surface-neutral-hover)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] focus-visible:-translate-y-1 focus-visible:bg-[var(--surface-neutral-hover)] focus-visible:shadow-[0_10px_28px_rgba(0,0,0,0.06)] focus-visible:outline-none max-[560px]:w-[min(100%,460px)]"
      aria-label={`Open ${project.title} case study`}
    >
      <div
        className={`project-image relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-transparent p-0 transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${project.imageClass}`}
      >
        {project.cardImage ? (
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
        <h2 className="m-0 font-serif text-[clamp(22px,2.1vw,26px)] font-normal leading-[1.15] tracking-normal text-[#343434] max-[560px]:text-2xl">
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
        className="mx-auto grid min-h-screen w-[min(100%,1440px)] grid-cols-1 items-start gap-[clamp(54px,7vw,92px)] px-[clamp(24px,5vw,72px)] pb-[104px] pt-[124px] max-[980px]:gap-[clamp(40px,6vw,64px)] max-[980px]:pt-[116px] max-[560px]:gap-[48px] max-[560px]:px-[18px] max-[560px]:pb-[76px] max-[560px]:pt-[126px]"
        id="work"
        aria-labelledby="intro-title"
      >
        <aside className="h-fit pt-0.5 max-[560px]:pt-0">
          <div className="min-w-0 text-left">
            <h1
              id="intro-title"
              className="m-0 max-w-[560px] text-lg font-normal leading-[1.5] tracking-[-0.02em] text-[#6f6f6f]"
            >
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
            <p className="intro-status inline-flex max-w-[560px] items-center gap-2 text-xs font-light leading-[1.6] text-[#8a8583] max-[560px]:items-start">
              <span
                className="size-1.5 flex-none bg-[#63a66f] shadow-[0_0_0_3px_rgba(99,166,111,0.12)]"
                aria-hidden="true"
              />
              Recent graduate from the University of Washington · B.S. in Human
              Centered Design &amp; Engineering
            </p>
          </div>
        </aside>
        <div
          className="grid min-w-0 grid-cols-3 items-stretch gap-8 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:justify-items-center max-[560px]:gap-7"
          aria-label="Featured projects"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-center gap-[18px] border-t border-[var(--line)] px-[clamp(20px,5vw,64px)] py-7 text-xs font-light text-[#6b6664] max-[560px]:flex-col max-[560px]:gap-2 max-[560px]:text-center">
        <p className="m-0">I&apos;m currently in Seattle.</p>
        <SeattleStatus />
      </footer>
    </main>
  );
}
