import React from "react";
import { Milestone } from "@/data/portfolioData";

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
            Section 03
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#131210]">
            Education <span className="font-serif italic font-normal text-inherit px-0.5">&</span> Milestone Ledger
          </h2>
        </div>
        <span className="glass-pill px-2.5 py-1 text-[0.72rem] text-[#716E68]">
          [Track Record]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Chronological record of university academics, shipped software projects, and technical milestones.
      </p>

      {/* Structured Glassmorphic Ledger Table */}
      <div className="glass-panel rounded-[14px] overflow-hidden shadow-lg border border-white/80 dark:border-white/10 relative">
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
      </div>
    </section>
  );
}
