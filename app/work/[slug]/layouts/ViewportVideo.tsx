"use client";

import { useEffect, useRef } from "react";

export function ViewportVideo({
  className = "",
  poster,
  src,
  videoType,
}: {
  className?: string;
  poster?: string;
  src: string;
  videoType?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // Browsers can delay autoplay until the media is ready.
          });
          return;
        }

        video.pause();
      },
      { threshold: 0.28 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={`block h-auto min-h-[220px] w-full bg-black ${className}`}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type={videoType} />
      <source src={src} />
      Your browser does not support the video tag.
    </video>
  );
}
