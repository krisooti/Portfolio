"use client";

import { useEffect, useState } from "react";

const PHRASE = "sometimes codes";
const TYPE_DELAY = 80;
const DELETE_DELAY = 42;
const COMPLETE_PAUSE = 2000;
const EMPTY_PAUSE = 600;

export function LoopingTypedPhrase() {
  const [displayedText, setDisplayedText] = useState(PHRASE);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setDisplayedText(PHRASE);
      setCursorVisible(false);
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let cursorIntervalId: ReturnType<typeof setInterval> | undefined;
    let cancelled = false;

    const schedule = (callback: () => void, delay: number) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) callback();
      }, delay);
    };

    const startCursorBlink = () => {
      if (cursorIntervalId) return;
      cursorIntervalId = setInterval(() => {
        setCursorVisible((visible) => !visible);
      }, 500);
    };

    const stopCursorBlink = () => {
      if (cursorIntervalId) clearInterval(cursorIntervalId);
      cursorIntervalId = undefined;
      setCursorVisible(true);
    };

    const typePhrase = (length = 0) => {
      stopCursorBlink();
      setDisplayedText(PHRASE.slice(0, length));

      if (length < PHRASE.length) {
        schedule(() => typePhrase(length + 1), TYPE_DELAY);
        return;
      }

      startCursorBlink();
      schedule(() => deletePhrase(PHRASE.length), COMPLETE_PAUSE);
    };

    const deletePhrase = (length: number) => {
      stopCursorBlink();
      setDisplayedText(PHRASE.slice(0, length));

      if (length > 0) {
        schedule(() => deletePhrase(length - 1), DELETE_DELAY);
        return;
      }

      startCursorBlink();
      schedule(() => typePhrase(0), EMPTY_PAUSE);
    };

    const startLoop = () => typePhrase(0);
    window.addEventListener("home-hero-revealed", startLoop, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("home-hero-revealed", startLoop);
      if (timeoutId) clearTimeout(timeoutId);
      if (cursorIntervalId) clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <span
      aria-hidden="true"
      className="relative inline-block align-baseline font-mono text-[0.93em] font-medium tracking-[-0.025em] text-[#595959]"
    >
      <span className="invisible">{PHRASE}_</span>
      <span className="absolute inset-0 whitespace-nowrap">
        {displayedText}
        <span className={cursorVisible ? "opacity-100" : "opacity-0"}>_</span>
      </span>
    </span>
  );
}
