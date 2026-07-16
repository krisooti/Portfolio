"use client";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
  type WheelEvent,
} from "react";
import { HighlightText } from "../HighlightText";

const TRANSITION_DURATION_MS = 520;
const WHEEL_THRESHOLD = 58;

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
    body: "I'm a recent graduate from the University of Washington with a degree in Human Centered Design & Engineering. I enjoy creating thoughtful digital experiences that are intuitive, accessible, and meaningful. I believe good design should make technology feel approachable while solving real problems.",
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const transitionTimeout = useRef<number | null>(null);
  const wheelDelta = useRef(0);
  const wheelFrame = useRef<number | null>(null);

  const goToSlide = (index: number, direction: "next" | "previous") => {
    if (isTransitioning || index === activeIndex) {
      return;
    }

    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }

    setIsTransitioning(true);
    setSlideDirection(direction);
    setActiveIndex((index + profileSlides.length) % profileSlides.length);
    transitionTimeout.current = window.setTimeout(() => {
      setIsTransitioning(false);
      transitionTimeout.current = null;
    }, TRANSITION_DURATION_MS);
  };

  const goNext = () => goToSlide(activeIndex + 1, "next");
  const goPrevious = () => goToSlide(activeIndex - 1, "previous");

  const jumpToSlide = (index: number) => {
    const direction = index > activeIndex ? "next" : "previous";
    goToSlide(index, direction);
  };

  useEffect(() => {
    profileSlides.forEach((slide) => {
      if (!slide.image) {
        return;
      }

      const image = new Image();
      image.src = slide.image.src;
    });

    return () => {
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }

      if (wheelFrame.current !== null) {
        window.cancelAnimationFrame(wheelFrame.current);
      }
    };
  }, []);

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
  }, [activeIndex, isTransitioning]);

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

  const handleWheel = (event: WheelEvent<HTMLElement>) => {
    if (isTransitioning) {
      return;
    }

    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
      return;
    }

    wheelDelta.current += event.deltaX;

    if (wheelFrame.current !== null) {
      return;
    }

    wheelFrame.current = window.requestAnimationFrame(() => {
      if (Math.abs(wheelDelta.current) > WHEEL_THRESHOLD) {
        if (wheelDelta.current > 0) {
          goNext();
        } else {
          goPrevious();
        }
      }

      wheelDelta.current = 0;
      wheelFrame.current = null;
    });
  };

  return (
    <section
      className={`about-hero-redesign profile-carousel is-${slideDirection}${
        isTransitioning ? " is-transitioning" : ""
      }`}
      aria-labelledby="about-title"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
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
              </div>
              <span className="profile-hover-zone profile-hover-zone--previous">
                <button
                  className="profile-arrow-button"
                  type="button"
                  onClick={goPrevious}
                  disabled={isTransitioning}
                  aria-label="Previous introduction"
                  tabIndex={index === activeIndex ? 0 : -1}
                >
                  ←
                </button>
              </span>
              <span className="profile-hover-zone profile-hover-zone--next">
                <button
                  className="profile-arrow-button"
                  type="button"
                  onClick={goNext}
                  disabled={isTransitioning}
                  aria-label="Next introduction"
                  tabIndex={index === activeIndex ? 0 : -1}
                >
                  →
                </button>
              </span>
              <div className="profile-image-preload" aria-hidden="true">
                {profileSlides
                  .filter((preloadSlide) => preloadSlide.image)
                  .map((preloadSlide) => (
                    <img
                      src={preloadSlide.image?.src}
                      alt=""
                      key={preloadSlide.headline}
                    />
                  ))}
              </div>
            </div>

            <div className="about-intro-copy">
              <h1 id={index === activeIndex ? "about-title" : undefined}>
                <HighlightText>{slide.headline}</HighlightText>
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
              disabled={isTransitioning}
              aria-label={`Show slide ${index + 1}: ${slide.headline}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
