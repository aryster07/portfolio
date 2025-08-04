import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://7framesaryan.com",
    title: "7frames_aryan - Creative Professional Portfolio",
    description: "Passionate designer and photographer from Himachal Pradesh. Specializing in UI/UX design and visual storytelling.",
    siteName: "7frames_aryan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "7frames_aryan - Creative Professional Portfolio",
    description: "Passionate designer and photographer from Himachal Pradesh. Specializing in UI/UX design and visual storytelling.",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
