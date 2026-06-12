"use client";

import { useState } from "react";
import { Check, Sparkles, Sprout, Building, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for individual farmers starting their digital journey.",
      price: {
        monthly: "Free",
        yearly: "Free",
      },
      periodText: {
        monthly: "",
        yearly: "",
      },
      features: [
        "Basic weather forecasts",
        "Market updates",
        "Limited crop recommendations",
      ],
      cta: "Get Started",
      variant: "outline" as const,
      icon: Sprout,
      iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "Professional Plan",
      description: "Advanced AI analysis and yield tracking for commercial farms.",
      price: {
        monthly: "₹999",
        yearly: "₹799",
      },
      periodText: {
        monthly: "/month",
        yearly: "/month, billed annually",
      },
      features: [
        "AI recommendations",
        "Disease detection",
        "Yield prediction",
        "Advanced analytics",
      ],
      cta: "Start 14-Day Free Trial",
      variant: "hero" as const,
      icon: Zap,
      iconColor: "text-primary bg-primary/10 border-primary/20",
      popular: true,
    },
    {
      name: "Enterprise Plan",
      description: "Custom solutions for agribusinesses, cooperatives, and agencies.",
      price: {
        monthly: "Custom Pricing",
        yearly: "Custom Pricing",
      },
      periodText: {
        monthly: "",
        yearly: "",
      },
      features: [
        "Unlimited farms",
        "Custom integrations",
        "Dedicated support",
        "Government & enterprise solutions",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
      icon: Building,
      iconColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32 border-t border-border/40">
      {/* Decorative Blur Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl dark:bg-primary/2" />
        <div className="absolute left-10 bottom-10 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/2" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/2" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing Plans
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Flexible Plans <span className="text-gradient">for Every Farm</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Choose the package that fits your operational needs. Get started with our basic tools
            for free, or unlock the full power of our AI model.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors cursor-pointer ${
                billingPeriod === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Billed Monthly
            </span>
            <button
              onClick={() =>
                setBillingPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"))
              }
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-muted/40"
              aria-label="Toggle billing period"
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ${
                  billingPeriod === "yearly" ? "translate-x-5 bg-primary" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  billingPeriod === "yearly" ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
                onClick={() => setBillingPeriod("yearly")}
              >
                Billed Annually
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 animate-pulse-glow">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billingPeriod === "yearly" ? plan.price.yearly : plan.price.monthly;
            const text = billingPeriod === "yearly" ? plan.periodText.yearly : plan.periodText.monthly;

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-primary bg-card/90 shadow-glow dark:bg-card/60"
                    : "border border-border/60 bg-card/75 hover:shadow-card hover:border-primary/20 dark:border-border/30 dark:bg-card/40 dark:hover:bg-card/60"
                }`}
              >
                {/* Popular Glow Indicator & Badge */}
                {plan.popular && (
                  <>
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 opacity-70 blur-3xl animate-pulse-glow" />
                    <div className="absolute top-0 right-0 rounded-bl-2xl bg-[image:var(--gradient-primary)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                      Most Popular
                    </div>
                  </>
                )}

                {/* Card Top Block */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      {plan.name}
                    </h3>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${plan.iconColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                      {price}
                    </span>
                    {text && (
                      <span className="text-sm font-medium text-muted-foreground">
                        {text}
                      </span>
                    )}
                  </div>

                  {/* Features Checklist */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            plan.popular
                              ? "border-primary/30 bg-primary/10 text-primary"
                              : "border-border bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Button */}
                <div className="mt-8">
                  <Button
                    variant={plan.variant}
                    className="w-full justify-center group-hover:scale-[1.01] transition-transform duration-300"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
