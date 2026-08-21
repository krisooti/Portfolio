"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { getGSAP, prefersReducedMotion } from "../../../../lib/gsap";

export function TmindHmwQuote({ question }: { question: string }) {
  const rootRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const quote = rootRef.current;
      if (!quote) {
        return;
      }

      const { gsap } = getGSAP();

      if (prefersReducedMotion()) {
        gsap.set(quote, { autoAlpha: 1, clipPath: "none", y: 0 });
        return;
      }

      gsap.fromTo(
        quote,
        {
          autoAlpha: 0,
          y: 18,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <p
      ref={rootRef}
      className="hmw-quote m-0 mt-10 max-w-[860px] font-serif text-[28px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#171717]"
    >
      <span className="text-[var(--pink)]" aria-hidden="true">
        “
      </span>
      {question}
      <span className="text-[var(--pink)]" aria-hidden="true">
        ”
      </span>
    </p>
  );
}
