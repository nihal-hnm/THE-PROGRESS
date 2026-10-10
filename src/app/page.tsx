import React from "react";
import {
  developerProfile,
  projects,
  engineeringLogs,
  milestones,
  toolboxCategories,
} from "@/data/portfolioData";
import { Header } from "@/components/Header";
import { ProjectList } from "@/components/ProjectList";
import { EngineeringLog } from "@/components/EngineeringLog";
import { Milestones } from "@/components/Milestones";
import { Toolbox } from "@/components/Toolbox";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F0EA]">
      {/* Central Editorial Column */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Header / Identity */}
        <Header profile={developerProfile} />

        {/* Selected Work (Case-study style list with inline accordion) */}
        <ProjectList projects={projects} />

        {/* Engineering Log & Learning Feed (Changelog format) */}
        <EngineeringLog logs={engineeringLogs} />

        {/* Milestones & Competitions Ledger */}
        <Milestones milestones={milestones} />

        {/* Monospace Toolbox & Environment */}
        <Toolbox categories={toolboxCategories} />

        {/* Minimalist Footer with one-click copy email */}
        <Footer email={developerProfile.email} name={developerProfile.name} />
      </div>
    </main>
  );
}
