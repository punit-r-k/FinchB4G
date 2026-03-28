import type { Metadata } from "next";
import { stat } from "node:fs/promises";
import { join } from "node:path";

import {
  LinketLanding,
  type LandingDemoMedia,
} from "@/components/linket-landing";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description:
    "Linket keychains share your digital profile with a single tap. Customize the hardware, control every link, and see analytics from the very first introduction.",
  openGraph: {
    description:
      "From the first tap to saved contact, Linket keeps intros warm. NFC + QR hardware, live editing, and analytics built for students, creators, and teams.",
    images: [
      {
        alt: "Linket logo mark.",
        height: 768,
        url: "/linket/og.png",
        width: 1366,
      },
    ],
    title: "Linket - Stay Connected",
  },
  title: "Linket Connect",
  twitter: {
    card: "summary_large_image",
    description:
      "Linket is the customizable tap-to-share keychain that keeps your information current with every scan.",
    images: ["/linket/og.png"],
    title: "Stay Connected",
  },
};

async function hasUsablePublicAsset(path: string, minBytes = 1024) {
  const relativePath = path.replace(/^\/+/, "");

  try {
    const file = await stat(join(process.cwd(), "public", relativePath));

    return file.isFile() && file.size >= minBytes;
  } catch {
    return false;
  }
}

async function resolveLandingDemoMedia(): Promise<LandingDemoMedia> {
  const [hasVideo, hasPoster] = await Promise.all([
    hasUsablePublicAsset("/linket/mockups/demo.mp4"),
    hasUsablePublicAsset("/linket/mockups/video-poster.jpg"),
  ]);

  return {
    posterSrc: hasPoster ? "/linket/mockups/video-poster.jpg" : null,
    videoSrc: hasVideo ? "/linket/mockups/demo.mp4" : null,
  };
}

function buildDateRange() {
  const now = new Date();
  const start = new Date(now);

  start.setDate(now.getDate() - 30);

  const formatDate = (value: Date) =>
    value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return `${formatDate(start)} - ${formatDate(now)}`;
}

export default async function Home() {
  const media = await resolveLandingDemoMedia();

  return (
    <LinketLanding
      currentYear={new Date().getFullYear()}
      dateRange={buildDateRange()}
      media={media}
    />
  );
}
