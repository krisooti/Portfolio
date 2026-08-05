"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HighlightText } from "./HighlightText";
import { getGSAP, prefersReducedMotion } from "../lib/gsap";

const EMAIL = "krisooti08@gmail.com";
const RESUME_URL =
  "https://drive.google.com/file/d/136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/view?usp=sharing";

export function SiteNav({ home = false }: { home?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLPreElement>(null);
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
    const dots = logoRef.current.querySelectorAll("[data-logo-dot]");
    const timeline = gsap.timeline();

    timeline
      .to(logoRef.current, {
        y: -3,
        duration: 0.22,
        ease: "power2.out",
      })
      .to(
        dots,
        {
          rotation: (index) => (index === 0 ? -4 : 4),
          duration: 0.22,
          ease: "power2.out",
          transformOrigin: "50% 50%",
        },
        "<",
      )
      .to(logoRef.current, {
        y: 0,
        duration: 0.28,
        ease: "power2.out",
      })
      .to(
        dots,
        {
          rotation: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        "<",
      );
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-b border-black/[0.05] bg-[rgba(255,253,252,0.82)] px-[clamp(24px,10vw,160px)] py-[18px] backdrop-blur-[18px] max-[560px]:grid-cols-1 max-[560px]:justify-items-center max-[560px]:gap-3 max-[560px]:px-[18px] max-[560px]:py-4"
      aria-label="Primary navigation"
      data-gsap-nav
    >
      <Link
        href="/"
        className="inline-flex items-center justify-self-start text-[#171717] max-[560px]:justify-self-center"
        aria-label="Kristi Kim homepage"
        onFocus={animateLogo}
        onMouseEnter={animateLogo}
      >
        <pre
          className="m-0 whitespace-pre text-left font-mono text-[clamp(9px,0.9vw,13px)] font-light leading-[1.05] tracking-normal text-[#34302e]"
          ref={logoRef}
        >
          <span data-logo-dot>｡ﾟﾟ･｡･ﾟﾟ｡</span>
          {"\n"}
          <span>ﾟ。 Kristi Kim</span>
          {"\n"}
          <span data-logo-dot>　ﾟ･｡･ﾟ</span>
        </pre>
      </Link>
      <nav className="flex items-center justify-self-center gap-[clamp(18px,3vw,34px)] max-[560px]:gap-4">
        <Link
          href={home ? "#work" : "/#work"}
          className="text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
        >
          <HighlightText>Work</HighlightText>
        </Link>
        <Link
          href="/about"
          className="text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
        >
          <HighlightText>About</HighlightText>
        </Link>
        <Link
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111] max-[560px]:text-xs"
          aria-label="Open Kristi's resume in a new tab"
        >
          <HighlightText>Resume ↗</HighlightText>
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
    </header>
  );
}
