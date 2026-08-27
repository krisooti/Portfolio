"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Track = {
  artist: string;
  title: string;
  youtubeId: string;
  url: string;
};

type YouTubePlayer = {
  destroy: () => void;
  loadVideoById: (id: string) => void;
  pauseVideo: () => void;
  playVideo: () => void;
};

const tracks: Track[] = [
  {
    artist: "JENNIE",
    title: "Less than a Lover",
    youtubeId: "_IT83Y_HcAw",
    url: "https://www.youtube.com/watch?v=_IT83Y_HcAw",
  },
  {
    artist: "Strawberry Guy",
    title: "Mrs Magic",
    youtubeId: "zf2k9_Nnm7w",
    url: "https://www.youtube.com/watch?v=zf2k9_Nnm7w",
  },
];

const YOUTUBE_ENDED = 0;
const YOUTUBE_PLAYING = 1;
const YOUTUBE_PAUSED = 2;

export function AboutMusicPlayer({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const trackIndexRef = useRef(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const track = tracks[trackIndex];

  const loadTrack = useCallback((index: number, autoplay: boolean) => {
    const nextTrack = tracks[index];
    const player = playerRef.current;

    if (!player || !nextTrack) {
      return;
    }

    trackIndexRef.current = index;
    setTrackIndex(index);

    if (autoplay) {
      player.loadVideoById(nextTrack.youtubeId);
      setIsPlaying(true);
      return;
    }

    player.loadVideoById(nextTrack.youtubeId);
    player.pauseVideo();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const hostId = "about-youtube-player";

    const createPlayer = () => {
      const YT = (
        window as Window & {
          YT?: {
            Player: new (
              id: string,
              options: Record<string, unknown>,
            ) => YouTubePlayer;
          };
        }
      ).YT;

      if (!YT?.Player || playerRef.current) {
        return;
      }

      playerRef.current = new YT.Player(hostId, {
        host: "https://www.youtube.com",
        videoId: tracks[0].youtubeId,
        width: 1,
        height: 1,
        playerVars: {
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event: { data: number }) => {
            if (event.data === YOUTUBE_PLAYING) {
              setIsPlaying(true);
            }

            if (event.data === YOUTUBE_PAUSED) {
              setIsPlaying(false);
            }

            if (event.data === YOUTUBE_ENDED) {
              const nextIndex = (trackIndexRef.current + 1) % tracks.length;
              loadTrack(nextIndex, true);
            }
          },
        },
      });
    };

    const windowWithYouTube = window as Window & {
      onYouTubeIframeAPIReady?: () => void;
      YT?: { Player: unknown };
    };

    if (windowWithYouTube.YT?.Player) {
      createPlayer();
    } else {
      const previousReady = windowWithYouTube.onYouTubeIframeAPIReady;
      windowWithYouTube.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        createPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [loadTrack]);

  const play = () => {
    playerRef.current?.playVideo();
  };

  const pause = () => {
    playerRef.current?.pauseVideo();
  };

  const next = () => {
    loadTrack((trackIndexRef.current + 1) % tracks.length, true);
  };

  return (
    <aside
      className={`about-lp-player ${
        embedded
          ? "about-lp-player--embedded w-full max-w-none"
          : "about-lp-player--corner flex w-fit max-w-full items-center gap-3"
      }`}
      data-gsap-skip
    >
      <div
        className={`about-lp${isPlaying ? " is-playing" : ""}`}
        aria-hidden="true"
      >
        <div className="about-lp__disc">
          <img
            className="about-lp__label"
            src={`https://i.ytimg.com/vi/${track.youtubeId}/mqdefault.jpg`}
            alt=""
          />
        </div>
      </div>

      <div className="w-max min-w-0">
        <p className="mb-0.5 mt-0 text-[10px] font-normal tracking-[0.04em] text-[#8a8380]">
          I&apos;m currently listening to
        </p>
        <p className="mb-0 mt-0 whitespace-nowrap font-serif text-[16px] font-normal leading-[1.2] tracking-[-0.03em] text-[#3f3c3a]">
          {track.title}
        </p>
        <p className="mb-0 mt-0.5 truncate text-[12px] font-light text-[#6b6664]">
          {track.artist}
        </p>
      </div>

      <div className="flex flex-none items-center gap-1">
        <button
          className="about-lp__control"
          disabled={!isReady}
          onClick={play}
          type="button"
          aria-label="Play"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.2 2.4v11.2L13.2 8 4.2 2.4Z" />
          </svg>
        </button>
        <button
          className="about-lp__control"
          disabled={!isReady}
          onClick={pause}
          type="button"
          aria-label="Pause"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.6 2.5h3v11h-3v-11Zm5.8 0h3v11h-3v-11Z" />
          </svg>
        </button>
        <button
          className="about-lp__control"
          disabled={!isReady}
          onClick={next}
          type="button"
          aria-label="Next"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2.4 2.6v10.8L10.2 8 2.4 2.6Zm9.2 0h2v10.8h-2V2.6Z" />
          </svg>
        </button>
      </div>

      <div className="about-lp__youtube" aria-hidden="true">
        <div id="about-youtube-player" />
      </div>
    </aside>
  );
}
