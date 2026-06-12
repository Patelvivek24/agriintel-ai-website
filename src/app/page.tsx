import { Header } from "@/components/common/Header";
import { Hero } from "@/components/sections/Hero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { DiseaseDetectionShowcase } from "@/components/sections/DiseaseDetectionShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stakeholders } from "@/components/sections/Stakeholders";
import { Stats } from "@/components/sections/Stats";
import { Challenges } from "@/components/sections/Challenges";
import { SuccessStories } from "@/components/sections/SuccessStories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgriIntel AI — AI-Powered Smart Farming Platform",
  description:
    "Monitor crops, predict yields, detect diseases, and track market prices with AgriIntel AI — the intelligent agriculture platform for modern farmers.",
  openGraph: {
    title: "AgriIntel AI — AI-Powered Smart Farming Platform",
    description:
      "Transform agriculture with AI-driven intelligence. Yield forecasting, pest detection, and market insights in one platform.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <Hero />
      <FeatureGrid />
      <DiseaseDetectionShowcase />
      <HowItWorks />
      <Stakeholders />
      <Stats />
      <Challenges />
      <SuccessStories />
    </main>
  );
}
