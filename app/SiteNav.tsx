"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HighlightText } from "./HighlightText";
import { getGSAP, prefersReducedMotion } from "../lib/gsap";

const EMAIL = "krisooti08@gmail.com";
const MOBILE_NAV_QUERY = "(max-width: 560px)";

const navLinkClassName =
  "text-[13px] font-light leading-none text-[#5b5755] transition-colors duration-200 ease-out hover:text-[#111111]";

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
        className="pointer-events-auto relative mx-auto grid w-full max-w-[1400px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center rounded-full border border-white/70 bg-[rgba(255,255,255,0.42)] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_28px_rgba(23,23,23,0.05)] backdrop-blur-[24px] max-[560px]:px-4 max-[560px]:py-2.5"
        data-gsap-nav
      >
        <Link
          href="/"
          className="group inline-flex items-center justify-self-start text-[#171717] max-[560px]:col-start-2 max-[560px]:row-start-1 max-[560px]:justify-self-center"
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

        <nav className="flex items-center justify-self-center gap-[clamp(18px,3vw,34px)] max-[560px]:hidden">
          <Link href="/about" className={navLinkClassName}>
            <HighlightText>About</HighlightText>
          </Link>
          <Link href="/playground" className={navLinkClassName}>
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
          className="hidden justify-self-end max-[560px]:col-start-3 max-[560px]:row-start-1 max-[560px]:block"
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
                <HighlightText>About</HighlightText>
              </Link>
              <Link
                href="/playground"
                className={navLinkClassName}
                onClick={() => setMenuOpen(false)}
              >
                <HighlightText>Playground</HighlightText>
              </Link>
              <div className="grid gap-2">
                <p className="m-0 text-[13px] font-light leading-none text-[#5b5755]">
                  Contact
                </p>
                <div className="flex items-center gap-3 text-[12px] font-light text-[#6b6664]">
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
