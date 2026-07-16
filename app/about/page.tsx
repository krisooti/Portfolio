import type { Metadata } from "next";
import Link from "next/link";
import ProfileCarousel from "./ProfileCarousel";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim, her design background, and her dogs.",
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
        <ProfileCarousel />

        <section className="dogs-section" aria-labelledby="dogs-title">
          <div className="dogs-heading">
            <h2 id="dogs-title">
              meet my dog, Hodoo (ho-doo) which means &apos;walnut&apos; in
              Korean!
            </h2>
            <span aria-hidden="true">♡</span>
          </div>

          <div className="dog-photo-grid">
            <figure className="dog-card">
              <img
                className="dog-media"
                src="/images/hodoo.jpg"
                alt="Hodoo, Kristi's dog"
              />
              <figcaption>Hodoo in photo mode</figcaption>
            </figure>

            <figure className="dog-card">
              <video
                className="dog-media"
                src="/videos/hodoo.mov"
                aria-label="Video of Hodoo"
                controls
                playsInline
                preload="metadata"
              />
              <figcaption>Hodoo in motion</figcaption>
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
}
