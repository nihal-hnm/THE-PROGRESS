"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial theme from HTML class or localStorage
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Render placeholder before mount to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-16 h-7 rounded-full glass-pill opacity-60" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex items-center justify-between w-16 h-7 px-1 rounded-full glass-pill cursor-pointer transition-all duration-300 hover:border-[#E6552F]/40 hover:shadow-[0_0_12px_rgba(230,85,47,0.25)] select-none focus:outline-none"
      title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
    >
      {/* Sliding Knob with Glow */}
      <span
        className={`absolute top-0.5 bottom-0.5 w-6 rounded-full transition-transform duration-300 ease-spring flex items-center justify-center shadow-sm ${
          isDark
            ? "translate-x-8 bg-[#1E2330] border border-white/20 text-[#FF6136]"
            : "translate-x-0.5 bg-[#FFFFFF] border border-black/10 text-[#E6552F]"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 transition-transform group-hover:-rotate-12" />
        ) : (
          <Sun className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
        )}
      </span>

      {/* Background Icons */}
      <span className="w-5 flex items-center justify-center text-[0.65rem] text-[#716E68] opacity-60 pl-0.5">
        <Sun className="w-3 h-3" />
      </span>
      <span className="w-5 flex items-center justify-center text-[0.65rem] text-[#716E68] opacity-60 pr-0.5">
        <Moon className="w-3 h-3" />
      </span>
    </button>
  );
}
