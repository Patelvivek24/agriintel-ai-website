"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Sprout,
  Camera,
  Database,
  Target,
  LineChart,
  UserCheck,
  MessageSquare,
  Mail,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const FAQ = () => {
  const faqItems = [
    {
      question: "How does AI crop recommendation work?",
      answer:
        "AgriIntel AI analyzes multiple data layers including soil composition (pH, nitrogen, phosphorus, potassium levels), local climate history, real-time weather forecasts, and satellite vegetation indices (NDVI). Our machine learning models compare this data with crop suitability datasets to recommend the highest-yielding crop varieties for your specific plot, optimizing resource use and maximizing profitability.",
      icon: Sprout,
      iconColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      question: "Can I detect diseases using mobile photos?",
      answer:
        "Yes, absolutely! Using our AgriIntel mobile app, you can snap a photo of any stressed or discolored leaf. Our computer vision models instantly scan the image, identify the likely pathogen or nutrient deficiency with up to 98% accuracy, and provide step-by-step organic and chemical treatment recommendations.",
      icon: Camera,
      iconColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      question: "Which crops are supported?",
      answer:
        "We support over 45 major global crop types, including staple grains (wheat, rice, corn), high-value cash crops (soybeans, cotton, sugarcane), a wide variety of vegetables, and orchard fruits. We are continuously adding new crop models based on regional agricultural requests.",
      icon: Database,
      iconColor: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      question: "How accurate are yield predictions?",
      answer:
        "Our deep-learning yield prediction models achieve an average accuracy rate of 92–95%. Accuracy is dynamic and increases throughout the growing season as more data points (such as weather events, sensor telemetry, and satellite scans) are ingested by our platform.",
      icon: Target,
      iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      question: "Can I access market prices in real time?",
      answer:
        "Yes. AgriIntel integrates directly with local and global agricultural commodity exchanges. You get real-time price feeds, volume analysis, and historical trends for local APMC markets as well as international trading hubs, enabling you to sell your produce at the optimal time.",
      icon: LineChart,
      iconColor: "text-rose-500 bg-rose-500/10 border-rose-500/20",
    },
    {
      question: "Do you provide expert consultations?",
      answer:
        "While our platform is fully automated, our Enterprise and Professional tiers include direct access to certified agronomists and crop scientists. You can schedule 1-on-1 virtual consultations to review AI-generated reports and get personalized action plans for your farm.",
      icon: UserCheck,
      iconColor: "text-teal-500 bg-teal-500/10 border-teal-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32 border-t border-border/40">
      {/* Decorative Blur Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl dark:bg-primary/2" />
        <div className="absolute right-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/2" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column - Help & Header Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 lg:h-fit">
            <div className="glass relative overflow-hidden rounded-3xl p-8 border border-border/60 shadow-card dark:border-border/30 dark:bg-card/40">
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 opacity-70 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-48 w-48 rounded-full bg-emerald-500/10 opacity-70 blur-3xl" />

              <div className="relative z-10">
                {/* Badge */}
                <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <HelpCircle className="h-3.5 w-3.5" />
                  Support Hub
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h2>

                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Get instant answers to common questions about AgriIntel AI&apos;s features, capabilities, and integrations. Can&apos;t find what you need? We are here to help.
                </p>

                {/* Dynamic Metric / Micro-Interactions Card */}
                <div className="mt-8 rounded-2xl bg-muted/40 p-4 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                      <Sparkles className="h-5 w-5 animate-pulse-glow" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">98% Customer Satisfaction</p>
                      <p className="text-xs text-muted-foreground">Based on reviews from 12,000+ active farmers</p>
                    </div>
                  </div>
                </div>

                {/* Direct Actions */}
                <div className="mt-8 space-y-3">
                  <Button
                    variant="hero"
                    className="w-full justify-center group"
                    onClick={() => window.open("/dashboard", "_blank")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Ask AI Assistant
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-center border-border/60 hover:bg-muted/40"
                    onClick={() => window.location.href = "mailto:support@agriintel.ai"}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Support Team
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion Items */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={`faq-item-${index}`}
                    className="group border border-border/60 bg-card/40 hover:bg-card/70 dark:border-border/30 dark:bg-card/20 dark:hover:bg-card/30 rounded-2xl px-6 transition-all duration-300 hover:shadow-card hover:border-primary/20 data-[state=open]:bg-card/80 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow dark:data-[state=open]:bg-card/40 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left text-base md:text-lg font-semibold text-foreground transition-colors cursor-pointer group-hover:text-primary data-[state=open]:text-primary [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-4 pr-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors group-hover:border-primary/30 group-data-[state=open]:border-primary/40 ${item.iconColor}`}>
                          <Icon className="h-5 w-5 transition-transform group-hover:scale-110 group-data-[state=open]:scale-110" />
                        </div>
                        <span className="leading-snug">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                      <div className="pl-14 pr-2">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};
