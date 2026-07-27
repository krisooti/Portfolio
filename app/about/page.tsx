import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import ProfileCarousel from "./ProfileCarousel";
import { StickyNoteStack } from "./StickyNoteStack";
import { SiteNav } from "../SiteNav";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const toolkitGroups = [
  {
    title: "Research",
    tools: ["User Interviews", "Usability Testing", "Affinity Mapping", "Thematic Analysis"],
    note: "daily ->",
  },
  {
    title: "Design",
    tools: ["Figma", "Prototyping", "Design Systems", "Interaction Design"],
  },
  {
    title: "Build",
    tools: ["React", "Next.js", "HTML/CSS"],
    note: "currently building",
  },
  {
    title: "AI",
    tools: ["AI Prototyping", "Prompt Engineering", "AI-Assisted Workflows"],
    note: "exploring lately",
  },
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
    <section className="about-story-section mx-auto mt-[clamp(82px,11vw,132px)] grid w-[min(100%,960px)] gap-0 border-t border-[var(--line)] pt-[clamp(54px,7vw,78px)] max-[560px]:mt-[72px] max-[560px]:pt-11">
      <CategoryTag>{tag}</CategoryTag>
      <h2 className="mb-5 mt-0 max-w-[720px] font-serif text-base font-medium leading-[1.3] tracking-[-0.01em] text-[#171717]">
        <HighlightText>{title}</HighlightText>
      </h2>
      {children}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <SiteNav />

      <article className="mx-auto w-[min(100%,1120px)] bg-[#fffdfc] px-[clamp(20px,5vw,64px)] pb-[120px] pt-[140px] text-[#171717] max-[560px]:px-[18px]">
        <ProfileCarousel />

        <AboutSection tag="ABOUT ME" title="Designing with curiosity and empathy.">
          <div className="grid max-w-[70ch] gap-[18px]">
            <p className="m-0 text-[15px] font-light leading-[1.72] text-[#5d5856]">
              My interest in design began from wanting to understand
              people—their behaviors, frustrations, and everyday experiences.
              Through UX, I discovered that the best products aren&apos;t just
              functional—they make people feel understood.
            </p>
            <p className="m-0 text-[15px] font-light leading-[1.72] text-[#5d5856]">
              Whether I&apos;m conducting user research, prototyping ideas, or
              refining interaction details, I enjoy turning complex problems
              into experiences that feel simple, intuitive, and human.
            </p>
          </div>
        </AboutSection>

        <section className="about-story-section about-process-tools-section relative mx-auto mt-[clamp(82px,11vw,132px)] grid w-[min(100%,960px)] gap-0 border-t border-[var(--line)] pt-[clamp(54px,7vw,78px)] max-[560px]:mt-[72px] max-[560px]:pt-11">
          <div className="relative mx-auto grid w-[min(100%,1040px)] grid-cols-[minmax(260px,0.38fr)_minmax(0,0.62fr)] items-start gap-[clamp(10px,2vw,24px)] max-[980px]:grid-cols-1 max-[980px]:gap-8 max-[560px]:gap-7">
            <div className="thought-process-column relative z-[2] grid min-w-0 content-start">
              <h2 className="mb-5 mt-0 max-w-[720px] font-serif text-base font-medium leading-[1.3] tracking-[-0.01em] text-[#171717]">
                <HighlightText>My Design Desk</HighlightText>
              </h2>
              <p className="design-desk-subtitle">
                Little reminders I keep while designing.
              </p>
              <StickyNoteStack />
            </div>

            <div className="toolkit-column relative z-[1] grid min-w-0 content-start ml-[-48px] max-[980px]:ml-0">
              <h2 className="mb-5 mt-0 max-w-[720px] font-serif text-base font-medium leading-[1.3] tracking-[-0.01em] text-[#171717]">
                <HighlightText>How I shape ideas into products.</HighlightText>
              </h2>
              <div className="toolkit-notebook">
                <div className="toolkit-doodle toolkit-doodle--sparkle" aria-hidden="true" />
                <div className="toolkit-doodle toolkit-doodle--flower" aria-hidden="true" />
                <div className="toolkit-doodle toolkit-doodle--pencil" aria-hidden="true" />
                <h3>
                  <span>Design Toolbox</span>
                </h3>
                {toolkitGroups.map((group) => (
                  <section className="toolkit-note-section" key={group.title}>
                    <div className="toolkit-note-heading">
                      <h4>{group.title}</h4>
                      {group.note ? <span>{group.note}</span> : null}
                    </div>
                    <ul>
                      {group.tools.map((tool) => (
                        <li key={tool}>
                          <HighlightText>{tool}</HighlightText>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
