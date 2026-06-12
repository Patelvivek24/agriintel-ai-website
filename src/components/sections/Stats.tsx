"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sprout,
  TrendingDown,
  Droplet,
  Users,
  Leaf,
  Globe,
  type LucideIcon,
} from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ value, duration = 2000, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Cubic ease-out curve for smooth slowing down at the end
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            setCount(Math.floor(easeProgress * value));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

type StatItem = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  gradientClass: string;
  glowColor: string;
  iconBgGradient: string;
};

const statsData: StatItem[] = [
  {
    value: 30,
    suffix: "%",
    label: "Increase in Crop Yield",
    description: "AI-optimized nutrition recommendations, soil monitoring, and seeding rates maximize yield per acre.",
    icon: Sprout,
    badge: "Yield",
    gradientClass: "from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300",
    glowColor: "rgba(16,185,129,0.12)",
    iconBgGradient: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    value: 40,
    suffix: "%",
    label: "Reduction in Crop Losses",
    description: "Early disease detection, real-time pest tracking, and action plans mitigate risk before losses occur.",
    icon: TrendingDown,
    badge: "Loss Reduction",
    gradientClass: "from-orange-600 to-red-500 dark:from-orange-400 dark:to-red-300",
    glowColor: "rgba(249,115,22,0.12)",
    iconBgGradient: "from-orange-500/10 to-red-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  },
  {
    value: 25,
    suffix: "%",
    label: "Improved Water Efficiency",
    description: "Irrigation scheduling driven by soil sensors and evapotranspiration data saves water resources.",
    icon: Droplet,
    badge: "Sustainability",
    gradientClass: "from-blue-600 to-sky-500 dark:from-blue-400 dark:to-sky-300",
    glowColor: "rgba(14,165,233,0.12)",
    iconBgGradient: "from-blue-500/10 to-sky-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Farms Connected",
    description: "Growers around the world integrate sensors, machinery, and smart devices into our central platform.",
    icon: Users,
    badge: "Scale",
    gradientClass: "from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300",
    glowColor: "rgba(99,102,241,0.12)",
    iconBgGradient: "from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  },
  {
    value: 100,
    suffix: "+",
    label: "Crop Types Supported",
    description: "Differentiated agro-modeling engines analyze cereals, cash crops, orchard trees, and greenhouse greens.",
    icon: Leaf,
    badge: "Versatility",
    gradientClass: "from-amber-600 to-yellow-500 dark:from-amber-400 dark:to-yellow-300",
    glowColor: "rgba(245,158,11,0.12)",
    iconBgGradient: "from-amber-500/10 to-yellow-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  {
    value: 15,
    suffix: "+",
    label: "Regions Covered",
    description: "Serving diverse microclimates across distinct geographic territories and ecological zones.",
    icon: Globe,
    badge: "Coverage",
    gradientClass: "from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300",
    glowColor: "rgba(20,184,166,0.12)",
    iconBgGradient: "from-teal-500/10 to-emerald-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
  },
];

export const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32 border-t border-border/40">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/2" />
        <div className="absolute right-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Performance & Reach
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Driving Measurable <span className="text-gradient">Agricultural Impact</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            By connecting field telemetry with cognitive analytics, we enable growers and agribusinesses 
            to optimize productivity while preserving vital natural resources.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/75 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-card hover:border-primary/20 dark:border-border/30 dark:bg-card/40 dark:hover:bg-card/60"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Colored Ambient Glow on Hover */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70 dark:group-hover:opacity-40"
                  style={{ backgroundColor: stat.glowColor }}
                />

                <div className="relative flex items-center justify-between">
                  {/* Category Badge */}
                  <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground dark:bg-muted/30">
                    {stat.badge}
                  </span>
                  
                  {/* Premium Icon Container */}
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-br ${stat.iconBgGradient}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Counter and Typography */}
                <div className="mt-8">
                  <div className={`text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r ${stat.gradientClass} inline-block pb-1`}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Bottom Line Accent */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
