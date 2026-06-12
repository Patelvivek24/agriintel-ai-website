"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  UploadCloud,
  Check,
  Cpu,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Info,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  X,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- Types ---
type DiseaseData = {
  id: string;
  crop: string;
  name: string;
  confidence: number;
  severity: "Low" | "Medium" | "High";
  description: string;
  organic: string[];
  chemical: string[];
  preventive: string[];
};

// --- Mock Disease Presets ---
const diseasePresets: Record<string, DiseaseData> = {
  tomato: {
    id: "tomato",
    crop: "Tomato",
    name: "Late Blight (Phytophthora infestans)",
    confidence: 98.4,
    severity: "High",
    description:
      "A devastating fungal-like disease that affects tomato leaves, stems, and fruit. It spreads rapidly in cool, wet weather conditions, potentially wiping out entire crops if untreated.",
    organic: [
      "Apply copper-based organic fungicides at the first sign of symptoms.",
      "Remove and destroy all infected plant debris immediately; do not compost.",
      "Apply thick mulch around the soil base to prevent spores from splashing onto lower leaves."
    ],
    chemical: [
      "Spray protective fungicides containing Chlorothalonil or Mancozeb.",
      "Apply systemic fungicides such as Metalaxyl if the infection has already spread."
    ],
    preventive: [
      "Grow late blight-resistant cultivars (e.g., Mountain Merit, Defiant).",
      "Avoid overhead irrigation; use drip watering to keep plant leaves dry.",
      "Provide wide spacing (3 feet minimum) to maximize air circulation and sun exposure."
    ]
  },
  corn: {
    id: "corn",
    crop: "Corn",
    name: "Common Rust (Puccinia sorghi)",
    confidence: 95.8,
    severity: "Medium",
    description:
      "Identified by distinctive golden-brown to cinnamon-brown powdery pustules forming on both upper and lower leaf surfaces. Favors high humidity (95%+) and moderate temperatures.",
    organic: [
      "Apply organic sulfur dusts or neem oil sprays to inhibit spore germination.",
      "Prune away heavily rusted lower leaves to enhance ventilation near the ground."
    ],
    chemical: [
      "Apply chemical fungicides containing Strobilurins (e.g., Pyraclostrobin) or Triazoles.",
      "Treat early in the crop cycle when pustules first appear on less than 10% of leaves."
    ],
    preventive: [
      "Select and plant rust-resistant corn hybrids appropriate for your region.",
      "Practice strict crop rotation with non-grass crops in successive seasons.",
      "Thoroughly till or clear residue after harvest to destroy overwintering spores."
    ]
  },
  apple: {
    id: "apple",
    crop: "Apple",
    name: "Apple Scab (Venturia inaequalis)",
    confidence: 92.1,
    severity: "Medium",
    description:
      "A widespread fungal infection that targets apple trees. Causes olive-green to dark brown velvety spots on leaf surfaces and fruit, leading to premature yellowing and defoliation.",
    organic: [
      "Apply liquid sulfur or potassium bicarbonate sprays during early spring bud break.",
      "Meticulously rake, bag, and remove fallen orchard leaves in autumn to disrupt the spore cycle."
    ],
    chemical: [
      "Use contact fungicides like Captan during the green tip and petal fall growth stages.",
      "Incorporate systemic sterol inhibitors (like Myclobutanil) for post-infection curative control."
    ],
    preventive: [
      "Plant scab-resistant apple varieties (e.g., Liberty, Freedom, Enterprise).",
      "Prune tree canopies yearly to permit rapid wind drying of foliage.",
      "Never prune or harvest during damp weather to avoid mechanical spread of spores."
    ]
  },
  healthy: {
    id: "healthy",
    crop: "Grape",
    name: "Healthy Grapevine Leaf",
    confidence: 99.2,
    severity: "Low",
    description:
      "The leaf specimen is in prime physiological health. Cellular structure shows uniform chlorophyll distribution, robust turgor pressure, and absolutely zero pathogens or pest markers.",
    organic: [
      "Apply well-rotted organic compost around the vine base to nourish the root microbiome.",
      "Spray diluted compost tea foliar feeds to boost the plant's natural surface immunity."
    ],
    chemical: [
      "No chemical controls required. Avoid application of synthetic agents.",
      "Preserve natural insect predators (ladybugs, lacewings) by avoiding broad-spectrum sprays."
    ],
    preventive: [
      "Maintain consistent, deep soil hydration without letting water pool around the root crown.",
      "Inspect leaf undersides once a week to detect early microscopic pest infestations.",
      "Keep shoots trained and tucked to optimize sunlight penetration across the fruit zone."
    ]
  }
};

