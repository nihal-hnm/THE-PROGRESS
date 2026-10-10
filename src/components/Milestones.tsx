import React from "react";
import { Milestone } from "@/data/portfolioData";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

interface MilestonesProps {
  milestones: Milestone[];
}

export function Milestones({ milestones }: MilestonesProps) {
  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold liquid-pill-emerald mb-2">
            Section 03 // Education
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#131210]">
            Education <span className="font-serif italic font-normal text-inherit px-0.5">&</span> Academic Ledger
          </h2>
        </div>
        <span className="glass-pill px-2.5 py-1 text-[0.72rem] text-[#716E68]">
          [Academic Record]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Formal university degree program, academic credentials, and chronological software milestones.
      </p>

      {/* Primary Education Card (Card 4 Direct Requirement) */}
      <LiquidGlassCard
        className="glass-panel p-6 sm:p-7 rounded-[18px] mb-8 shadow-xl border border-white/80 dark:border-white/10"
        accentGlow="#10B981"
      >
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent pointer-events-none mb-4 -mt-2" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[rgba(113,110,104,0.15)]">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-pill-emerald text-[0.72rem] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              <span>Current University Enrollment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#131210] dark:text-[#F3F1EC]">
              B.Tech in Computer Science & Engineering
            </h3>
            <p className="text-base text-[#E6552F] font-sans font-medium">
              NIAT x Geeta University
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 font-mono text-[0.78rem]">
            <span className="glass-pill px-3.5 py-1.5 text-[#131210] dark:text-[#ECE9E2] font-semibold">
              Duration: 2026 – 2030
            </span>
            <span className="liquid-pill-emerald px-3.5 py-1 text-emerald-700 dark:text-emerald-300 font-medium">
              Status: Active Undergraduate
            </span>
          </div>
        </div>

        {/* Academic Highlights & Coursework */}
        <div className="pt-5">
          <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#716E68] font-semibold block mb-3">
            Relevant Academic Information & Coursework:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-[0.75rem]">
            <div className="p-3 rounded-[10px] glass-panel-subtle border border-white/60 dark:border-white/10">
              <span className="text-[#10B981] block mb-1">01 / Computing</span>
              <span className="text-[#131210] dark:text-[#ECE9E2] font-sans text-[0.82rem]">
                Core Computing Principles & Systems Architecture
              </span>
            </div>
            <div className="p-3 rounded-[10px] glass-panel-subtle border border-white/60 dark:border-white/10">
              <span className="text-[#06B6D4] block mb-1">02 / Algorithms</span>
              <span className="text-[#131210] dark:text-[#ECE9E2] font-sans text-[0.82rem]">
                Data Structures, Algorithm Design & Complexity
              </span>
            </div>
            <div className="p-3 rounded-[10px] glass-panel-subtle border border-white/60 dark:border-white/10">
              <span className="text-[#8B5CF6] block mb-1">03 / Databases</span>
              <span className="text-[#131210] dark:text-[#ECE9E2] font-sans text-[0.82rem]">
                Relational Databases, SQL & Cloud Persistence
              </span>
            </div>
            <div className="p-3 rounded-[10px] glass-panel-subtle border border-white/60 dark:border-white/10">
              <span className="text-[#E6552F] block mb-1">04 / Web Systems</span>
              <span className="text-[#131210] dark:text-[#ECE9E2] font-sans text-[0.82rem]">
                Full-Stack Architecture & Modern Web Engineering
              </span>
            </div>
          </div>
        </div>
      </LiquidGlassCard>

      {/* Structured Glassmorphic Ledger Table with Mouse Caustics */}
      <LiquidGlassCard
        className="glass-panel rounded-[18px] overflow-hidden shadow-xl border border-white/80 dark:border-white/10"
        accentGlow="#10B981"
        tilt={false}
      >
        {/* Top Liquid Prism Refraction Line */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent pointer-events-none" />

        {/* Table Head (desktop) */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3.5 border-b border-[rgba(113,110,104,0.15)] bg-white/40 font-mono text-[0.7rem] uppercase tracking-wider text-[#716E68]">
          <div className="col-span-2">Year</div>
          <div className="col-span-4">Initiative / Context</div>
          <div className="col-span-6">Outcome / Contribution</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[rgba(113,110,104,0.15)]">
          {milestones.map((item) => {
            const isPresent = item.date === "Present";
            const isCouchCritics = item.date.includes("2026") && item.title.includes("Couch Critics");

            return (
              <div
                key={`${item.date}-${item.title}`}
                className="p-5 sm:px-6 sm:py-4.5 sm:grid sm:grid-cols-12 gap-4 items-baseline hover:bg-white/40 transition-colors duration-200"
              >
                {/* Year Chip */}
                <div className="sm:col-span-2 mb-2 sm:mb-0">
                  <span
                    className={`font-mono text-[0.72rem] px-3 py-1 rounded-full font-semibold inline-flex items-center gap-1.5 ${
                      isPresent
                        ? "liquid-pill-emerald"
                        : isCouchCritics
                        ? "liquid-pill-vermilion"
                        : "liquid-pill-indigo"
                    }`}
                  >
                    {isPresent && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />}
                    {item.date}
                  </span>
                </div>

                {/* Title & Context */}
                <div className="sm:col-span-4 mb-2 sm:mb-0 space-y-1.5">
                  <div className="text-[0.94rem] font-medium text-[#131210] dark:text-[#F3F1EC]">
                    {item.title}
                  </div>
                  <div
                    className={`inline-block font-mono text-[0.66rem] px-2.5 py-0.5 rounded-full font-medium ${
                      isPresent
                        ? "liquid-pill-emerald"
                        : isCouchCritics
                        ? "liquid-pill-vermilion"
                        : "liquid-pill-indigo"
                    }`}
                  >
                    {item.context}
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-6 text-[0.88rem] leading-[1.65] text-[#131210]/85">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </LiquidGlassCard>
    </section>
  );
}
