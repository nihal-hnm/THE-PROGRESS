import React from "react";
import {
  developerProfile,
  projects,
  engineeringLogs,
  milestones,
  toolboxCategories,
  interests,
} from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Toolbox } from "@/components/Toolbox";
import { Milestones } from "@/components/Milestones";
import { ProjectList } from "@/components/ProjectList";
import { EngineeringLog } from "@/components/EngineeringLog";
import { Interests } from "@/components/Interests";
import { Footer } from "@/components/Footer";
import { CursorRadialBackground } from "@/components/CursorRadialBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F0EA] dark:bg-[#0B0D11] text-[#131210] dark:text-[#F3F1EC] relative isolate overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Cursor-Following Radial Gradient Spotlight Layer */}
      <CursorRadialBackground />

      {/* Dynamic Ambient Graphics Layer behind Glass */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft grid matrix texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-35 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_40%,transparent_100%)]" />

        {/* Ambient Glowing Chromatic Orbs - Rich Vibrant Undercurrents */}
        <div className="absolute -top-32 -left-20 w-[660px] h-[660px] rounded-full bg-gradient-to-tr from-[#E6552F]/32 via-[#F97316]/24 to-transparent dark:from-[#FF6136]/35 dark:via-[#F97316]/22 blur-[120px] animate-float-slow" />
        <div className="absolute top-24 -right-24 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#6366F1]/28 via-[#8B5CF6]/22 to-transparent dark:from-[#7C3AED]/35 dark:via-[#6366F1]/22 blur-[125px] animate-float-reverse" />
        <div className="absolute top-[35%] -left-36 w-[580px] h-[580px] rounded-full bg-gradient-to-r from-[#F59E0B]/26 via-[#E6552F]/18 to-transparent dark:from-[#F59E0B]/28 dark:via-[#E6552F]/18 blur-[120px] animate-float-slow" />
        <div className="absolute top-[60%] -right-28 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#10B981]/24 via-[#06B6D4]/18 to-transparent dark:from-[#10B981]/28 dark:via-[#06B6D4]/18 blur-[125px] animate-float-reverse" />
        <div className="absolute -bottom-24 left-[15%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-[#06B6D4]/25 via-[#3B82F6]/18 to-transparent dark:from-[#06B6D4]/28 dark:via-[#3B82F6]/20 blur-[130px] animate-float-slow" />
      </div>

      {/* 1. Navigation Bar (Card 1: Required) */}
      <Navbar name={developerProfile.name} />

      {/* Central Glassmorphic Column - Widescreen Layout */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10 relative z-10 space-y-4">
        {/* 2. About / Bio (Card 2: Required) */}
        <section id="about" className="scroll-mt-24">
          <Header profile={developerProfile} />
        </section>

        {/* 3. Skills (Card 3: Required) */}
        <section id="skills" className="scroll-mt-24">
          <Toolbox categories={toolboxCategories} />
        </section>

        {/* 4. Education (Card 4: Required) */}
        <section id="education" className="scroll-mt-24">
          <Milestones milestones={milestones} />
        </section>

        {/* 5. Projects (Card 5: Required) */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <ProjectList projects={projects} />
          <EngineeringLog logs={engineeringLogs} />
        </section>

        {/* Beyond the Code: Passions & Creative Horizons */}
        <section id="interests" className="scroll-mt-24">
          <Interests interests={interests} />
        </section>

        {/* 6. Footer & Collaboration (Card 6: Required) */}
        <div id="contact" className="scroll-mt-24">
          <Footer
            email={developerProfile.email}
            name={developerProfile.name}
            links={developerProfile.links}
          />
        </div>
      </div>
    </main>
  );
}
