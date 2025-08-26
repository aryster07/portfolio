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
  title: "7framesaryan - Professional Portfolio | Aryan Rana UI/UX Designer & Developer",
  description: "7framesaryan - Professional Portfolio of Aryan Rana, creative UI/UX designer and web developer from Himachal Pradesh, India. Official website showcasing professional design work, development projects, and digital solutions.",
  keywords: [
    "7framesaryan",
    "7framesaryan professional portfolio",
    "7framesaryan.me",
    "7framesaryan official website",
    "7framesaryan UI UX designer",
    "7framesaryan web developer",
    "Aryan Rana",
    "7frames aryan",
    "Aryan Rana portfolio", 
    "7framesaryan portfolio",
    "professional portfolio",
    "UI UX designer India",
    "web developer Himachal Pradesh",
    "creative professional India",
    "portfolio website",
    "user experience designer",
    "digital designer",
    "web design services",
    "frontend developer",
    "Himachal Pradesh designer",
    "Indian web developer",
    "creative portfolio",
    "design portfolio",
    "professional portfolio",
    "Aryan Rana designer",
    "Aryan Rana developer",
    "7framesaryan designer",
    "7framesaryan developer",
    "7frames_aryan",
    "Aryan Rana UI UX",
    "7framesaryan UI UX"
  ],
  authors: [{ name: "Aryan Rana (7framesaryan)", url: "https://aryanrana.com" }],
  creator: "Aryan Rana (7framesaryan)",
  publisher: "Aryan Rana",
  category: "Portfolio",
  classification: "Business",
  applicationName: "Aryan Rana Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add your actual verification code
    yandex: "your-yandex-verification-code", // Add your actual verification code
  },
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
    url: "https://7frames-aryan-portfolio.vercel.app",
    title: "7framesaryan - Professional Portfolio | Aryan Rana UI/UX Designer & Developer",
    description: "7framesaryan - Professional Portfolio of Aryan Rana, creative UI/UX designer and web developer from Himachal Pradesh, India. Official website showcasing professional work.",
    siteName: "7framesaryan Professional Portfolio",
    images: [
      {
        url: '/images/profile/20250206_051456000_iOS.jpg',
        width: 1200,
        height: 630,
        alt: '7framesaryan - Professional Portfolio | Aryan Rana',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7framesaryan - Professional Portfolio",
    description: "7framesaryan - Professional Portfolio of Aryan Rana, UI/UX designer and web developer from Himachal Pradesh. Official website showcasing professional design and development work.",
    images: ['/images/profile/20250206_051456000_iOS.jpg'],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "7framesaryan",
    "alternateName": ["Aryan Rana", "7frames_aryan", "7frames aryan"],
    "jobTitle": "Professional UI/UX Designer & Web Developer",
    "description": "7framesaryan - Professional Portfolio. Creative UI/UX designer and web developer from Himachal Pradesh, India. Specializing in web development, user experience design, and digital solutions.",
    "url": "https://7frames-aryan-portfolio.vercel.app",
    "mainEntityOfPage": "https://7frames-aryan-portfolio.vercel.app",
    "image": "https://7frames-aryan-portfolio.vercel.app/images/profile/20250206_051456000_iOS.jpg",
    "sameAs": [
      "https://aryandesign.vercel.app/",
      "https://aryanphotography.vercel.app/",
      "https://github.com/aryster07",
      "https://www.instagram.com/7frames_aryan/"
    ],
    "address": {
      "@type": "Place",
      "addressRegion": "Himachal Pradesh",
      "addressCountry": "India"
    },
    "knowsAbout": [
      "UI/UX Design",
      "Web Development",
      "User Experience",
      "Frontend Development",
      "Digital Design",
      "Creative Design"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UI/UX Designer & Web Developer",
      "occupationLocation": {
        "@type": "Place",
        "addressRegion": "Himachal Pradesh",
        "addressCountry": "India"
      }
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/profile/20250206_051456000_iOS.jpg" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_designer_clean.png" as="image" />
        <link rel="preload" href="/images/bitmoji/bitmoji_photographer_clean.png" as="image" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://aryanrana.com/" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aryan Rana Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
