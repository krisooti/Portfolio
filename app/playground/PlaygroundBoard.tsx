"use client";

import type { CSSProperties } from "react";

type PlaygroundPhoto = {
  image: string;
  alt: string;
  caption: string;
  x: string;
  y: string;
  hoverRotate: number;
  width: number;
};

const photos: PlaygroundPhoto[] = [
  {
    image: "/images/playground-fireworks.jpg",
    alt: "Fireworks lighting up the night sky",
    caption: "Fourth of July fireworks under the Brooklyn Bridge",
    x: "2%",
    y: "0%",
    hoverRotate: -3,
    width: 214,
  },
  {
    image: "/images/playground-bridge.jpg",
    alt: "Bridge view on a sunny day",
    caption: "First time in NY, DUMBO!",
    x: "44%",
    y: "10%",
    hoverRotate: 3,
    width: 186,
  },
  {
    image: "/images/playground-graduation.jpg",
    alt: "Kristi celebrating graduation",
    caption: "’26 UW alum",
    x: "73%",
    y: "2%",
    hoverRotate: -2,
    width: 220,
  },
  {
    image: "/images/playground-moment-01.jpg",
    alt: "Bagels and fresh toppings",
    caption: "Another NY moment… my favorite bagel at Apollo Bagels",
    x: "12%",
    y: "49%",
    hoverRotate: 3,
    width: 178,
  },
  {
    image: "/images/playground-moment-02.jpg",
    alt: "A small dog looking up",
    caption: "Say hi to Hodoo! (Walnut)",
    x: "43%",
    y: "60%",
    hoverRotate: -3,
    width: 194,
  },
  {
    image: "/images/kristi-about.jpg",
    alt: "Kristi in Seattle",
    caption: "Add sixth description here",
    x: "76%",
    y: "56%",
    hoverRotate: 2,
    width: 166,
  },
];

export default function PlaygroundBoard() {
  return (
    <div className="playground-board">
      {photos.map((photo, index) => (
        <figure
          className="playground-photo"
          key={photo.alt}
          style={
            {
              "--photo-x": photo.x,
              "--photo-y": photo.y,
              "--photo-hover-rotate": `${photo.hoverRotate}deg`,
              "--photo-width": `${photo.width}px`,
              zIndex: index + 1,
            } as CSSProperties
          }
        >
          <img src={photo.image} alt={photo.alt} draggable={false} />
          <figcaption>
            [{String(index + 1).padStart(2, "0")}] {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
