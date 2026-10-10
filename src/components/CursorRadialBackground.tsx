"use client";

import React, { useEffect, useRef, useState } from "react";

export function CursorRadialBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // 3-Tier Multi-Depth Motion Tracks for 3D Parallax Physics
  const targetPos = useRef({ x: -1000, y: -1000 });
  const posCore = useRef({ x: -1000, y: -1000 }); // Tier 1: Focal Core (fast, responsive)
  const posMid = useRef({ x: -1000, y: -1000 }); // Tier 2: Chromatic Bloom (fluid)
  const posDeep = useRef({ x: -1000, y: -1000 }); // Tier 3: Grand Atmosphere (trailing depth wake)

  const coreOrbRef = useRef<HTMLDivElement>(null);
  const midOrbRef = useRef<HTMLDivElement>(null);
  const deepOrbRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);

    // Initial center coordinates
    const initX = window.innerWidth / 2;
    const initY = window.innerHeight * 0.38;
    targetPos.current = { x: initX, y: initY };
    posCore.current = { x: initX, y: initY };
    posMid.current = { x: initX, y: initY };
    posDeep.current = { x: initX, y: initY };

    let visible = false;

    const handlePointerMove = (e: PointerEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
      if (!visible) {
        visible = true;
        setIsVisible(true);
      }
    };

    const handlePointerLeave = () => {
      visible = false;
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      visible = true;
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // High performance GPU animation loop with 3-tier parabolic lerp damping
    const animate = () => {
      // Tier 1: Core Focal Spot (lerp factor: ~0.10 for silky, precise tracking)
      posCore.current.x += (targetPos.current.x - posCore.current.x) * 0.10;
      posCore.current.y += (targetPos.current.y - posCore.current.y) * 0.10;

      // Tier 2: Mid-Body Chromatic Bloom (lerp factor: ~0.065 for organic fluid drag)
      posMid.current.x += (targetPos.current.x - posMid.current.x) * 0.065;
      posMid.current.y += (targetPos.current.y - posMid.current.y) * 0.065;

      // Tier 3: Grand Atmospheric Aura (lerp factor: ~0.032 for deep cosmic parallax trail)
      posDeep.current.x += (targetPos.current.x - posDeep.current.x) * 0.032;
      posDeep.current.y += (targetPos.current.y - posDeep.current.y) * 0.032;

      if (coreOrbRef.current) {
        coreOrbRef.current.style.transform = `translate3d(${posCore.current.x}px, ${posCore.current.y}px, 0)`;
      }

      if (midOrbRef.current) {
        midOrbRef.current.style.transform = `translate3d(${posMid.current.x}px, ${posMid.current.y}px, 0)`;
      }

      if (deepOrbRef.current) {
        deepOrbRef.current.style.transform = `translate3d(${posDeep.current.x}px, ${posDeep.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ============================================================ */}
      {/* TIER 3: Grand Atmospheric Cinema Wash (1350px, Deepest Parallax) */}
      {/* ============================================================ */}
      <div
        ref={deepOrbRef}
        style={{ willChange: "transform" }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[1350px] h-[1350px] rounded-full"
      >
        {/* Light Mode Soft Diffuse Golden Champagne Wash */}
        <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,rgba(230,85,47,0.06)_42%,rgba(245,158,11,0.02)_65%,transparent_78%)] blur-[100px] opacity-85" />

        {/* Dark Mode Cosmic Ultraviolet & Deep Indigo Atmospheric Aura */}
        <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(124,58,237,0.25)_0%,rgba(59,130,246,0.16)_38%,rgba(255,97,54,0.08)_60%,transparent_78%)] blur-[110px] opacity-90" />
      </div>

      {/* ============================================================ */}
      {/* TIER 2: Mid-Body Chromatic Bloom (820px, Fluid Drag Parallax) */}
      {/* ============================================================ */}
      <div
        ref={midOrbRef}
        style={{ willChange: "transform" }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full"
      >
        {/* Light Mode Warm Terracotta & Amber Flare */}
        <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(245,158,11,0.22)_0%,rgba(230,85,47,0.12)_36%,rgba(249,115,22,0.04)_62%,transparent_78%)] blur-3xl opacity-90" />

        {/* Dark Mode Electric Indigo & Neon Violet Bloom */}
        <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(99,102,241,0.32)_0%,rgba(139,92,246,0.20)_35%,rgba(6,182,212,0.09)_58%,transparent_76%)] blur-3xl opacity-95" />
      </div>

      {/* ============================================================ */}
      {/* TIER 1: Focused Vibrant Core Spotlight (420px, Responsive Tracking) */}
      {/* ============================================================ */}
      <div
        ref={coreOrbRef}
        style={{ willChange: "transform" }}
        className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full transition-transform duration-200 ease-out ${
          isClicking ? "scale-90 brightness-125" : "scale-100"
        }`}
      >
        {/* Light Mode High-Density Vermilion Core */}
        <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(230,85,47,0.35)_0%,rgba(245,158,11,0.20)_34%,rgba(230,85,47,0.05)_64%,transparent_80%)] blur-2xl" />

        {/* Dark Mode High-Density Neon Vermilion & Sunset Coral Core */}
        <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(255,97,54,0.48)_0%,rgba(244,63,94,0.30)_32%,rgba(168,85,247,0.14)_60%,transparent_78%)] blur-2xl" />
      </div>
    </div>
  );
}
