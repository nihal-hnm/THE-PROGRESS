"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp, ArrowUpRight } from "lucide-react";
import { DeveloperProfile } from "@/data/portfolioData";
import { PlatformIcon } from "@/components/PlatformIcon";
import { ThemeToggle } from "@/components/ThemeToggle";

interface FooterProps {
  email: string;
  name: string;
  links: DeveloperProfile["links"];
}

export function Footer({ email, name, links }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-12 pb-16 text-[#716E68]">
      {/* Top Footer Callout with Frosted Glass & Ambient Glow */}
      <div className="glass-panel p-6 sm:p-8 rounded-[16px] mb-8 flex flex-col gap-6 relative overflow-hidden shadow-xl border border-white/80">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#E6552F]/10 via-[#F59E0B]/5 to-transparent pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#131210] mb-1.5">
              Initiate Collaboration
            </h3>
            <p className="text-[0.9rem] text-[#716E68] font-sans">
              Available for internships, full-stack engineering roles, and collaborative software builds.
            </p>
          </div>

          {/* Copy Email Button with Subtle Glow */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#131210] hover:bg-[#2c2a26] text-[#FFFFFF] font-mono text-[0.75rem] font-medium transition-all duration-200 cursor-pointer shrink-0 shadow-[0_4px_16px_rgba(19,18,16,0.2)] hover:shadow-[0_6px_20px_rgba(19,18,16,0.3)] hover:-translate-y-0.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#E6552F]" />
                <span>Copied {email}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#E6552F]" />
                <span>Copy {email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Platforms Row in the Callout */}
        {links && links.length > 0 && (
          <div className="pt-5 border-t border-[rgba(113,110,104,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#716E68] font-medium">
              Connect Across Platforms:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] text-[#131210] hover:text-[#E6552F] hover:border-[#E6552F]/40 hover:shadow-[0_4px_14px_rgba(230,85,47,0.12)] font-mono text-[0.75rem] transition-all duration-200 hover:-translate-y-0.5"
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
        )}
      </div>

      {/* Bottom Minimalist Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.75rem] font-mono border-t border-[rgba(113,110,104,0.15)] pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#131210] font-medium">{name}</span>
          <span className="text-[#DCD8D0]">/</span>
          <span>Editorial Engineering Portfolio</span>
          <span className="text-[#DCD8D0]">/</span>
          <span className="text-[#716E68]">Crafted with Next.js & Tailwind</span>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={scrollToTop}
            className="glass-pill px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 text-[#716E68] hover:text-[#131210] transition-colors cursor-pointer"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3 h-3 text-[#E6552F]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
