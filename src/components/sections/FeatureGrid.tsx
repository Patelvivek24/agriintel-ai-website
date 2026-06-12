"use client";

import {
  Brain,
  Droplets,
  Layers,
  Scan,
  TrendingUp,
  BarChart3,
  Award,
  Users,
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

// AI Crop Advisor Illustration: Interconnected neural points pulsing with a central glowing core.
const AIAdvisorIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center bg-emerald-500/5">
    <div className="absolute h-20 w-20 rounded-full border border-emerald-500/10 animate-ping [animation-duration:3s]" />
    <div className="absolute h-14 w-14 rounded-full border border-emerald-500/20" />
    <div className="absolute h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
      <div className="h-4 w-4 rounded-full bg-emerald-500/30 animate-pulse" />
    </div>
    
    {/* Floating network nodes */}
    <div className="absolute top-4 left-6 h-2 w-2 rounded-full bg-emerald-400/80 animate-[bounce_2.5s_infinite]" />
    <div className="absolute bottom-4 right-8 h-1.5 w-1.5 rounded-full bg-teal-400/80 animate-[bounce_3s_infinite_0.5s]" />
    <div className="absolute top-10 right-5 h-2 w-2 rounded-full bg-emerald-300/80 animate-[bounce_2s_infinite_1.2s]" />
    
    <svg className="absolute inset-0 h-full w-full stroke-emerald-500/15 stroke-1 fill-none">
      <path d="M15,25 L50,50 L85,25 M15,75 L50,50 L85,75 M50,15 L50,85" strokeDasharray="3,3" />
    </svg>
  </div>
);

// Smart Irrigation Management Illustration: Concentric water rings and active sprinkler sprays.
const IrrigationIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center bg-sky-500/5 overflow-hidden">
    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-sky-400/10 to-transparent animate-[pulse_2.5s_infinite]" />
    
    <div className="relative h-12 w-12 rounded-full border border-sky-400/25 flex items-center justify-center">
      <div className="absolute h-10 w-10 rounded-full border border-dashed border-sky-400/35 animate-[spin_12s_linear_infinite]" />
      <div className="h-4 w-4 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_12px_rgba(14,165,233,0.4)]">
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </div>
    </div>
    
    {/* Water particles */}
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="absolute w-1 h-2 rounded-full bg-sky-400/70 animate-float-medium"
        style={{
          left: `${22 + i * 18}%`,
          top: `${20 + (i % 2) * 15}%`,
          animationDelay: `${i * 0.4}s`,
          animationDuration: `${3.5 + i * 0.5}s`,
        }}
      />
    ))}
  </div>
);

// Soil Health Analytics: Stratified soil profile layers with nutrient content metrics.
const SoilAnalyticsIllustration = () => (
  <div className="relative h-full w-full flex flex-col justify-end p-4 bg-amber-500/5 overflow-hidden">
    {/* Layers representing soil profile */}
    <div className="w-full h-3.5 rounded bg-amber-800/20 mb-1 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full bg-amber-800/40 w-3/4 animate-[shimmer_3.5s_infinite]" />
    </div>
    <div className="w-full h-4 rounded bg-amber-700/15 mb-1 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full bg-amber-700/30 w-1/2 animate-[shimmer_4.5s_infinite_1s]" />
    </div>
    <div className="w-full h-4.5 rounded bg-amber-600/10 relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full bg-amber-600/20 w-5/6 animate-[shimmer_5.5s_infinite_0.5s]" />
    </div>
    
    {/* Nutrient Pills */}
    <div className="absolute top-2.5 left-4 flex gap-1.5">
      <div className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-green-500/15 text-green-600 border border-green-500/25">N</div>
      <div className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-amber-500/15 text-amber-600 border border-amber-500/25">P</div>
      <div className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-sky-500/15 text-sky-600 border border-sky-500/25">K</div>
    </div>
    
    <div className="absolute top-8 right-6 h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
    <div className="absolute top-12 right-12 h-1 w-1 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: "0.7s" }} />
  </div>
);

