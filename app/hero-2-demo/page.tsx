import type { Metadata } from "next";

import DemoOne from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Hero 2 Demo",
  description: "Standalone demo route for the imported hero-2 component.",
};

export default function HeroTwoDemoPage() {
  return <DemoOne />;
}
