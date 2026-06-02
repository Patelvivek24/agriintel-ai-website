"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, CloudRain, Bug, TrendingUp, LineChart } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 18 }).map((_, i) => {
      const left = (i * 53) % 100;
      const delay = (i * 0.7) % 8;
      const duration = 8 + (i % 6);
      const size = 4 + (i % 4);
      return (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-primary/40 animate-particle"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            filter: "blur(1px)",
          }}
        />
      );
    })}
  </div>
);

const FloatingCard = ({
  icon: Icon,
  title,
  value,
  tone,
  className,
  delay,
}: {
  icon: typeof CloudRain;
  title: string;
  value: string;
  tone: string;
  className?: string;
  delay?: string;
}) => (
  <div
    className={`glass-strong absolute rounded-2xl px-4 py-3 shadow-float animate-float-medium ${className}`}
    style={{ animationDelay: delay }}
  >
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: tone }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
          {title}
        </p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <Particles />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col gap-7">
            <div className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 animate-float-slow">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                AI-Powered Smart Farming Platform
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Transform Agriculture with{" "}
              <span className="text-gradient">AI-Driven Intelligence</span>
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Monitor crops, predict yields, detect diseases, track market prices, and make smarter
              farming decisions through one intelligent platform.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" variant="hero">
                Start Free Trial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="glass">
                <Play className="mr-1 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-xs text-muted-foreground">Farms Connected</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Prediction Accuracy</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-xs text-muted-foreground">AI Monitoring</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative animate-float-slow">
              <DashboardMockup />
            </div>

            <FloatingCard
              icon={CloudRain}
              title="Weather Alert"
              value="Rain in 6h"
              tone="linear-gradient(135deg,#3b82f6,#06b6d4)"
              className="-left-6 top-10 lg:-left-12"
              delay="0s"
            />
            <FloatingCard
              icon={Bug}
              title="Pest Detection"
              value="Aphids · Low"
              tone="linear-gradient(135deg,#f97316,#ef4444)"
              className="-right-4 top-1/3 lg:-right-10"
              delay="1.2s"
            />
            <FloatingCard
              icon={LineChart}
              title="Yield Prediction"
              value="+12.4% YoY"
              tone="linear-gradient(135deg,#10b981,#059669)"
              className="-left-4 bottom-16 lg:-left-10"
              delay="0.6s"
            />
            <FloatingCard
              icon={TrendingUp}
              title="Market Insights"
              value="₹2,840 /qtl"
              tone="linear-gradient(135deg,#a855f7,#6366f1)"
              className="-right-6 bottom-6 lg:-right-12"
              delay="1.8s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
