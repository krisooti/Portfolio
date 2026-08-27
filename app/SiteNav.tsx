"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { HighlightText } from "./HighlightText";
import { getGSAP, prefersReducedMotion } from "../lib/gsap";

const EMAIL = "krisooti08@gmail.com";
const MOBILE_NAV_QUERY = "(max-width: 560px)";

const navLinkClassName =
  "inline-flex items-center gap-1.5 text-[13px] font-normal leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111]";

export function SiteNav({ home = false }: { home?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<number | null>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!contactRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }

      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setMenuOpen(false);
      }
    };

    const media = window.matchMedia(MOBILE_NAV_QUERY);
    const closeMenuOnDesktop = () => {
      if (!media.matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    media.addEventListener("change", closeMenuOnDesktop);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      media.removeEventListener("change", closeMenuOnDesktop);
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
        className="pointer-events-auto relative mx-auto flex w-fit items-center gap-12 rounded-full border border-white/70 bg-[rgba(255,255,255,0.42)] px-6 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_28px_rgba(23,23,23,0.05)] backdrop-blur-[24px] max-[560px]:gap-3 max-[560px]:px-3.5 max-[560px]:py-2"
        data-gsap-nav
      >
        <Link
          href="/"
          className="group inline-flex items-center text-[#171717]"
          aria-label="Kristi Kim homepage"
          onFocus={animateLogo}
          onMouseEnter={animateLogo}
        >
          <span
            className="inline-flex items-center leading-none text-[#34302e]"
            ref={logoRef}
          >
            <span
              aria-hidden="true"
              className="inline-block origin-center font-serif text-[24px] leading-none motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out group-hover:rotate-180 group-focus-visible:rotate-180"
            >
              𓇼
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-10 max-[560px]:hidden">
          <Link href="/about" className={navLinkClassName}>
            <AboutIcon />
            <HighlightText>About</HighlightText>
          </Link>
          <Link href="/playground" className={navLinkClassName}>
            <PlaygroundIcon />
            <HighlightText>Playground</HighlightText>
          </Link>
          <div
            className={`contact-menu hover-popup-trigger${isOpen ? " is-open" : ""}`}
            ref={contactRef}
          >
            <button
              type="button"
              className={`cursor-pointer border-0 bg-transparent p-0 font-[inherit] ${navLinkClassName}`}
              aria-expanded={isOpen}
              aria-controls="contact-popup"
              onClick={() => setIsOpen((open) => !open)}
            >
              <ContactIcon />
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

        <div
          className="hidden max-[560px]:block"
          ref={menuRef}
        >
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-[#3f3c3a]"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-3 w-[18px]" aria-hidden="true">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-200 ease-out ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-full bg-current transition-opacity duration-200 ease-out ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-transform duration-200 ease-out ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>

          <div
            className={`absolute right-3 top-[calc(100%+10px)] z-50 min-w-[198px] rounded-[18px] border border-white/70 bg-[rgba(255,253,252,0.86)] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_32px_rgba(23,23,23,0.08)] backdrop-blur-[22px] transition-[opacity,transform] duration-200 ease-out ${
              menuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
            id="mobile-nav-menu"
            hidden={!menuOpen}
          >
            <nav className="grid gap-4">
              <Link
                href="/about"
                className={navLinkClassName}
                onClick={() => setMenuOpen(false)}
              >
                <AboutIcon />
                <HighlightText>About</HighlightText>
              </Link>
              <Link
                href="/playground"
                className={navLinkClassName}
                onClick={() => setMenuOpen(false)}
              >
                <PlaygroundIcon />
                <HighlightText>Playground</HighlightText>
              </Link>
              <div className="grid gap-2">
                <p className="m-0 inline-flex items-center gap-1.5 text-[13px] font-normal leading-none text-[#5b5755]">
                  <ContactIcon />
                  Contact
                </p>
                <div className="flex items-center gap-3 text-[12px] font-normal text-[#6b6664]">
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  <button
                    type="button"
                    className="border-0 border-l border-black/10 bg-transparent py-0 pl-3 font-[inherit] text-[#716b67]"
                    onClick={copyEmail}
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

function AboutIcon() {
  return (
    <NavIcon>
      <circle cx="8" cy="5.2" r="2.3" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3.4 13.2c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </NavIcon>
  );
}

function PlaygroundIcon() {
  return (
    <NavIcon>
      <path
        d="M8 13.5C3.5 10.15 2 8.1 2 5.7 2 3.85 3.45 2.5 5.2 2.5 6.35 2.5 7.35 3.1 8 4.15 8.65 3.1 9.65 2.5 10.8 2.5 12.55 2.5 14 3.85 14 5.7 14 8.1 12.5 10.15 8 13.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </NavIcon>
  );
}

function ContactIcon() {
  return (
    <NavIcon>
      <rect
        x="2"
        y="3.6"
        width="12"
        height="8.8"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M2.6 4.4 8 9.1l5.4-4.7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </NavIcon>
  );
}
