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
            Milestones & Competitions
          </h2>
        </div>
        <span className="font-mono text-[0.75rem] text-[#716E68]">
          [Track Record]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Chronological record of hackathon builds, open-source initiatives, and engineering fellowships.
      </p>

      {/* Structured Ledger Table */}
      <div className="border border-[rgba(113,110,104,0.25)] rounded-[6px] bg-[#FFFFFF] overflow-hidden">
        {/* Table Head (desktop) */}
        <div className="hidden sm:grid grid-cols-12 gap-4 px-5 py-3 border-b border-[rgba(113,110,104,0.2)] bg-[#FAF8F5] font-mono text-[0.7rem] uppercase tracking-wider text-[#716E68]">
          <div className="col-span-2">Year</div>
          <div className="col-span-4">Initiative / Context</div>
          <div className="col-span-6">Outcome / Contribution</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[rgba(113,110,104,0.2)]">
          {milestones.map((item, idx) => (
            <div
              key={`${item.date}-${item.title}`}
              className="p-4 sm:px-5 sm:py-4 sm:grid sm:grid-cols-12 gap-4 items-baseline hover:bg-[#FAF8F5]/60 transition-colors"
            >
              {/* Year */}
              <div className="sm:col-span-2 font-mono text-[0.75rem] text-[#716E68] mb-1 sm:mb-0">
                {item.date}
              </div>

              {/* Title & Context */}
              <div className="sm:col-span-4 mb-2 sm:mb-0 space-y-1">
                <div className="text-[0.92rem] font-medium text-[#131210]">
                  {item.title}
                </div>
                <div className="inline-block font-mono text-[0.66rem] px-2 py-0.5 rounded-[2px] bg-[#F3F0EA] text-[#716E68] border border-[rgba(113,110,104,0.2)]">
                  {item.context}
                </div>
              </div>

              {/* Description */}
              <div className="sm:col-span-6 text-[0.88rem] leading-[1.62] text-[#131210]/80">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
