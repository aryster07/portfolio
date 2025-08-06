import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "7frames_aryan - Creative Professional Portfolio",
  description: "Passionate designer and photographer from Himachal Pradesh. Specializing in UI/UX design and visual storytelling with an unwavering love for art and perfection.",
  keywords: ["portfolio", "designer", "photographer", "UI/UX", "Himachal Pradesh", "creative", "visual storytelling"],
  authors: [{ name: "Aryan", url: "https://7framesaryan.com" }],
  creator: "Aryan",
  icons: {
    icon: [
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '16x16', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/images/profile/20250206_051456000_iOS.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
    shortcut: '/images/profile/20250206_051456000_iOS.jpg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://7framesaryan.com",
    title: "7frames_aryan - Creative Professional Portfolio",
    description: "Passionate designer and photographer from Himachal Pradesh. Specializing in UI/UX design and visual storytelling.",
    siteName: "7frames_aryan Portfolio",
    images: [
      {
        url: '/images/profile/20250206_051456000_iOS.jpg',
        width: 1200,
        height: 630,
        alt: 'Aryan Profile Picture',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7frames_aryan - Creative Professional Portfolio",
    description: "Passionate designer and photographer from Himachal Pradesh. Specializing in UI/UX design and visual storytelling.",
    images: ['/images/profile/20250206_051456000_iOS.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/profile/20250206_051456000_iOS.jpg" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_designer_clean.png" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_photographer_clean.png" as="image" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
