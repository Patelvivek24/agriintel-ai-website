import {
  Activity,
  Bell,
  CloudSun,
  Droplets,
  Leaf,
  Search,
  Sparkles,
  Sprout,
  Sun,
  TrendingUp,
  Wind,
} from "lucide-react";

const Spark = ({ color }: { color: string }) => {
  const pts = [4, 14, 10, 8, 18, 16, 26, 6, 34, 12, 42, 4, 50, 10];
  const d = pts.reduce(
    (acc, v, i) => acc + (i === 0 ? `M${v},` : i % 2 === 1 ? `${v} ` : `L${v},`),
    "",
  );
  return (
    <svg viewBox="0 0 54 20" className="h-10 w-full">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L50,20 L4,20 Z`} fill={`url(#g-${color})`} />
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export const DashboardMockup = () => {
  return (
    <div className="glass-strong relative rounded-3xl p-5 shadow-glow">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)]">
            <Sprout className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">AgriIntel AI</p>
            <p className="text-[10px] text-muted-foreground">Farm Dashboard</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-lg bg-muted/60 px-3 py-1.5 sm:flex">
          <Search className="h-3 w-3 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground">Search insights…</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative rounded-lg bg-muted/60 p-1.5">
            <Bell className="h-3.5 w-3.5 text-foreground" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
          </div>
          <div className="h-7 w-7 rounded-full bg-[image:var(--gradient-primary)]" />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-4 grid grid-cols-6 gap-3">
        {/* Weather */}
        <div className="col-span-6 sm:col-span-3 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-4 ring-1 ring-sky-100">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-700">
              Live Weather
            </p>
            <CloudSun className="h-4 w-4 text-sky-500" />
          </div>
          <div className="mt-2 flex items-end gap-2">
            <p className="text-3xl font-bold text-foreground">28°</p>
            <p className="pb-1 text-xs text-muted-foreground">Partly cloudy</p>
          </div>
          <div className="mt-3 flex gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Droplets className="h-3 w-3" /> 62%
            </span>
            <span className="flex items-center gap-1">
              <Wind className="h-3 w-3" /> 12km/h
            </span>
            <span className="flex items-center gap-1">
              <Sun className="h-3 w-3" /> UV 6
            </span>
          </div>
        </div>

        {/* Crop health */}
        <div className="col-span-6 sm:col-span-3 rounded-2xl bg-gradient-to-br from-emerald-50 to-white p-4 ring-1 ring-emerald-100">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
              Crop Health
            </p>
            <Leaf className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-2 flex items-end justify-between">
            <p className="text-3xl font-bold text-foreground">94<span className="text-base text-muted-foreground">/100</span></p>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Excellent
            </span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-emerald-100">
            <div className="h-full w-[94%] rounded-full bg-[image:var(--gradient-primary)]" />
          </div>
        </div>

        {/* AI recommendation */}
        <div className="col-span-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-primary-glow/10 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)]">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                AI Recommendation
              </p>
              <p className="mt-1 text-xs text-foreground">
                Optimal time to irrigate Field B. Soil moisture forecasted to drop 18% by tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Market prices */}
        <div className="col-span-6 sm:col-span-4 rounded-2xl bg-white/80 p-4 ring-1 ring-border">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Market Prices
            </p>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { name: "Wheat", price: "₹2,840", change: "+4.2%", color: "oklch(0.55 0.16 150)" },
              { name: "Corn", price: "₹1,920", change: "+1.8%", color: "oklch(0.72 0.18 90)" },
              { name: "Soy", price: "₹4,510", change: "-0.6%", color: "oklch(0.62 0.2 30)" },
            ].map((r) => (
              <div key={r.name} className="flex items-center gap-3">
                <p className="w-12 text-xs font-medium text-foreground">{r.name}</p>
                <div className="flex-1">
                  <Spark color={r.color} />
                </div>
                <p className="w-14 text-right text-xs font-semibold text-foreground">{r.price}</p>
                <p
                  className={`w-12 text-right text-[10px] font-semibold ${
                    r.change.startsWith("+") ? "text-emerald-600" : "text-rose-500"
                  }`}
                >
                  {r.change}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Yield forecast */}
        <div className="col-span-6 sm:col-span-2 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-glow/5 p-4 ring-1 ring-primary/15">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            Yield Forecast
          </p>
          <p className="mt-2 text-2xl font-bold text-foreground">42.8t</p>
          <p className="text-[10px] text-muted-foreground">per hectare · Q4</p>
          <div className="mt-3 flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <Activity className="h-3 w-3" /> +12.4% vs last season
          </div>
        </div>
      </div>
    </div>
  );
};
