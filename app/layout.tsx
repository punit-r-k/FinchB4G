import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

import { SiteShell } from "@/components/site-shell";
import { normalizeTheme } from "@/lib/theme";

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finch | Turn Applications Into Interviews.",
    template: "%s | Finch",
  },
  description:
    "Finch helps students stop mass applying blindly and start applying with more strategy, more speed, and better interview odds.",
  applicationName: "Finch",
  keywords: [
    "Finch",
    "student recruiting",
    "internship applications",
    "application strategy",
    "early access",
  ],
  metadataBase: new URL("https://finch.local"),
  openGraph: {
    title: "Finch | Turn Applications Into Interviews.",
    description:
      "A polished student-focused product brand for intentional recruiting, faster workflows, and higher-signal applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finch | Turn Applications Into Interviews.",
    description:
      "Stop mass applying. Start applying with strategy.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialTheme = normalizeTheme(cookieStore.get("finch-theme")?.value);

  return (
    <html
      className={`${bodyFont.variable} ${displayFont.variable}`}
      data-theme={initialTheme}
      lang="en"
      suppressHydrationWarning
    >
      <body className="siteBody">
        <SiteShell initialTheme={initialTheme}>{children}</SiteShell>
      </body>
    </html>
  );
}
