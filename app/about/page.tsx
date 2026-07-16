import type { Metadata } from "next";
import Link from "next/link";

const perfumes = [
  {
    brand: "Le Labo",
    name: "Another 13",
    notes: ["Ambroxan", "Musk", "Jasmine", "Moss"],
  },
  {
    brand: "Diptyque",
    name: "Orphéon",
    notes: ["Juniper", "Cedar", "Tonka", "Powder"],
  },
  {
    brand: "Byredo",
    name: "Blanche",
    notes: ["Aldehyde", "Rose", "Sandalwood", "Musk"],
  },
];

export const metadata: Metadata = {
  title: "About - Kristi",
  description:
    "A personal about page for Kristi with hobbies and a favorite perfume collection.",
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

      <section className="about-page-hero" aria-labelledby="about-title">
        <h1 id="about-title" className="typing-title">
          Hi there! I&apos;m Kristi. Nice to meet you.
        </h1>
      </section>

      <section className="personal-note">
        <p>
          Outside of design, I enjoy visiting cafés, trying different coffees,
          and collecting perfumes.
        </p>
      </section>

      <section className="perfume-section" aria-labelledby="perfume-title">
        <div className="perfume-heading">
          <p className="eyebrow">Collection</p>
          <h2 id="perfume-title">My Favorite Perfume Collection.</h2>
        </div>

        <div className="perfume-list">
          {perfumes.map((perfume, index) => (
            <article
              className="perfume-card"
              key={`${perfume.brand}-${perfume.name}`}
              style={{ "--item-index": index } as React.CSSProperties}
            >
              <div className="perfume-doodle" aria-hidden="true">
                <span className="fragrance-line fragrance-line-one" />
                <span className="fragrance-line fragrance-line-two" />
                <span className="bottle-cap" />
                <span className="bottle-neck" />
                <span className="bottle-body" />
                <span className="bottle-label" />
              </div>

              <div className="perfume-copy">
                <p>{perfume.brand}</p>
                <h3>{perfume.name}</h3>
              </div>

              <div className="note-list" aria-label={`${perfume.name} notes`}>
                {perfume.notes.map((note, noteIndex) => (
                  <span
                    key={note}
                    style={{ "--note-index": noteIndex } as React.CSSProperties}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
