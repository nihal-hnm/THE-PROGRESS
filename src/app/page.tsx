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
import { CursorRadialBackground } from "@/components/CursorRadialBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F0EA] relative isolate overflow-x-hidden">
      {/* Dynamic Cursor-Following Radial Gradient Spotlight Layer */}
      <CursorRadialBackground />

      {/* Dynamic Ambient Graphics Layer behind Glass */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft grid matrix texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-35 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_40%,transparent_100%)]" />

        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#E6552F]/22 via-[#F97316]/18 to-transparent blur-[110px] animate-float-slow" />
        <div className="absolute top-24 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#6366F1]/18 via-[#8B5CF6]/14 to-transparent blur-[120px] animate-float-reverse" />
        <div className="absolute top-[45%] -left-36 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-[#F59E0B]/18 to-[#E6552F]/12 blur-[115px] animate-float-slow" />
        <div className="absolute -bottom-24 right-[10%] w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-[#06B6D4]/16 via-[#3B82F6]/12 to-transparent blur-[130px] animate-float-reverse" />
      </div>

      {/* Central Glassmorphic Column */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-16 relative z-10">
        {/* Header / Identity with Glass Treatments */}
        <Header profile={developerProfile} />

        {/* Selected Work (Featuring visual Couch Critics preview graphic) */}
        <ProjectList projects={projects} />

        {/* Engineering Log & Learning Feed (Glass changelog cards) */}
        <EngineeringLog logs={engineeringLogs} />

        {/* Milestones & Competitions Ledger (Illuminated glass ledger) */}
        <Milestones milestones={milestones} />

        {/* Monospace Toolbox & Environment (Interactive glass cards) */}
        <Toolbox categories={toolboxCategories} />

        {/* Minimalist Footer with frosted glass callout and socials */}
        <Footer
          email={developerProfile.email}
          name={developerProfile.name}
          links={developerProfile.links}
        />
      </div>
    </main>
  );
}
