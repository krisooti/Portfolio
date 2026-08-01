"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";
import { HighlightText } from "../HighlightText";

const TRANSITION_DURATION_MS = 680;

type ProfileSlide = {
  headline: string;
  body: ReactNode;
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
    body: (
      <>
        I&apos;m a recent graduate from the University of Washington with a degree
        in{" "}
        <span className="font-medium text-[#2f2b29]">
          Human-Centered Design &amp; Engineering
        </span>
        . I enjoy creating thoughtful digital experiences that are intuitive,
        accessible, and meaningful. I believe good design should make technology
        feel approachable while solving real problems.
      </>
    ),
    imageLabel: "Kristi profile photo",
    caption: "This is me :)",
    image: {
      src: "/images/kristi-about.jpg",
      alt: "Kristi in Seattle",
    },
  },
  {
    headline: "My café adventures",
    body:
      "I love exploring cafés and trying different coffees around the city.",
    imageLabel: "Café photo",
    caption: "cafe day",
  },
  {
    headline: "Scent notes",
    body:
      "I collect perfumes and enjoy discovering scents that feel personal and memorable.",
    imageLabel: "Perfume collection photo",
    caption: "tiny rituals",
  },
  {
    headline: "My dogs",
    body:
      "Outside of design, I spend a lot of time with my dogs and the people I love.",
    imageLabel: "Photo with my dogs",
    caption: "home team",
  },
];

export default function ProfileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const transitionTimeout = useRef<number | null>(null);

  const flipPhoto = useCallback(() => {
    if (isTransitioning) return;

    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }

    setIsTransitioning(true);

    transitionTimeout.current = window.setTimeout(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % profileSlides.length,
      );

      setIsTransitioning(false);
      transitionTimeout.current = null;
    }, TRANSITION_DURATION_MS);
  }, [isTransitioning]);

  useEffect(() => {
    profileSlides.forEach((slide) => {
      if (!slide.image) return;

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

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [flipPhoto]);

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX =
      event.changedTouches[0]?.clientX ?? touchStartX.current;

    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) > 44) {
      flipPhoto();
    }

    touchStartX.current = null;
  };

  const displayedIndex = previewIndex ?? activeIndex;
  const activeSlide = profileSlides[displayedIndex];

  const visibleSlides = profileSlides.map(
    (_, index) =>
      profileSlides[(displayedIndex + index) % profileSlides.length],
  );

  return (
    <section
      className={`about-hero-redesign profile-photo-stack-section mx-auto min-h-[58vh] w-[min(100%,960px)]${
        isTransitioning ? " is-transitioning" : ""
      }`}
      aria-labelledby="about-title"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="
          profile-photo-stack-layout
          grid
          grid-cols-[auto_minmax(260px,0.86fr)_minmax(0,1fr)]
          items-center
          gap-[clamp(30px,5vw,72px)]
          max-[980px]:grid-cols-[auto_minmax(260px,1fr)]
          max-[980px]:items-start
          max-[560px]:grid-cols-[auto_minmax(0,1fr)]
          max-[560px]:gap-x-5
          max-[560px]:gap-y-[34px]
        "
        aria-live="polite"
      >
        {/* Number navigation */}
        <nav
          className="
            profile-polaroid-nav
            grid
            grid-cols-[auto_auto]
            items-center
            gap-4
            justify-self-start
            max-[980px]:row-start-1
            max-[560px]:gap-3
          "
          aria-label="Profile photo selection"
          onMouseLeave={() => setPreviewIndex(null)}
        >
          <div className="grid gap-6 max-[560px]:gap-5">
            {profileSlides.map((slide, index) => {
              const isSelected = activeIndex === index;
              const isPreviewed = displayedIndex === index;

              return (
                <button
                  type="button"
                  key={slide.headline}
                  onMouseEnter={() => setPreviewIndex(index)}
                  onFocus={() => setPreviewIndex(index)}
                  onBlur={() => setPreviewIndex(null)}
                  onClick={() => {
                    setActiveIndex(index);
                    setPreviewIndex(null);
                  }}
                  aria-label={`Show profile item ${index + 1}: ${slide.headline}`}
                  aria-current={isSelected ? "true" : undefined}
                  className={`
                    flex h-8 w-8 items-center justify-center
                    rounded-lg border
                    bg-transparent p-0
                    font-serif text-[13px] leading-none
                    transition-all duration-200 ease-out

                    hover:-translate-y-px
                    hover:border-[#c9c2be]
                    hover:bg-[#faf9f8]
                    hover:text-[#171717]

                    focus-visible:-translate-y-px
                    focus-visible:border-[#c9c2be]
                    focus-visible:bg-[#faf9f8]
                    focus-visible:text-[#171717]
                    focus-visible:outline-none

                    ${
                      isSelected
                        ? "border-[#bdb7b3] bg-[#faf9f8] text-[#171717] opacity-100"
                        : "border-[#ddd8d5] text-[#9b9491] opacity-80"
                    }

                    ${
                      isPreviewed && !isSelected
                        ? "border-[#c9c2be] text-[#5f5a58] opacity-100"
                        : ""
                    }
                  `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Rounded divider */}
          <span
            className="block h-full min-h-[150px] w-px rounded-full bg-[#e5dfdb]"
            aria-hidden="true"
          />
        </nav>

        {/* Photo stack */}
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

                <span className="profile-photo-caption">
                  {slide.caption}
                </span>
              </button>
            );
          })}

          {/* Preload available images */}
          <div className="profile-image-preload" aria-hidden="true">
            {profileSlides
              .filter((slide) => slide.image)
              .map((slide) => (
                <img
                  key={slide.headline}
                  src={slide.image?.src}
                  alt=""
                />
              ))}
          </div>
        </div>

        {/* Intro copy */}
        <div className="about-intro-copy grid gap-5 max-[980px]:col-span-2">
          <h1
            id="about-title"
            className="
              m-0
              max-w-full
              font-['Bradley_Hand','Comic_Sans_MS','Segoe_Print',cursive]
              text-[28px]
              font-light
              leading-[1.2]
              tracking-normal
              text-[#171717]
              max-[560px]:w-full
              max-[560px]:text-[25px]
            "
          >
            <HighlightText>{activeSlide.headline}</HighlightText>
          </h1>

          <p
            className="
              m-0
              max-w-[840px]
              text-[15px]
              font-light
              leading-[1.8]
              text-[#4f4a48]
            "
          >
            {activeSlide.body}
          </p>
        </div>
      </div>
    </section>
  );
}