// --- Preset Leaf SVGs ---
const TomatoLeafSVG = ({ infected }: { infected: boolean }) => (
  <svg className="w-full h-full text-emerald-600 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M50 90C50 90 48.5 70 48 40C47.5 10 47 10 47 10" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Main Leaf Body */}
    <path
      d="M50 15C50 15 30 25 25 40C20 55 35 60 48 78C48.5 79 51.5 79 52 78C65 60 80 55 75 40C70 25 50 15 50 15Z"
      fill="url(#tomatoLeafGrad)"
      stroke="#166534"
      strokeWidth="1.5"
    />
    
    {/* Lobes */}
    <path d="M26 40C22 41 18 36 15 38C12 40 10 45 12 48C14 51 22 48 26 47" fill="url(#tomatoLeafGrad)" stroke="#166534" strokeWidth="1.2" />
    <path d="M74 40C78 41 82 36 85 38C88 40 90 45 88 48C86 51 78 48 74 47" fill="url(#tomatoLeafGrad)" stroke="#166534" strokeWidth="1.2" />
    
    <path d="M29 55C24 57 20 54 17 57C14 60 14 65 17 68C20 71 27 65 29 63" fill="url(#tomatoLeafGrad)" stroke="#166534" strokeWidth="1.2" />
    <path d="M71 55C76 57 80 54 83 57C86 60 86 65 83 68C80 71 73 65 71 63" fill="url(#tomatoLeafGrad)" stroke="#166534" strokeWidth="1.2" />

    {/* Veins */}
    <path d="M48 70Q38 60 30 55" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
    <path d="M52 70Q62 60 70 55" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
    <path d="M48 50Q36 45 25 43" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
    <path d="M52 50Q64 45 75 43" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
    <path d="M49 32Q40 28 35 25" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
    <path d="M51 32Q60 28 65 25" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />

    {/* Infected Spots */}
    {infected && (
      <>
        {/* Blight spot 1 */}
        <g className="animate-pulse" style={{ animationDuration: "3s" }}>
          <ellipse cx="38" cy="42" rx="7" ry="5" fill="#451a03" opacity="0.85" />
          <ellipse cx="38" cy="42" rx="5" ry="3.5" fill="#1c1917" opacity="0.9" />
          <circle cx="38" cy="42" r="9" stroke="#eab308" strokeWidth="0.8" strokeDasharray="2" opacity="0.7" />
        </g>
        {/* Blight spot 2 */}
        <g className="animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
          <ellipse cx="62" cy="55" rx="9" ry="6" fill="#451a03" opacity="0.85" />
          <ellipse cx="62" cy="55" rx="6" ry="4" fill="#1c1917" opacity="0.9" />
          <circle cx="62" cy="55" r="11" stroke="#eab308" strokeWidth="0.8" strokeDasharray="2" opacity="0.7" />
        </g>
        {/* Blight spot 3 */}
        <g className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }}>
          <circle cx="50" cy="30" r="4" fill="#451a03" opacity="0.8" />
          <circle cx="50" cy="30" r="5" stroke="#eab308" strokeWidth="0.5" opacity="0.6" />
        </g>
      </>
    )}

    <defs>
      <linearGradient id="tomatoLeafGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
  </svg>
);

