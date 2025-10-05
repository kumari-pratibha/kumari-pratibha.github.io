import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumari Pratibha - Portfolio | Product Designer (UI/UX)",
  description: "Product Designer with 6+ years of experience translating complex workflows into intuitive, user-centered interfaces. Specialized in user research, design systems, and creating seamless cross-platform experiences.",
  keywords: "portfolio, product designer, UI/UX designer, user research, design systems, Figma, user experience, accessibility, wireframing, prototyping",
  authors: [{ name: "Kumari Pratibha" }],
  creator: "Kumari Pratibha",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kumari-pratibha.github.io",
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
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
