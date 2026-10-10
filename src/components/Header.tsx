"use client";

import React, { useState } from "react";
import { DeveloperProfile } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Terminal } from "lucide-react";

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
    <header className="pt-4 pb-12 border-b border-[rgba(113,110,104,0.25)]">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-[0.75rem] font-mono tracking-wider text-[#716E68] mb-8">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E6552F]" />
          <span className="text-[#131210] font-medium uppercase tracking-wider">
            {profile.location}
          </span>
          <span className="text-[#DCD8D0]">/</span>
          <span className="text-[#716E68]">{profile.handle}</span>
        </div>

        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#FFFFFF] border border-[rgba(113,110,104,0.25)] text-[0.72rem]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6552F] animate-pulse" />
          <span className="text-[#131210]">{profile.availability}</span>
        </div>
      </div>

      {/* Main Identity */}
      <div className="space-y-4 mb-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-medium text-[#131210] tracking-tight leading-[1.1]">
          {profile.name}
        </h1>
        <p className="text-lg sm:text-xl font-sans font-medium text-[#716E68] tracking-tight">
          {profile.role}
        </p>
      </div>

      {/* Grounded Bio */}
      <p className="max-w-2xl text-[0.98rem] leading-[1.68] text-[#131210]/90 font-sans mb-8">
        {profile.bio}
      </p>

      {/* Action and Links Strip */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        {/* Copy Email Button - Primary Action using #E6552F */}
        <button
          onClick={handleCopyEmail}
          className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-[4px] bg-[#E6552F] hover:bg-[#d04925] text-[#FFFFFF] font-mono text-[0.75rem] tracking-wide font-medium transition-colors cursor-pointer shadow-none"
          title={`Copy ${profile.email}`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>copied email</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />
              <span>copy email</span>
            </>
          )}
        </button>

        {/* Quick Links with monospace pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:ml-2">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#FFFFFF] hover:bg-[#FFFFFF] text-[#131210] hover:text-[#E6552F] border border-[rgba(113,110,104,0.25)] hover:border-[#E6552F]/40 font-mono text-[0.75rem] transition-colors"
            >
              <span>{link.monoLabel}</span>
              {link.url.startsWith("http") && (
                <ArrowUpRight className="w-3 h-3 text-[#716E68] group-hover:text-[#E6552F]" />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
