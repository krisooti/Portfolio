import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../../CategoryTag";
import { HighlightText } from "../../HighlightText";
import { SiteNav } from "../../SiteNav";
import { CaseStudyNav } from "./CaseStudyNav";
import { getProject, projects } from "../../projects";
import {
  caseSections,
  getCaseStudyContent,
  type CaseVisualImage,
  type ProcessStage,
} from "./caseStudies";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return {
    title: project ? `${project.title} - Kristi Kim` : "Case Study - Kristi Kim",
    description: project?.summary,
  };
}

function VisualPlaceholder({
  label,
  variant = "screen",
  image,
}: {
  label: string;
  variant?: "screen" | "research" | "map" | "phone";
  image?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className={`case-visual case-visual--${variant} grid min-w-0 gap-4`}>
      <div className={`visual-frame${image ? " visual-frame--image" : ""}`}>
        {image ? (
          <img src={image.src} alt={image.alt} />
        ) : (
          <>
            <span />
            <span />
            <span />
          </>
        )}
      </div>
      <p>{label}</p>
    </div>
  );
}

function EditorialImage({
  caption,
  image,
  variant = "screen",
}: {
  caption: string;
  image?: CaseVisualImage;
  variant?: "screen" | "research" | "map" | "phone";
}) {
  return (
    <figure className="editorial-image mx-auto mb-[var(--space-lg)] w-[min(100%,780px)]">
      <VisualPlaceholder label={caption} variant={variant} image={image} />
    </figure>
  );
}

