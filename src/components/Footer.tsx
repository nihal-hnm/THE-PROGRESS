"use client";

import React, { useState } from "react";
import { Copy, Check, ArrowUp } from "lucide-react";

interface FooterProps {
  email: string;
  name: string;
}

export function Footer({ email, name }: FooterProps) {
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
      {/* Top Footer Callout */}
      <div className="p-6 sm:p-8 rounded-[6px] bg-[#FFFFFF] border border-[rgba(113,110,104,0.25)] mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-display font-medium text-[#131210] mb-1.5">
            Initiate Collaboration
          </h3>
          <p className="text-[0.9rem] text-[#716E68] font-sans">
            Available for high-impact engineering roles, systems research, and product builds.
          </p>
        </div>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[4px] bg-[#131210] hover:bg-[#2c2a26] text-[#FFFFFF] font-mono text-[0.75rem] font-medium transition-colors cursor-pointer shrink-0"
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

      {/* Bottom Minimalist Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.75rem] font-mono border-t border-[rgba(113,110,104,0.2)] pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#131210] font-medium">{name}</span>
          <span className="text-[#DCD8D0]">/</span>
          <span>Editorial Systems Portfolio</span>
          <span className="text-[#DCD8D0]">/</span>
          <span className="text-[#716E68]">Crafted with Next.js & Tailwind</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#716E68] hover:text-[#131210] transition-colors cursor-pointer"
        >
          <span>Return to top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
}
