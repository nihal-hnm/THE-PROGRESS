"use client";

import React, { useEffect, useRef, useState } from "react";

export function CursorRadialBackground() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    let visible = false;

    const updatePosition = (clientX: number, clientY: number) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      document.documentElement.style.setProperty("--cursor-x", `${clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${clientY}px`);
    };

    // Initial positioning
    updatePosition(window.innerWidth / 2, window.innerHeight * 0.38);

    const handlePointerMove = (e: PointerEvent) => {
      // Immediate, zero-delay 1:1 hardware tracking
      updatePosition(e.clientX, e.clientY);
      if (!visible) {
        visible = true;
        setIsVisible(true);
      }
    };

    const handlePointerLeave = () => {
      visible = false;
      setIsVisible(false);
    };

    const handlePointerEnter = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
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

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Immediate Zero-Delay Cursor Anchor (No CSS transition on position) */}
      <div
        ref={glowRef}
        style={{ willChange: "transform" }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        {/* Click-response tactile wrapper */}
        <div
          className={`relative transition-transform duration-150 ease-out ${
            isClicking ? "scale-90 brightness-125" : "scale-100"
          }`}
        >
          {/* TIER 3: Grand Atmospheric Cinema Wash (1350px) */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[1350px] h-[1350px] rounded-full">
            <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(245,158,11,0.14)_0%,rgba(230,85,47,0.06)_42%,rgba(245,158,11,0.02)_65%,transparent_78%)] blur-[100px] opacity-85" />
            <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(124,58,237,0.25)_0%,rgba(59,130,246,0.16)_38%,rgba(255,97,54,0.08)_60%,transparent_78%)] blur-[110px] opacity-90" />
          </div>

          {/* TIER 2: Mid-Body Chromatic Bloom (850px) */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full">
            <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(245,158,11,0.22)_0%,rgba(230,85,47,0.12)_36%,rgba(249,115,22,0.04)_62%,transparent_78%)] blur-3xl opacity-90" />
            <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(99,102,241,0.32)_0%,rgba(139,92,246,0.20)_35%,rgba(6,182,212,0.09)_58%,transparent_76%)] blur-3xl opacity-95" />
          </div>

          {/* TIER 1: Focused Vibrant Core Spotlight (420px) */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full">
            <div className="absolute inset-0 rounded-full dark:hidden bg-[radial-gradient(circle,rgba(230,85,47,0.35)_0%,rgba(245,158,11,0.20)_34%,rgba(230,85,47,0.05)_64%,transparent_80%)] blur-2xl" />
            <div className="absolute inset-0 rounded-full hidden dark:block bg-[radial-gradient(circle,rgba(255,97,54,0.48)_0%,rgba(244,63,94,0.30)_32%,rgba(168,85,247,0.14)_60%,transparent_78%)] blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
