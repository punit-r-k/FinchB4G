import type { Metadata } from "next";

import HeroDemo from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Glass Hero Demo",
  description:
    "Standalone demo route for the imported glassmorphism trust hero component.",
};

export default function GlassHeroDemoPage() {
  return <HeroDemo />;
}
