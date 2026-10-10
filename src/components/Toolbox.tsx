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

      {/* Categorized Glassmorphic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 rounded-[12px] glass-panel glass-card-hover flex flex-col justify-between relative overflow-hidden group border border-white/80"
          >
            {/* Subtle decorative glow in top corner */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#E6552F]/10 via-[#F59E0B]/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-mono text-[0.8rem] tracking-wider uppercase text-[#131210] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6552F]" />
                  <span>{cat.category}</span>
                </h3>
                <span className="glass-pill px-2 py-0.5 text-[0.68rem] text-[#716E68] font-mono font-medium">
                  {cat.items.length} units
                </span>
              </div>
              <p className="text-[0.82rem] text-[#716E68] font-sans mb-5 leading-relaxed">
                {cat.description}
              </p>
            </div>

            {/* Monospace Item Badges with Frosted Glass */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[rgba(113,110,104,0.15)] relative z-10">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="glass-pill font-mono text-[0.72rem] px-3 py-1.5 rounded-[6px] text-[#131210] hover:text-[#E6552F] hover:border-[#E6552F]/40 transition-all duration-200 select-all hover:-translate-y-0.5"
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
