"use client";

import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../lib/gsap";

export function useCardHover() {
  useGSAP(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const { gsap } = getGSAP();
    const cards = gsap.utils.toArray<HTMLElement>("[data-gsap-card]");
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const image = card.querySelector("img");

      const onEnter = () => {
        gsap.to(card, {
          y: -6,
          scale: 1.006,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });

        if (image) {
          gsap.to(image, {
            scale: 1.02,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      };

      const onLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });

        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      };

      card.addEventListener("pointerenter", onEnter);
      card.addEventListener("pointerleave", onLeave);
      card.addEventListener("focus", onEnter);
      card.addEventListener("blur", onLeave);

      cleanups.push(() => {
        card.removeEventListener("pointerenter", onEnter);
        card.removeEventListener("pointerleave", onLeave);
        card.removeEventListener("focus", onEnter);
        card.removeEventListener("blur", onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  });
}
