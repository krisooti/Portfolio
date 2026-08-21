import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Instrument_Serif, Newsreader } from "next/font/google";
import { AsciiFooter } from "./AsciiFooter";
import { PageLoader } from "./PageLoader";
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

const editorialSerif = Newsreader({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const homeHeroSerif = Instrument_Serif({
  variable: "--font-home-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${editorialSerif.variable} ${homeHeroSerif.variable} ${instrumentSans.variable}`}
    >
      <body className="antialiased">
        <PageLoader />
        <PortfolioMotion />
        {children}
        <AsciiFooter />
      </body>
    </html>
  );
}
