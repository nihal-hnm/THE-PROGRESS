import React from "react";
import { ToolboxCategory } from "@/data/portfolioData";

interface ToolboxProps {
  categories: ToolboxCategory[];
}

export function Toolbox({ categories }: ToolboxProps) {
  const getCategoryTheme = (category: string) => {
    if (category.includes("Languages")) {
      return {
        accent: "#F59E0B",
        gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
        topLine: "bg-gradient-to-r from-amber-400 via-orange-400 to-transparent",
        badge: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        itemHover: "hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-500/40 hover:bg-amber-500/5",
      };
    }
    if (category.includes("Frontend")) {
      return {
        accent: "#06B6D4",
        gradient: "from-cyan-500/25 via-blue-500/10 to-transparent",
        topLine: "bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent",
        badge: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
        itemHover: "hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-cyan-500/5",
      };
    }
    if (category.includes("Backend")) {
      return {
        accent: "#10B981",
        gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
        topLine: "bg-gradient-to-r from-emerald-400 via-teal-400 to-transparent",
        badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
        itemHover: "hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-emerald-500/5",
      };
    }
    return {
      accent: "#8B5CF6",
      gradient: "from-purple-500/25 via-indigo-500/10 to-transparent",
      topLine: "bg-gradient-to-r from-purple-400 via-indigo-400 to-transparent",
      badge: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30",
      itemHover: "hover:text-purple-600 dark:hover:text-purple-300 hover:border-purple-500/40 hover:bg-purple-500/5",
    };
  };

  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 mb-2">
            Section 04
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#131210]">
            Toolbox <span className="font-serif italic font-normal text-inherit px-0.5">&</span> Technical Environment
          </h2>
        </div>
        <span className="glass-pill px-2.5 py-1 text-[0.72rem] text-[#716E68]">
          [Stack]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        Curated toolchain and core systems languages. Zero floating icon bubbles; strictly evaluated utilities.
      </p>

      {/* Categorized Glassmorphic Grid with Vibrant Themes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const theme = getCategoryTheme(cat.category);

          return (
            <div
              key={cat.category}
              className="p-6 rounded-[12px] glass-panel glass-card-hover flex flex-col justify-between relative overflow-hidden group border border-white/80 shadow-md"
            >
              {/* Top Gradient Edge Accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${theme.topLine}`} />

              {/* Decorative vibrant glow in top corner */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${theme.gradient} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-[0.8rem] tracking-wider uppercase text-[#131210] font-semibold flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                    />
                    <span>{cat.category}</span>
                  </h3>
                  <span
                    className={`font-mono text-[0.66rem] px-2 py-0.5 rounded-full font-semibold border ${theme.badge}`}
                  >
                    {cat.items.length} units
                  </span>
                </div>
                <p className="text-[0.82rem] text-[#716E68] font-sans mb-5 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Monospace Item Badges with Colored Accent Hover */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[rgba(113,110,104,0.15)] relative z-10">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`glass-pill font-mono text-[0.72rem] px-3 py-1.5 rounded-[6px] text-[#131210] dark:text-[#EDEBE8] transition-all duration-200 select-all hover:-translate-y-0.5 font-medium ${theme.itemHover}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
