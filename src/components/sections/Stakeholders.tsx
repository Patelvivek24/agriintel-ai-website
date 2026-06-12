"use client";

import React, { useState } from "react";
import {
  Sprout,
  Building2,
  Landmark,
  Check,
  TrendingUp,
  TrendingDown,
  Droplets,
  Activity,
  Globe,
  AlertTriangle,
  ArrowRight,
  RefreshCw
} from "lucide-react";

type BenefitItem = {
  title: string;
  description: string;
};

type StakeholderData = {
  id: string;
  role: string;
  icon: React.ComponentType<any>;
  tagline: string;
  description: string;
  accentClass: string;
  glowColor: string;
  benefits: BenefitItem[];
};

export function Stakeholders() {
  // 1. Farmers interactive state: Simulating watering toggle
  const [irrigationActive, setIrrigationActive] = useState(false);
  const [soilMoisture, setSoilMoisture] = useState(42);

  const toggleIrrigation = () => {
    if (!irrigationActive) {
      setIrrigationActive(true);
      const interval = setInterval(() => {
        setSoilMoisture((prev) => {
          if (prev >= 48) {
            clearInterval(interval);
            setIrrigationActive(false);
            return 48;
          }
          return prev + 1;
        });
      }, 500);
    } else {
      setIrrigationActive(false);
      setSoilMoisture(42);
    }
  };

  // 2. Agribusinesses interactive state: crop toggle
  const [selectedCrop, setSelectedCrop] = useState<"wheat" | "corn" | "soybeans">("wheat");

  const cropData = {
    wheat: { demand: "High", index: "+18.4%", risk: "Low", volume: "14.5k Tons" },
    corn: { demand: "Stable", index: "+5.2%", risk: "Low", volume: "22.1k Tons" },
    soybeans: { demand: "Volatile", index: "-2.1%", risk: "Medium", volume: "8.9k Tons" }
  };

  // 3. Government interactive state: district mapping zone alert
  const [activeZone, setActiveZone] = useState<number>(2);

  const zones = [
    { name: "Zone NW-1", status: "Healthy", moisture: "41%", code: "normal" },
    { name: "Zone NW-2", status: "Healthy", moisture: "38%", code: "normal" },
    { name: "Zone CE-3", status: "Dry Alert", moisture: "21%", code: "alert" },
    { name: "Zone CE-4", status: "Healthy", moisture: "44%", code: "normal" },
    { name: "Zone SE-5", status: "Healthy", moisture: "45%", code: "normal" },
    { name: "Zone SE-6", status: "Flood Risk", moisture: "78%", code: "critical" }
  ];

  const stakeholders: StakeholderData[] = [
    {
      id: "farmers",
      role: "For Farmers",
      icon: Sprout,
      tagline: "Maximize yield, minimize resource inputs.",
      description: "Deep-learning models map your field conditions to optimize crop health, scheduling, and market timing.",
      accentClass: "from-emerald-500 to-teal-600 text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      glowColor: "oklch(0.55 0.16 150)", // Emerald theme
      benefits: [
        {
          title: "Higher productivity",
          description: "Boost harvest volume with tailored planting advice and live crop growth tracking."
        },
        {
          title: "Better crop quality",
          description: "Track leaf pigments and detect diseases instantly via computer vision before they spread."
        },
        {
          title: "Increased profits",
          description: "Compare regional mandi prices and schedule sales during peak market demand periods."
        },
        {
          title: "Reduced risks",
          description: "Avoid crop failure with hyper-local rain notifications and micro-climate warnings."
        }
      ]
    },
    {
      id: "agribusinesses",
      role: "For Agribusinesses",
      icon: Building2,
      tagline: "Secure contracts, stabilize supply chains.",
      description: "Access regional yield projections, demand modeling, and verified sourcing intelligence in one workspace.",
      accentClass: "from-indigo-500 to-blue-600 text-indigo-500 bg-indigo-500/10 border-indigo-500/30",
      glowColor: "oklch(0.45 0.2 260)", // Indigo theme
      benefits: [
        {
          title: "Supply chain visibility",
          description: "Track field progress, growth milestones, and projected harvest dates across partner farms."
        },
        {
          title: "Demand forecasting",
          description: "Anticipate market supply swings and price fluctuations using AI predictive analytics."
        },
        {
          title: "Operational efficiency",
          description: "Digitize and automate procurement contracts and quality inspection logs."
        },
        {
          title: "Better procurement planning",
          description: "Contract directly with farmers who match your exact quality standards and timelines."
        }
      ]
    },
    {
      id: "government",
      role: "For Government Agencies",
      icon: Landmark,
      tagline: "Empower policy, stabilize food security.",
      description: "Monitor regional land usage, assess climate damage, and distribute farming resource packages.",
      accentClass: "from-amber-500 to-orange-600 text-amber-500 bg-amber-500/10 border-amber-500/30",
      glowColor: "oklch(0.65 0.18 75)", // Amber theme
      benefits: [
        {
          title: "Agricultural monitoring",
          description: "Analyze regional satellite telemetry to catalog acreage, crop types, and canopy health."
        },
        {
          title: "Resource planning",
          description: "Map soil deficits to optimize fertilizer subsidies and plan regional water management."
        },
        {
          title: "Food security insights",
          description: "Forecast local yield shortfalls early to balance national import-export policies."
        },
        {
          title: "Policy decision support",
          description: "Formulate relief measures backed by verified damage reports and farm diagnostics."
        }
      ]
    }
  ];

  return (
    <section id="stakeholders" className="relative py-24 sm:py-32 overflow-hidden bg-background border-b border-border/60">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.16_150/0.05),transparent_70%)] blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.2_260/0.05),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Ecosystem Value
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Built for Every <span className="text-gradient">Agricultural Stakeholder</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            AgriIntel AI integrates seamlessly into every level of the agricultural network—delivering specialized toolsets, deep predictive insights, and streamlined planning portals.
          </p>
        </div>

        {/* Stakeholder Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stakeholders.map((sh) => {
            const Icon = sh.icon;
            return (
              <div 
                key={sh.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-float overflow-hidden"
              >
                {/* Glowing border line border on hover */}
                <div 
                  className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/0 to-white/0 opacity-0 group-hover:opacity-100 blur-[2px] transition-all duration-500" 
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${sh.glowColor}22, transparent 50%)`
                  }}
                />

                {/* Hover gradient background glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${sh.glowColor}, transparent)`
                  }}
                />

                <div>
                  {/* Stakeholder Icon & Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${sh.accentClass.includes("from") ? sh.accentClass.split(" ")[0] + " " + sh.accentClass.split(" ")[1] : "from-primary to-primary-glow"} text-white shadow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground tracking-tight">
                        {sh.role}
                      </h3>
                      <span className="text-[11px] font-mono text-muted-foreground/80 font-medium">
                        {sh.id.toUpperCase()} Portal
                      </span>
                    </div>
                  </div>

                  {/* Interactive Simulated Widgets */}
                  <div className="relative rounded-2xl border border-border/60 bg-muted/20 p-4 mb-6 backdrop-blur-sm shadow-inner overflow-hidden min-h-[148px] flex flex-col justify-between">
                    
                    {/* FARMERS PREVIEW */}
                    {sh.id === "farmers" && (
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-border/30 pb-2">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Field Monitor (Wheat)</span>
                          <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                            <span className={`h-1.5 w-1.5 rounded-full bg-emerald-500 ${irrigationActive ? "animate-ping" : "animate-pulse"}`} />
                            {irrigationActive ? "Watering" : "Active"}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 my-2.5">
                          <div className="bg-background/80 border border-border/60 rounded-xl p-2.5 text-center">
                            <span className="block text-[8px] font-semibold text-muted-foreground uppercase">Moisture</span>
                            <span className="text-md font-extrabold text-foreground font-mono">{soilMoisture}%</span>
                          </div>
                          <div className="bg-background/80 border border-border/60 rounded-xl p-2.5 text-center">
                            <span className="block text-[8px] font-semibold text-muted-foreground uppercase">Yield Forecast</span>
                            <span className="text-md font-extrabold text-emerald-500 font-mono flex items-center justify-center gap-0.5">
                              ▲ 18.4%
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={toggleIrrigation}
                          disabled={irrigationActive}
                          className={`w-full py-1.5 px-3 rounded-lg text-[10px] font-bold tracking-wide transition-all border flex items-center justify-center gap-1.5 cursor-pointer ${
                            irrigationActive
                              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                              : "bg-primary text-primary-foreground border-primary hover:bg-primary/95 shadow-sm"
                          }`}
                        >
                          <Droplets className={`h-3 w-3 ${irrigationActive ? "animate-bounce" : ""}`} />
                          {irrigationActive ? "Irrigating Field..." : "Test Smart Irrigation"}
                        </button>
                      </div>
                    )}

                    {/* AGRIBUSINESSES PREVIEW */}
                    {sh.id === "agribusinesses" && (
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-border/30 pb-2">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Demand Analytics</span>
                          <span className="text-[9px] font-mono font-bold text-indigo-500 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <Activity className="h-2.5 w-2.5 animate-pulse" />
                            Live Model
                          </span>
                        </div>
                        <div className="my-2 flex justify-between gap-1 text-[9px] font-bold font-mono">
                          {(["wheat", "corn", "soybeans"] as const).map((crop) => (
                            <button
                              key={crop}
                              onClick={() => setSelectedCrop(crop)}
                              className={`flex-1 py-1 rounded transition-all capitalize border cursor-pointer ${
                                selectedCrop === crop
                                  ? "bg-indigo-500 text-white border-indigo-500"
                                  : "bg-background text-muted-foreground border-border/50 hover:bg-muted/50"
                              }`}
                            >
                              {crop}
                            </button>
                          ))}
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 bg-background/50 border border-border/40 rounded-xl p-2 text-center text-[8px] font-mono">
                          <div>
                            <span className="block text-muted-foreground font-semibold">Demand</span>
                            <span className={`font-bold ${cropData[selectedCrop].demand === "High" ? "text-emerald-500" : cropData[selectedCrop].demand === "Stable" ? "text-indigo-500" : "text-amber-500"}`}>
                              {cropData[selectedCrop].demand}
                            </span>
                          </div>
                          <div>
                            <span className="block text-muted-foreground font-semibold">YoY Price</span>
                            <span className={`font-extrabold ${cropData[selectedCrop].index.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}>
                              {cropData[selectedCrop].index}
                            </span>
                          </div>
                          <div>
                            <span className="block text-muted-foreground font-semibold">Procurement</span>
                            <span className="font-bold text-foreground">{cropData[selectedCrop].volume}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* GOVERNMENT PREVIEW */}
                    {sh.id === "government" && (
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-center justify-between border-b border-border/30 pb-2">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Regional Grid (NW-Dist)</span>
                          <span className="text-[9px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <Globe className="h-2.5 w-2.5 animate-spin" style={{ animationDuration: "12s" }} />
                            Satellite
                          </span>
                        </div>
                        <div className="my-2.5 grid grid-cols-6 gap-1.5">
                          {zones.map((zone, idx) => (
                            <button
                              key={zone.name}
                              onClick={() => setActiveZone(idx)}
                              title={`${zone.name}: ${zone.status}`}
                              className={`h-5 rounded-md border transition-all flex items-center justify-center cursor-pointer ${
                                activeZone === idx
                                  ? "bg-amber-500 border-amber-500 shadow-sm animate-pulse"
                                  : zone.code === "critical"
                                  ? "bg-red-500/20 border-red-500/40 text-red-500 hover:bg-red-500/30"
                                  : zone.code === "alert"
                                  ? "bg-amber-500/20 border-amber-500/40 text-amber-500 hover:bg-amber-500/30"
                                  : "bg-emerald-500/20 border-emerald-500/40 text-emerald-500 hover:bg-emerald-500/30"
                              }`}
                            >
                              {activeZone === idx ? (
                                <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                              ) : zone.code === "critical" ? (
                                <AlertTriangle className="h-2.5 w-2.5" />
                              ) : (
                                <span className="text-[7px] font-bold font-mono">{idx + 1}</span>
                              )}
                            </button>
                          ))}
                        </div>
                        <div className="bg-background/80 border border-border/50 rounded-xl px-2.5 py-1.5 flex items-center justify-between text-[8px] font-mono">
                          <span className="text-muted-foreground font-semibold">{zones[activeZone].name}:</span>
                          <span className={`font-extrabold uppercase ${zones[activeZone].code === "critical" ? "text-red-500 animate-pulse" : zones[activeZone].code === "alert" ? "text-amber-500" : "text-emerald-500"}`}>
                            {zones[activeZone].status} (Moisture: {zones[activeZone].moisture})
                          </span>
                        </div>
                      </div>
                    )}

                  </div>

                  <p className="text-sm font-medium text-foreground/90 leading-relaxed mb-6">
                    {sh.tagline}
                  </p>

                  {/* Benefits Check List */}
                  <ul className="space-y-4">
                    {sh.benefits.map((b) => (
                      <li key={b.title} className="flex gap-3 items-start group/item">
                        <div className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${sh.accentClass.split(" ")[3]} bg-white border shadow-sm`}>
                          <Check className="h-2.5 w-2.5 text-primary stroke-[3]" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="block text-xs font-bold text-foreground transition-colors group-hover/item:text-primary">
                            {b.title}
                          </span>
                          <span className="block text-[11px] leading-relaxed text-muted-foreground">
                            {b.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Hover Action Footer */}
                <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground/80 tracking-wide">
                    {sh.id.toUpperCase()}_DEPLOYMENT_DOCS
                  </span>
                  <span className="text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    Explore Portal <ArrowRight className="h-3 w-3 ml-0.5" />
                  </span>
                </div>

                {/* Bottom decorative color slide-up line */}
                <span 
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
                  style={{
                    background: `linear-gradient(to right, transparent, ${sh.glowColor}, transparent)`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
