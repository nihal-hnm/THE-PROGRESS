"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { ChevronDown, ArrowUpRight, ExternalLink, Sparkles, Film, Database, ShieldCheck } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  // Allow toggling multiple or single project
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // first item expanded by default

  const toggleProject = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-12 border-b border-[rgba(113,110,104,0.2)]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="font-mono text-[0.72rem] tracking-widest text-[#716E68] uppercase block mb-1">
            Section 01
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#131210]">
            Selected Systems & Builds
          </h2>
        </div>
        <span className="glass-pill px-2.5 py-1 text-[0.72rem] text-[#716E68]">
          [{projects.length} build]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        High-density ledger of full-stack engineering, media tracking architectures, and production web applications.
      </p>

      {/* Projects Glassmorphic Tabular List */}
      <div className="glass-panel rounded-[12px] overflow-hidden divide-y divide-[rgba(113,110,104,0.15)] shadow-lg">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={project.title}
              className={`transition-colors duration-200 ${
                isExpanded ? "bg-white/40" : "hover:bg-white/30"
              }`}
            >
              {/* Row Header Trigger */}
              <button
                type="button"
                onClick={() => toggleProject(index)}
                aria-expanded={isExpanded}
                className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-2 flex-1 pr-4">
                  {/* Title & Status */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.72rem] text-[#716E68]">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-[#131210] group-hover:text-[#E6552F] transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`font-mono text-[0.66rem] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-medium glass-pill ${
                        project.status === "Production"
                          ? "border-[#E6552F]/40 text-[#E6552F] bg-white/90"
                          : "text-[#716E68]"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* One-line summary */}
                  <p className="text-[0.9rem] text-[#716E68] font-sans leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Monospace Tech Tags with Glass Styling */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="glass-pill font-mono text-[0.68rem] px-2.5 py-0.5 rounded-[4px] text-[#131210]/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Meta & Toggle */}
                <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-start pt-2 sm:pt-0">
                  <span className="font-mono text-[0.78rem] text-[#716E68]">
                    {project.year}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full glass-pill flex items-center justify-center transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#E6552F] border-[#E6552F]/40" : "text-[#716E68]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Accordion Detail Breakdown with Rich Visual Graphics */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[rgba(113,110,104,0.15)] bg-white/20">
                  <div className="space-y-6">
                    {/* Visual UI Screenshot Showcase Card */}
                    <div className="relative group/preview rounded-[12px] overflow-hidden border border-black/10 dark:border-white/10 shadow-xl glass-panel">
                      {/* Browser Chrome Header */}
                      <div className="px-3.5 py-2 bg-[#12151C] flex items-center justify-between border-b border-white/10 text-white/70">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                          <span className="ml-2 font-mono text-[0.7rem] text-white/60 hidden sm:inline-block">
                            Couch Critics — Currently Watching
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[0.66rem] px-2 py-0.5 rounded-full bg-white/10 text-[#E6552F] border border-[#E6552F]/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E6552F] animate-pulse" />
                            Live App UI
                          </span>
                        </div>
                      </div>

                      {/* Screen Image */}
                      <div className="relative w-full aspect-[16/9] bg-[#0E1015] overflow-hidden">
                        <Image
                          src="/images/couch_critics_live.png"
                          alt="Couch Critics Live Application UI - Currently Watching Shelf"
                          fill
                          sizes="(max-width: 768px) 100vw, 850px"
                          className="object-cover object-top group-hover/preview:scale-[1.01] transition-transform duration-500 ease-out"
                          priority
                        />
                      </div>
                    </div>

                    {/* Meta Breakdown Glass Card */}
                    <div className="p-5 rounded-[8px] glass-panel-subtle space-y-5">
                      {/* Role & Timeline Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-[0.75rem] font-mono text-[#716E68] pb-3 border-b border-[rgba(113,110,104,0.15)]">
                        <div className="flex items-center gap-2">
                          <span className="text-[#716E68]">ROLE:</span>
                          <span className="text-[#131210] font-semibold">{project.role}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#716E68]">STATUS:</span>
                          <span className="text-[#E6552F] font-semibold flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Production Shipped
                          </span>
                        </div>
                      </div>

                      {/* Engineering Highlights */}
                      <div>
                        <h4 className="font-mono text-[0.72rem] tracking-wider text-[#716E68] uppercase mb-3 flex items-center gap-2">
                          <Database className="w-3.5 h-3.5 text-[#E6552F]" />
                          <span>Core Architecture & Implementation Highlights</span>
                        </h4>
                        <ul className="space-y-2.5 text-[0.88rem] leading-[1.65] text-[#131210]">
                          {project.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2.5">
                              <span className="text-[#E6552F] font-mono text-[0.8rem] select-none mt-0.5">
                                ▪
                              </span>
                              <span className="flex-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-[rgba(113,110,104,0.15)]">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[6px] glass-pill text-[#131210] hover:text-[#E6552F] hover:border-[#E6552F]/40 font-mono text-[0.75rem] font-medium transition-all duration-200 hover:-translate-y-0.5"
                          >
                            <svg
                              className="w-3.5 h-3.5 fill-current text-[#716E68] group-hover:text-[#E6552F]"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <span>Inspect Code & Architecture</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#716E68]" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
