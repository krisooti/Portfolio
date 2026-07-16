"use client";

import { useRef, useState, type CSSProperties, type TouchEvent } from "react";

const FLIP_DURATION_MS = 680;

const stickyNotes = [
  {
    title: "Understand",
    body: "Research first. Design later.",
    doodle: "*",
    tone: "pink",
  },
  {
    title: "Explore",
    body: "Prototype often. Stay curious.",
    doodle: "->",
    tone: "cream",
  },
  {
    title: "Refine",
    body: "Small details create memorable experiences.",
    doodle: "+",
    tone: "yellow",
  },
  {
    title: "Collaborate",
    body: "Design grows through feedback.",
    doodle: "<3",
    tone: "beige",
  },
  {
    title: "Empathy",
    body: "Always design for people.",
    doodle: ":)",
    tone: "pink",
  },
];

export function StickyNoteStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const flipNote = () => {
    if (isFlipping) {
      return;
    }

    setIsFlipping(true);
    window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % stickyNotes.length);
      setIsFlipping(false);
    }, FLIP_DURATION_MS);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null) {
      return;
    }

    const touchEndY = event.changedTouches[0]?.clientY ?? touchStartY.current;
    if (touchStartY.current - touchEndY > 34) {
      flipNote();
    }

    touchStartY.current = null;
  };

  const visibleNotes = stickyNotes.map((_, index) => {
    const noteIndex = (activeIndex + index) % stickyNotes.length;
    return stickyNotes[noteIndex];
  });

  return (
    <div
      className="sticky-note-stack"
      aria-label="Interactive thought process sticky notes"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {visibleNotes.map((note, index) => {
        const isTopNote = index === 0;
        return (
          <button
            className={`sticky-note sticky-note--${note.tone}${
              isTopNote ? " is-top" : ""
            }${isTopNote && isFlipping ? " is-flipping" : ""}`}
            style={{ "--stack-index": index } as CSSProperties}
            type="button"
            key={`${note.title}-${index}`}
            onClick={isTopNote ? flipNote : undefined}
            disabled={!isTopNote}
            aria-label={
              isTopNote
                ? `Flip note: ${note.title}`
                : `${note.title} note underneath`
            }
          >
            <span className="sticky-note-doodle" aria-hidden="true">
              {note.doodle}
            </span>
            <span className="sticky-note-title">{note.title}</span>
            <span className="sticky-note-body">{note.body}</span>
          </button>
        );
      })}
    </div>
  );
}
