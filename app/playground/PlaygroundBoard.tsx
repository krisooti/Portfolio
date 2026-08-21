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
    caption: "Fireworks over the city",
    x: "2%",
    y: "0%",
    hoverRotate: -3,
    width: 214,
  },
  {
    image: "/images/playground-bridge.jpg",
    alt: "Bridge view on a sunny day",
    caption: "Manhattan Bridge",
    x: "44%",
    y: "10%",
    hoverRotate: 3,
    width: 186,
  },
  {
    image: "/images/playground-graduation.jpg",
    alt: "Kristi celebrating graduation",
    caption: "Graduation day",
    x: "73%",
    y: "2%",
    hoverRotate: -2,
    width: 220,
  },
  {
    image: "/images/playground-moment-01.jpg",
    alt: "Bagels and fresh toppings",
    caption: "Bagels and cucumbers",
    x: "12%",
    y: "49%",
    hoverRotate: 3,
    width: 178,
  },
  {
    image: "/images/playground-dog.jpg",
    alt: "Kristi posing with her dog beneath cherry blossoms",
    caption: "Cherry blossoms",
    x: "43%",
    y: "60%",
    hoverRotate: -3,
    width: 194,
  },
  {
    image: "/images/playground-flowers.jpg",
    alt: "A bouquet of white and blush flowers",
    caption: "A small bouquet",
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
          tabIndex={0}
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
          <figcaption className="playground-photo__caption">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
