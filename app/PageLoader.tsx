"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/gsap";

export const INTRO_DONE_EVENT = "kristi-intro-done";
const INTRO_STORAGE_KEY = "kristi-intro";

function markIntroDone() {
  try {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }

  window.dispatchEvent(new Event(INTRO_DONE_EVENT));
}

export function hasIntroPlayed() {
  try {
    return sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function PageLoader() {
  const [phase, setPhase] = useState<"open" | "leaving" | "done">("open");

  useEffect(() => {
    if (prefersReducedMotion() || hasIntroPlayed()) {
      setPhase("done");
      markIntroDone();
      return;
    }

    document.body.classList.add("page-loader-active");

    const leave = window.setTimeout(() => setPhase("leaving"), 1500);
    const finish = window.setTimeout(() => {
      document.body.classList.remove("page-loader-active");
      setPhase("done");
      markIntroDone();
    }, 2200);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(finish);
      document.body.classList.remove("page-loader-active");
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      className={`page-loader${phase === "leaving" ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Kristi Kim portfolio"
    >
      <div className="page-loader__content">
        <span className="page-loader__mark" aria-hidden="true">
          𓇼
        </span>
        <p className="page-loader__name">Kristi Kim</p>
      </div>
    </div>
  );
}
