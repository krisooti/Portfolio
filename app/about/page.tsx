import type { Metadata } from "next";
import type { ReactNode } from "react";

import { CategoryTag } from "../CategoryTag";
import { HighlightText } from "../HighlightText";
import { SiteNav } from "../SiteNav";
import ProfileCarousel from "./ProfileCarousel";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

const postcards = [
  {
    title: "Seattle, 2026",
    caption: "A small moment worth keeping.",
    image: "/images/kristi-about.jpg",
    alt: "Kristi in Seattle",
  },
  {
    title: "Cafe Notes",
    caption: "Quiet corners and coffee ideas.",
    alt: "Cafe postcard placeholder",
  },
  {
    title: "Scent Archive",
    caption: "Tiny details, memorable feelings.",
    alt: "Perfume postcard placeholder",
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
    <section
      className="
        about-story-section
        mx-auto
        mt-[clamp(82px,11vw,132px)]
        grid
        w-[min(100%,960px)]
        gap-0
        border-t
        border-[var(--line)]
        pt-[clamp(54px,7vw,78px)]
        max-[560px]:mt-[72px]
        max-[560px]:pt-11
      "
    >
      <CategoryTag>{tag}</CategoryTag>

      <h2
        className="
          mb-5
          mt-0
          max-w-[720px]
          font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive]
          text-[26px]
          font-light
          leading-[1.2]
          tracking-normal
          text-[#171717]
          max-[560px]:text-[23px]
        "
      >
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

      <article
        className="
          mx-auto
          w-[min(100%,1120px)]
          bg-[#fffdfc]
          px-[clamp(20px,5vw,64px)]
          pb-[120px]
          pt-[140px]
          text-[#171717]
          max-[560px]:px-[18px]
          max-[560px]:pb-[88px]
          max-[560px]:pt-[112px]
        "
      >
        {/* Profile Carousel */}
        <ProfileCarousel />

        {/* About Me */}
        <AboutSection
          tag="ABOUT ME"
          title="Designing with curiosity and empathy."
        >
          <div className="grid max-w-[70ch] gap-[18px]">
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
              people—their behaviors, frustrations, and everyday experiences.
              Through UX, I discovered that the best products aren&apos;t just
              functional—they make people feel understood.
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

        {/* Postcards */}
        <section
          className="
            about-story-section
            postcards-section
            mx-auto
            mt-[clamp(72px,9vw,88px)]
            grid
            w-[min(100%,960px)]
            gap-0
            border-t
            border-[var(--line)]
            pt-[clamp(44px,6vw,64px)]
            max-[560px]:mt-16
            max-[560px]:pt-10
          "
        >
          <h2
            className="
              mb-3
              mt-0
              max-w-[720px]
              font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive]
              text-[26px]
              font-light
              leading-[1.2]
              tracking-normal
              text-[#171717]
              max-[560px]:text-[23px]
            "
          >
            <HighlightText>Postcards</HighlightText>
          </h2>

          <p
            className="
              mb-7
              mt-0
              max-w-[48ch]
              text-[14px]
              font-light
              leading-[1.6]
              text-[#6b6664]
            "
          >
            Small moments outside of design.
          </p>

          <div className="postcard-grid">
            {postcards.map((postcard) => (
              <figure
                className="postcard-card"
                key={postcard.title}
              >
                {postcard.image ? (
                  <img
                    className="postcard-image"
                    src={postcard.image}
                    alt={postcard.alt}
                  />
                ) : (
                  <div
                    className="postcard-placeholder"
                    aria-label={postcard.alt}
                  />
                )}

                <figcaption>
                  <span>{postcard.title}</span>
                  <p>{postcard.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}