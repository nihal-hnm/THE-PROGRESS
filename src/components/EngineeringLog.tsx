"use client";

import React, { useState } from "react";
import { EngineeringLog as EngineeringLogType } from "@/data/portfolioData";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

interface EngineeringLogProps {
  logs: EngineeringLogType[];
}

type FilterStatus = "All" | "Currently Building" | "Researching" | "Completed";

export function EngineeringLog({ logs }: EngineeringLogProps) {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");

  const filteredLogs = logs.filter((log) => {
    if (activeFilter === "All") return true;
    return log.status === activeFilter;
  });

  const filterOptions: FilterStatus[] = [
    "All",
    "Currently Building",
    "Researching",
    "Completed",
  ];

  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 mb-2">
            Section 02
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#131210]">
            Engineering Log <span className="font-serif italic font-normal text-inherit px-0.5">&</span> Changelog
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-end">
          {filterOptions.map((option) => {
            const isSelected = activeFilter === option;
            const count =
              option === "All"
                ? logs.length
                : logs.filter((l) => l.status === option).length;

            return (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-3 py-1.5 rounded-full font-mono text-[0.7rem] transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#131210] dark:bg-white text-white dark:text-[#131210] shadow-[0_2px_10px_rgba(19,18,16,0.2)]"
                    : "glass-pill text-[#716E68] hover:text-[#131210] hover:border-[#6366F1]/40"
                }`}
              >
                <span>{option}</span>
                <span
                  className={`ml-1.5 font-semibold ${
                    isSelected ? "text-[#E6552F]" : "text-[#716E68]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Continuous engineering telemetry replacing vanity percentage bars. Practical deep dives, internals research, and build notes.
      </p>

      {/* Changelog Ledger 2-Column Grid of Frosted Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLogs.map((log) => {
          const isBuilding = log.status === "Currently Building";
          const isCompleted = log.status === "Completed";

          return (
            <LiquidGlassCard
              key={`${log.date}-${log.topic}`}
              className="p-5 sm:p-6 rounded-[16px] glass-panel glass-card-hover flex flex-col justify-between border border-white/80 dark:border-white/10 shadow-lg group"
              accentGlow={isBuilding ? "#E6552F" : isCompleted ? "#10B981" : "#6366F1"}
            >
              {/* Liquid Top Prism Refraction Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none ${
                  isBuilding
                    ? "bg-gradient-to-r from-transparent via-[#E6552F]/70 to-transparent"
                    : isCompleted
                    ? "bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
                    : "bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"
                }`}
              />

              {/* Ambient Liquid Corner Sheen */}
              <div
                className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60 ${
                  isBuilding
                    ? "bg-[#E6552F]/10"
                    : isCompleted
                    ? "bg-emerald-500/10"
                    : "bg-indigo-500/10"
                }`}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[0.72rem] text-[#716E68] tracking-wider">
                    {log.date}
                  </span>

                  {/* Status Indicator: Pure Liquid Glass Capsule */}
                  {isBuilding ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full liquid-pill-vermilion font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6552F] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6552F] shadow-[0_0_8px_rgba(230,85,47,0.7)]" />
                      </span>
                      <span>Currently Building</span>
                    </span>
                  ) : isCompleted ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full liquid-pill-emerald font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                      <span>Completed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full liquid-pill-indigo font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
                      <span>Researching</span>
                    </span>
                  )}
                </div>

                {/* Topic Headline */}
                <h3 className="text-base sm:text-lg font-heading text-[#131210] dark:text-[#F3F1EC] mb-2 font-medium leading-snug">
                  {log.topic}
                </h3>

                {/* Notes */}
                <p className="text-[0.88rem] leading-[1.68] text-[#131210]/80 dark:text-[#E2DFD8] font-sans mb-4">
                  {log.notes}
                </p>
              </div>

              {/* Tags with Liquid Glass Translucent Styling */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[rgba(113,110,104,0.15)] relative z-10">
                {log.tags.map((tag) => {
                  let tagClass = "glass-pill text-[#716E68] dark:text-[#A8A49C]";
                  if (tag.includes("TMDB")) tagClass = "liquid-pill-rose";
                  else if (tag.includes("React") || tag.includes("Next.js")) tagClass = "liquid-pill-cyan";
                  else if (tag.includes("Supabase") || tag.includes("PostgreSQL") || tag.includes("RLS")) tagClass = "liquid-pill-emerald";
                  else if (tag.includes("Python") || tag.includes("Algorithms")) tagClass = "liquid-pill-amber";
                  else if (tag.includes("Launch") || tag.includes("Production")) tagClass = "liquid-pill-vermilion";

                  return (
                    <span
                      key={tag}
                      className={`font-mono text-[0.68rem] px-2.5 py-0.5 rounded-full font-medium transition-transform duration-150 hover:-translate-y-0.5 ${tagClass}`}
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
            </LiquidGlassCard>
          );
        })}

        {filteredLogs.length === 0 && (
          <div className="col-span-full p-8 text-center text-[#716E68] font-mono text-[0.8rem] glass-panel rounded-[12px]">
            No changelog entries matching current status filter.
          </div>
        )}
      </div>
    </section>
  );
}
