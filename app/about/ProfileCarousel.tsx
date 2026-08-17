"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { HighlightText } from "../HighlightText";

const RESUME_URL = "/resume/Kristi_Kim_Resume.pdf";
const EMAIL = "krisooti08@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kristiskim/";

const contactLinkClassName = `
  inline-flex
  w-fit
  items-center
  border
  border-[#ddd8d5]
  px-4
  py-2
  text-[12px]
  font-light
  leading-none
  text-[#4f4a48]
  transition-colors
  duration-200
  ease-out
  hover:border-[#c9c2be]
  hover:text-[#171717]
  focus-visible:border-[#c9c2be]
  focus-visible:outline-none
`;

const introCopyClassName = `
  m-0
  max-w-[840px]
  text-[15px]
  font-light
  leading-[1.8]
  text-[#4f4a48]
`;

type ProfileSlide = {
  headline: string;
  image: {
    src: string;
    alt: string;
  };
  body: ReactNode;
  showLinks?: boolean;
};

const profileSlides: ProfileSlide[] = [
  {
    headline: "Hi there! I'm Kristi",
    image: {
      src: "/images/kristi-about.jpg",
      alt: "Kristi in Seattle",
    },
    showLinks: true,
    body: (
      <>
        I&apos;m a recent graduate from the University of Washington with a degree
        in{" "}
        <span
          aria-describedby="hcde-description"
          className="group relative inline-block cursor-help font-medium text-[#2f2b29] outline-none focus-visible:ring-2 focus-visible:ring-[#817b77] focus-visible:ring-offset-2"
          tabIndex={0}
        >
          Human-Centered Design &amp; Engineering
          <span
            className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-30 w-[min(280px,80vw)] -translate-x-1/2 translate-y-1 bg-[rgba(232,232,230,0.82)] px-4 py-3 text-center text-[12px] font-normal leading-[1.55] text-[#4f4a48] opacity-0 shadow-[0_10px_28px_rgba(23,23,23,0.07)] backdrop-blur-xl transition-[opacity,transform] duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
            id="hcde-description"
            role="tooltip"
          >
            We learned to think about people and come up with designs that
            resonate with them!
          </span>
        </span>
        . I enjoy creating thoughtful digital experiences that are intuitive,
        accessible, and meaningful. I believe good design should make technology
        feel approachable while solving real problems.
      </>
    ),
  },
  {
    headline: "My café adventures",
    image: {
      src: "/images/playground-moment-01.jpg",
      alt: "Bagels and fresh toppings from a café day",
    },
    body: "I love exploring cafés and trying different coffees around the city. A good latte and a quiet corner is usually how I reset between design sessions.",
  },
  {
    headline: "Scent notes",
    image: {
      src: "/images/playground-flowers.jpg",
      alt: "A bouquet of white and blush flowers",
    },
    body: "I collect perfumes and enjoy discovering scents that feel personal and memorable — tiny rituals that make everyday life a little more considered.",
  },
  {
    headline: "My dogs",
    image: {
      src: "/images/playground-dog.jpg",
      alt: "Kristi posing with her dog beneath cherry blossoms",
    },
    body: "Outside of design, I spend a lot of time with my dogs and the people I love. They’re a big part of how I stay grounded.",
  },
];

export default function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = profileSlides[activeIndex];

  return (
    <section
      className="about-hero-redesign profile-photo-stack-section mx-auto min-h-[58vh] w-[min(100%,960px)]"
      aria-labelledby="about-title"
      data-gsap-section
    >
      <div
        className="
          about-section-panel
          profile-photo-stack-layout
          relative
          grid
          grid-cols-[minmax(260px,0.86fr)_minmax(0,1fr)]
          items-center
          gap-[clamp(30px,5vw,72px)]
          max-[700px]:grid-cols-1
          max-[700px]:gap-y-[34px]
        "
        data-gsap-body
      >
        <div
          className="absolute left-[clamp(24px,4vw,40px)] top-[clamp(24px,4vw,40px)] z-10 flex gap-2"
          role="tablist"
          aria-label="About snapshots"
        >
          {profileSlides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.headline}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="about-snapshot"
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  bg-white
                  text-[12px]
                  font-light
                  leading-none
                  transition-colors
                  duration-200
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#817b77]
                  focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "border-[#3f3c3a] text-[#3f3c3a]"
                      : "border-[#ddd8d5] text-[#8a8380] hover:border-[#c9c2be] hover:text-[#171717]"
                  }
                `}
                onClick={() => setActiveIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <div className="profile-photo-stack-area pt-10">
          <figure className="profile-stack-photo profile-stack-photo-static">
            <img
              className="profile-photo-image"
              src={activeSlide.image.src}
              alt={activeSlide.image.alt}
            />
          </figure>
        </div>

        <div className="about-intro-copy grid gap-5 pt-10 max-[700px]:pt-0" id="about-snapshot">
          <h1
            id="about-title"
            className="
              m-0
              max-w-full
              font-serif
              text-[28px]
              font-normal
              leading-[1.2]
              tracking-[-0.03em]
              text-[#3f3c3a]
              max-[560px]:w-full
            "
          >
            <HighlightText>{activeSlide.headline}</HighlightText>
          </h1>

          <p className={introCopyClassName}>{activeSlide.body}</p>

          {activeSlide.showLinks ? (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Link
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClassName}
                aria-label="Open Kristi's resume in a new tab"
              >
                <HighlightText>Resume ↗</HighlightText>
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLinkClassName}
              >
                <HighlightText>LinkedIn ↗</HighlightText>
              </a>
              <a href={`mailto:${EMAIL}`} className={contactLinkClassName}>
                <HighlightText>Email</HighlightText>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