const CornLeafSVG = ({ infected }: { infected: boolean }) => (
  <svg className="w-full h-full text-emerald-600 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M50 95C50 95 49 70 48.5 40C48 10 48 5 48 5" stroke="#86efac" strokeWidth="2" strokeLinecap="round" />
    
    {/* Long blade leaf */}
    <path
      d="M48 5C48 5 36 25 38 45C40 65 44 80 48.5 95C49 95 51 95 51.5 95C56 80 60 65 62 45C64 25 52 5 52 5Z"
      fill="url(#cornLeafGrad)"
      stroke="#166534"
      strokeWidth="1.5"
    />

    {/* Veins (Parallel) */}
    <path d="M44 30C44 30 45.5 55 47.5 80" stroke="#4ade80" strokeWidth="0.8" opacity="0.7" />
    <path d="M56 30C56 30 54.5 55 52.5 80" stroke="#4ade80" strokeWidth="0.8" opacity="0.7" />
    <path d="M40 40C40 40 42.5 65 45.5 85" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />
    <path d="M60 40C60 40 57.5 65 54.5 85" stroke="#4ade80" strokeWidth="0.8" opacity="0.6" />

    {/* Rust Pustules */}
    {infected && (
      <>
        {/* Rust clusters */}
        {[
          { cx: 45, cy: 30, r: 1.5 }, { cx: 47, cy: 33, r: 1.2 }, { cx: 43, cy: 35, r: 1 },
          { cx: 53, cy: 45, r: 1.8 }, { cx: 55, cy: 42, r: 1.2 }, { cx: 51, cy: 49, r: 1.5 },
          { cx: 46, cy: 58, r: 1.4 }, { cx: 48, cy: 62, r: 1.6 }, { cx: 44, cy: 60, r: 1.2 },
          { cx: 50, cy: 22, r: 1.3 }, { cx: 42, cy: 48, r: 1.5 }, { cx: 56, cy: 68, r: 1.5 }
        ].map((pt, idx) => (
          <g key={idx} className="animate-pulse" style={{ animationDelay: `${(idx % 4) * 0.4}s`, animationDuration: "2s" }}>
            <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill="#c2410c" />
            <circle cx={pt.cx} cy={pt.cy} r={pt.r + 1.2} stroke="#f97316" strokeWidth="0.5" fill="none" opacity="0.8" />
          </g>
        ))}
      </>
    )}

    <defs>
      <linearGradient id="cornLeafGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="60%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
  </svg>
);

const AppleLeafSVG = ({ infected }: { infected: boolean }) => (
  <svg className="w-full h-full text-emerald-600 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M50 95C50 95 49 80 48.5 60" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Oval Leaf shape */}
    <path
      d="M48.5 20C48.5 20 22 35 24 55C26 75 45 80 48.5 90C52 80 71 75 73 55C75 35 48.5 20 48.5 20Z"
      fill="url(#appleLeafGrad)"
      stroke="#14532d"
      strokeWidth="1.5"
    />

    {/* Veins */}
    <path d="M48.5 20C48.5 20 48.5 50 48.5 90" stroke="#86efac" strokeWidth="1.2" />
    <path d="M48.5 75Q35 68 28 62" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M48.5 75Q62 68 69 62" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M48.5 58Q32 52 26 44" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M48.5 58Q65 52 71 44" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M48.5 40Q35 34 30 28" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M48.5 40Q62 34 67 28" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" />

    {/* Scab spots */}
    {infected && (
      <>
        {/* Scab spot 1 */}
        <g className="animate-pulse" style={{ animationDuration: "3.5s" }}>
          <ellipse cx="36" cy="46" rx="6" ry="4.5" fill="#422006" opacity="0.85" />
          <path d="M32 46Q36 43 39 47" stroke="#713f12" strokeWidth="0.5" />
        </g>
        {/* Scab spot 2 */}
        <g className="animate-pulse" style={{ animationDuration: "2.8s", animationDelay: "0.4s" }}>
          <ellipse cx="60" cy="62" rx="7" ry="5.5" fill="#422006" opacity="0.85" />
          <circle cx="62" cy="64" r="2" fill="#172554" opacity="0.3" />
        </g>
        {/* Scab spot 3 */}
        <g className="animate-pulse" style={{ animationDuration: "4.2s", animationDelay: "0.8s" }}>
          <circle cx="42" cy="34" r="3.5" fill="#422006" opacity="0.8" />
        </g>
        {/* Scab spot 4 */}
        <g className="animate-pulse" style={{ animationDuration: "3s", animationDelay: "1.2s" }}>
          <ellipse cx="64" cy="42" rx="4" ry="3.5" fill="#422006" opacity="0.75" />
        </g>
      </>
    )}

    <defs>
      <linearGradient id="appleLeafGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#15803d" />
        <stop offset="50%" stopColor="#166534" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
    </defs>
  </svg>
);

