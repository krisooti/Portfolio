"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HighlightText } from "./HighlightText";
import { getGSAP, prefersReducedMotion } from "../lib/gsap";

const EMAIL = "krisooti08@gmail.com";
export function SiteNav({ home = false }: { home?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!contactRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
    }
    resetTimer.current = window.setTimeout(() => setCopied(false), 1800);
  };

  const animateLogo = () => {
    if (!logoRef.current || prefersReducedMotion()) {
      return;
    }

    const { gsap } = getGSAP();
    gsap
      .timeline()
      .to(logoRef.current, {
        y: -3,
        rotation: -4,
        duration: 0.22,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        y: 0,
        rotation: 0,
        duration: 0.28,
        ease: "power2.out",
      });
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 max-[560px]:px-3 max-[560px]:pt-3"
      aria-label="Primary navigation"
    >
      <div
        className="pointer-events-auto mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center rounded-full border border-white/70 bg-[rgba(255,255,255,0.42)] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_28px_rgba(23,23,23,0.05)] backdrop-blur-[24px] max-[560px]:grid-cols-1 max-[560px]:justify-items-center max-[560px]:gap-3 max-[560px]:rounded-[22px] max-[560px]:px-4 max-[560px]:py-3"
        data-gsap-nav
      >
      <Link
        href="/"
        className="group inline-flex items-center justify-self-start text-[#171717] max-[560px]:justify-self-center"
        aria-label="Kristi Kim homepage"
        onFocus={animateLogo}
        onMouseEnter={animateLogo}
      >
        <span
          className="inline-flex items-center gap-2 text-[13px] font-light leading-none tracking-normal text-[#34302e]"
          ref={logoRef}
        >
          <span
            aria-hidden="true"
            className="inline-block origin-center font-serif text-[24px] leading-none motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out group-hover:rotate-180 group-focus-visible:rotate-180"
          >
            𓇼
          </span>
          <span>Kristi Kim</span>
        </span>
      </Link>
      <nav className="flex items-center justify-self-center gap-[clamp(18px,3vw,34px)] max-[560px]:gap-4">
        <Link
          href="/about"
          className="text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
        >
          <HighlightText>About</HighlightText>
        </Link>
        <Link
          href="/playground"
          className="text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
        >
          <HighlightText>Playground</HighlightText>
        </Link>
        <div
          className={`contact-menu hover-popup-trigger${isOpen ? " is-open" : ""}`}
          ref={contactRef}
        >
          <button
            type="button"
            className="cursor-pointer border-0 bg-transparent p-0 font-[inherit] text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
            aria-expanded={isOpen}
            aria-controls="contact-popup"
            onClick={() => setIsOpen((open) => !open)}
          >
            <HighlightText>Contact</HighlightText>
          </button>
          <div
            className="hover-popup contact-popup"
            id="contact-popup"
            role="group"
            aria-label="Contact Kristi"
          >
            <span>{EMAIL}</span>
            <button type="button" onClick={copyEmail}>
              {copied ? "Copied ✓" : "Copy"}
            </button>
          </div>
        </div>
      </nav>
      <span className="justify-self-end" aria-hidden="true" />
      </div>
    </header>
  );
}
