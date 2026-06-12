"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  UserPlus,
  Database,
  Radio,
  Brain,
  TrendingUp,
  Check,
  Cpu,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Droplet,
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Gauge
} from "lucide-react";
import { Button } from "@/components/ui/button";

type StepData = {
  num: number;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  details: string;
  badge: string;
};

const steps: StepData[] = [
  {
    num: 1,
    icon: UserPlus,
    title: "Register Your Farm",
    description: "Create your secure farm profile and map out your field boundaries.",
    details: "Establish your workspace by specifying location, soil type, and acreage. Our GPS-linked satellite mapping instantly pulls initial climate and terrain statistics.",
    badge: "Fast Setup"
  },
  {
    num: 2,
    icon: Database,
    title: "Add Farm Data",
    description: "Input crop histories, soil test results, and yield records.",
    details: "Upload historical reports or select from standard preset crops. The intelligence engine correlates this data with local soil compositions for custom baseline projections.",
    badge: "Smart Baselines"
  },
  {
    num: 3,
    icon: Radio,
    title: "Connect Sensors & Reports",
    description: "Link real-time IoT probes, weather stations, and drone telemetry.",
    details: "Establish automated live data streams. AgriIntel is compatible with major smart soil sensors, humidity gauges, and multispectral drone mapping files.",
    badge: "Live Telemetry"
  },
  {
    num: 4,
    icon: ReceiveAIInsightsIcon,
    title: "Receive AI Insights",
    description: "Get predictive risk models, pest alerts, and harvest timelines.",
    details: "Our trained neural networks scan sensor telemetry, detecting hydration stress, disease markers, and nitrogen depletion before physical signs appear.",
    badge: "Proactive AI"
  },
  {
    num: 5,
    icon: OptimizeFarmingDecisionsIcon,
    title: "Optimize Farming Decisions",
    description: "Execute precision actions to maximize yield and reduce inputs.",
    details: "Apply tailored micro-dosing fertilizer guides and smart irrigation schedules. Reach peak agricultural efficiency, save water, and increase harvest yields.",
    badge: "Peak Yield"
  }
];

function ReceiveAIInsightsIcon(props: any) {
  return <Brain {...props} />;
}

