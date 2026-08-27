import Link from "next/link";
import { HighlightText } from "../HighlightText";
import { AboutMusicPlayer } from "./AboutMusicPlayer";

const RESUME_URL = "/resume/Kristi_Kim_Resume.pdf";
const EMAIL = "krisooti08@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kristik08/";

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

export default function ProfileCarousel() {
  return (
    <section
      className="about-hero-redesign profile-photo-stack-section mx-auto w-[min(100%,960px)]"
      aria-labelledby="about-title"
      data-gsap-section
    >
      <div
        className="
          about-section-panel
          profile-photo-stack-layout
          relative
          grid
          grid-cols-[auto_minmax(0,1fr)]
          items-center
          gap-8
          max-[700px]:grid-cols-1
          max-[700px]:justify-items-center
          max-[700px]:gap-8
        "
        data-gsap-body
      >
        <div className="profile-photo-stack-area" data-gsap-skip>
          <figure className="profile-stack-photo profile-stack-photo-static">
            <img
              className="profile-photo-image"
              src="/images/kristi-about.jpg"
              alt="Kristi in Seattle"
            />
          </figure>
        </div>

        <div className="about-intro-copy grid gap-5 max-[700px]:w-full max-[700px]:justify-items-start">
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
            <HighlightText>Hi there! I&apos;m Kristi</HighlightText>
          </h1>

          <p
            className="
              m-0
              max-w-[840px]
              text-[15px]
              font-light
              leading-[1.8]
              text-[#4f4a48]
            "
          >
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
          </p>

          <div className="flex flex-wrap items-center gap-2">
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
        </div>

        <AboutMusicPlayer />
      </div>
    </section>
  );
}
