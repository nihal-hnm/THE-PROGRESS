"use client";

import React from "react";
import { DeveloperProfile } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PlatformIcon } from "@/components/PlatformIcon";
import { Sparkles } from "lucide-react";

interface HeaderProps {
  profile: DeveloperProfile;
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className="pt-2 pb-10 border-b border-[rgba(113,110,104,0.2)]">
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

      {/* Main Identity: Balanced 2-Column Grid on Wide Screens */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Monogram, Name, Role, Bio & Highlights */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
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
              </div>
            </div>
          </div>

          {/* Grounded Bio */}
          <p className="text-[0.98rem] leading-[1.75] text-[#131210]/90 font-sans max-w-2xl">
            {profile.bio}
          </p>

          {/* Core Trajectory Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[0.72rem]">
            <span className="glass-pill px-3 py-1 rounded-full text-[#131210] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6552F]" />
              {profile.education}
            </span>
            <span className="glass-pill px-3 py-1 rounded-full text-[#131210] font-medium flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#F59E0B]" />
              Couch Critics — Shipped 3/10/2026
            </span>
          </div>
        </div>

        {/* Right Column: Live Telemetry & Engineering Overview Glass Card */}
        <div className="lg:col-span-5 xl:col-span-4 glass-panel p-5 sm:p-6 rounded-[14px] shadow-lg border border-white/80 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(113,110,104,0.15)]">
            <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[#716E68] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active System Status
            </span>
            <span className="glass-pill px-2.5 py-0.5 font-mono text-[0.66rem] text-[#E6552F] font-semibold">
              Ready
            </span>
          </div>

          <div className="space-y-3 font-mono text-[0.75rem]">
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#716E68]">STATUS:</span>
              <span className="text-[#131210] font-medium text-right">{profile.availability}</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#716E68]">STUDIES:</span>
              <span className="text-[#131210] font-medium text-right">NIAT x Geeta Univ (CSE)</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#716E68]">FLAGSHIP:</span>
              <span className="text-[#131210] font-medium text-right text-[#E6552F]">Couch Critics v1.0</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#716E68]">STACK:</span>
              <span className="text-[#131210] font-medium text-right">Next.js 16 • React 19 • Supabase</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <span className="text-[#716E68]">LOCATION:</span>
              <span className="text-[#131210] font-medium text-right">India (IST / Remote)</span>
            </div>
          </div>

          {/* Quick Platform Channels inside Telemetry */}
          <div className="pt-3 border-t border-[rgba(113,110,104,0.15)] flex items-center justify-between">
            <span className="font-mono text-[0.68rem] text-[#716E68]">DIRECT CHANNELS:</span>
            <div className="flex items-center gap-2">
              {profile.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-7 h-7 rounded-full glass-pill flex items-center justify-center text-[#716E68] hover:text-[#E6552F] hover:border-[#E6552F]/40 transition-all hover:scale-110"
                  title={link.label}
                  aria-label={link.label}
                >
                  <PlatformIcon platform={link.platform} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
