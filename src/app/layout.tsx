import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "AgriIntel AI — AI-Powered Smart Farming Platform",
  description:
    "Monitor crops, predict yields, detect diseases, and track market prices with AgriIntel AI — the intelligent agriculture platform for modern farmers.",
  authors: [{ name: "AgriIntel AI" }],
  openGraph: {
    title: "AgriIntel AI — AI-Powered Smart Farming Platform",
    description:
      "Transform agriculture with AI-driven intelligence. Yield forecasting, pest detection, and market insights in one platform.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@AgriIntelAI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
