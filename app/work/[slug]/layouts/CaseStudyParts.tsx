import type { ReactNode } from "react";
import Link from "next/link";
import { HighlightText } from "../../../HighlightText";
import { SiteNav } from "../../../SiteNav";
import { CaseStudyNav } from "../CaseStudyNav";
import type { Project } from "../../../projects";
import type { CaseStudyContent, CaseVisualImage } from "../caseStudies/types";
import { ViewportVideo } from "./ViewportVideo";

export type ProjectCaseStudyProps = {
  project: Project;
  content: CaseStudyContent;
};

export function CaseSection({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="case-section scroll-mt-[120px] border-t border-[#e6dfdb] py-14 md:py-20"
      id={id}
    >
      <header className="mb-10 max-w-[760px]">
        <p className="mb-3 mt-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
          {label}
        </p>
        <h2 className="m-0 font-serif text-[clamp(28px,4vw,44px)] font-medium leading-[1.15] tracking-[-0.02em] text-[#171717]">
          {title}
        </h2>
      </header>
      <div className="w-full">{children}</div>
    </section>
  );
}

export function CaseVisual({
  label,
  note,
  image,
}: {
  label: string;
  note?: string;
  image?: CaseVisualImage;
}) {
  return (
    <figure className="my-12 w-full">
      {image ? (
        <img
          className="block h-auto w-full object-contain"
          src={image.src}
          alt={image.alt}
        />
      ) : (
        <div className="flex min-h-[360px] items-center justify-center border border-dashed border-[#d8d2ce] bg-[#faf8f6] px-8 text-center">
          <div className="max-w-[520px]">
            <p className="m-0 font-serif text-2xl text-[#24201e]">{label}</p>
            {note ? (
              <p className="mt-3 text-sm font-light leading-[1.6] text-[#716b67]">
                {note}
              </p>
            ) : null}
          </div>
        </div>
      )}
      <figcaption className="mt-3 text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
        {label}
      </figcaption>
    </figure>
  );
}

export function CaseVideo({
  caption,
  className = "",
  poster,
  src,
}: {
  caption: string;
  className?: string;
  poster?: string;
  src: string;
}) {
  const videoType = src.endsWith(".mp4")
    ? "video/mp4"
    : src.endsWith(".mov")
      ? "video/quicktime"
      : undefined;

  return (
    <figure className={`my-14 w-full ${className}`}>
      <div className="w-full overflow-hidden rounded-2xl border border-[#e6dfdb] bg-[#f7f4f1] shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
        <div className="flex items-center justify-between border-b border-[#e6dfdb] bg-[#fffdfc] px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e7b7c4]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ddd8d5]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ddd8d5]" />
          </div>
          <span className="text-[11px] font-light uppercase tracking-[0.1em] text-[#8a8380]">
            Prototype Demo
          </span>
        </div>
        <div className="bg-[#ede9e5] p-[clamp(10px,2vw,20px)]">
          <ViewportVideo poster={poster} src={src} videoType={videoType} />
        </div>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center gap-3 text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
        <span>{caption}</span>
        <a
          className="border-b border-current text-[#6b6664] transition-colors duration-200 hover:text-[#171717]"
          href={src}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open demo
        </a>
      </figcaption>
    </figure>
  );
}

export function CaseStudyShell({
  children,
  sections,
}: {
  children: ReactNode;
  sections: Array<{ id: string; label: string; number: string }>;
}) {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <CaseStudyNav sections={sections} />
      {children}
    </main>
  );
}

export function BackToWorkLink() {
  return (
    <Link
      href="/#work"
      className="mb-14 inline-flex w-max border-b border-current text-[13px] font-light text-[#6b6664]"
    >
      <HighlightText>Back to work</HighlightText>
    </Link>
  );
}

export function ProjectCaseIntro({
  project,
  content,
}: ProjectCaseStudyProps) {
  const projectTags =
    project.slug === "tmind-ai"
      ? ["UX Research", "Product Design", "AI", "Healthcare"]
      : [];

  return (
    <header className="pb-20" id="overview">
      <p className="mb-4 mt-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
        {project.category}
      </p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <h1 className="m-0 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#171717]">
          {project.title}
        </h1>

        {projectTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {projectTags.map((tag) => (
              <span
                className="border border-[#d8d3d0] px-3 py-1 text-[11px] font-light uppercase tracking-[0.08em] text-[#74706e]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <p className="mt-8 max-w-[760px] text-[18px] font-light leading-[1.7] text-[#5d5856]">
        {project.summary}
      </p>

      <dl className="mt-12 grid border-y border-[#e6dfdb] py-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Duration", content.meta.duration],
          ["Role", content.meta.role],
          ["Team", content.meta.team],
          ["Sponsor", content.meta.sponsor],
        ].map(([label, value]) => (
          <div
            className="border-b border-[#e6dfdb] py-5 sm:border-b-0 sm:border-r sm:px-5 first:pl-0 last:border-r-0"
            key={label}
          >
            <dt className="mb-2 text-[11px] font-light uppercase tracking-[0.12em] text-[#9c9490]">
              {label}
            </dt>
            <dd className="m-0 text-[14px] font-light leading-[1.6] text-[#272321]">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <CaseVisual
        image={project.cardImage}
        label={`${project.title} product mockup`}
      />

      <div className="mt-12 flex max-w-[900px] flex-col gap-6 md:flex-row md:items-start">
        {content.overviewLogo ? (
          <img
            className="h-auto w-[88px] shrink-0 object-contain"
            src={content.overviewLogo.src}
            alt={content.overviewLogo.alt}
          />
        ) : null}

        <p className="m-0 max-w-[760px] text-[16px] font-light leading-[1.8] text-[#5d5856]">
          {project.intro} {content.overviewContribution}
        </p>
      </div>
    </header>
  );
}

export function ReturnToWorkSection() {
  return (
    <section className="py-14 md:py-18">
      <p className="eyebrow">Next</p>
      <Link href="/#work">
        <HighlightText>Return to selected work</HighlightText>
      </Link>
    </section>
  );
}

export function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <section className="px-[clamp(20px,5vw,64px)]">
        <p className="eyebrow">Case study</p>
        <h1>
          <HighlightText>Project not found.</HighlightText>
        </h1>
        <Link href="/#work" className="text-link">
          <HighlightText>Back to work</HighlightText>
        </Link>
      </section>
    </main>
  );
}
