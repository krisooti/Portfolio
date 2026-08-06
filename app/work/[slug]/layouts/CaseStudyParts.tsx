import type { ReactNode } from "react";
import Link from "next/link";

import { HighlightText } from "../../../HighlightText";
import { SiteNav } from "../../../SiteNav";
import { CaseStudyNav } from "../CaseStudyNav";
import type { Project } from "../../../projects";
import type {
  CaseStudyContent,
  CaseVisualImage,
} from "../caseStudies/types";
import { ViewportVideo } from "./ViewportVideo";

export type ProjectCaseStudyProps = {
  project: Project;
  content: CaseStudyContent;
};

const CENTERED_CONTENT_CLASS =
  "mx-auto w-full max-w-[960px] text-left";

const EDITORIAL_TEXT_CLASS =
  CENTERED_CONTENT_CLASS;

export function CaseSection({
  category,
  id,
  label,
  title,
  titleAs = "heading",
  titleClassName,
  children,
}: {
  id: string;
  category?: string;
  label?: string;
  title: string;
  titleAs?: "heading" | "body";
  titleClassName?: string;
  children: ReactNode;
}) {
  const sectionLabel = category ?? label;

  return (
    <section
      id={id}
      className="case-section scroll-mt-[120px] py-[60px]"
      data-gsap-section
    >
      <div className={CENTERED_CONTENT_CLASS}>
        <header className="mb-8 w-full" data-gsap-header>
          {sectionLabel ? (
            <p className="mb-3 mt-0 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
              {sectionLabel}
            </p>
          ) : null}

          {titleAs === "body" ? (
            <p
              className={
                titleClassName ??
                "m-0 text-[16px] font-light leading-[1.7] text-[#5d5856]"
              }
            >
              {title}
            </p>
          ) : (
            <h2
              className={
                titleClassName ??
                "m-0 font-serif text-[clamp(26px,3vw,32px)] font-medium leading-[1.18] tracking-[-0.02em] text-[#171717]"
              }
            >
              {title}
            </h2>
          )}
        </header>

        <div className="w-full text-left" data-gsap-body>
          {children}
        </div>
      </div>
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
    <figure className="my-12 w-full" data-gsap-image>
      {image ? (
        <img
          className="block h-auto w-full object-contain"
          src={image.src}
          alt={image.alt}
        />
      ) : (
        <div className="flex min-h-[360px] items-center justify-center border border-dashed border-[#d8d2ce] bg-[#faf8f6] px-8 text-center">
          <div className="w-full">
            <p className="m-0 font-serif text-2xl text-[#24201e]">
              {label}
            </p>

            {note ? (
              <p className="mb-0 mt-3 text-[16px] font-light leading-[1.7] text-[#716b67]">
                {note}
              </p>
            ) : null}
          </div>
        </div>
      )}

      <figcaption className="mt-3 w-full text-left text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
        {label}
      </figcaption>
    </figure>
  );
}

