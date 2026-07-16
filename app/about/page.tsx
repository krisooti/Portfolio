import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Kristi Kim",
  description:
    "A personal introduction to Kristi Kim, her design background, and her dogs.",
};

const dogs = [
  {
    name: "Dog photo 01",
    label: "best friend no. 1",
  },
  {
    name: "Dog photo 02",
    label: "best friend no. 2",
  },
];

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
            <div className="profile-photo-placeholder" aria-label="Profile photo placeholder">
              <span>Profile photo</span>
            </div>
            <p>This is me :)</p>
          </div>

          <div className="about-intro-copy">
            <h1 id="about-title">Hi there! I&apos;m Kristi ☺</h1>
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
            <h2 id="dogs-title">Meet my best friends 🐾</h2>
            <span aria-hidden="true">♡</span>
          </div>

          <div className="dog-photo-grid">
            {dogs.map((dog) => (
              <figure className="dog-card" key={dog.name}>
                <div className="dog-photo-placeholder">
                  <span>{dog.name}</span>
                </div>
                <figcaption>{dog.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
