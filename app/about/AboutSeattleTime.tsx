"use client";

import { useEffect, useState } from "react";

function formatSeattleTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
  }).format(new Date());
}

export function AboutSeattleTime() {
  const [time, setTime] = useState(formatSeattleTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatSeattleTime());
    }, 30_000);

    return () => window.clearInterval(interval);
  }, []);

  return <time>{time}</time>;
}
