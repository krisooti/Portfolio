import type { Metadata } from "next";
import type { ReactNode } from "react";

import { HighlightText } from "../HighlightText";
import { SiteNav } from "../SiteNav";
import { AboutMusicPlayer } from "./AboutMusicPlayer";
import ProfileCarousel from "./ProfileCarousel";
import { ToolboxSection } from "./ToolboxSection";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

function AboutSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      className="
        about-story-section
        about-section-panel
        mx-auto
        mt-[clamp(28px,4vw,40px)]
        grid
        w-[min(100%,960px)]
        gap-0
        max-[560px]:mt-6
      "
      data-gsap-section
    >
      <h2
        className="
          mb-5
          mt-0
          max-w-[1040px]
          font-serif
          text-[28px]
          font-normal
          leading-[1.2]
          tracking-[-0.03em]
          text-[#3f3c3a]
        "
        data-gsap-header
      >
        <HighlightText>{title}</HighlightText>
      </h2>

      <div data-gsap-body>{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <SiteNav />

      <article
        className="
          mx-auto
          w-[min(100%,1120px)]
          bg-transparent
          px-[clamp(20px,5vw,64px)]
          pb-[120px]
          pt-[140px]
          text-[#171717]
          max-[560px]:px-[18px]
          max-[560px]:pb-[88px]
          max-[560px]:pt-[112px]
        "
      >
        <ProfileCarousel />

        <AboutMusicPlayer />

        <AboutSection title="Designing with curiosity and empathy.">
          <div className="grid max-w-[840px] gap-[18px]">
            <p
              className="
                m-0
                text-[15px]
                font-light
                leading-[1.72]
                text-[#5d5856]
              "
            >
              My interest in design began from wanting to understand
              people—
              <HighlightText className="marker-highlight--static">
                their behaviors, frustrations, and everyday experiences
              </HighlightText>
              .
              Through UX, I discovered that the best product aren&apos;t just
              made pretty —they make people feel understood.
            </p>

            <p
              className="
                m-0
                text-[15px]
                font-light
                leading-[1.72]
                text-[#5d5856]
              "
            >
              Whether I&apos;m conducting user research, prototyping ideas, or
              refining interaction details, I enjoy turning complex problems
              into experiences that feel simple, intuitive, and human.
            </p>
          </div>
        </AboutSection>

        <ToolboxSection />
      </article>
    </main>
  );
}
