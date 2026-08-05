"use client";

import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../lib/gsap";

export function useHomeHeroAnimation() {
  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    if (!hero) {
      return;
    }

    const { gsap } = getGSAP();
    const title = hero.querySelector("[data-home-hero-title]");
    const aboutCopy = hero.querySelector("[data-home-about-copy]");
    const aboutMeta = hero.querySelector("[data-home-about-meta]");
    const introItems = [title, aboutCopy, aboutMeta].filter(Boolean);

    if (prefersReducedMotion()) {
      gsap.set(introItems, {
        autoAlpha: 1,
        clearProps: "transform",
      });
      return;
    }

    gsap.set(introItems, { autoAlpha: 0, y: 16 });

    gsap.to(introItems, {
      autoAlpha: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    });
  });
}
