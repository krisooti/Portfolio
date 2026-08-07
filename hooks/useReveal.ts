"use client";

import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../lib/gsap";

export function useReveal() {
  useGSAP(() => {
    const { gsap } = getGSAP();
    const reduceMotion = prefersReducedMotion();
    const sections = gsap.utils.toArray<HTMLElement>("[data-gsap-section]");

    if (reduceMotion) {
      gsap.set(sections, { autoAlpha: 1, clearProps: "transform" });
      return;
    }

    sections.forEach((section) => {
      const header = section.querySelector("[data-gsap-header]");
      const body = section.querySelector("[data-gsap-body]");
      const bodyItems = body
        ? Array.from(body.children).filter(
            (child) => !child.hasAttribute("data-gsap-skip"),
          )
        : [];
      const visualItems = section.querySelectorAll(
        "[data-gsap-image], figure img, figure video",
      );
      const hasVisualItems = visualItems.length > 0;

      gsap.set(section, { autoAlpha: 0, y: 40 });
      const staggerItems = [header, ...bodyItems].filter(Boolean);

      gsap.set(staggerItems, { autoAlpha: 0, y: 18 });
      if (hasVisualItems) {
        gsap.set(visualItems, { autoAlpha: 0, y: 24, scale: 0.98 });
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      timeline
        .to(section, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          staggerItems,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.5",
        );

      if (hasVisualItems) {
        timeline.to(
          visualItems,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power2.out",
            stagger: 0.06,
          },
          "-=0.35",
        );
      }
    });
  });
}
