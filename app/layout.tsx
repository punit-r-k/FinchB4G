import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinchB4G",
  description: "A clean Next.js frontend starter ready to customize and publish on Vercel.",
  applicationName: "FinchB4G",
  keywords: ["Next.js", "Vercel", "website starter", "FinchB4G"],
  openGraph: {
    title: "FinchB4G",
    description: "A clean Next.js frontend starter ready to customize and publish on Vercel.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinchB4G",
    description: "A clean Next.js frontend starter ready to customize and publish on Vercel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
