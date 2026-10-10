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
          <span className="font-mono text-[0.72rem] tracking-widest text-[#716E68] uppercase block mb-1">
            Section 03
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#131210]">
            Education & Milestone Ledger
          </h2>
        </div>
        <span className="font-mono text-[0.75rem] text-[#716E68]">
          [Track Record]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Chronological record of university academics, shipped software projects, and technical milestones.
      </p>

      {/* Structured Glassmorphic Ledger Table */}
      <div className="glass-panel rounded-[12px] overflow-hidden shadow-lg border border-white/80">
        {/* Table Head (desktop) */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3.5 border-b border-[rgba(113,110,104,0.15)] bg-white/40 font-mono text-[0.7rem] uppercase tracking-wider text-[#716E68]">
          <div className="col-span-2">Year</div>
          <div className="col-span-4">Initiative / Context</div>
          <div className="col-span-6">Outcome / Contribution</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[rgba(113,110,104,0.15)]">
          {milestones.map((item) => (
            <div
              key={`${item.date}-${item.title}`}
              className="p-5 sm:px-6 sm:py-4.5 sm:grid sm:grid-cols-12 gap-4 items-baseline hover:bg-white/40 transition-colors duration-200"
            >
              {/* Year Chip */}
              <div className="sm:col-span-2 mb-2 sm:mb-0">
                <span className="glass-pill font-mono text-[0.72rem] px-2.5 py-0.5 rounded-full font-semibold text-[#E6552F] inline-block">
                  {item.date}
                </span>
              </div>

              {/* Title & Context */}
              <div className="sm:col-span-4 mb-2 sm:mb-0 space-y-1.5">
                <div className="text-[0.94rem] font-medium text-[#131210]">
                  {item.title}
                </div>
                <div className="inline-block glass-pill font-mono text-[0.66rem] px-2.5 py-0.5 rounded-full text-[#716E68]">
                  {item.context}
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-6 text-[0.88rem] leading-[1.65] text-[#131210]/85">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
