import React from "react";
import { ToolboxCategory } from "@/data/portfolioData";

interface ToolboxProps {
  categories: ToolboxCategory[];
}

export function Toolbox({ categories }: ToolboxProps) {
  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="font-mono text-[0.72rem] tracking-widest text-[#716E68] uppercase block mb-1">
            Section 04
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#131210]">
            Toolbox & Technical Environment
          </h2>
        </div>
        <span className="font-mono text-[0.75rem] text-[#716E68]">
          [Stack]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Curated toolchain and core systems languages. Zero floating icon bubbles; strictly evaluated utilities.
      </p>

      {/* Categorized Monospace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="p-5 rounded-[6px] bg-[#FFFFFF] border border-[rgba(113,110,104,0.25)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-mono text-[0.78rem] tracking-wider uppercase text-[#131210] font-semibold">
                  {cat.category}
                </h3>
                <span className="font-mono text-[0.7rem] text-[#716E68]">
                  ({cat.items.length})
                </span>
              </div>
              <p className="text-[0.8rem] text-[#716E68] font-sans mb-4">
                {cat.description}
              </p>
            </div>

            {/* Monospace Item Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[rgba(113,110,104,0.15)]">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[0.72rem] px-2.5 py-1 rounded-[3px] bg-[#F3F0EA] hover:bg-[#FAF8F5] text-[#131210] border border-[rgba(113,110,104,0.25)] transition-colors select-all"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
