"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "education", "projects", "interests", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`sticky top-3 sm:top-5 z-50 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 transition-all duration-300`}
    >
      <div
        className={`glass-panel rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-xl border border-white/80 dark:border-white/10 transition-all duration-300 ${
          scrolled ? "bg-white/85 dark:bg-[#121622]/90 shadow-2xl backdrop-blur-2xl" : ""
        }`}
      >
        {/* Left: Student Name & Monogram */}
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, "#about")}
          className="group flex items-center gap-2.5 cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E6552F] to-[#F59E0B] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-white dark:bg-[#121622] flex items-center justify-center">
              <span className="font-display font-bold text-xs bg-gradient-to-r from-[#E6552F] to-[#F59E0B] bg-clip-text text-transparent">
                NM
              </span>
            </div>
          </div>
          <span className="font-display font-semibold text-base sm:text-lg text-[#131210] dark:text-[#F3F1EC] tracking-tight group-hover:text-[#E6552F] transition-colors">
            {name}
          </span>
        </a>

        {/* Center: In-Page Section Scroll Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-1 font-mono text-[0.75rem]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-medium ${
                  isActive
                    ? "liquid-pill-vermilion text-[#E6552F] dark:text-[#FF6136] shadow-sm font-semibold"
                    : "text-[#716E68] dark:text-[#A8A49C] hover:text-[#131210] dark:hover:text-[#F3F1EC] hover:bg-white/40 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right: Availability Badge & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full liquid-pill-emerald text-[0.68rem] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            </span>
            <span className="font-medium">Available</span>
          </div>

          <ThemeToggle />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full glass-pill text-[#716E68] hover:text-[#131210] dark:hover:text-[#F3F1EC] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 glass-panel rounded-2xl p-4 shadow-2xl border border-white/80 dark:border-white/10 flex flex-col gap-2 font-mono text-[0.8rem] animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "liquid-pill-vermilion text-[#E6552F] font-semibold"
                    : "text-[#716E68] dark:text-[#A8A49C] hover:text-[#131210] dark:hover:text-[#F3F1EC] hover:bg-white/40"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
