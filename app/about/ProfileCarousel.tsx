"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";

type ProfileSlide = {
  headline: string;
  body: string;
  imageLabel: string;
  caption: string;
  image?: {
    src: string;
    alt: string;
  };
};

const profileSlides: ProfileSlide[] = [
  {
    headline: "Hi there! I'm Kristi 👋",
    body: "I'm a recent graduate from the University of Washington with a degree in Human Centered Design & Engineering. I love designing thoughtful digital experiences that feel intuitive, accessible, and a little delightful. Outside of design, you'll usually find me exploring new cafés, collecting perfumes, or spending time with my dogs.",
    imageLabel: "Kristi profile photo",
    caption: "This is me :)",
    image: {
      src: "/images/kristi-about.jpg",
      alt: "Kristi in Seattle",
    },
  },
  {
    headline: "My café adventures ☕",
    body: "I love exploring cafés and trying different coffees around the city.",
    imageLabel: "Café photo",
    caption: "cafe day",
  },
  {
    headline: "Scent notes",
    body: "I collect perfumes and enjoy discovering scents that feel personal and memorable.",
    imageLabel: "Perfume collection photo",
    caption: "tiny rituals",
  },
  {
    headline: "My dogs 🐶",
    body: "Outside of design, I spend a lot of time with my dogs and the people I love.",
    imageLabel: "Photo with my dogs",
    caption: "home team",
  },
];

export default function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">(
    "next",
  );
  const touchStartX = useRef<number | null>(null);

  const goToSlide = (index: number, direction: "next" | "previous") => {
    setSlideDirection(direction);
    setActiveIndex((index + profileSlides.length) % profileSlides.length);
  };

  const goNext = () => goToSlide(activeIndex + 1, "next");
  const goPrevious = () => goToSlide(activeIndex - 1, "previous");

  const jumpToSlide = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    const direction = index > activeIndex ? "next" : "previous";
    goToSlide(index, direction);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) > 44) {
      if (distance > 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      className={`about-hero-redesign profile-carousel is-${slideDirection}`}
      aria-labelledby="about-title"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="profile-carousel-stage" aria-live="polite">
        {profileSlides.map((slide, index) => (
          <div
            className={`profile-carousel-slide${
              index === activeIndex ? " is-active" : ""
            }`}
            key={slide.headline}
            aria-hidden={index !== activeIndex}
          >
            <div className="about-photo-area">
              <div className="about-photo-wrap profile-carousel-frame">
                {slide.image ? (
                  <img
                    className="profile-photo-image"
                    src={slide.image.src}
                    alt={slide.image.alt}
                  />
                ) : (
                  <span className="profile-photo-placeholder">
                    <span>{slide.imageLabel}</span>
                  </span>
                )}
                <span className="profile-photo-caption">{slide.caption}</span>
                <span
                  className="profile-hover-zone profile-hover-zone--previous"
                  onMouseEnter={goPrevious}
                  aria-hidden="true"
                >
                  ←
                </span>
                <span
                  className="profile-hover-zone profile-hover-zone--next"
                  onMouseEnter={goNext}
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </div>

            <div className="about-intro-copy">
              <h1 id={index === activeIndex ? "about-title" : undefined}>
                {slide.headline}
              </h1>
              <p>{slide.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="profile-carousel-controls" aria-label="Profile slides">
        <div className="profile-carousel-dots">
          {profileSlides.map((slide, index) => (
            <button
              className={index === activeIndex ? "is-active" : ""}
              type="button"
              key={slide.headline}
              onClick={() => jumpToSlide(index)}
              aria-label={`Show slide ${index + 1}: ${slide.headline}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
