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
          Evenly distributed, smooth mathematical Hermite falloff.
          Eliminates concentrated hot-spots and harsh borders.
        */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {/* Light Mode: Warm champagne, soft editorial vermilion, evenly diffused */}
          <div
            className="absolute inset-0 rounded-full dark:hidden"
            style={{
              background:
                "radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, rgba(249, 115, 22, 0.11) 28%, rgba(230, 85, 47, 0.07) 50%, rgba(245, 158, 11, 0.03) 72%, transparent 92%)",
            }}
          />

          {/* Dark Mode: Cosmic twilight violet, soft indigo, gentle cyan & ember */}
          <div
            className="absolute inset-0 rounded-full hidden dark:block"
            style={{
              background:
                "radial-gradient(circle at center, rgba(124, 58, 237, 0.20) 0%, rgba(99, 102, 241, 0.14) 28%, rgba(6, 182, 212, 0.07) 52%, rgba(255, 97, 54, 0.025) 74%, transparent 92%)",
            }}
          />
        </div>

        {/*
          2. Outer Atmospheric Horizon (1400px Wide Feathered Undercurrent):
          Subtle broad glow for continuous viewport illumination without sharp boundaries.
        */}
        <div
          className="absolute -inset-24 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(230, 85, 47, 0.04) 0%, rgba(245, 158, 11, 0.018) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute -inset-24 rounded-full pointer-events-none hidden dark:block"
          style={{
            background:
              "radial-gradient(circle at center, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.025) 45%, transparent 75%)",
          }}
        />
      </div>
    </div>
  );
}
