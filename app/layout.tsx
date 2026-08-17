import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { AsciiFooter } from "./AsciiFooter";
import { PortfolioMotion } from "./PortfolioMotion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kristi Kim - UX Portfolio",
  description:
    "A modern, minimal UX portfolio with selected case studies and an editorial design sensibility.",
  icons: {
    icon: "/kristi-logo.svg",
    shortcut: "/kristi-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <PortfolioMotion />
        {children}
        <AsciiFooter />
      </body>
    </html>
  );
}