const GrapeLeafSVG = () => (
  <svg className="w-full h-full text-emerald-600 drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stem */}
    <path d="M50 92C50 92 49 80 48.5 68" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Grape leaf with sharp lobes */}
    <path
      d="M50 15C50 15 42 22 40 30C34 26 28 28 24 35C28 42 20 50 18 58C24 60 26 68 32 70C36 78 46 76 50 82C54 76 64 78 68 70C74 68 76 60 82 58C80 50 72 42 76 35C72 28 66 26 60 30C58 22 50 15 50 15Z"
      fill="url(#grapeLeafGrad)"
      stroke="#14532d"
      strokeWidth="1.5"
    />

    {/* Veins */}
    <path d="M50 15C50 15 49 55 50 82" stroke="#a7f3d0" strokeWidth="1.2" />
    <path d="M49 68C49 68 36 60 26 56" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M51 68C51 68 64 60 74 56" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M49 50C49 50 30 42 20 40" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M51 50C51 50 70 42 80 40" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M49 32C49 32 38 24 30 22" stroke="#a7f3d0" strokeWidth="0.8" />
    <path d="M51 32C51 32 62 24 70 22" stroke="#a7f3d0" strokeWidth="0.8" />

    <defs>
      <linearGradient id="grapeLeafGrad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
  </svg>
);

