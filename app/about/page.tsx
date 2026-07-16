import type { Metadata } from "next";
import Link from "next/link";
import { HighlightText } from "../HighlightText";
import ProfileCarousel from "./ProfileCarousel";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim and her design background.",
};

export default function AboutPage() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          <HighlightText>Kristi</HighlightText>
          <span className="flower-mark" aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          <Link href="/#work">
            <HighlightText>Work</HighlightText>
          </Link>
          <Link href="/about">
            <HighlightText>About</HighlightText>
          </Link>
          <a href="mailto:krisooti08@gmail.com">
            <HighlightText>Contact</HighlightText>
          </a>
        </nav>
      </header>

      <article className="about-page">
        <ProfileCarousel />
      </article>
    </main>
  );
}
