import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smooth Scrolling Landing Page",
  description: "A modern landing page built with Next.js, GSAP, and Locomotive Scroll v5 featuring smooth scroll interactions and animations.",
  keywords: ["Next.js", "GSAP", "Locomotive Scroll", "smooth scrolling", "landing page", "web animations"],
  authors: [{ name: "Saith Waqas Ali" }],
  openGraph: {
    title: "Smooth Scrolling Landing Page",
    description: "A modern landing page built with Next.js, GSAP, and Locomotive Scroll v5 featuring smooth scroll interactions and animations.",
    url: "https://yourwebsite.com",
    siteName: "Smooth Scroll Demo",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Landing page preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
