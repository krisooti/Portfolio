"use client";

import { useGSAP } from "@gsap/react";

import { hasIntroPlayed, INTRO_DONE_EVENT } from "../app/PageLoader";
import { getGSAP, prefersReducedMotion } from "../lib/gsap";

export function useHomeHeroAnimation() {
  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    if (!hero) {
      return;
    }

    const { gsap } = getGSAP();
    const title = hero.querySelector("[data-home-hero-title]");
    const aboutMeta = hero.querySelector("[data-home-about-meta]");
    const introItems = [title, aboutMeta].filter(Boolean);
    const bio = hero.querySelector<HTMLElement>("[data-home-bio]");
    const bioLines = bio?.querySelectorAll<HTMLElement>("[data-home-bio-line]");
    const codeAside = bio?.querySelector<HTMLElement>("[data-home-bio-code]");

    if (prefersReducedMotion()) {
      gsap.set(introItems, {
        autoAlpha: 1,
        clearProps: "transform",
      });
      if (bioLines && bioLines.length > 0) {
        gsap.set(bioLines, {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
        });
      }
      if (codeAside) {
        gsap.set(codeAside, { autoAlpha: 1 });
      }
      return;
    }

    gsap.set(introItems, { autoAlpha: 0, y: 16 });

    const revealHero = () => {
      gsap.to(introItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        onComplete: () => {
          window.dispatchEvent(new Event("home-hero-revealed"));
        },
      });
    };

    if (hasIntroPlayed() || prefersReducedMotion()) {
      revealHero();
    } else {
      window.addEventListener(INTRO_DONE_EVENT, revealHero, { once: true });
    }

    if (!bio || !bioLines || bioLines.length === 0) {
      return () => window.removeEventListener(INTRO_DONE_EVENT, revealHero);
    }

    const context = gsap.context(() => {
      gsap.set(bioLines, {
        autoAlpha: 0,
        filter: "blur(3px)",
        y: 22,
      });

      if (codeAside) {
        gsap.set(codeAside, { autoAlpha: 0 });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: bio,
          start: "top 88%",
          once: true,
        },
      });

      timeline.to(bioLines, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out",
        filter: "blur(0px)",
        stagger: 0.1,
        y: 0,
      });

      if (codeAside) {
        timeline.to(
          codeAside,
          {
            autoAlpha: 1,
            duration: 0.45,
            ease: "power2.out",
          },
          0.3,
        );
      }
    }, hero);

    return () => {
      window.removeEventListener(INTRO_DONE_EVENT, revealHero);
      context.revert();
    };
  });
}
