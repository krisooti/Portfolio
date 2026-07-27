"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HighlightText } from "./HighlightText";

const EMAIL = "krisooti08@gmail.com";
const RESUME_URL =
  "https://drive.google.com/file/d/136-JmSMxNNClZBRh74sGuPs39FnmjjCZ/view?usp=sharing";

export function SiteNav({ home = false }: { home?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
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

  return (
    <header className="site-nav" aria-label="Primary navigation">
      <Link href="/" className="brand-link">
        <HighlightText>Kristi Kim</HighlightText>
      </Link>
      <nav className="nav-links">
        <Link href={home ? "#work" : "/#work"}>
          <HighlightText>Work</HighlightText>
        </Link>
        <Link href="/about">
          <HighlightText>About</HighlightText>
        </Link>
        <Link
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link resume-link"
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
            className="contact-trigger"
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
      <span className="nav-spacer" aria-hidden="true" />
    </header>
  );
}
