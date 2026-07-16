"use client";

import { useEffect, useRef, useState } from "react";

// Replace this file path with your own legally hosted local audio file.
const MUSIC_SRC = "/audio/placeholder-tone.wav";
// Replace these labels with your song or playlist title and artist.
const MUSIC_TITLE = "Warm On A Cold Night";
const MUSIC_ARTIST = "HONNE";

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.65);

  useEffect(() => {
    const savedVolume = window.localStorage.getItem("kristi-music-volume");
    if (savedVolume) {
      const nextVolume = Number(savedVolume);
      if (Number.isFinite(nextVolume)) {
        setVolume(Math.min(1, Math.max(0, nextVolume)));
      }
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
    window.localStorage.setItem("kristi-music-volume", String(volume));
  }, [volume, isMuted]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio || isUnavailable) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
        setIsExpanded(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsUnavailable(true);
      setIsPlaying(false);
    }
  };

  const updateProgress = (nextTime: number) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <section
      className={`music-player ${isExpanded ? "is-expanded" : ""}`}
      aria-label="Music player"
      onMouseEnter={() => setIsExpanded(true)}
      onFocus={() => setIsExpanded(true)}
    >
      <audio
        ref={audioRef}
        preload="metadata"
        src={MUSIC_SRC}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsUnavailable(true);
          setIsPlaying(false);
        }}
      />

      <button
        className="music-primary"
        type="button"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        onClick={togglePlayback}
      >
        <span className={`music-equalizer ${isPlaying ? "is-playing" : ""}`} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="music-play-icon" aria-hidden="true">
          {isPlaying ? "II" : "Play"}
        </span>
      </button>

      <div className="music-details">
        <div className="music-copy">
          <p>{MUSIC_TITLE}</p>
          <span>{MUSIC_ARTIST}</span>
        </div>

        {isUnavailable ? (
          <p className="music-unavailable">Audio unavailable.</p>
        ) : (
          <>
            <label className="music-progress">
              <span className="sr-only">Song progress</span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={(event) => updateProgress(Number(event.target.value))}
              />
            </label>
            <div className="music-controls">
              <span>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              <label className="music-volume">
                <span className="sr-only">Volume</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(event) => {
                    setVolume(Number(event.target.value));
                    setIsMuted(false);
                  }}
                />
              </label>
              <button
                type="button"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
                onClick={() => setIsMuted((current) => !current)}
              >
                {isMuted || volume === 0 ? "Muted" : "Vol"}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
