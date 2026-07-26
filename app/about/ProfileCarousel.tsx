"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { HighlightText } from "../HighlightText";

const TRANSITION_DURATION_MS = 680;

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
    headline: "Hi there! I'm Kristi",
    body: "I'm a recent graduate from the University of Washington with a degree in Human Centered Design & Engineering. I enjoy creating thoughtful digital experiences that are intuitive, accessible, and meaningful. I believe good design should make technology feel approachable while solving real problems.",
    imageLabel: "Kristi profile photo",
    caption: "This is me :)",
    image: {
      src: "/images/kristi-about.jpg",
      alt: "Kristi in Seattle",
    },
  },
  {
    headline: "My café adventures",
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
    headline: "My dogs",
    body: "Outside of design, I spend a lot of time with my dogs and the people I love.",
    imageLabel: "Photo with my dogs",
    caption: "home team",
  },
];

export default function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const transitionTimeout = useRef<number | null>(null);

  const flipPhoto = useCallback(() => {
    if (isTransitioning) {
      return;
    }

    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }

    setIsTransitioning(true);

    transitionTimeout.current = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % profileSlides.length);
      setIsTransitioning(false);
      transitionTimeout.current = null;
    }, TRANSITION_DURATION_MS);
  }, [isTransitioning]);

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
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        flipPhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [flipPhoto]);

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
      flipPhoto();
    }

    touchStartX.current = null;
  };

  const activeSlide = profileSlides[activeIndex];
  const visibleSlides = profileSlides.map(
    (_, index) => profileSlides[(activeIndex + index) % profileSlides.length],
  );

  return (
    <section
      className={`about-hero-redesign profile-photo-stack-section${
        isTransitioning ? " is-transitioning" : ""
      }`}
      aria-labelledby="about-title"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="profile-photo-stack-layout" aria-live="polite">
        <div className="profile-photo-stack-area">
          {visibleSlides.map((slide, index) => {
            const isTopPhoto = index === 0;

            return (
              <button
                className={`profile-stack-photo${
                  isTopPhoto ? " is-top" : ""
                }${isTopPhoto && isTransitioning ? " is-flipping" : ""}`}
                type="button"
                key={`${slide.headline}-${index}`}
                onClick={isTopPhoto ? flipPhoto : undefined}
                disabled={!isTopPhoto || isTransitioning}
                aria-label={
                  isTopPhoto
                    ? "Flip to the next profile photo"
                    : `${slide.imageLabel} behind the current photo`
                }
                aria-hidden={!isTopPhoto}
                tabIndex={isTopPhoto ? 0 : -1}
              >
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
              </button>
            );
          })}
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
          <h1 id="about-title">
            <HighlightText>{activeSlide.headline}</HighlightText>
          </h1>
          <p>{activeSlide.body}</p>
        </div>
      </div>
    </section>
  );
}
