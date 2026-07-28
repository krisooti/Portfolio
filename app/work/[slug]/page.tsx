import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CategoryTag } from "../../CategoryTag";
import { HighlightText } from "../../HighlightText";
import { SiteNav } from "../../SiteNav";
import { CaseStudyNav } from "./CaseStudyNav";
import { getProject, projects, type Project } from "../../projects";
import { caseSections, getCaseStudyContent } from "./caseStudies";

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

function CaseSection({
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
    <section className="case-section scroll-mt-28 py-12 first:pt-0 md:py-18" id={id}>
      <div className="max-w-[680px]">
        <SectionLabel label={label} />
        <h2 className="mb-5 mt-0 font-serif text-xl font-medium leading-[1.25] tracking-[-0.01em] text-[#171717]">
          <HighlightText>{title}</HighlightText>
        </h2>
      </div>
      {children}
    </section>
  );
}

function CaseVisual({
  label,
  note,
  image,
}: {
  label: string;
  note?: string;
  image?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <figure className="my-9 w-full">
      <div className="grid min-h-[clamp(260px,42vw,560px)] place-items-center bg-[#f7f4f1] shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
        {image ? (
          <img
            className="block h-auto w-full object-contain"
            src={image.src}
            alt={image.alt}
          />
        ) : (
          <div className="grid w-full max-w-[720px] gap-3 px-8 py-16 text-center">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#9c9490]">
              Image placeholder
            </span>
            <span className="font-serif text-xl font-medium leading-[1.25] text-[#24201e]">
              {label}
            </span>
            {note ? (
              <span className="mx-auto max-w-[48ch] text-sm font-light leading-[1.6] text-[#716b67]">
                {note}
              </span>
            ) : null}
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-[12px] font-light uppercase leading-[1.5] tracking-[0.08em] text-[#8a8380]">
        {label}
      </figcaption>
    </figure>
  );
}

function CaseVideo({
  caption,
  poster,
  src,
}: {
  caption: string;
  poster?: string;
  src: string;
}) {
  const videoType = src.endsWith(".mp4")
    ? "video/mp4"
    : src.endsWith(".mov")
      ? "video/quicktime"
      : undefined;

  return (
    <figure className="my-12 w-full">
      <div className="overflow-hidden rounded-2xl border border-[#e6dfdb] bg-[#f7f4f1] shadow-[0_18px_44px_rgba(17,17,17,0.06)]">
        <div className="flex items-center justify-between border-b border-[#e6dfdb] bg-[#fffdfc] px-4 py-3">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e7b7c4]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ddd8d5]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ddd8d5]" />
          </div>
          <span className="text-[11px] font-light uppercase tracking-[0.1em] text-[#8a8380]">
            Prototype demo
          </span>
        </div>
        <div className="bg-[#f1eeeb] p-[clamp(10px,2vw,20px)]">
          <video
            className="block h-auto w-full rounded-xl bg-[#111111] shadow-[0_14px_34px_rgba(17,17,17,0.08)]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={src} type={videoType} />
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <figcaption className="mt-3 text-[12px] font-light uppercase leading-[1.5] tracking-[0.08em] text-[#8a8380]">
        <span>{caption}</span>
        <a
          className="ml-3 border-b border-current text-[#6b6664] transition-colors duration-200 hover:text-[#171717]"
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

function CaseInsightPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="my-8 border-y border-[#e6dfdb] py-7">
      <h3 className="mb-5 mt-0 font-serif text-xl font-medium leading-[1.25] text-[#171717]">
        <HighlightText>{title}</HighlightText>
      </h3>
      <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
        {items.map((item, index) => (
          <li className="grid gap-2" key={item}>
            <span className="font-serif text-lg font-medium text-[var(--pink)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="m-0 text-[15px] font-light leading-[1.65] text-[#5d5856]">
              {item}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CaseSolutionFeature({
  image,
  title,
  rationale,
}: {
  image?: {
    src: string;
    alt: string;
  };
  title: string;
  rationale: string;
}) {
  return (
    <article className="grid gap-4 border-t border-[#e6dfdb] pt-8">
      <CaseVisual
        image={image}
        label={title}
        note="Replace with a final solution screen."
      />
      <div className="max-w-[680px]">
        <h3 className="m-0 font-serif text-lg font-medium leading-[1.3] text-[#171717]">
          <HighlightText>{title}</HighlightText>
        </h3>
        <p className="mb-0 mt-3 text-sm font-light leading-[1.65] text-[#5d5856]">
          {rationale}
        </p>
      </div>
    </article>
  );
}

function CaseStudyPage({
  project,
  content,
}: {
  project: Project;
  content: ReturnType<typeof getCaseStudyContent>;
}) {
  const prototypeVideos =
    content.prototypeVideos ??
    (content.prototypeVideo ? [content.prototypeVideo] : []);

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />
      <CaseStudyNav sections={caseSections} />

      <article className="mx-auto w-[min(100%,1440px)] px-[clamp(20px,5vw,72px)] pt-[120px] max-[560px]:px-[18px]">
        <div className="mx-auto min-w-0 max-w-[1180px] pb-36 max-[560px]:pb-44">
          <Link
            href="/#work"
            className="mb-14 inline-flex w-max border-b border-current text-[13px] font-light text-[#6b6664]"
          >
            <HighlightText>Back to work</HighlightText>
          </Link>

          <header className="pb-12 md:pb-16" id="overview">
            <div className="max-w-[680px]">
              <SectionLabel label={project.category} />
              <h1 className="mb-5 mt-0 font-serif text-[clamp(34px,5.2vw,62px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#171717]">
                <HighlightText>{project.title}</HighlightText>
              </h1>
              <p className="m-0 text-[17px] font-light leading-[1.65] text-[#5d5856]">
                {project.summary}
              </p>
            </div>

            <dl className="mt-8 grid gap-px border border-[#e6dfdb] bg-[#e6dfdb] md:grid-cols-4 [&_dd]:m-0 [&_dd]:text-[13px] [&_dd]:font-light [&_dd]:leading-[1.5] [&_dd]:text-[#272321] [&_dt]:mb-2 [&_dt]:text-[11px] [&_dt]:font-light [&_dt]:uppercase [&_dt]:tracking-[0.12em] [&_dt]:text-[#9c9490]">
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

            {/* IMAGE PLACEHOLDER — HERO MOCKUP */}
            <CaseVisual
              image={project.cardImage}
              label={`${project.title} product mockup`}
            />

            <div className="grid max-w-[860px] gap-6 md:grid-cols-[104px_minmax(0,680px)] md:items-start">
              {content.overviewLogo ? (
                <img
                  className="block h-auto w-[88px] object-contain md:w-[104px]"
                  src={content.overviewLogo.src}
                  alt={content.overviewLogo.alt}
                />
              ) : null}
              <p className="m-0 min-w-0 text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {project.intro} {content.overviewContribution}
              </p>
            </div>
          </header>

          <div className="divide-y divide-[#ebe5e1]">
            <CaseSection
              id="problem"
              label="Problem"
              title={project.problem ?? project.challenge}
            >
              <p className="m-0 max-w-[680px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {project.challenge}
              </p>
              <p className="mt-5 max-w-[680px] border-l-2 border-[var(--pink)] pl-5 text-[15px] font-light leading-[1.7] text-[#3f3a38]">
                {project.question}
              </p>
              <CaseInsightPanel title="Pain points" items={content.painPoints} />
            </CaseSection>

            <CaseSection
              id="research"
              label="Research"
              title={content.researchHeading}
            >
              <p className="m-0 max-w-[680px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {content.researchCopy}
              </p>

              <CaseVisual
                image={content.researchImage}
                label={content.researchCaption}
                note="Replace with research synthesis, interview notes, or competitive analysis."
              />
            </CaseSection>

            <CaseSection
              id="design-process"
              label="Design Process"
              title={content.designHeading}
            >
              <div className="max-w-[680px]">
                <p className="m-0 text-[15px] font-light leading-[1.7] text-[#5d5856]">
                  {content.designTakeaway}
                </p>
              </div>

              <div className="mt-10 grid gap-4">
                {content.processStages.map((stage, index) => (
                  <article
                    key={stage.title}
                    className="group grid grid-cols-[56px_minmax(0,1fr)] items-start gap-5 rounded-2xl border border-[#e6dfdb] bg-[#fffdfb] px-6 py-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#cec6c1] hover:shadow-[0_14px_34px_rgba(17,17,17,0.07)] max-[560px]:grid-cols-[42px_minmax(0,1fr)] max-[560px]:gap-4 max-[560px]:px-4 max-[560px]:py-5"
                  >
                    <span className="font-serif text-lg font-medium leading-none text-[#aaa29e] transition-colors duration-300 group-hover:text-[var(--pink)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="m-0 font-serif text-lg font-medium leading-[1.3] text-[#171717]">
                          <HighlightText>{stage.title}</HighlightText>
                        </h3>

                        {stage.caption ? (
                          <span className="text-[11px] font-light uppercase tracking-[0.08em] text-[#9a928e]">
                            {stage.caption}
                          </span>
                        ) : null}
                      </div>

                      <p className="mb-0 mt-3 max-w-[68ch] text-sm font-light leading-[1.65] text-[#5d5856]">
                        {stage.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="final-solution"
              label="Final Solution"
              title={content.solutionHeading}
            >
              <p className="m-0 max-w-[680px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {content.solutionCopy}
              </p>

              {prototypeVideos.length > 0 ? (
                <div className="mt-10 grid gap-8">
                  <div className="max-w-[680px] border-t border-[#e6dfdb] pt-7">
                    <p className="m-0 text-[11px] font-light uppercase tracking-[0.1em] text-[#9a928e]">
                      Prototype demos
                    </p>
                    <p className="mb-0 mt-3 text-sm font-light leading-[1.65] text-[#5d5856]">
                      Two interactive Haven walkthroughs are embedded below. The demos autoplay silently and loop in place.
                    </p>
                  </div>
                  {prototypeVideos.map((video) => (
                    <CaseVideo
                      caption={video.caption}
                      key={video.src}
                      poster={video.poster}
                      src={video.src}
                    />
                  ))}
                </div>
              ) : null}

              <div className="mt-10 grid gap-12">
                {content.solutionScreens.map((screen, index) => (
                  <CaseSolutionFeature
                    key={screen.title}
                    image={content.supportingVisuals[index]?.image}
                    rationale={screen.rationale}
                    title={screen.title}
                  />
                ))}
              </div>
            </CaseSection>

            <CaseSection
              id="results-learnings"
              label="Results + Reflection"
              title="The final direction made the search feel more guided and less uncertain."
            >
              <p className="m-0 max-w-[680px] text-[15px] font-light leading-[1.7] text-[#5d5856]">
                {content.resultsCopy}
              </p>
              {/* IMAGE PLACEHOLDER — FULL PROTOTYPE */}
              <CaseVisual
                image={content.resultsVisual}
                label={content.resultsVisualCaption}
                note="Replace with the final prototype walkthrough or product overview."
              />
              <div className="mt-8 grid gap-5">
                {content.reflectionCards.map((reflection) => (
                  <article
                    className="border-t border-[#e6dfdb] pt-5"
                    key={reflection.title}
                  >
                    <h3 className="m-0 font-serif text-lg font-medium leading-[1.3] text-[#171717]">
                      <HighlightText>{reflection.title}</HighlightText>
                    </h3>
                    <p className="mb-0 mt-3 max-w-[72ch] text-sm font-light leading-[1.7] text-[#5d5856]">
                      {reflection.body}
                    </p>
                  </article>
                ))}
              </div>
            </CaseSection>
          </div>

          <section className="py-14 md:py-18">
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

  return <CaseStudyPage project={project} content={content} />;
}
