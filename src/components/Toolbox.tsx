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
        gradient: "from-amber-500/15 via-orange-500/5 to-transparent",
        topLine: "bg-gradient-to-r from-transparent via-amber-400/80 to-transparent",
        badge: "liquid-pill-amber",
        itemHover: "hover:text-amber-600 dark:hover:text-amber-300 hover:border-amber-500/30",
      };
    }
    if (category.includes("Frontend")) {
      return {
        accent: "#06B6D4",
        gradient: "from-cyan-500/15 via-blue-500/5 to-transparent",
        topLine: "bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent",
        badge: "liquid-pill-cyan",
        itemHover: "hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/30",
      };
    }
    if (category.includes("Backend")) {
      return {
        accent: "#10B981",
        gradient: "from-emerald-500/15 via-teal-500/5 to-transparent",
        topLine: "bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent",
        badge: "liquid-pill-emerald",
        itemHover: "hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-500/30",
      };
    }
    return {
      accent: "#8B5CF6",
      gradient: "from-purple-500/15 via-indigo-500/5 to-transparent",
      topLine: "bg-gradient-to-r from-transparent via-indigo-400/80 to-transparent",
      badge: "liquid-pill-indigo",
      itemHover: "hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-500/30",
    };
  };

  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-mono text-[0.7rem] uppercase tracking-wider font-semibold liquid-pill-amber mb-2">
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
              className="p-6 rounded-[14px] glass-panel glass-card-hover flex flex-col justify-between relative overflow-hidden group border border-white/80 dark:border-white/10 shadow-lg"
            >
              {/* Top Liquid Prism Edge */}
              <div className={`absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none ${theme.topLine}`} />

              {/* Decorative liquid glow in top corner */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${theme.gradient} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-[0.8rem] tracking-wider uppercase text-[#131210] dark:text-[#F3F1EC] font-semibold flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full shadow-[0_0_6px_currentColor]"
                      style={{ backgroundColor: theme.accent, color: theme.accent }}
                    />
                    <span>{cat.category}</span>
                  </h3>
                  <span
                    className={`font-mono text-[0.66rem] px-2.5 py-0.5 rounded-full font-semibold ${theme.badge}`}
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
