"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp, ArrowUpRight } from "lucide-react";
import { DeveloperProfile } from "@/data/portfolioData";
import { PlatformIcon } from "@/components/PlatformIcon";
import { ThemeToggle } from "@/components/ThemeToggle";

interface FooterProps {
  email: string;
  name: string;
  links: DeveloperProfile["links"];
}

export function Footer({ email, name, links }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 pb-16 text-[#716E68]">
      {/* Top Footer Callout with Frosted Glass & Ambient Glow */}
      <div className="glass-panel p-6 sm:p-8 rounded-[16px] mb-8 flex flex-col gap-6 relative overflow-hidden shadow-xl border border-white/80 dark:border-white/10">
        {/* Top vibrant multi-stop gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#E6552F] via-[#F59E0B] via-[#10B981] via-[#06B6D4] to-[#6366F1]" />
        
        {/* Glowing background washes */}
        <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#E6552F]/15 via-[#6366F1]/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 text-[0.7rem] font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Opportunities</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#131210] dark:text-[#F3F1EC] mb-1.5">
              Initiate Collaboration
            </h3>
            <p className="text-[0.9rem] text-[#716E68] dark:text-[#A8A49C] font-sans">
              Available for internships, full-stack engineering roles, and collaborative software builds.
            </p>
          </div>

          {/* Copy Email Button with Subtle Glow */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#131210] dark:bg-[#1C1A17] hover:bg-[#2c2a26] text-[#FFFFFF] font-mono text-[0.75rem] font-medium transition-all duration-200 cursor-pointer shrink-0 shadow-[0_4px_16px_rgba(230,85,47,0.2)] hover:shadow-[0_6px_20px_rgba(230,85,47,0.35)] hover:-translate-y-0.5 border border-white/10"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Copied {email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#E6552F]" />
                <span>Copy {email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Platforms Row in the Callout */}
        {links && links.length > 0 && (
          <div className="pt-5 border-t border-[rgba(113,110,104,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#716E68] dark:text-[#A8A49C] font-medium">
              Connect Across Platforms:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {links.map((link) => {
                const getPlatformClasses = () => {
                  switch (link.platform) {
                    case "github":
                      return "hover:text-purple-700 dark:hover:text-purple-300 hover:border-purple-500/40 hover:shadow-[0_4px_14px_rgba(168,85,247,0.2)]";
                    case "linkedin":
                      return "hover:text-[#0A66C2] dark:hover:text-[#38bdf8] hover:border-[#0A66C2]/40 hover:shadow-[0_4px_14px_rgba(10,102,194,0.2)]";
                    case "instagram":
                      return "hover:text-[#E1306C] dark:hover:text-pink-300 hover:border-[#E1306C]/40 hover:shadow-[0_4px_14px_rgba(225,48,108,0.2)]";
                    default:
                      return "hover:text-[#E6552F] hover:border-[#E6552F]/40 hover:shadow-[0_4px_14px_rgba(230,85,47,0.2)]";
                  }
                };

                const getIconHoverClasses = () => {
                  switch (link.platform) {
                    case "github":
                      return "group-hover:text-purple-600 dark:group-hover:text-purple-400";
                    case "linkedin":
                      return "group-hover:text-[#0A66C2] dark:group-hover:text-[#38bdf8]";
                    case "instagram":
                      return "group-hover:text-[#E1306C] dark:group-hover:text-pink-400";
                    default:
                      return "group-hover:text-[#E6552F]";
                  }
                };

                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`group glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[#131210] dark:text-[#ECE9E2] ${getPlatformClasses()} font-mono text-[0.75rem] transition-all duration-200 hover:-translate-y-0.5`}
                    title={`${link.label} (${link.url})`}
                    aria-label={link.label}
                  >
                    <PlatformIcon
                      platform={link.platform}
                      className={`w-3.5 h-3.5 text-[#716E68] dark:text-[#A8A49C] ${getIconHoverClasses()} transition-colors`}
                    />
                    <span className="font-medium">{link.label}</span>
                    {link.url.startsWith("http") && (
                      <ArrowUpRight className={`w-3 h-3 text-[#716E68] dark:text-[#A8A49C] ${getIconHoverClasses()} transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Minimalist Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.75rem] font-mono border-t border-[rgba(113,110,104,0.15)] pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#131210] font-medium">{name}</span>
          <span className="text-[#DCD8D0]">/</span>
          <span>Editorial Engineering Portfolio</span>
          <span className="text-[#DCD8D0]">/</span>
          <span className="text-[#716E68]">Crafted with Next.js & Tailwind</span>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={scrollToTop}
            className="glass-pill px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-[#716E68] hover:text-[#131210] transition-colors cursor-pointer"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3 h-3 text-[#E6552F]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