function ChipList({
  items = [],
  label,
}: {
  items?: string[];
  label: string;
}) {
  return (
    <div
      className="case-chip-group mb-[var(--space-lg)] flex max-w-[780px] flex-wrap gap-2"
      aria-label={label}
    >
      {items.map((item) => (
        <span
          className="inline-flex w-max items-center border border-[#e4ded9] bg-[#f7f4f1] px-2.5 py-[5px] text-[11px] font-medium uppercase leading-[1.2] tracking-[0.04em] text-[#716b67]"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function InsightPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="case-insight-panel mx-auto mb-[var(--space-lg)] mt-[var(--space-sm)] grid w-[min(100%,780px)] gap-[var(--space-md)] border-y border-[var(--line)] py-[var(--space-lg)]">
      <h3 className="m-0 min-w-0 [overflow-wrap:anywhere] font-serif text-xl font-medium leading-[1.25] tracking-[-0.01em] text-[#171717]">
        <HighlightText>{title}</HighlightText>
      </h3>
      <ol className="grid list-none gap-[18px] p-0 m-0">
        {items.map((item, index) => (
          <li
            className="grid grid-cols-[42px_minmax(0,1fr)] items-start gap-[18px]"
            key={item}
          >
            <span className="font-serif text-lg font-medium leading-[1.25] text-[var(--pink)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="m-0 h-auto min-w-0 max-w-[68ch] [overflow-wrap:anywhere] text-[15px] font-light leading-[1.68] text-[#5d5856]">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <div className="case-key-takeaway mx-auto mt-[var(--space-md)] grid w-[min(100%,780px)] gap-2.5 border-l-2 border-[var(--pink)] pl-[var(--space-md)]">
      <span className="m-0 min-w-0 font-serif text-base font-medium leading-[1.25] tracking-[-0.01em] text-[#171717]">
        Key takeaway
      </span>
      <p className="m-0 h-auto min-w-0 max-w-[68ch] [overflow-wrap:anywhere] text-[15px] font-light leading-[1.68] text-[#5d5856]">
        {children}
      </p>
    </div>
  );
}

function ProjectRoadmap({
  stages,
}: {
  stages: ProcessStage[];
}) {
  return (
    <ol
      className="project-roadmap mx-auto mb-[var(--space-lg)] grid w-[min(100%,920px)] grid-cols-6 gap-[clamp(18px,2.8vw,28px)] list-none px-0 pb-1.5 pt-[18px] max-[980px]:grid-cols-3 max-[980px]:gap-y-[34px] max-[560px]:ml-0 max-[560px]:mr-0 max-[560px]:w-[min(100%,420px)] max-[560px]:grid-cols-1 max-[560px]:gap-0"
      aria-label="Project roadmap"
    >
      {stages.map((stage, index) => (
        <li
          className="project-roadmap-step relative grid min-w-0 justify-items-center gap-2.5 text-center opacity-0 max-[560px]:grid-cols-[34px_minmax(0,1fr)] max-[560px]:justify-items-start max-[560px]:gap-x-3.5 max-[560px]:gap-y-1.5 max-[560px]:pb-7 max-[560px]:text-left"
          key={stage.title}
        >
          <span className="project-roadmap-number inline-grid size-[34px] place-items-center border border-[#d8d1cd] bg-[#fffdfb] font-serif text-sm font-medium leading-none text-[var(--pink)] transition-[border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] max-[560px]:row-span-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="m-0 min-w-0 font-serif text-base font-medium leading-[1.25] tracking-[-0.01em] text-[#171717] max-[560px]:col-start-2">
            <HighlightText>{stage.title}</HighlightText>
          </h3>
          <p className="max-w-[18ch] text-xs leading-[1.55] text-[#6b6664] max-[560px]:col-start-2 max-[560px]:max-w-[42ch]">
            {stage.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

function SectionLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="case-section-label mb-2 inline-flex h-auto min-w-0 items-center">
      <CategoryTag>{label}</CategoryTag>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
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

  const content = getCaseStudyContent(project);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />

      <article className="mx-auto grid w-[min(100%,1280px)] grid-cols-[minmax(180px,220px)_minmax(0,1fr)] gap-[clamp(28px,5vw,72px)] px-[clamp(20px,5vw,64px)] pt-[136px] max-[980px]:grid-cols-1 max-[980px]:gap-[42px] max-[980px]:pt-[104px] max-[560px]:px-[18px]">
        <CaseStudyNav sections={caseSections} />

        <div className="w-[min(100%,940px)] min-w-0 max-[980px]:w-full">
          <section className="case-hero case-section is-visible" id="overview">
            <Link
              href="/#work"
              className="mb-[clamp(64px,7vw,80px)] inline-flex w-max border-b border-current text-[13px] font-light text-[#6b6664]"
            >
              <HighlightText>Back to work</HighlightText>
            </Link>
            <SectionLabel label={project.category} />

            <h1 className="mb-[var(--space-md)] mt-0 h-auto max-w-[820px] [overflow-wrap:anywhere] text-2xl font-light leading-[1.12] tracking-normal text-[#171717]">
              <HighlightText>{project.title}</HighlightText>
            </h1>
            <p className="case-summary">{project.summary}</p>
            <dl className="my-[var(--space-sm)] mb-[var(--space-lg)] grid grid-cols-4 gap-px border border-[var(--line)] bg-[var(--line)] max-[980px]:grid-cols-1 [&_dd]:m-0 [&_dd]:text-[13px] [&_dd]:font-light [&_dd]:leading-[1.5] [&_dd]:text-[#272321] [&_dt]:mb-2 [&_dt]:text-[11px] [&_dt]:font-light [&_dt]:uppercase [&_dt]:tracking-[0.12em] [&_dt]:text-[#9c9490]">
              <div className="min-w-0 bg-[#fffdfb] p-[18px]">
                <dt>Duration</dt>
                <dd>{content.meta.duration}</dd>
              </div>
              <div className="min-w-0 bg-[#fffdfb] p-[18px]">
                <dt>Role</dt>
                <dd>{content.meta.role}</dd>
              </div>
              <div className="min-w-0 bg-[#fffdfb] p-[18px]">
                <dt>Team</dt>
                <dd>{content.meta.team}</dd>
              </div>
              <div className="min-w-0 bg-[#fffdfb] p-[18px]">
                <dt>Sponsor</dt>
                <dd>{content.meta.sponsor}</dd>
              </div>
            </dl>
            {project.cardImage ? (
              <figure className="mx-auto mb-[var(--space-lg)] mt-[clamp(34px,5vw,48px)] w-[min(100%,980px)] bg-white shadow-[0_20px_54px_rgba(17,17,17,0.07)]">
                <img
                  className="block h-auto w-full object-cover"
                  src={project.cardImage.src}
                  alt={project.cardImage.alt}
                />
              </figure>
            ) : null}
            <p>{project.intro} {content.overviewContribution}</p>
            <ProjectRoadmap stages={content.processStages} />
          </section>

          <section className="case-section" id="problem">
            <SectionLabel label="UX Research" />
            <h2>
              <HighlightText>{project.problem ?? project.challenge}</HighlightText>
            </h2>
            <p>{project.question}</p>
            <InsightPanel title="Pain points" items={content.painPoints} />
          </section>

          <section className="case-section" id="research">
            <SectionLabel label="User Testing" />
            <h2>
              <HighlightText>
                {content.researchHeading}
              </HighlightText>
            </h2>
            <p>{content.researchCopy}</p>
            <ChipList items={project.researchMethods} label="Research methods" />
            <EditorialImage
              caption={content.researchCaption}
              image={content.researchImage}
              variant="map"
            />
            <InsightPanel
              title="Key insights"
              items={[
                project.keyInsights?.[0] ?? "Users wanted control over AI decisions.",
                project.keyInsights?.[1] ??
                  "Users needed clear explanations behind recommendations.",
                project.keyInsights?.[2] ??
                  "Users preferred to browse, compare, and save supervisors before committing.",
              ]}
            />
          </section>

          <section className="case-section" id="design-process">
            <SectionLabel label="Design Process" />
            <h2>
              <HighlightText>
                {content.designHeading}
              </HighlightText>
            </h2>

            <ChipList items={project.designDecisions} label="Key design decisions" />

            <KeyTakeaway>
              {content.designTakeaway}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="final-solution">
            <SectionLabel label="Design System" />
            <h2>
              <HighlightText>
                {content.solutionHeading}
              </HighlightText>
            </h2>
            <p>{content.solutionCopy}</p>
            <EditorialImage
              caption={content.primaryVisualCaption}
              image={content.primaryVisual}
            />
            <div className="supporting-visual-grid supporting-visual-grid--three">
              {content.supportingVisuals.map((visual) => (
                <EditorialImage
                  key={visual.caption}
                  caption={visual.caption}
                  image={visual.image}
                />
              ))}
            </div>
            <div className="solution-stack" aria-label="Final solution details">
              {content.solutionScreens.map((screen, index) => (
                <article
                  className="solution-row"
                  key={screen.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="solution-row-copy">
                    <h3>
                      <HighlightText>{screen.title}</HighlightText>
                    </h3>
                    <p>{screen.body}</p>
                    <p>{screen.rationale}</p>
                  </div>
                </article>
              ))}
            </div>
            <KeyTakeaway>
              {content.solutionTakeaway}
            </KeyTakeaway>
          </section>

          <section className="case-section" id="results-learnings">
            <SectionLabel label="Key Learnings" />
            <h2>
              <HighlightText>What changed through the work.</HighlightText>
            </h2>
            <p>
              {content.resultsCopy}
            </p>
            <InsightPanel
              title="Results"
              items={[
                ...(project.impact ?? []),
                content.extraResult,
              ]}
            />
            <EditorialImage
              caption={content.resultsVisualCaption}
              image={content.resultsVisual}
            />
            <div className="learning-stack">
              {content.reflectionCards.map((reflection) => (
                <article className="learning-note" key={reflection.title}>
                  <h3>
                    <HighlightText>{reflection.title}</HighlightText>
                  </h3>
                  <p>{reflection.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="next-section">
            <p className="eyebrow">Next</p>
            <Link href="/#work">
              <HighlightText>Return to selected work</HighlightText>
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}
