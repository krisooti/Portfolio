"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../lib/gsap";

export function usePageMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const { gsap } = getGSAP();

      if (prefersReducedMotion()) {
        gsap.set("[data-gsap-nav], main", { autoAlpha: 1, clearProps: "all" });
        return;
      }

      gsap.fromTo(
        "[data-gsap-nav]",
        { autoAlpha: 0, y: -10 },
        { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
      );

      gsap.fromTo(
        "main",
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
      );

      const handleClick = (event: MouseEvent) => {
        const target = event.target;
        const link = target instanceof Element ? target.closest("a") : null;

        if (!link || link.target || link.hasAttribute("download")) {
          return;
        }

        const href = link.getAttribute("href");

        if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
          return;
        }

        const url = new URL(href, window.location.href);

        if (url.origin !== window.location.origin) {
          return;
        }

        gsap.to("main", {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      document.addEventListener("click", handleClick);

      return () => document.removeEventListener("click", handleClick);
    },
    { dependencies: [pathname] },
  );
}
