import {
  CloudLightning,
  Bug,
  TrendingDown,
  Droplet,
  Sprout,
  UserRoundSearch,
  type LucideIcon,
} from "lucide-react";

type Challenge = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: string;
};

const challenges: Challenge[] = [
  {
    icon: CloudLightning,
    title: "Unpredictable Weather",
    description: "Unexpected climate changes impact crop production and planning.",
    tone: "linear-gradient(135deg,#0ea5e9,#06b6d4)",
  },
  {
    icon: Bug,
    title: "Pest & Disease Outbreaks",
    description: "Late disease detection causes significant crop losses.",
    tone: "linear-gradient(135deg,#f97316,#ef4444)",
  },
  {
    icon: TrendingDown,
    title: "Market Price Volatility",
    description: "Farmers often lack real-time market intelligence.",
    tone: "linear-gradient(135deg,#a855f7,#6366f1)",
  },
  {
    icon: Droplet,
    title: "Water Management Challenges",
    description: "Inefficient irrigation wastes valuable resources.",
    tone: "linear-gradient(135deg,#3b82f6,#0ea5e9)",
  },
  {
    icon: Sprout,
    title: "Poor Crop Selection",
    description: "Choosing the wrong crop affects profitability.",
    tone: "linear-gradient(135deg,#10b981,#22c55e)",
  },
  {
    icon: UserRoundSearch,
    title: "Limited Expert Access",
    description: "Agricultural guidance is not always readily available.",
    tone: "linear-gradient(135deg,#f59e0b,#f97316)",
  },
];

export const Challenges = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[60%] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Problem
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Challenges Modern <span className="text-gradient">Farmers Face</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Agriculture remains one of the world&apos;s most critical industries, yet farmers continue to
            struggle with unpredictable conditions and limited access to intelligent
            decision-making tools.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: c.tone }}
                />
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: c.tone }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>

                <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Solved with AgriIntel AI</span>
                  <span className="h-px w-8 bg-primary" />
                </div>

                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
