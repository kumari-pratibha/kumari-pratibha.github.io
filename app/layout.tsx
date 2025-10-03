import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumari Pratibha - Portfolio | Product Designer (UI/UX)",
  description: "Product Designer with 6+ years of experience translating complex workflows into intuitive, user-centered interfaces. Specialized in user research, design systems, and creating seamless cross-platform experiences.",
  keywords: "portfolio, product designer, UI/UX designer, user research, design systems, Figma, user experience, accessibility, wireframing, prototyping",
  authors: [{ name: "Kumari Pratibha" }],
  creator: "Kumari Pratibha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratibhadesign.in",
    title: "Kumari Pratibha - Portfolio | Product Designer (UI/UX)",
    description: "Product Designer with 6+ years of experience translating complex workflows into intuitive, user-centered interfaces. Specialized in user research, design systems, and creating seamless cross-platform experiences.",
    siteName: "Kumari Pratibha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumari Pratibha - Portfolio | Product Designer (UI/UX)",
    description: "Product Designer with 6+ years of experience translating complex workflows into intuitive, user-centered interfaces. Specialized in user research, design systems, and creating seamless cross-platform experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
