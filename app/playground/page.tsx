import type { Metadata } from "next";

import { HighlightText } from "../HighlightText";
import { SiteNav } from "../SiteNav";
import PlaygroundBoard from "./PlaygroundBoard";

export const metadata: Metadata = {
  title: "Playground - Kristi Kim",
  description:
    "A quiet visual playground of personal references and small moments.",
};

export default function PlaygroundPage() {
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
        <section
          className="
            about-story-section
            playground-section
            mx-auto
            grid
            w-[min(100%,960px)]
            gap-0
          "
          data-gsap-section
        >
          <div className="mb-[clamp(54px,7vw,78px)]" data-gsap-header>
            <p
              className="
                mb-3
                mt-0
                text-[11px]
                font-light
                uppercase
                tracking-[0.16em]
                text-[#8a8380]
              "
              ></p>


            <h1
              className="
                m-0
                max-w-[1040px]
                font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive]
                text-[26px]
                font-light
                leading-[1.2]
                tracking-normal
                text-[#171717]
                max-[560px]:text-[23px]
              "
            >
              <HighlightText>Memorable Moments (2026)</HighlightText>
            </h1>

          </div>

          <div data-gsap-body>
            <PlaygroundBoard />
          </div>
        </section>
      </article>
    </main>
  );
}
