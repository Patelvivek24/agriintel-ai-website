import {
  CloudSun,
  Sprout,
  ScanLine,
  LineChart,
  TrendingUp,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  accent: string;
  illustration: React.ReactNode;
};

const WeatherIllustration = () => (
  <div className="relative h-full w-full">
    <div className="absolute top-3 right-4 h-10 w-10 rounded-full bg-yellow-300/80 shadow-[0_0_30px_rgba(250,204,21,0.6)] animate-pulse-glow" />
    <div className="absolute bottom-3 left-3 right-6 h-10 rounded-full bg-white/80 backdrop-blur" />
    <div className="absolute bottom-2 left-8 h-7 w-20 rounded-full bg-white shadow" />
    <div className="absolute bottom-0 left-6 flex gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-3 w-0.5 rounded-full bg-sky-400 animate-float-medium"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  </div>
);

const CropIllustration = () => (
  <div className="relative h-full w-full">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="absolute bottom-2 w-1 rounded-full bg-gradient-to-t from-green-700 to-green-400 animate-float-medium origin-bottom"
        style={{
          left: `${15 + i * 15}%`,
          height: `${30 + (i % 3) * 12}px`,
          animationDelay: `${i * 0.25}s`,
        }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-green-500" />
      </div>
    ))}
    <div className="absolute bottom-0 inset-x-0 h-2 rounded-full bg-amber-200/70" />
  </div>
);

const DiseaseIllustration = () => (
  <div className="relative h-full w-full">
    <div className="absolute inset-x-4 top-3 bottom-3 rounded-xl border border-primary/40 bg-white/60 overflow-hidden">
      <div className="absolute left-3 top-3 h-6 w-6 rounded-full bg-green-400/80" />
      <div className="absolute right-4 bottom-3 h-4 w-8 rounded-full bg-green-500/70" />
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-[shimmer_2s_linear_infinite]" />
    </div>
    <div className="absolute right-2 top-2 h-3 w-3 rounded-full bg-red-500 animate-pulse-glow" />
  </div>
);

const MarketIllustration = () => (
  <div className="relative h-full w-full flex items-end justify-around px-3 pb-2">
    {[40, 65, 50, 80, 60, 90].map((h, i) => (
      <div
        key={i}
        className="w-2.5 rounded-t bg-gradient-to-t from-primary to-[oklch(0.72_0.18_148)] animate-float-medium"
        style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

const YieldIllustration = () => (
  <div className="relative h-full w-full">
    <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="yg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 148)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 148)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,40 C20,30 30,35 45,22 C60,10 75,18 100,5 L100,50 L0,50 Z"
        fill="url(#yg)"
      />
      <path
        d="M0,40 C20,30 30,35 45,22 C60,10 75,18 100,5"
        fill="none"
        stroke="oklch(0.55 0.16 150)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
    <div className="absolute top-2 right-3 h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
  </div>
);

const ExpertIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center gap-2">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="relative animate-float-medium"
        style={{ animationDelay: `${i * 0.3}s` }}
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-[oklch(0.72_0.18_148)] shadow-glow" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white" />
      </div>
    ))}
  </div>
);

const features: Feature[] = [
  {
    icon: CloudSun,
    title: "Weather Intelligence",
    description: "AI-powered weather forecasting and risk alerts so you can act before the storm.",
    meta: "Real-time + 14-day forecast",
    accent: "from-sky-400 to-blue-500",
    illustration: <WeatherIllustration />,
  },
  {
    icon: Sprout,
    title: "Crop Recommendation Engine",
    description: "Personalized crop suggestions based on soil, climate, and farm conditions.",
    meta: "Soil · Climate · Yield-fit",
    accent: "from-emerald-400 to-green-600",
    illustration: <CropIllustration />,
  },
  {
    icon: ScanLine,
    title: "Disease Detection AI",
    description: "Instantly identify crop diseases from uploaded images with 98% accuracy.",
    meta: "Image diagnosis in seconds",
    accent: "from-rose-400 to-red-500",
    illustration: <DiseaseIllustration />,
  },
  {
    icon: LineChart,
    title: "Market Intelligence",
    description: "Track crop prices across local and national markets to sell at the right moment.",
    meta: "Live mandi & national rates",
    accent: "from-amber-400 to-orange-500",
    illustration: <MarketIllustration />,
  },
  {
    icon: TrendingUp,
    title: "Yield Prediction",
    description: "Forecast harvest output and revenue potential with predictive analytics.",
    meta: "Per-hectare projections",
    accent: "from-lime-400 to-emerald-500",
    illustration: <YieldIllustration />,
  },
  {
    icon: Headphones,
    title: "Expert Consultation",
    description: "Connect directly with agricultural specialists, on call when you need them.",
    meta: "24/7 expert network",
    accent: "from-violet-400 to-fuchsia-500",
    illustration: <ExpertIllustration />,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.12_150/0.25),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.18_90/0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Platform Capabilities
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            One Intelligent Platform for{" "}
            <span className="text-gradient">Modern Agriculture</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Leverage artificial intelligence, predictive analytics, and real-time insights to
            optimize every stage of farming.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group relative">
      <div className="absolute -inset-px rounded-3xl bg-[image:var(--gradient-primary)] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      <div className="relative h-full rounded-3xl glass p-6 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[var(--shadow-float)]">
        {/* Illustration */}
        <div className="relative h-32 rounded-2xl bg-gradient-to-br from-white/80 to-[oklch(0.96_0.04_150)] border border-white overflow-hidden mb-5">
          {feature.illustration}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />
        </div>

        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

        <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">{feature.meta}</span>
          <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
}
