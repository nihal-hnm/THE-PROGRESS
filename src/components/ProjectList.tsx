"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import { ChevronDown, ArrowUpRight, ExternalLink } from "lucide-react";

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
    <section className="py-12 border-b border-[rgba(113,110,104,0.25)]">
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
        <span className="font-mono text-[0.75rem] text-[#716E68]">
          [{projects.length} artifacts]
        </span>
      </div>

      <p className="text-[0.92rem] text-[#716E68] font-sans max-w-xl mb-6">
        High-density ledger of systems engineering, distributed pipelines, and production web architecture.
      </p>

      {/* Projects Tabular List */}
      <div className="border border-[rgba(113,110,104,0.25)] rounded-[6px] bg-[#FFFFFF] overflow-hidden divide-y divide-[rgba(113,110,104,0.2)]">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={project.title}
              className={`transition-colors duration-150 ${
                isExpanded ? "bg-[#FAF8F5]" : "hover:bg-[#FAF8F5]/60"
              }`}
            >
              {/* Row Header Trigger */}
              <button
                type="button"
                onClick={() => toggleProject(index)}
                aria-expanded={isExpanded}
                className="w-full text-left p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 cursor-pointer group"
              >
                <div className="space-y-1.5 flex-1 pr-4">
                  {/* Title & Status */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.72rem] text-[#716E68]">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-[#131210] group-hover:text-[#E6552F] transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`font-mono text-[0.65rem] px-2 py-0.5 rounded-[2px] border uppercase tracking-wider ${
                        project.status === "Production"
                          ? "border-[#716E68]/30 text-[#131210] bg-[#FFFFFF]"
                          : "border-dashed border-[#716E68]/40 text-[#716E68] bg-transparent"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* One-line summary */}
                  <p className="text-[0.88rem] text-[#716E68] font-sans leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Monospace Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[0.7rem] px-2 py-0.5 rounded-[2px] bg-[#F3F0EA] text-[#131210]/80 border border-[rgba(113,110,104,0.18)]"
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
                    className={`w-6 h-6 rounded-[3px] border border-[rgba(113,110,104,0.25)] flex items-center justify-center transition-transform duration-200 ${
                      isExpanded ? "rotate-180 bg-[#FFFFFF] text-[#E6552F]" : "text-[#716E68]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>

              {/* Accordion Detail Breakdown */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[rgba(113,110,104,0.15)] bg-[#FAF8F5]">
                  <div className="p-4 rounded-[4px] bg-[#FFFFFF] border border-[rgba(113,110,104,0.2)] space-y-4">
                    {/* Role / Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[0.75rem] font-mono text-[#716E68] pb-3 border-b border-[rgba(113,110,104,0.15)]">
                      <div>
                        <span className="text-[#716E68]">ROLE: </span>
                        <span className="text-[#131210] font-medium">{project.role}</span>
                      </div>
                      <div>
                        <span className="text-[#716E68]">TIMELINE: </span>
                        <span className="text-[#131210] font-medium">{project.year}</span>
                      </div>
                    </div>

                    {/* Engineering Highlights */}
                    <div>
                      <h4 className="font-mono text-[0.72rem] tracking-wider text-[#716E68] uppercase mb-2.5">
                        Engineering Highlights & Decisions
                      </h4>
                      <ul className="space-y-2 text-[0.88rem] leading-[1.65] text-[#131210]">
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
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[rgba(113,110,104,0.15)]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#131210] hover:bg-[#2c2a26] text-[#FFFFFF] font-mono text-[0.72rem] font-medium transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 text-[#E6552F]" />
                          <span>Inspect Live</span>
                          <ArrowUpRight className="w-3 h-3 opacity-70" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[3px] bg-[#FFFFFF] hover:bg-[#FAF8F5] text-[#131210] border border-[rgba(113,110,104,0.25)] font-mono text-[0.72rem] transition-colors"
                        >
                          <svg
                            className="w-3 h-3 fill-current text-[#716E68]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                          <span>Source Code</span>
                          <ArrowUpRight className="w-3 h-3 text-[#716E68]" />
                        </a>
                      )}
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
