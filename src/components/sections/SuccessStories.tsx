"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ArrowLeft, ArrowRight, Sprout, Droplet, TrendingDown, CheckCircle2, type LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Testimonial = {
  name: string;
  location: string;
  farmType: string;
  photo: string;
  review: string;
  improvement: string;
  metricLabel: string;
  metricValue: string;
  rating: number;
  icon: LucideIcon;
  tone: string;
  glowColor: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    farmType: "Wheat & Rice Cultivation (120 Acres)",
    photo: "/images/testimonials/farmer_punjab.png",
    review: "AgriIntel's disease detection caught a leaf rust outbreak in my wheat crop two weeks before it was visible to the naked eye. The AI-guided treatment saved my entire harvest and reduced pesticide costs.",
    improvement: "+28% Crop Yield increase & -40% crop loss",
    metricLabel: "Yield Gain",
    metricValue: "+28%",
    rating: 5,
    icon: Sprout,
    tone: "from-emerald-500 to-teal-500 text-white",
    glowColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    name: "Gabriela Flores",
    location: "Sonoma Valley, California, USA",
    farmType: "Organic Vineyards (75 Acres)",
    photo: "/images/testimonials/farmer_california.png",
    review: "With smart irrigation suggestions, we've reduced water consumption by a third while improving grape quality. AgriIntel's weather alerts are incredibly precise, helping us protect the vines from frost.",
    improvement: "-35% Water usage reduction & premium grape quality",
    metricLabel: "Water Saved",
    metricValue: "35%",
    rating: 5,
    icon: Droplet,
    tone: "from-blue-500 to-sky-500 text-white",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    name: "David Vance",
    location: "Iowa, USA",
    farmType: "Corn & Soybean Production (650 Acres)",
    photo: "/images/testimonials/farmer_iowa.png",
    review: "Managing 650 acres is challenging, but the central AI dashboard gives me a full picture of soil health and crop stress index. The integration with our tractor machinery was seamless and saved huge input costs.",
    improvement: "$18,400 input cost savings & optimized fertilizer use",
    metricLabel: "Costs Saved",
    metricValue: "$18.4K",
    rating: 5,
    icon: TrendingDown,
    tone: "from-orange-500 to-red-500 text-white",
    glowColor: "rgba(249, 115, 22, 0.15)",
  },
  {
    name: "Amadi Diallo",
    location: "Nakuru, Kenya",
    farmType: "Commercial Greenhouse Vegetables (15 Acres)",
    photo: "/images/testimonials/farmer_kenya.png",
    review: "As greenhouse growers, humidity and soil nutrition are everything. AgriIntel AI monitors our IoT sensors and adjusts irrigation feeds automatically. Our tomato crop consistency has never been better.",
    improvement: "+45% Crop consistency & -20% fertilizer expenses",
    metricLabel: "Consistency",
    metricValue: "+45%",
    rating: 5,
    icon: CheckCircle2,
    tone: "from-indigo-500 to-purple-500 text-white",
    glowColor: "rgba(99, 102, 241, 0.15)",
  },
];

export const SuccessStories = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32 border-t border-border/40">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl dark:bg-primary/2" />
        <div className="absolute left-1/4 bottom-1/4 h-[30rem] w-[30rem] rounded-full bg-emerald-500/5 blur-3xl dark:bg-emerald-500/2" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Customer success
          </div>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Trusted by Farmers and <span className="text-gradient">Agricultural Organizations</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Discover how agricultural producers and enterprises around the world leverage AgriIntel AI 
            to boost crop yields, lower input costs, conserve resources, and drive operational efficiency.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((t, idx) => {
                const Icon = t.icon;
                return (
                  <CarouselItem key={t.name} className="pl-6 basis-full md:basis-1/2 lg:basis-1/2">
                    <div className="group relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card/75 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-card hover:border-primary/20 dark:border-border/30 dark:bg-card/40 dark:hover:bg-card/60">
                      {/* Ambient Glow */}
                      <div
                        className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 dark:group-hover:opacity-30"
                        style={{ backgroundColor: t.glowColor }}
                      />

                      <div className="relative flex flex-col gap-6">
                        {/* Profile & Star Rating */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-border/80 shadow-sm group-hover:border-primary/30 transition-all duration-300">
                              <img
                                src={t.photo}
                                alt={t.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                                {t.name}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
                              <span className="inline-block text-[10px] font-semibold bg-muted dark:bg-muted/30 text-muted-foreground rounded-full px-2.5 py-0.5 mt-1.5">
                                {t.farmType}
                              </span>
                            </div>
                          </div>

                          {/* Star Ratings */}
                          <div className="flex gap-0.5 text-amber-500 mt-1">
                            {Array.from({ length: t.rating }).map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-amber-500 stroke-amber-500" />
                            ))}
                          </div>
                        </div>

                        {/* Testimonial text */}
                        <div className="relative mt-2">
                          <Quote className="absolute -left-2 -top-3 h-8 w-8 text-primary/10 -rotate-180 pointer-events-none" />
                          <p className="text-sm md:text-base leading-relaxed text-muted-foreground italic relative pl-5 z-10">
                            &ldquo;{t.review}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Success Metrics Footer */}
                      <div className="relative mt-8 pt-6 border-t border-border/40 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-muted-foreground block uppercase tracking-wider font-bold">
                            Improvement Achieved
                          </span>
                          <span className="text-sm font-semibold text-foreground mt-1 block leading-tight">
                            {t.improvement}
                          </span>
                        </div>

                        {/* Metric Badge */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-muted/50 dark:bg-muted/20 border border-border/40 shrink-0">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${t.tone}`}>
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <div>
                            <span className="block text-[9px] text-muted-foreground uppercase leading-none font-bold tracking-wider">
                              {t.metricLabel}
                            </span>
                            <span className="block text-xs font-extrabold text-foreground mt-0.5">
                              {t.metricValue}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Accent Accentuation */}
                      <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border border-border/60 bg-card hover:bg-accent hover:text-accent-foreground cursor-pointer shadow-sm transition-colors"
                onClick={() => api?.scrollPrev()}
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border border-border/60 bg-card hover:bg-accent hover:text-accent-foreground cursor-pointer shadow-sm transition-colors"
                onClick={() => api?.scrollNext()}
              >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
