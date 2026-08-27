"use client";

import { useEffect, useState } from "react";

const EMAIL = "krisooti08@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/kristik08/";
const RESUME_URL = "/resume/Kristi_Kim_Resume.pdf";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
});

const linkClassName =
  "inline-flex items-center gap-1.5 text-[13px] font-light tracking-[0.01em] text-[#cfc8c4] transition-colors duration-200 hover:text-[var(--pink)]";

export function AsciiFooter() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(timeFormatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="site-footer">
      <p className="site-footer__name" aria-hidden="true">
        Kristi Kim
      </p>

      <div className="site-footer__inner">
        <div className="site-footer__meta">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              className={linkClassName}
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              className={linkClassName}
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ResumeIcon />
              Resume
            </a>
            <a className={linkClassName} href={`mailto:${EMAIL}`}>
              <MailIcon />
              Email
            </a>
          </div>
          <p className="mb-0 mt-3 text-[13px] font-light text-[#9a938e]">
            Currently in Seattle{time ? `, ${time}` : ""}
          </p>
        </div>

        <aside className="site-footer__note" aria-label="A thank-you note" tabIndex={0}>
          <span className="site-footer__tape" aria-hidden="true" />
          <div className="site-footer__paper">
            <p className="site-footer__note-text">
              Thanks for stopping by!
              <br />
              Hope you found something you enjoyed.
            </p>
          </div>
        </aside>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.5 6.2H1.2V14h2.3V6.2ZM2.35 2C1.55 2 1 2.55 1 3.28c0 .72.54 1.28 1.33 1.28h.02c.82 0 1.35-.56 1.35-1.28C3.68 2.55 3.16 2 2.35 2ZM14.8 8.55c0-2.48-1.32-3.64-3.09-3.64-1.42 0-2.06.78-2.41 1.33V6.2H7V14h2.3V9.18c0-.26.02-.51.1-.7.2-.51.67-1.03 1.45-1.03 1.02 0 1.43.78 1.43 1.92V14H14.8V8.55Z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 2.5h5.2L12.5 6v7.5H4V2.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9.2 2.5V6H12.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4.2 8 9l6-4.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