// Disease Detection AI: Scanner viewport tracking crop health.
const DiseaseDetectionIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center bg-rose-500/5 overflow-hidden">
    {/* Stylized leaf */}
    <div className="relative w-14 h-10 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center transform rotate-12">
      <div className="w-10 h-0.5 bg-emerald-500/20 absolute" />
      {/* Target infection spot */}
      <div className="absolute top-2 left-3 h-2.5 w-2.5 rounded-full bg-rose-500/30 border border-rose-500/50 animate-ping" />
      <div className="absolute top-2.5 left-3.5 h-1.5 w-1.5 rounded-full bg-rose-600" />
    </div>
    
    {/* Target reticle */}
    <div className="absolute inset-4 border border-rose-500/25 rounded-lg">
      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-rose-500" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-rose-500" />
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-rose-500" />
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-rose-500" />
    </div>
    
    {/* Scanning ray */}
    <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-rose-500/60 to-transparent animate-[shimmer_2s_linear_infinite]" />
  </div>
);

// Market Price Tracker: Financial trend lines with glowing upward momentum indicator.
const MarketTrackerIllustration = () => (
  <div className="relative h-full w-full flex items-end justify-center bg-indigo-500/5 p-2 overflow-hidden">
    <div className="absolute inset-0 flex flex-col justify-between p-2 opacity-5">
      <div className="h-px bg-indigo-500 w-full" />
      <div className="h-px bg-indigo-500 w-full" />
      <div className="h-px bg-indigo-500 w-full" />
    </div>
    
    <svg className="w-full h-14 absolute bottom-2 left-0" viewBox="0 0 100 50" preserveAspectRatio="none">
      <defs>
        <linearGradient id="indigoGlowGrid" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,45 C15,35 25,48 40,25 C55,5 70,30 100,8 L100,50 L0,50 Z" fill="url(#indigoGlowGrid)" />
      <path d="M0,45 C15,35 25,48 40,25 C55,5 70,30 100,8" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
    
    <div className="absolute top-3 right-4 bg-emerald-500 text-white font-bold text-[8px] px-1 py-0.5 rounded flex items-center gap-0.5 animate-bounce shadow">
      <span>▲</span><span>+14.2%</span>
    </div>
  </div>
);

// Yield Prediction Engine: Bar graphs representing growth predictions.
const YieldPredictionIllustration = () => (
  <div className="relative h-full w-full flex items-end justify-around p-4 bg-lime-500/5">
    <div className="w-3.5 h-[35%] bg-lime-500/30 rounded-t relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-lime-500/40 rounded-t" />
    </div>
    <div className="w-3.5 h-[55%] bg-lime-500/30 rounded-t relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-lime-500/50 rounded-t" />
    </div>
    <div className="w-3.5 h-[80%] bg-lime-500/30 rounded-t relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-lime-500/60 rounded-t" />
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-lime-600 text-white text-[7px] font-bold px-1 rounded animate-pulse">98%</div>
    </div>
    <div className="w-3.5 h-[95%] bg-emerald-500/30 rounded-t relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-emerald-500/80 rounded-t animate-pulse" />
    </div>
    
    <svg className="absolute inset-0 h-full w-full stroke-emerald-500/40 stroke-1 fill-none overflow-visible pointer-events-none">
      <path d="M15,35 C35,28 55,18 85,12" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3,3" />
    </svg>
  </div>
);

// Government Scheme Discovery: Document matching with approved seal.
const SchemeDiscoveryIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center bg-amber-500/5">
    <div className="relative h-18 w-13 rounded border border-amber-500/20 bg-white/95 shadow-sm flex flex-col p-1.5 gap-1.5">
      <div className="w-7 h-1 bg-amber-500/30 rounded" />
      <div className="w-9 h-0.5 bg-amber-500/15 rounded" />
      <div className="w-8 h-0.5 bg-amber-500/15 rounded" />
      <div className="w-9 h-0.5 bg-amber-500/15 rounded" />
      
      {/* Verify Badge */}
      <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center animate-pulse">
        <svg className="h-3 w-3 stroke-amber-600 stroke-2 fill-none" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
    
    <div className="absolute h-14 w-14 rounded-full border border-dashed border-amber-500/15 animate-[spin_25s_linear_infinite]" />
  </div>
);

