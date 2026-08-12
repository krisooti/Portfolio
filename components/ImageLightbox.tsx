"use client";

import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  alt: string;
  imageClassName?: string;
  src: string;
};

export function ImageLightbox({ alt, imageClassName = "", src }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className="group relative w-full">
        <button
          aria-label="View full image"
          className="block w-full cursor-zoom-in rounded-[6px] text-left outline-none transition-opacity duration-200 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <img className={imageClassName} src={src} alt={alt} />
        </button>

        <button
          aria-label="View full image"
          className="absolute bottom-3 right-3 min-h-8 rounded-full border border-white/60 bg-[#f7f6f4]/90 px-3 text-[11px] font-normal text-[#272321] shadow-[0_4px_16px_rgba(17,17,17,0.08)] backdrop-blur-sm transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          View full image ↗
        </button>
      </div>

      {isOpen ? (
        <div
          aria-label="Full image preview"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
          role="dialog"
        >
          <img
            alt={alt}
            className="max-h-[calc(100dvh-2rem)] max-w-full object-contain sm:max-h-[calc(100dvh-4rem)]"
            src={src}
          />

          <button
            aria-label="Close full image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-[24px] font-light leading-none text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/70 sm:right-6 sm:top-6"
            onClick={() => setIsOpen(false)}
            ref={closeButtonRef}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      ) : null}
    </>
  );
}
