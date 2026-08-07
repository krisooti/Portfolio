"use client";

import { useEffect, useMemo, useState } from "react";

type WeatherState =
  | { status: "loading"; time: string }
  | { status: "ready"; time: string; temperature: number; code: number }
  | { status: "unavailable"; time: string };

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
});

function seattleTime() {
  return formatter.format(new Date());
}

function weatherIcon(code: number) {
  if (code === 0) return "☼";
  if ([1, 2, 3].includes(code)) return "◐";
  if ([45, 48].includes(code)) return "≋";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return "⋰";
  if (code >= 71 && code <= 77) return "✧";
  if (code >= 95) return "⚡";
  return "○";
}

export function SeattleStatus() {
  const [state, setState] = useState<WeatherState>({
    status: "loading",
    time: "—",
  });

  useEffect(() => {
    let active = true;

    setState((current) => ({ ...current, time: seattleTime() }));

    const tick = window.setInterval(() => {
      setState((current) => ({ ...current, time: seattleTime() }));
    }, 1000);

    async function loadWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=47.6062&longitude=-122.3321&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles",
        );

        if (!response.ok) {
          throw new Error("Weather unavailable");
        }

        const data = await response.json();
        const temperature = Math.round(data.current.temperature_2m);
        const code = Number(data.current.weather_code);

        if (active) {
          setState({ status: "ready", time: seattleTime(), temperature, code });
        }
      } catch {
        if (active) {
          setState({ status: "unavailable", time: seattleTime() });
        }
      }
    }

    loadWeather();

    return () => {
      active = false;
      window.clearInterval(tick);
    };
  }, []);

  const content = useMemo(() => {
    if (state.status === "loading") {
      return (
        <>
          <span aria-hidden="true">○</span>
          <span>Loading weather</span>
          <span>{state.time}</span>
        </>
      );
    }

    if (state.status === "unavailable") {
      return (
        <>
          <span aria-hidden="true">○</span>
          <span>Weather unavailable</span>
          <span>{state.time}</span>
        </>
      );
    }

    return (
      <>
        <span aria-label="Current weather">{weatherIcon(state.code)}</span>
        <span>{state.temperature}°F</span>
        <span>{state.time}</span>
      </>
    );
  }, [state]);

  return (
    <div
      className="seattle-status flex items-center gap-2.5 text-[#6b6664]"
      aria-live="polite"
    >
      {content}
    </div>
  );
}
