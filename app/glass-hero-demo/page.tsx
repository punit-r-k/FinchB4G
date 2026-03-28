import type { Metadata } from "next";

import HeroSection from "@/components/ui/glassmorphism-trust-hero";

export const metadata: Metadata = {
  title: "Glass Hero Demo",
  description:
    "Standalone demo route for the imported glassmorphism trust hero component.",
};

export default function GlassHeroDemoPage() {
  return <HeroSection />;
}
