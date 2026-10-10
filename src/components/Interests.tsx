"use client";

import React from "react";
import { InterestItem } from "@/data/portfolioData";
import { Film, Layers, Palette, Gamepad2, Sparkles, CheckCircle2 } from "lucide-react";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

interface InterestsProps {
  interests: InterestItem[];
}

export function Interests({ interests }: InterestsProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "film":
        return <Film className="w-5 h-5 text-[#E6552F]" />;
      case "code":
        return <Layers className="w-5 h-5 text-[#6366F1]" />;
      case "palette":
        return <Palette className="w-5 h-5 text-[#10B981]" />;
      case "gamepad":
        return <Gamepad2 className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E6552F]" />;
    }
  };

  const getAccentGradient = (id: string) => {
    switch (id) {
      case "cinema":
        return "from-[#E6552F]/15 via-[#F97316]/5 to-transparent";
      case "web-architecture":
        return "from-[#6366F1]/15 via-[#8B5CF6]/5 to-transparent";
      case "ui-ux-design":
        return "from-[#10B981]/15 via-[#06B6D4]/5 to-transparent";
      case "gaming-scifi":
        return "from-[#F59E0B]/15 via-[#F43F5E]/5 to-transparent";
      default:
        return "from-[#E6552F]/15 via-transparent to-transparent";
    }
  };

  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold liquid-pill-rose mb-2">
            Section 05
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#131210]">
            Interests, Passions <span className="font-serif italic font-normal text-inherit px-0.5">&</span> Explorations
          </h2>
        </div>
        <span className="glass-pill px-2.5 py-1 text-[0.72rem] text-[#716E68]">
          [Beyond The Code]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-2xl mb-8">
        Personal pursuits, media curation, and creative craft driving my approach to engineering, software architecture, and interface design.
      </p>

      {/* Asymmetric Glassmorphic Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
        {interests.map((item, index) => {
          // Asymmetric Bento span: 7 + 5 for first row, 5 + 7 for second row
          const colSpan =
            index === 0
              ? "lg:col-span-7"
              : index === 1
              ? "lg:col-span-5"
              : index === 2
              ? "lg:col-span-5"
              : "lg:col-span-7";

          return (
            <LiquidGlassCard
              key={item.id}
              className={`${colSpan} glass-panel glass-card-hover p-6 sm:p-7 rounded-[18px] border border-white/80 dark:border-white/10 shadow-lg group`}
              accentGlow={item.accentColor}
            >
              {/* Top Accent Liquid Prism Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.accentColor}B3, transparent)`,
                }}
              />

              {/* Corner Ambient Liquid Glow Accent */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${getAccentGradient(
                  item.id
                )} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500 opacity-60 group-hover:opacity-100`}
              />

              <div className="relative z-10 space-y-4">
                {/* Top Metadata Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-[12px] glass-pill flex items-center justify-center border shadow-sm group-hover:scale-105 transition-transform"
                      style={{
                        backgroundColor: `${item.accentColor}0D`,
                        borderColor: `${item.accentColor}25`,
                      }}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <div>
                      <span className="font-mono text-[0.68rem] tracking-wider uppercase text-[#716E68] block">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className="font-mono text-[0.66rem] px-3 py-1 rounded-full font-semibold border shadow-sm"
                    style={{
                      backgroundColor: `${item.accentColor}0D`,
                      borderColor: `${item.accentColor}25`,
                      color: item.accentColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#131210] leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[0.75rem] text-[#716E68] mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[0.88rem] leading-[1.68] text-[#131210]/85 font-sans">
                  {item.description}
                </p>

                {/* Key Points / Highlights */}
                <div className="pt-2">
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-[#716E68] block mb-2 font-medium">
                    Key Highlights & Influences:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-[0.82rem] leading-relaxed text-[#131210]/90 font-sans"
                      >
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: item.accentColor }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="pt-4 mt-4 border-t border-[rgba(113,110,104,0.15)] flex flex-wrap items-center gap-1.5 relative z-10">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill font-mono text-[0.68rem] px-2.5 py-1 rounded-[6px] text-[#716E68] hover:text-[#131210] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </LiquidGlassCard>
          );
        })}
      </div>
    </section>
  );
}
