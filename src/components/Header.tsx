"use client";

import React, { useState } from "react";
import { DeveloperProfile } from "@/data/portfolioData";
import { Copy, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface HeaderProps {
  profile: DeveloperProfile;
}

export function Header({ profile }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <header className="pt-2 pb-12 border-b border-[rgba(113,110,104,0.2)]">
      {/* Top Meta Bar with Frosted Glass Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[0.75rem] font-mono tracking-wider text-[#716E68] mb-8">
        <div className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E6552F]" />
          <span className="text-[#131210] font-medium uppercase tracking-wider">
            {profile.location}
          </span>
          <span className="text-[#DCD8D0]">/</span>
          <span className="text-[#716E68]">{profile.handle}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="glass-pill px-3.5 py-1.5 rounded-full flex items-center gap-2 border-[#E6552F]/30 bg-white/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6552F] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6552F]" />
            </span>
            <span className="text-[#131210] font-medium tracking-wide text-[0.72rem]">
              {profile.availability}
            </span>
          </div>

          {/* Dark Mode Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Main Identity with Graphical Monogram */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
        {/* Abstract Monogram Avatar Graphic */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E6552F] to-[#F59E0B] opacity-35 blur-sm group-hover:opacity-60 transition duration-300" />
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass-panel flex flex-col items-center justify-center border border-white/90 shadow-md">
            <span className="font-display text-2xl sm:text-3xl font-bold bg-gradient-to-br from-[#131210] via-[#E6552F] to-[#131210] bg-clip-text text-transparent select-none">
              NM
            </span>
            <span className="text-[0.55rem] font-mono tracking-widest text-[#716E68] uppercase">
              DEV
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-medium text-[#131210] tracking-tight leading-[1.1]">
            {profile.name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-base sm:text-lg font-sans font-medium text-[#716E68] tracking-tight">
            <span>{profile.role}</span>
            <span className="hidden sm:inline text-[#DCD8D0]">/</span>
            <span className="text-[0.85rem] sm:text-[0.9rem] text-[#716E68] font-mono tracking-tight bg-white/50 px-2.5 py-0.5 rounded-full border border-white/80">
              {profile.education}
            </span>
          </div>
        </div>
      </div>

      {/* Grounded Bio */}
      <p className="max-w-2xl text-[0.98rem] leading-[1.7] text-[#131210]/90 font-sans mb-8">
        {profile.bio}
      </p>

      {/* Action Strip */}
      <div className="flex items-center gap-2 pt-2">
        {/* Copy Email Button - Primary Action with Soft Glow */}
        <button
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-[#E6552F] hover:bg-[#d04925] text-[#FFFFFF] font-mono text-[0.75rem] tracking-wide font-medium transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(230,85,47,0.25)] hover:shadow-[0_6px_20px_rgba(230,85,47,0.35)] hover:-translate-y-0.5"
          title={`Copy ${profile.email}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>copied email</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span>copy email</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
