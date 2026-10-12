"use client";

import React, { useEffect, useRef } from "react";

export function CursorRadialBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glowEl = glowRef.current;
    const containerEl = containerRef.current;
    if (!glowEl || !containerEl) return;

    let hasEntered = false;

    // Direct hardware-synchronous position update with ZERO delay
    const updatePosition = (clientX: number, clientY: number) => {
      glowEl.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      document.documentElement.style.setProperty("--cursor-x", `${clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${clientY}px`);
    };

    // Center initially before first cursor interaction
    updatePosition(window.innerWidth / 2, window.innerHeight * 0.4);

    const handlePointerMove = (e: PointerEvent) => {
      updatePosition(e.clientX, e.clientY);
      if (!hasEntered) {
        hasEntered = true;
        containerEl.style.opacity = "1";
      }
    };

    const handlePointerLeave = () => {
      hasEntered = false;
      containerEl.style.opacity = "0";
    };

    const handlePointerEnter = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
      hasEntered = true;
      containerEl.style.opacity = "1";
    };

    // Use capturing listener to guarantee immediate execution before any bubbling delay
    window.addEventListener("pointermove", handlePointerMove, { passive: true, capture: true });
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove, { capture: true });
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ opacity: 0, transition: "opacity 0.4s ease-out" }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 
        Zero-Lag Hardware Accelerated Anchor:
        Element is 1200px x 1200px, centered exactly via -600px margins.
        Translate3d moves it in 1:1 direct lockstep with mouse cursor on the GPU compositor thread.
        NO CSS transitions on transform, guaranteeing 0ms latency.
      */}
      <div
        ref={glowRef}
        style={{
          width: "1200px",
          height: "1200px",
          marginLeft: "-600px",
          marginTop: "-600px",
          willChange: "transform",
          transition: "none",
        }}
        className="absolute top-0 left-0 pointer-events-none"
      >
        {/*
          1. Expansive Ambient Radiance (1200px Diameter):
          Evenly distributed mathematical falloff with vibrant luminous core.
        */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {/* Light Mode: Warm radiant champagne amber, fiery vermilion core */}
          <div
            className="absolute inset-0 rounded-full dark:hidden"
            style={{
              background:
                "radial-gradient(circle at center, rgba(230, 85, 47, 0.35) 0%, rgba(249, 115, 22, 0.25) 26%, rgba(245, 158, 11, 0.16) 50%, rgba(245, 158, 11, 0.05) 72%, transparent 90%)",
            }}
          />

          {/* Dark Mode: High-intensity multi-stop chromatic aurora (Violet -> Indigo -> Electric Cyan -> Warm Coral) */}
          <div
            className="absolute inset-0 rounded-full hidden dark:block"
            style={{
              background:
                "radial-gradient(circle at center, rgba(147, 51, 234, 0.52) 0%, rgba(99, 102, 241, 0.40) 25%, rgba(6, 182, 212, 0.26) 50%, rgba(230, 85, 47, 0.12) 72%, transparent 90%)",
            }}
          />
        </div>

        {/*
          2. Concentrated Inner Core Spotlight (520px Diameter):
          Direct high-contrast luminous cursor aura for crisp spatial feedback.
        */}
        <div className="absolute inset-[340px] rounded-full pointer-events-none">
          {/* Light Mode Core */}
          <div
            className="absolute inset-0 rounded-full dark:hidden"
            style={{
              background:
                "radial-gradient(circle at center, rgba(230, 85, 47, 0.38) 0%, rgba(249, 115, 22, 0.22) 40%, transparent 75%)",
            }}
          />

          {/* Dark Mode Core */}
          <div
            className="absolute inset-0 rounded-full hidden dark:block"
            style={{
              background:
                "radial-gradient(circle at center, rgba(168, 85, 247, 0.60) 0%, rgba(99, 102, 241, 0.38) 35%, rgba(6, 182, 212, 0.22) 60%, transparent 78%)",
            }}
          />
        </div>

        {/*
          3. Outer Atmospheric Horizon (1400px Wide Feathered Undercurrent):
          Subtle broad glow for continuous viewport illumination without sharp boundaries.
        */}
        <div
          className="absolute -inset-24 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(230, 85, 47, 0.12) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute -inset-24 rounded-full pointer-events-none hidden dark:block"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.12) 45%, transparent 75%)",
          }}
        />
      </div>
    </div>
  );
}
