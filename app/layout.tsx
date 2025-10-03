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
  title: "Shubham - Portfolio | Full-Stack Developer & UI/UX Designer",
  description: "Professional portfolio showcasing my expertise in UI/UX design, web development, and digital marketing. Specializing in modern web technologies and creating exceptional user experiences.",
  keywords: "portfolio, web developer, UI/UX designer, full-stack developer, React, Next.js, Tailwind CSS",
  authors: [{ name: "Shubham" }],
  creator: "Shubham",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.com",
    title: "Shubham - Portfolio | Full-Stack Developer & UI/UX Designer",
    description: "Professional portfolio showcasing my expertise in UI/UX design, web development, and digital marketing.",
    siteName: "Shubham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham - Portfolio | Full-Stack Developer & UI/UX Designer",
    description: "Professional portfolio showcasing my expertise in UI/UX design, web development, and digital marketing.",
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
