"use client";

import React, { useState } from "react";
import { EngineeringLog as EngineeringLogType } from "@/data/portfolioData";

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
          <span className="font-mono text-[0.72rem] tracking-widest text-[#716E68] uppercase block mb-1">
            Section 02
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#131210]">
            Engineering Log & Changelog
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
                    ? "bg-[#131210] text-[#FFFFFF] shadow-[0_2px_10px_rgba(19,18,16,0.2)]"
                    : "glass-pill text-[#716E68] hover:text-[#131210] hover:border-[#131210]/30"
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
          return (
            <div
              key={`${log.date}-${log.topic}`}
              className="p-5 sm:p-6 rounded-[12px] glass-panel glass-card-hover flex flex-col justify-between border border-white/80 shadow-md"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[0.75rem] text-[#716E68]">
                    {log.date}
                  </span>
                  {/* Status Indicator Pill with Vibrant Glass Glow */}
                  <span className={`inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    log.status === "Currently Building"
                      ? "bg-[#E6552F]/10 border-[#E6552F]/30 text-[#E6552F]"
                      : log.status === "Completed"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                      : "bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-400"
                  }`}>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        log.status === "Currently Building"
                          ? "bg-[#E6552F] animate-pulse"
                          : log.status === "Completed"
                          ? "bg-emerald-500"
                          : "bg-indigo-500"
                      }`}
                    />
                    <span className="font-medium">{log.status}</span>
                  </span>
                </div>

                {/* Topic Headline */}
                <h3 className="text-base sm:text-lg font-heading text-[#131210] mb-2 font-medium leading-snug">
                  {log.topic}
                </h3>

                {/* Notes */}
                <p className="text-[0.88rem] leading-[1.65] text-[#131210]/85 font-sans mb-4">
                  {log.notes}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[rgba(113,110,104,0.15)]">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill font-mono text-[0.68rem] px-2.5 py-0.5 rounded-[4px] text-[#716E68] hover:text-[#131210] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
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
