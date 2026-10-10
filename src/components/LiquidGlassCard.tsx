"use client";

import React, { useRef, useState, useCallback } from "react";

interface LiquidGlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  accentGlow?: string;
}

export function LiquidGlassCard({
  children,
  className = "",
  tilt = true,
  accentGlow,
  ...props
}: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update CSS custom properties for specular reflections
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      if (tilt) {
        // Micro 3D glass tilt physics
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2.8;
        const rotateY = ((x - centerX) / centerX) * 2.8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(4px)`;
      }
    },
    [tilt]
  );

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      if (tilt) {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      }
    }
  }, [tilt]);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative overflow-hidden will-change-transform ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transition: "box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
      }}
      {...props}
    >
      {/* Top Hairline Liquid Glass Refraction Bevel */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent pointer-events-none z-20" />

      {/* 1. Dynamic Specular Liquid Sheen (Evenly spread across frosted glass) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.10) 32%, rgba(255, 255, 255, 0.03) 60%, transparent 80%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* 2. Chromatic Prism Dispersion (Liquid Caustics & Iridescence) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 0.75 : 0,
          background: `radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.20) 0%, rgba(99, 102, 241, 0.12) 22%, rgba(6, 182, 212, 0.08) 42%, rgba(245, 158, 11, 0.05) 62%, transparent 82%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* 3. Optional Colored Caustic Bloom (Evenly diffused) */}
      {accentGlow && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 0.7 : 0,
            background: `radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentGlow}22 0%, ${accentGlow}09 35%, transparent 75%)`,
          }}
        />
      )}

      {/* 4. Dynamic Illuminated Glass Rim (Prismatic edge reflection) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.20) 35%, transparent 70%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* 5. Child Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