export function DiseaseDetectionShowcase() {
  // --- States ---
  const [selectedCrop, setSelectedCrop] = useState<string>("tomato");
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [scanStep, setScanStep] = useState<number>(1);
  const [scanProgress, setScanProgress] = useState<number>(0);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<DiseaseData | null>(null);
  const [activeTab, setActiveTab] = useState<"organic" | "chemical" | "preventive">("organic");
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // --- Dynamic Telemetry Log Generation ---
  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanStep(4);
          
          // Determine final outcome
          if (selectedCrop === "custom") {
            // Simulated custom crop result
            setScanResult({
              id: "custom",
              crop: "Uploaded Specimen",
              name: "Algal Leaf Spot (Cephaleuros virescens)",
              confidence: 88.7,
              severity: "Medium",
              description:
                "Simulated diagnosis on user-uploaded foliage. Spotting indicates early algal colonization, which is common in tropical climates or plants placed in dense shade with high humidity.",
              organic: [
                "Increase sunlight exposure to dry out the canopy and leaves.",
                "Prune the lower branches and spray with copper hydroxide organic soap."
              ],
              chemical: [
                "Apply fixed copper fungicides if spots cover more than 25% of leaves.",
                "Avoid spraying during high heat hours to prevent foliage chemical burn."
              ],
              preventive: [
                "Trim weeds around the plant base to allow cross-ventilation.",
                "Water directly at the roots. Avoid wetting leaves in evening cycles."
              ]
            });
          } else {
            setScanResult(diseasePresets[selectedCrop]);
          }
          return 100;
        }

        // Trigger log events at certain progress intervals
        if (next === 6) addLog("[SYS] Initializing ResNet-50 Classifier...");
        if (next === 16) addLog("[SYS] Localizing regions of interest (ROI)...");
        if (next === 26) addLog("[AI] Checking cell structure and turgor margins...");
        if (next === 40) addLog("[AI] Detecting chlorotic zones and fungal spore grids...");
        if (next === 56) addLog("[AI] Searching disease database (150+ strains)...");
        if (next === 72) addLog("[AI] Running pixel density and pattern matching...");
        if (next === 86) addLog("[SYS] Calculating confidence coefficients...");
        if (next === 96) addLog("[SYS] Finalizing treatment recommendation data...");

        // Highlight Step transitions based on progress
        if (next >= 25 && next < 60) setScanStep(2); // Analysis
        if (next >= 60 && next < 90) setScanStep(3); // Identification
        
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isScanning, selectedCrop]);

  // Scroll terminal to bottom when logs update
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [telemetryLogs]);

  const addLog = (msg: string) => {
    setTelemetryLogs((prev) => [...prev, msg]);
  };

  // --- Actions ---
  const handleStartScan = () => {
    if (isScanning) return;
    
    setIsScanning(true);
    setScanProgress(0);
    setScanStep(2);
    setScanResult(null);
    setTelemetryLogs([
      `[SYS] Scanning started for crop: ${selectedCrop === "custom" ? "Uploaded Specimen" : selectedCrop.toUpperCase()}`,
      `[SYS] Resolution check: OK (Image dimensions verified)`,
      `[SYS] Loading neural networks and pipeline tensor vectors...`
    ]);
  };

  const handleReset = () => {
    setIsScanning(false);
    setScanProgress(0);
    setScanStep(1);
    setScanResult(null);
    setTelemetryLogs([]);
  };

  const handleSelectPreset = (key: string) => {
    if (isScanning) return;
    setSelectedCrop(key);
    setCustomImage(null);
    handleReset();
  };

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isScanning) return;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result as string);
        setSelectedCrop("custom");
        handleReset();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTriggerUpload = () => {
    if (isScanning) return;
    fileInputRef.current?.click();
  };

  const handleRemoveCustomImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    setSelectedCrop("tomato");
    handleReset();
  };

  // Render correct SVG or Custom Image
  const renderLeafImage = () => {
    if (selectedCrop === "custom" && customImage) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={customImage}
          alt="Uploaded Crop Specimen"
          className="w-full h-full object-cover rounded-2xl"
        />
      );
    }

    switch (selectedCrop) {
      case "tomato":
        return <TomatoLeafSVG infected={true} />;
      case "corn":
        return <CornLeafSVG infected={true} />;
      case "apple":
        return <AppleLeafSVG infected={true} />;
      case "healthy":
        return <GrapeLeafSVG />;
      default:
        return <TomatoLeafSVG infected={true} />;
    }
  };

  // Get active step classes
  const getStepClass = (step: number) => {
    if (scanStep === step) {
      return "border-primary text-primary bg-primary/5 font-semibold";
    }
    if (scanStep > step) {
      return "border-emerald-500 text-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20";
    }
    return "border-border text-muted-foreground";
  };

  return (
    <section id="detection" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.16_150/0.15),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.18_148/0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
            Interactive Lab
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Detect Crop Diseases{" "}
            <span className="text-gradient">Before They Spread</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Upload crop images and receive instant AI-powered diagnosis and treatment recommendations.
          </p>
        </div>

        {/* Dynamic Workflow Bar (Steps 1-4) */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: 1, label: "Upload Crop Image" },
              { num: 2, label: "AI Image Analysis" },
              { num: 3, label: "Disease Identification" },
              { num: 4, label: "Treatment Recommendation" }
            ].map((step) => (
              <div
                key={step.num}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all duration-300 ${getStepClass(
                  step.num
                )}`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold border transition-colors ${
                    scanStep > step.num
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : scanStep === step.num
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {scanStep > step.num ? <Check className="h-4.5 w-4.5" /> : step.num}
                </div>
                <div className="text-sm font-medium tracking-tight">
                  <p className="text-[11px] uppercase tracking-wider opacity-60">Step {step.num}</p>
                  <p className="text-foreground font-semibold">{step.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Viewport & Presets (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Viewport Frame */}
            <div className="relative flex-1 min-h-[360px] rounded-3xl glass border border-border/80 overflow-hidden flex flex-col justify-between shadow-card p-5 group">
              {/* Futuristic Corners */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-primary/60 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-primary/60 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-primary/60 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-primary/60 rounded-br-sm pointer-events-none" />

              {/* Viewport Grid Lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.04] dark:opacity-[0.08] pointer-events-none">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-foreground" />
                ))}
              </div>

              {/* Laser Beam Scanning Line */}
              {isScanning && (
                <div className="absolute inset-x-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10 animate-[scanLaser_2.4s_ease-in-out_infinite]" />
              )}

              {/* Image Area */}
              <div className="relative flex-1 w-full max-w-[280px] mx-auto flex items-center justify-center p-4">
                {renderLeafImage()}

                {/* Viewfinder circle */}
                <div className="absolute inset-0 rounded-full border border-primary/10 scale-90 pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/20 scale-75 animate-[spin_60s_linear_infinite] pointer-events-none" />
              </div>

              {/* Scanning Telemetry Info overlay */}
              <div className="absolute top-6 left-6 text-[10px] font-mono text-muted-foreground/80 pointer-events-none select-none">
                <p>DEV_MODE: ACTIVE</p>
                <p>FOCUS_LOCK: TRUE</p>
                <p>FPS: 60.0</p>
              </div>
              <div className="absolute top-6 right-6 text-[10px] font-mono text-muted-foreground/80 text-right pointer-events-none select-none">
                <p>CAM_SYS: LEAF_SCAN_v2.1</p>
                <p>COORDS: [34.72, -112.04]</p>
                <p>STATUS: {isScanning ? "PROCESSING" : "READY"}</p>
              </div>

              {/* Pseudo Terminal Log Console */}
              <div className="mt-4 rounded-xl bg-slate-950/90 dark:bg-black/85 border border-white/5 p-3.5 h-[120px] overflow-y-auto font-mono text-[11px] leading-relaxed text-emerald-400 shadow-inner">
                {telemetryLogs.length === 0 ? (
                  <div className="text-muted-foreground flex items-center justify-center h-full">
                    <Info className="h-4 w-4 mr-2" />
                    <span>Select a leaf preset or upload below, then click &quot;Start AI Scan&quot;</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {telemetryLogs.map((log, index) => (
                      <div key={index} className="flex gap-1.5 items-start">
                        <span className="text-muted-foreground select-none">&gt;</span>
                        <span className={log.includes("[SUCCESS]") ? "text-emerald-300 font-bold" : log.includes("[AI]") ? "text-sky-300" : "text-emerald-400"}>
                          {log}
                        </span>
                      </div>
                    ))}
                    <div ref={terminalEndRef} />
                  </div>
                )}
              </div>

            </div>

            {/* Selector & Upload Controls */}
            <div className="rounded-3xl glass p-5 border border-border/80 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-card">
              
              {/* Presets Grid */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Select Crop Sample
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "tomato", label: "Tomato Blight" },
                    { id: "corn", label: "Corn Rust" },
                    { id: "apple", label: "Apple Scab" },
                    { id: "healthy", label: "Healthy Grape" }
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPreset(p.id)}
                      disabled={isScanning}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                        selectedCrop === p.id && !customImage
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-muted/40 hover:bg-muted/80 text-foreground border-border"
                      } disabled:opacity-50`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Upload Button */}
              <div className="shrink-0 flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleCustomUpload}
                  accept="image/*"
                  className="hidden"
                />
                
                {customImage ? (
                  <div className="flex items-center gap-1 bg-primary/10 border border-primary/30 rounded-xl p-1.5 pl-3">
                    <span className="text-xs font-semibold text-primary truncate max-w-[120px]">
                      Uploaded spec.
                    </span>
                    <button
                      onClick={handleRemoveCustomImage}
                      disabled={isScanning}
                      className="p-1 rounded-lg hover:bg-primary/20 text-primary transition-colors disabled:opacity-50"
                      title="Clear custom image"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleTriggerUpload}
                    disabled={isScanning}
                    className="w-full md:w-auto rounded-xl border border-dashed border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 gap-1.5 py-4 cursor-pointer"
                  >
                    <UploadCloud className="h-4 w-4" />
                    Upload Leaf
                  </Button>
                )}

                <Button
                  variant="hero"
                  size="sm"
                  onClick={handleStartScan}
                  disabled={isScanning || (selectedCrop === "custom" && !customImage)}
                  className="rounded-xl px-5 flex-1 md:flex-none cursor-pointer"
                >
                  {isScanning ? (
                    <span className="flex items-center gap-1.5">
                      <Cpu className="h-4 w-4 animate-spin" />
                      Scanning... {scanProgress}%
                    </span>
                  ) : (
                    "Start AI Scan"
                  )}
                </Button>
              </div>

            </div>

          </div>

          {/* Right Column: Display Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Idle / Running State representation */}
            {!scanResult && !isScanning && (
              <div className="flex-1 rounded-3xl glass border border-border/80 p-8 flex flex-col items-center justify-center text-center shadow-card min-h-[350px]">
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 animate-bounce" style={{ animationDuration: "3s" }}>
                  <Cpu className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Awaiting Input Specimen</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs leading-relaxed">
                  Choose one of our diseased or healthy crop presets or upload your own leaf image to launch the diagnostics scanner.
                </p>
                <div className="mt-8 flex gap-2 w-full max-w-xs">
                  <Button onClick={() => handleSelectPreset("tomato")} className="flex-1 rounded-xl cursor-pointer">
                    Try Preset
                  </Button>
                  <Button variant="outline" onClick={handleTriggerUpload} className="flex-1 rounded-xl cursor-pointer">
                    Upload
                  </Button>
                </div>
              </div>
            )}

            {isScanning && (
              <div className="flex-1 rounded-3xl glass border border-border/80 p-8 flex flex-col items-center justify-center text-center shadow-card min-h-[350px]">
                {/* Circular scanner effect */}
                <div className="relative h-28 w-28 flex items-center justify-center mb-6">
                  {/* Outer spinning ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_8s_linear_infinite]" />
                  {/* Mid breathing ring */}
                  <div className="absolute inset-2 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "2s" }} />
                  {/* Inner pulse */}
                  <div className="absolute inset-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground">AI Scanning In Progress</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs leading-relaxed">
                  Neural network convolutional filters are isolating chlorophyll anomalies and tissue cellular degradation.
                </p>
                
                {/* Progress bar */}
                <div className="mt-8 w-full max-w-xs bg-muted rounded-full h-2 overflow-hidden border">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-75"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-primary mt-2">
                  Analyzing Specimen: {scanProgress}%
                </span>
              </div>
            )}

            {/* Results Panel (Complete State) */}
            {scanResult && !isScanning && (
              <div className="flex-1 rounded-3xl glass border border-border/80 shadow-card flex flex-col overflow-hidden min-h-[350px] animate-[fadeIn_0.5s_ease-out]">
                
                {/* Confidence & Severity Header */}
                <div className="p-5 border-b border-border/60 bg-muted/30 flex items-center gap-4">
                  {/* Circular Confidence Meter */}
                  <div className="relative h-16 w-16 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-95" viewBox="0 0 36 36">
                      <path
                        className="text-border"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary transition-all duration-1000 ease-out"
                        strokeDasharray={`${scanResult.confidence}, 100`}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-[11px] font-bold text-foreground font-mono leading-none">
                        {scanResult.confidence.toFixed(1)}%
                      </span>
                      <span className="text-[7px] uppercase font-bold text-muted-foreground tracking-tight leading-none mt-0.5">
                        CONF
                      </span>
                    </div>
                  </div>

                  {/* Disease Details & Severity Badge */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                        {scanResult.crop} specimen
                      </span>
                      
                      {scanResult.severity === "High" ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded-md">
                          <AlertTriangle className="h-3 w-3" />
                          High Severity
                        </span>
                      ) : scanResult.severity === "Medium" ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                          <AlertTriangle className="h-3 w-3" />
                          Medium Severity
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                          <ShieldCheck className="h-3 w-3" />
                          Healthy
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-foreground mt-1.5 truncate">
                      {scanResult.name}
                    </h4>
                  </div>
                </div>

                {/* Treatment Card Body */}
                <div className="p-5 flex-1 flex flex-col gap-4 overflow-y-auto">
                  {/* Summary Description */}
                  <div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {scanResult.description}
                    </p>
                  </div>

                  {/* Tabs Selector for Treatment Recommendations */}
                  <div className="border-b border-border/60">
                    <div className="flex gap-4 -mb-px">
                      {[
                        { id: "organic", label: "Organic Control" },
                        { id: "chemical", label: "Chemical Control" },
                        { id: "preventive", label: "Preventive" }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTab(t.id as any)}
                          className={`pb-2 text-xs font-bold transition-all border-b-2 ${
                            activeTab === t.id
                              ? "border-primary text-primary"
                              : "border-transparent text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tab Items List */}
                  <div className="flex-1">
                    <ul className="space-y-2.5">
                      {scanResult[activeTab].map((item, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs leading-relaxed text-foreground">
                          <div className="h-5 w-5 shrink-0 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mt-0.5">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer controls */}
                <div className="p-4 border-t border-border/60 bg-muted/10 flex items-center justify-between gap-3">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Reset Scan
                  </button>

                  <Button size="sm" variant="hero" className="rounded-xl font-bold text-xs gap-1.5 cursor-pointer">
                    Consult Expert
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>

      {/* Embedded CSS Animations for local component modularity */}
      <style jsx global>{`
        @keyframes scanLaser {
          0%, 100% {
            top: 5%;
          }
          50% {
            top: 95%;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
