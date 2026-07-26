"use client";

import { useRef, useState, type CSSProperties, type TouchEvent } from "react";

const FLIP_DURATION_MS = 350;

const stickyNotes = [
  {
    title: "Design with empathy",
    body: "Start with people, context, and the real problem.",
    doodle: "*",
    tone: "pink",
    detail: "tape",
  },
  {
    title: "Make complexity simple",
    body: "Turn messy systems into clear next steps.",
    doodle: "",
    tone: "cream",
  },
  {
    title: "Give users control",
    body: "AI should guide decisions, not take them away.",
    doodle: "+",
    tone: "beige",
    detail: "paperclip",
  },
  {
    title: "Iterate through feedback",
    body: "Prototype early, learn quickly, refine with care.",
    doodle: "->",
    tone: "yellow",
  },
];

export function StickyNoteStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const flipNote = (selectedIndex = 0) => {
    if (isFlipping) {
      return;
    }

    setIsFlipping(true);
    window.setTimeout(() => {
      setActiveIndex(
        (currentIndex) =>
          (currentIndex + (selectedIndex === 0 ? 1 : selectedIndex)) %
          stickyNotes.length,
      );
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
      aria-label="Interactive design desk sticky notes"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {visibleNotes.map((note, index) => {
        const isTopNote = index === 0;
        return (
          <button
            className={`sticky-note sticky-note--${note.tone}${
              isTopNote ? " is-top" : ""
            }${isTopNote && isFlipping ? " is-flipping" : ""}${
              note.detail ? ` has-${note.detail}` : ""
            }`}
            style={{ "--stack-index": index } as CSSProperties}
            type="button"
            key={`${note.title}-${index}`}
            onClick={() => flipNote(index)}
            aria-label={
              isTopNote
                ? `Flip note: ${note.title}`
                : `Bring note to front: ${note.title}`
            }
          >
            {note.doodle ? (
              <span className="sticky-note-doodle" aria-hidden="true">
                {note.doodle}
              </span>
            ) : null}
            {note.detail ? (
              <span
                className={`sticky-note-detail sticky-note-detail--${note.detail}`}
                aria-hidden="true"
              />
            ) : null}
            <span className="sticky-note-title">{note.title}</span>
            <span className="sticky-note-body">{note.body}</span>
          </button>
        );
      })}
    </div>
  );
}