// Expert Consultation Hub: Video-call profiles with green active indicators.
const ExpertHubIllustration = () => (
  <div className="relative h-full w-full flex items-center justify-center bg-pink-500/5 gap-2">
    <div className="relative animate-float-medium">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 border border-white flex items-center justify-center text-white text-[9px] font-semibold shadow">
        DR
      </div>
      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white animate-pulse" />
    </div>
    
    <div className="relative animate-float-medium" style={{ animationDelay: "0.4s" }}>
      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border border-white flex items-center justify-center text-white text-[9px] font-semibold shadow">
        AG
      </div>
      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white animate-pulse" />
    </div>

    <div className="relative animate-float-medium" style={{ animationDelay: "0.8s" }}>
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-500 border border-white flex items-center justify-center text-white text-[9px] font-semibold shadow">
        SO
      </div>
      <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white animate-pulse" />
    </div>
  </div>
);

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Crop Advisor",
    description: "Deep-learning recommendations mapping crop selections to micro-climates, soil conditions, and revenue history.",
    meta: "AI recommendation engine",
    accent: "from-emerald-500 to-teal-600",
    illustration: <AIAdvisorIllustration />,
  },
  {
    icon: Droplets,
    title: "Smart Irrigation Management",
    description: "Automate and schedule precision irrigation matching live weather forecasts and real-time soil moisture sensors.",
    meta: "Sensors & satellite loops",
    accent: "from-sky-500 to-blue-600",
    illustration: <IrrigationIllustration />,
  },
  {
    icon: Layers,
    title: "Soil Health Analytics",
    description: "Instant metrics mapping nitrogen, phosphorus, potassium (NPK), pH, organic carbon, and thermal index levels.",
    meta: "Live NPK tracking",
    accent: "from-amber-600 to-yellow-500",
    illustration: <SoilAnalyticsIllustration />,
  },
  {
    icon: Scan,
    title: "Disease Detection AI",
    description: "Upload snapshots of crops to identify blight, pests, or nutrient deficiencies within seconds via custom-trained vision models.",
    meta: "98% diagnostic accuracy",
    accent: "from-rose-500 to-red-600",
    illustration: <DiseaseDetectionIllustration />,
  },
  {
    icon: TrendingUp,
    title: "Market Price Tracker",
    description: "Compare crop valuations in real-time across national markets with predictive analytics to optimize sell cycles.",
    meta: "Live mandis index",
    accent: "from-purple-500 to-indigo-600",
    illustration: <MarketTrackerIllustration />,
  },
  {
    icon: BarChart3,
    title: "Yield Prediction Engine",
    description: "Estimate harvest volume outputs and projected profits through historical trends combined with dynamic regional forecasts.",
    meta: "Yield per hectare",
    accent: "from-lime-500 to-emerald-600",
    illustration: <YieldPredictionIllustration />,
  },
  {
    icon: Award,
    title: "Government Scheme Discovery",
    description: "Smart filters checking eligibility criteria for active grants, agricultural subsidies, and policy benefits in your region.",
    meta: "Policy matching",
    accent: "from-yellow-500 to-amber-600",
    illustration: <SchemeDiscoveryIllustration />,
  },
  {
    icon: Users,
    title: "Expert Consultation Hub",
    description: "Get direct consultation from verified agronomists, soil doctors, and research specialists via chat and scheduled video calls.",
    meta: "24/7 live experts",
    accent: "from-pink-500 to-fuchsia-600",
    illustration: <ExpertHubIllustration />,
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      {/* Decorative background blurs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle,oklch(0.85_0.12_150/0.2),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.18_90/0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Capabilities
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Everything You Need to{" "}
            <span className="text-gradient">Grow Smarter</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Harness artificial intelligence, advanced analytics, and remote monitoring tools to
            increase yield, preserve resources, and optimize profit.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <FeatureGridCard key={f.title} feature={f} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureGridCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Glowing boundary line border on hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/0 to-white/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/20 group-hover:to-[oklch(0.72_0.18_148/0.3)] blur-[2px] transition-all duration-500" />
      
      {/* Main card box */}
      <div className="relative h-full rounded-3xl glass p-6 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-float">
        <div>
          {/* Custom micro-illustration container */}
          <div className="relative h-28 rounded-2xl bg-gradient-to-br from-white/70 to-[oklch(0.97_0.03_150)] border border-white/60 overflow-hidden mb-5 flex items-center justify-center shadow-inner">
            {feature.illustration}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
            />
          </div>

          {/* Header Row: Icon + Arrow */}
          <div className="flex items-center justify-between mb-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} text-white shadow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="h-7 w-7 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {feature.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
          <span className="text-[10px] font-medium text-muted-foreground/80 tracking-wide">
            {feature.meta}
          </span>
          <span className="text-[10px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
            Details <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
