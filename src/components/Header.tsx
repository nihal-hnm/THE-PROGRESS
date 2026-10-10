"use client";

import React, { useState } from "react";
import { DeveloperProfile } from "@/data/portfolioData";
import { ArrowUpRight, Copy, Check, Terminal } from "lucide-react";

interface HeaderProps {
  profile: DeveloperProfile;
}

function PlatformIcon({
  platform,
  className = "w-3.5 h-3.5",
}: {
  platform: string;
  className?: string;
}) {
  switch (platform) {
    case "github":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "email":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return null;
  }
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
      <div className="space-y-3 mb-6">
        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-display font-medium text-[#131210] tracking-tight leading-[1.1]">
          {profile.name}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 text-base sm:text-lg font-sans font-medium text-[#716E68] tracking-tight">
          <span>{profile.role}</span>
          <span className="hidden sm:inline text-[#DCD8D0]">/</span>
          <span className="text-[0.85rem] sm:text-[0.9rem] text-[#716E68] font-mono tracking-tight">
            {profile.education}
          </span>
        </div>
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

        {/* Quick Links with Platform Logos */}
        <div className="flex flex-wrap items-center gap-1.5 sm:ml-2">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#131210] hover:text-[#E6552F] border border-[rgba(113,110,104,0.25)] hover:border-[#E6552F]/40 font-mono text-[0.75rem] transition-colors"
              title={`${link.label} (${link.url})`}
              aria-label={link.label}
            >
              <PlatformIcon
                platform={link.platform}
                className="w-3.5 h-3.5 text-[#716E68] group-hover:text-[#E6552F] transition-colors"
              />
              <span className="font-medium">{link.label}</span>
              {link.url.startsWith("http") && (
                <ArrowUpRight className="w-3 h-3 text-[#716E68] group-hover:text-[#E6552F] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
