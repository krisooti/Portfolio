import type { Metadata } from "next";
import Link from "next/link";

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
        <section className="about-hero-redesign" aria-labelledby="about-title">
          <div className="about-photo-wrap">
            <img
              className="profile-photo-image"
              src="/images/kristi-about.jpg"
              alt="Kristi in Seattle"
            />
            <p>This is me :)</p>
          </div>

          <div className="about-intro-copy">
            <h1 id="about-title">Hi there! I&apos;m Kristi</h1>
            <p>
              I&apos;m a recent graduate from the University of Washington with a
              degree in Human Centered Design &amp; Engineering. I love designing
              thoughtful digital experiences that feel intuitive, accessible,
              and a little delightful. Outside of design, you&apos;ll usually
              find me exploring new cafés, collecting perfumes, or spending time
              with my dogs.
            </p>
          </div>
        </section>

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