export function CaseInsightPanel({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  return (
    <aside className="mt-10 w-full border-t border-[#e6dfdb] pt-6">
      <h3 className="m-0 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.01em] text-[#171717]">
        <HighlightText>{title}</HighlightText>
      </h3>

      <ol className="mt-5 grid list-none gap-4 p-0 md:grid-cols-3">
        {items.map((item, index) => (
          <li
            key={item}
            className="grid grid-cols-[36px_minmax(0,1fr)] gap-3 text-left text-[16px] font-light leading-[1.65] text-[#5d5856]"
          >
            <span className="font-serif text-base font-medium text-[#aaa29e]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span>{item}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function CaseSolutionFeature({
  image,
  rationale,
  title,
}: {
  image?: CaseVisualImage;
  rationale: string;
  title: string;
}) {
  return (
    <article className="w-full">
      <CaseVisual image={image} label={title} />

      <div className={EDITORIAL_TEXT_CLASS}>
        <h3 className="m-0 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.01em] text-[#171717]">
          <HighlightText>{title}</HighlightText>
        </h3>

        <p className="mb-0 mt-3 text-[16px] font-light leading-[1.7] text-[#5d5856]">
          {rationale}
        </p>
      </div>
    </article>
  );
}

export function CaseVideo({
  caption,
  className = "",
  frame = "browser",
  poster,
  src,
  videoBackground = "#ede9e5",
}: {
  caption: string;
  className?: string;
  frame?: "browser" | "plain";
  poster?: string;
  src: string;
  videoBackground?: string;
}) {
  const normalizedSrc = src.toLowerCase();

  const videoType = normalizedSrc.endsWith(".mp4")
    ? "video/mp4"
    : normalizedSrc.endsWith(".mov")
      ? "video/quicktime"
      : undefined;

  return (
    <figure className={`my-14 w-full ${className}`}>
      {frame === "browser" ? (
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

          <div
            className="overflow-hidden rounded-b-2xl p-[clamp(10px,2vw,20px)]"
            style={{ backgroundColor: videoBackground }}
          >
            <ViewportVideo
              className="overflow-hidden rounded-xl"
              poster={poster}
              src={src}
              videoType={videoType}
            />
          </div>
        </div>
      ) : (
        <div
          className="w-full overflow-hidden rounded-3xl p-[clamp(10px,2vw,20px)] shadow-[0_18px_44px_rgba(17,17,17,0.05)]"
          style={{ backgroundColor: videoBackground }}
        >
          <ViewportVideo
            className="overflow-hidden rounded-2xl bg-[#f6f6f6]"
            poster={poster}
            src={src}
            videoType={videoType}
          />
        </div>
      )}

      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-left text-[12px] font-light uppercase tracking-[0.08em] text-[#8a8380]">
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
  sections: Array<{
    id: string;
    label: string;
    number: string;
  }>;
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
    <div className={EDITORIAL_TEXT_CLASS}>
      <Link
        href="/#work"
        className="mb-14 inline-flex w-max border-b border-current text-[12px] font-light text-[#6b6664]"
      >
        <HighlightText>Back to work</HighlightText>
      </Link>
    </div>
  );
}

export function ProjectCaseIntro({
  project,
  content,
}: ProjectCaseStudyProps) {
  const projectTags = project.tags;

  const overview =
    project.slug === "Leafy" ? (
      <>
        <HighlightText>Leafy</HighlightText> is a mobile plant management
        experience that helps plant owners understand their{" "}
        <HighlightText>plants&apos; health</HighlightText> and take the{" "}
        <HighlightText>right action at the right time</HighlightText>. The
        experience transforms plant care into{" "}
        <HighlightText>clear, actionable guidance</HighlightText> through{" "}
        <HighlightText>personalized recommendations</HighlightText>,{" "}
        <HighlightText>environmental insights</HighlightText>, and{" "}
        <HighlightText>timely reminders</HighlightText>. I led the{" "}
        <HighlightText>UX research</HighlightText>,{" "}
        <HighlightText>information architecture</HighlightText>,{" "}
        <HighlightText>UX/UI design</HighlightText>, and{" "}
        <HighlightText>interactive prototyping</HighlightText> from concept to
        final prototype.
      </>
    ) : content.overview ? (
      <>{content.overview}</>
    ) : (
      <>
        {project.intro} {content.overviewContribution}
      </>
    );

  const projectMeta =
    project.slug === "Leafy"
      ? [
          ["Role", content.meta.role],
          ["Duration", content.meta.duration],
          ["Team", content.meta.team],
          ["Tools", "Figma, Illustrator"],
          ["Platform", "Mobile App"],
        ]
      : [
          ["Duration", content.meta.duration],
          ["Role", content.meta.role],
          ["Team", content.meta.team],
          ["Sponsor", content.meta.sponsor],
        ];

  return (
    <header className="pb-20 text-left" id="overview">
      <div className={EDITORIAL_TEXT_CLASS}>
        {projectTags.length > 0 ? (
          <div className="mb-5 flex flex-wrap gap-2">
            {projectTags.map((tag) => (
              <span
                key={tag}
                className="border border-[#d8d3d0] px-3 py-1 text-[11px] font-light uppercase tracking-[0.08em] text-[#74706e]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <h1 className="m-0 font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-[#171717]">
            {project.title}
          </h1>
        </div>

        <p className="mb-0 mt-8 text-[16px] font-light leading-[1.7] text-[#5d5856]">
          {project.summary}
        </p>

        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {projectMeta.map(([category, value]) => (
            <div key={category}>
              <dt className="mb-2 text-[11px] font-light uppercase tracking-[0.14em] text-[#8a8380]">
                {category}
              </dt>

              <dd className="m-0 text-[12px] font-normal leading-[1.6] text-[#272321]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={CENTERED_CONTENT_CLASS}>
        <CaseVisual
          image={project.cardImage}
          label={`${project.title} product mockup`}
        />
      </div>

      <div
        className={`${EDITORIAL_TEXT_CLASS} mt-12 flex flex-col gap-6`}
      >
        {content.overviewLogo ? (
          <img
            className="h-auto w-[88px] shrink-0 object-contain"
            src={content.overviewLogo.src}
            alt={content.overviewLogo.alt}
          />
        ) : null}

        <div className="min-w-0">
          <h2 className="m-0 font-serif text-[26px] font-medium leading-[1.25] tracking-[-0.02em] text-[#171717]">
            Project Overview
          </h2>

          <p className="mb-0 mt-4 text-[16px] font-light leading-[1.7] text-[#5d5856]">
            {overview}
          </p>
        </div>
      </div>
    </header>
  );
}

export function ReturnToWorkSection() {
  return (
    <section className="py-14 md:py-20">
      <div className={EDITORIAL_TEXT_CLASS}>
        <p className="eyebrow">Next</p>

        <Link href="/#work">
          <HighlightText>Return to selected work</HighlightText>
        </Link>
      </div>
    </section>
  );
}

export function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />

      <section className="px-[clamp(20px,5vw,64px)] py-20">
        <div className={EDITORIAL_TEXT_CLASS}>
          <p className="eyebrow">Case study</p>

          <h1>
            <HighlightText>Project not found.</HighlightText>
          </h1>

          <Link href="/#work" className="text-link">
            <HighlightText>Back to work</HighlightText>
          </Link>
        </div>
      </section>
    </main>
  );
}