function OptimizeFarmingDecisionsIcon(props: any) {
  return <TrendingUp {...props} />;
}

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Form simulation state (Step 1)
  const [formState, setFormState] = useState<"typing" | "submitting" | "success">("typing");
  const [typedName, setTypedName] = useState<string>("");
  const [typedAcreage, setTypedAcreage] = useState<string>("");

  // Soil moisture slider state (Step 2)
  const [moistureValue, setMoistureValue] = useState<number>(28);

  // AI Insights slide index state (Step 4)
  const [aiInsightIndex, setAiInsightIndex] = useState<number>(0);

  // Auto-playing logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      }, 7000); // Cycle every 7 seconds
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Restart autoplay cycle when user changes active step
  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Pause auto-play to allow reading
  };

  // Step 1: Form Onboarding Simulator Loop
  useEffect(() => {
    if (activeIndex !== 0) {
      setFormState("typing");
      setTypedName("");
      setTypedAcreage("");
      return;
    }

    let t1: NodeJS.Timeout;
    let t2: NodeJS.Timeout;
    let t3: NodeJS.Timeout;
    let t4: NodeJS.Timeout;

    // Simulate typing "Green Meadows"
    const nameStr = "Meadow Ridge Farm";
    let nameIdx = 0;
    const typeName = () => {
      if (nameIdx < nameStr.length) {
        setTypedName((prev) => prev + nameStr[nameIdx]);
        nameIdx++;
        t1 = setTimeout(typeName, 60);
      } else {
        // Start typing acreage
        const sizeStr = "320";
        let sizeIdx = 0;
        const typeSize = () => {
          if (sizeIdx < sizeStr.length) {
            setTypedAcreage((prev) => prev + sizeStr[sizeIdx]);
            sizeIdx++;
            t2 = setTimeout(typeSize, 80);
          } else {
            // Wait, then submit
            t3 = setTimeout(() => {
              setFormState("submitting");
              // Wait, then succeed
              t4 = setTimeout(() => {
                setFormState("success");
              }, 1200);
            }, 600);
          }
        };
        t2 = setTimeout(typeSize, 200);
      }
    };

    t1 = setTimeout(typeName, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [activeIndex]);

  // Step 4: AI insight messages auto-switcher
  useEffect(() => {
    if (activeIndex !== 3) return;

    const interval = setInterval(() => {
      setAiInsightIndex((prev) => (prev + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Determine soil state text based on moistureValue
  const getMoistureState = () => {
    if (moistureValue < 20) return { label: "Critical Low", color: "text-red-500 bg-red-500/10 border-red-500/30" };
    if (moistureValue <= 35) return { label: "Optimal", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" };
    return { label: "Saturated", color: "text-sky-500 bg-sky-500/10 border-sky-500/30" };
  };

  const moistureState = getMoistureState();

  // Render Step Mockup Illustrations
  const renderIllustration = () => {
    switch (activeIndex) {
      case 0: // Register Your Farm
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">AGRIINTEL_REGISTER_v1.0</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/70">SESSION: ACTIVE</span>
            </div>

            {/* Form Onboarding Body */}
            <div className="flex-1 flex flex-col justify-center gap-4 my-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Farm Profile Name
                </label>
                <div className="h-10 w-full rounded-xl border border-border bg-background/50 px-3.5 flex items-center text-sm font-medium text-foreground relative">
                  {typedName}
                  {formState === "typing" && typedName.length < 17 && (
                    <span className="h-4 w-1 bg-primary/80 ml-0.5 animate-pulse" />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Total Acreage
                  </label>
                  <div className="h-10 w-full rounded-xl border border-border bg-background/50 px-3.5 flex items-center text-sm font-medium text-foreground relative">
                    {typedAcreage} {typedAcreage ? "Acres" : ""}
                    {formState === "typing" && typedName.length >= 17 && typedAcreage.length < 3 && (
                      <span className="h-4 w-1 bg-primary/80 ml-0.5 animate-pulse" />
                    )}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Crop Blueprint
                  </label>
                  <div className="h-10 w-full rounded-xl border border-border bg-background/50 px-3.5 flex items-center text-xs font-semibold text-primary">
                    {typedAcreage ? "Organic Wheat" : ""}
                  </div>
                </div>
              </div>

              {/* Satellite GPS Frame */}
              <div className="relative rounded-2xl border border-border/60 bg-muted/40 h-28 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:16px_16px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
                
                {/* GPS Scanning circle */}
                <div className="absolute h-20 w-20 rounded-full border border-primary/20 scale-90 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
                  <div className="h-4 w-4 rounded-full bg-primary/20 animate-ping" />
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="absolute bottom-2 right-3 text-[9px] font-mono text-muted-foreground/80 bg-background/80 border border-border/50 px-1.5 py-0.5 rounded">
                  GPS: 38.8977° N, 77.0365° W
                </span>
              </div>
            </div>

            {/* Submission Status Button */}
            <div className="w-full">
              {formState === "typing" && (
                <div className="h-11 w-full rounded-xl bg-muted border border-border text-xs font-semibold text-muted-foreground flex items-center justify-center">
                  Ready to Register Farm
                </div>
              )}
              {formState === "submitting" && (
                <div className="h-11 w-full rounded-xl bg-primary/20 border border-primary/40 text-xs font-semibold text-primary flex items-center justify-center gap-2">
                  <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  Connecting Satellite Diagnostics...
                </div>
              )}
              {formState === "success" && (
                <div className="h-11 w-full rounded-xl bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-glow animate-pulse">
                  <Check className="h-4 w-4" />
                  Farm Onboarded Successfully!
                </div>
              )}
            </div>
          </div>
        );

      case 1: // Add Farm Data
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-primary" />
                <span className="text-xs font-mono text-muted-foreground">SOIL_DATA_ENTRY_INDEX</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/70">DATABASE: COMPILED</span>
            </div>

            {/* Dashboard Indicators */}
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 space-y-1">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Soil pH Level</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">6.8</span>
                  <span className="text-[10px] font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded">Optimal</span>
                </div>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/40 p-4 space-y-1">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Soil Nitrogen (N)</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">42 <span className="text-xs font-medium text-muted-foreground">mg/kg</span></span>
                  <span className="text-[10px] font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded">Moderate</span>
                </div>
              </div>
            </div>

            {/* Interactive Slider Zone */}
            <div className="rounded-2xl border border-border bg-card p-4 space-y-3.5 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <Droplet className="h-4 w-4 text-sky-500" />
                  Moisture Level
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border rounded-full ${moistureState.color}`}>
                  {moistureState.label} ({moistureValue}%)
                </span>
              </div>
              
              <input
                type="range"
                min="5"
                max="65"
                value={moistureValue}
                onChange={(e) => {
                  setMoistureValue(parseInt(e.target.value));
                  setIsAutoPlaying(false); // Pause auto-play when user interacts
                }}
                className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />

              <div className="flex justify-between text-[9px] font-mono text-muted-foreground select-none">
                <span>5% (Dry)</span>
                <span>30% (Ideal)</span>
                <span>65% (Wet)</span>
              </div>
            </div>

            {/* Simulated Data Ingestion Pipeline */}
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground/80 bg-muted/30 border border-border/60 rounded-xl px-3 py-2">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Telemetry Stream Connected
              </span>
              <span className="font-semibold text-primary text-[9px]">INGESTING RECORDFILE_309...</span>
            </div>
          </div>
        );

      case 2: // Connect Sensors & Reports
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div className="flex items-center gap-2">
                <div className="relative h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  <span className="relative block h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">IOT_DEVICE_GATEWAY</span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground/70">PING: 4ms</span>
            </div>

            {/* IoT Sensor Network SVG Mapping */}
            <div className="flex-1 relative my-4 rounded-2xl border border-border/50 bg-black/5 dark:bg-black/20 flex items-center justify-center overflow-hidden min-h-[140px]">
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.16_150/0.05),transparent_80%)]" />
              
              <svg className="w-full h-full" viewBox="0 0 320 160">
                {/* Connection lines from nodes to center hub */}
                {/* Node 1: Top Left */}
                <path d="M 40 40 L 160 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                <path d="M 40 40 L 160 80" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="8 8" strokeDashoffset="0" className="opacity-80 animate-[shimmer_3s_linear_infinite]" />
                
                {/* Node 2: Bottom Left */}
                <path d="M 60 120 L 160 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                <path d="M 60 120 L 160 80" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="8 8" strokeDashoffset="0" className="opacity-80 animate-[shimmer_2s_linear_infinite_reverse]" />

                {/* Node 3: Top Right */}
                <path d="M 280 40 L 160 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                <path d="M 280 40 L 160 80" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="8 8" strokeDashoffset="0" className="opacity-80 animate-[shimmer_2.5s_linear_infinite]" />

                {/* Node 4: Bottom Right */}
                <path d="M 260 120 L 160 80" stroke="var(--color-primary)" strokeWidth="1" strokeDasharray="4 4" className="opacity-40" />
                <path d="M 260 120 L 160 80" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="8 8" strokeDashoffset="0" className="opacity-80 animate-[shimmer_3.5s_linear_infinite_reverse]" />

                {/* Central Hub Circle */}
                <circle cx="160" cy="80" r="16" fill="var(--color-primary)" className="opacity-15 animate-ping" style={{ animationDuration: "3s" }} />
                <circle cx="160" cy="80" r="12" fill="var(--color-primary)" className="opacity-20" />
                <circle cx="160" cy="80" r="7" fill="var(--color-primary)" />

                {/* Node Circles */}
                <circle cx="40" cy="40" r="5" fill="var(--color-primary)" />
                <circle cx="60" cy="120" r="5" fill="var(--color-primary)" />
                <circle cx="280" cy="40" r="5" fill="var(--color-primary)" />
                <circle cx="260" cy="120" r="5" fill="var(--color-primary)" />
              </svg>

              {/* Node Overlays */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-background/90 border border-border/80 rounded-lg px-2 py-0.5 shadow-sm text-[9px] font-mono font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Probe_S1
              </div>
              <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-background/90 border border-border/80 rounded-lg px-2 py-0.5 shadow-sm text-[9px] font-mono font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Weather_Stn
              </div>
              <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-background/90 border border-border/80 rounded-lg px-2 py-0.5 shadow-sm text-[9px] font-mono font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Drone_Cam_v4
              </div>
              <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-background/90 border border-border/80 rounded-lg px-2 py-0.5 shadow-sm text-[9px] font-mono font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Irrig_Valve_B
              </div>
            </div>

            {/* Status grid */}
            <div className="flex gap-2">
              <div className="flex-1 bg-muted/40 border border-border/60 rounded-xl px-3 py-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-muted-foreground">Active Connections</span>
                <span className="font-bold text-foreground">4 / 4 Devices</span>
              </div>
              <div className="flex-1 bg-muted/40 border border-border/60 rounded-xl px-3 py-2 flex items-center justify-between text-[10px] font-mono">
                <span className="text-muted-foreground">Frequency Band</span>
                <span className="font-bold text-foreground">915 MHz Lora</span>
              </div>
            </div>
          </div>
        );

      case 3: // Receive AI Insights
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-primary animate-spin" style={{ animationDuration: "10s" }} />
                <span className="text-xs font-mono text-muted-foreground">AGRIINTEL_NEURAL_CORE</span>
              </div>
              <span className="text-[10px] font-mono text-primary font-bold flex items-center gap-1">
                <Sparkles className="h-3 w-3 animate-pulse" />
                AI EVALUATING
              </span>
            </div>

            {/* AI Insight Box switcher */}
            <div className="flex-1 flex flex-col justify-center gap-3 my-4">
              {aiInsightIndex === 0 ? (
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4.5 space-y-2.5 animate-in slide-in-from-right-3 duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                      Pest & Pathogen Advisory
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground">Confidence: 94.2%</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground">Possible Blight Warning in Zone C</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Leaf scan telemetry reveals early pigment degradation. Weather matrices estimate a 78% probability of Late Blight outbreak due to current humidity levels.
                  </p>
                  <div className="text-[10px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-500/15 p-2 rounded-xl border border-amber-500/20">
                    Recommended: Apply organic copper fungicide before tomorrow&apos;s 04:00 rain.
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4.5 space-y-2.5 animate-in slide-in-from-right-3 duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-md">
                      Hydration Efficiency
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground">Confidence: 98.7%</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground">Soil Hydration Deficit in Zone A</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Moisture levels at Probe_B1 have slipped to 18.5%. Satellite thermal maps verify soil dryness across 14 acres of Chardonnay vineyard.
                  </p>
                  <div className="text-[10px] font-semibold text-sky-700 dark:text-sky-300 bg-sky-500/15 p-2 rounded-xl border border-sky-500/20">
                    Action: Enable irrigation loop A2 for exactly 20 minutes to restore moisture.
                  </div>
                </div>
              )}
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center gap-1.5 select-none">
              <span className={`h-1.5 w-6 rounded-full transition-all duration-300 ${aiInsightIndex === 0 ? "bg-primary" : "bg-border"}`} />
              <span className={`h-1.5 w-6 rounded-full transition-all duration-300 ${aiInsightIndex === 1 ? "bg-primary" : "bg-border"}`} />
            </div>
          </div>
        );

      case 4: // Optimize Farming Decisions
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-500">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-3">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-mono text-muted-foreground">PLATFORM_EFFICIENCY_METRICS</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 rounded">OPTIMIZED</span>
            </div>

            {/* Optimization yield line chart */}
            <div className="flex-1 relative my-4 rounded-2xl border border-border/50 bg-black/5 dark:bg-black/20 flex flex-col justify-end p-2.5 overflow-hidden min-h-[120px]">
              {/* Simulated Y-axis grid */}
              <div className="absolute inset-x-0 top-1/4 border-b border-border/10 border-dashed pointer-events-none" />
              <div className="absolute inset-x-0 top-2/4 border-b border-border/10 border-dashed pointer-events-none" />
              <div className="absolute inset-x-0 top-3/4 border-b border-border/10 border-dashed pointer-events-none" />

              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80">
                {/* Shaded Area Under Line */}
                <path
                  d="M 10 70 Q 75 55 140 45 T 290 15 L 290 80 L 10 80 Z"
                  fill="url(#chartGlowGrad)"
                  className="opacity-25"
                />
                {/* Yield Forecast Line */}
                <path
                  d="M 10 70 Q 75 55 140 45 T 290 15"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-[dash_2.5s_ease-out_infinite]"
                  strokeDasharray="600"
                  strokeDashoffset="0"
                />
                
                {/* Data Points */}
                <circle cx="10" cy="70" r="4" fill="var(--color-primary)" />
                <circle cx="140" cy="45" r="4" fill="var(--color-primary)" />
                
                <g className="animate-pulse">
                  <circle cx="290" cy="15" r="5" fill="var(--color-primary)" />
                  <circle cx="290" cy="15" r="10" stroke="var(--color-primary)" strokeWidth="1" fill="none" opacity="0.6" />
                </g>

                <defs>
                  <linearGradient id="chartGlowGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute top-4 left-4 flex flex-col">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Yield Forecast</span>
                <span className="text-lg font-bold text-foreground">+18.4% Efficiency</span>
              </div>
            </div>

            {/* Performance savings highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-muted/40 px-3.5 py-2 flex justify-between items-center text-[11px]">
                <span className="text-muted-foreground">Water Conserved</span>
                <span className="font-bold text-emerald-500 font-mono">-22.5%</span>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/40 px-3.5 py-2 flex justify-between items-center text-[11px]">
                <span className="text-muted-foreground">Fertilizer Saved</span>
                <span className="font-bold text-emerald-500 font-mono">-15.8%</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="process" className="relative overflow-hidden bg-background py-24 lg:py-32 border-b border-border/60">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.16_150/0.07),transparent_70%)] blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.18_148/0.05),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Title and Subtitle Block */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Platform Workflow
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            How <span className="text-gradient font-extrabold">AgriIntel AI</span> Works
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Start making smarter agricultural decisions in just a few simple steps.
          </p>
        </div>

        {/* Process Flow Interactive Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Timeline Steps Column (Left: 5 columns) */}
          <div className="lg:col-span-5 relative flex flex-col gap-4 justify-between">
            
            {/* Background vertical line */}
            <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-border pointer-events-none" />

            {/* Glowing Active vertical connector segment */}
            <div
              className="absolute left-7 top-8 w-0.5 bg-gradient-to-b from-primary to-primary-glow pointer-events-none transition-all duration-500 ease-in-out"
              style={{
                height: `${activeIndex * 22.5}%`,
                maxHeight: "92%"
              }}
            />

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeIndex === idx;

              return (
                <div
                  key={step.num}
                  onClick={() => handleStepClick(idx)}
                  className={`group relative flex gap-6 p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-transparent hover:bg-muted/30"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div
                    className={`relative z-10 flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-all duration-500 ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground shadow-[0_0_12px_rgba(34,197,94,0.4)] scale-110"
                        : "bg-background border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                    }`}
                  >
                    {isActive ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : step.num}
                  </div>

                  {/* Step Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3
                        className={`text-md font-semibold tracking-tight transition-colors duration-300 ${
                          isActive ? "text-foreground font-bold" : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      >
                        {step.title}
                      </h3>
                      {isActive && (
                        <span className="text-[9px] font-semibold font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded-md animate-pulse">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-muted-foreground" : "text-muted-foreground/60 group-hover:text-muted-foreground/80"
                      }`}
                    >
                      {step.description}
                    </p>

                    {/* Expand details on active state */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out overflow-hidden text-xs text-muted-foreground/80 leading-relaxed ${
                        isActive ? "grid-rows-[1fr] mt-2 opacity-100 animate-in fade-in duration-300" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-border/30 pt-2">{step.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sandbox Visual Showcase (Right: 7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full self-center">
            
            {/* Active Illustration Frame */}
            <div className="relative rounded-3xl glass border border-border/80 shadow-float w-full max-w-[500px] mx-auto min-h-[380px] flex flex-col justify-between overflow-hidden">
              
              {/* Outer decorative corners */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br-sm pointer-events-none" />
              
              {/* Backdrop grid lines */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.03] dark:opacity-[0.06] pointer-events-none">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-foreground" />
                ))}
              </div>

              {/* Render Selected Stage View */}
              {renderIllustration()}

              {/* Autoplay Pause / Play indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-background/80 border border-border/60 rounded-full px-2 py-0.5 text-[9px] font-mono text-muted-foreground select-none z-10">
                <span className={`h-1.5 w-1.5 rounded-full ${isAutoPlaying ? "bg-primary animate-pulse" : "bg-amber-500"}`} />
                {isAutoPlaying ? "AUTOCYCLE: RUNNING" : "AUTOCYCLE: PAUSED"}
                <button
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  className="ml-1 p-0.5 rounded-md hover:bg-muted text-[10px] font-semibold text-primary transition-colors cursor-pointer"
                  title={isAutoPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
                >
                  {isAutoPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>

            {/* Micro details panel below illustration */}
            <div className="mt-4 max-w-[500px] mx-auto text-center px-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 select-none">
              <span>Dynamic On-Demand Visuals</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Real-time Interactive Previews</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
