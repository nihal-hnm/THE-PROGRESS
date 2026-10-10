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
                className={`px-2.5 py-1 rounded-[3px] font-mono text-[0.7rem] transition-colors cursor-pointer border ${
                  isSelected
                    ? "bg-[#131210] text-[#FFFFFF] border-[#131210]"
                    : "bg-[#FFFFFF] text-[#716E68] hover:text-[#131210] border-[rgba(113,110,104,0.25)] hover:border-[#131210]/40"
                }`}
              >
                <span>{option}</span>
                <span
                  className={`ml-1.5 opacity-60 ${
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

      {/* Changelog Ledger List */}
      <div className="border border-[rgba(113,110,104,0.25)] rounded-[6px] bg-[#FFFFFF] divide-y divide-[rgba(113,110,104,0.2)]">
        {filteredLogs.map((log, idx) => {
          return (
            <div
              key={`${log.date}-${log.topic}`}
              className="p-4 sm:p-5 hover:bg-[#FAF8F5]/60 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-[0.75rem] text-[#716E68]">
                    {log.date}
                  </span>
                  <span className="text-[#DCD8D0] select-none">/</span>
                  {/* Status Indicator */}
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[#F3F0EA] border border-[rgba(113,110,104,0.2)] text-[#131210]">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        log.status === "Currently Building"
                          ? "bg-[#E6552F] animate-pulse"
                          : log.status === "Researching"
                          ? "bg-[#716E68]"
                          : "bg-[#131210]"
                      }`}
                    />
                    <span>{log.status}</span>
                  </span>
                </div>
              </div>

              {/* Topic Headline */}
              <h3 className="text-base sm:text-lg font-heading text-[#131210] mb-2">
                {log.topic}
              </h3>

              {/* Notes */}
              <p className="text-[0.88rem] leading-[1.65] text-[#131210]/80 font-sans mb-3 max-w-2xl">
                {log.notes}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.68rem] px-2 py-0.5 rounded-[2px] bg-[#FFFFFF] border border-[rgba(113,110,104,0.2)] text-[#716E68]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {filteredLogs.length === 0 && (
          <div className="p-8 text-center text-[#716E68] font-mono text-[0.8rem]">
            No changelog entries matching current status filter.
          </div>
        )}
      </div>
    </section>
  );
}
