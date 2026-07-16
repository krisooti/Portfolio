import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description: "A little more about Kristi Kim, her design practice, and music she designs to.",
};

// Replace these details with your featured song or playlist.
const MUSIC_FEATURE = {
  title: "Warm On A Cold Night",
  artist: "HONNE",
  link: "https://open.spotify.com/search/HONNE%20Warm%20On%20A%20Cold%20Night",
};

export default function AboutPage() {
  return (
    <main className="site-shell">
      <header className="site-nav" aria-label="Primary navigation">
        <Link href="/" className="brand-link">
          Kristi
          <span className="flower-mark" aria-hidden="true" />
        </Link>
        <nav className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <a href="mailto:krisooti08@gmail.com">Contact</a>
        </nav>
      </header>

      <article className="about-page">
        <section className="about-hero">
          <p className="eyebrow">About</p>
          <h1>Hi there! I&apos;m Kristi. Nice to meet you.</h1>
          <p>
            Outside of design, I enjoy visiting cafes, trying different coffees,
            collecting perfumes, and keeping a quiet playlist nearby while I work.
          </p>
        </section>

        <section className="music-design-section" aria-labelledby="music-design-title">
          <div>
            <p className="eyebrow">Listening</p>
            <h2 id="music-design-title">Music I Design To</h2>
          </div>
          <a
            className="music-feature-card"
            href={MUSIC_FEATURE.link}
            target="_blank"
            rel="noreferrer"
          >
            <span className="music-artwork" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>
              <strong>{MUSIC_FEATURE.title}</strong>
              <small>{MUSIC_FEATURE.artist}</small>
            </span>
            <em>Open playlist</em>
          </a>
        </section>
      </article>
    </main>
  );
}
