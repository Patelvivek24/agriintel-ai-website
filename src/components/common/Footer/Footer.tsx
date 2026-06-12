"use client";

import React, { useState } from "react";
import { Leaf, Linkedin, Facebook, Instagram, Youtube, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Custom SVG for X (formerly Twitter)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setLoading(false);
    }, 800);
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Product Overview", href: "#product" },
        { label: "Features", href: "#features" },
        { label: "Solutions", href: "#solutions" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Resource Center", href: "#resources" },
        { label: "Blog", href: "#blog" },
        { label: "Contact Us", href: "#contact" },
        { label: "Documentation", href: "#docs" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press & Media", href: "#press" },
        { label: "Partners", href: "#partners" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      hoverClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/10",
    },
    {
      name: "X",
      href: "https://x.com",
      icon: XIcon,
      hoverClass: "hover:text-white hover:border-white/30 hover:bg-white/10",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
      hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/30 hover:bg-[#1877F2]/10",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
      hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/30 hover:bg-[#E1306C]/10",
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: Youtube,
      hoverClass: "hover:text-[#FF0000] hover:border-[#FF0000]/30 hover:bg-[#FF0000]/10",
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="dark bg-[#080B11] border-t border-border/30 text-zinc-100 relative overflow-hidden py-16 lg:py-20">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 bottom-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] opacity-70" />
        <div className="absolute right-1/4 top-0 h-96 w-96 translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px] opacity-60" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="relative z-10 rounded-3xl border border-white/5 bg-white/[0.02] p-8 md:p-12 mb-16 backdrop-blur-md overflow-hidden">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-50" />
          
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Stay updated with AgriIntel AI
              </h3>
              <p className="mt-3 text-base text-zinc-400 max-w-xl">
                Get the latest insights on precision agriculture, crop disease management, and smart yield prediction directly in your inbox.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="lg:col-span-5 w-full flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-4.5 w-4.5 text-zinc-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
                />
              </div>
              <Button 
                type="submit" 
                variant="hero" 
                disabled={loading}
                className="py-3 px-6 rounded-xl font-semibold shadow-lg group shrink-0"
              >
                {loading ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/5">
          {/* Logo & Description */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md opacity-60 bg-[image:var(--gradient-primary)] group-hover:opacity-90 transition-opacity" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-glow">
                  <Leaf className="h-5.5 w-5.5" />
                </div>
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="font-bold tracking-tight text-white text-lg">AgriIntel</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                  AI
                </span>
              </div>
            </a>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Empowering the global agricultural ecosystem with next-generation artificial intelligence. We help growers, enterprises, and researchers predict yields, diagnose disease, and optimize resources.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                      social.hoverClass
                    )}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-4">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-sm text-zinc-500">
          <p className="order-2 sm:order-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} AgriIntel AI. All rights reserved.
          </p>
          
          <div className="order-1 sm:order-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-zinc-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
