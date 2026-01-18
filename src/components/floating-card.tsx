"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  floatIntensity?: number;
}

export function FloatingCard({
  icon,
  title,
  subtitle,
  className,
  style,
  delay = 0,
  floatIntensity = 10,
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(cardRef.current, {
        scale: 0.5,
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay,
        ease: "back.out(1.7)",
      });

      // Continuous float animation
      gsap.to(cardRef.current, {
        y: -floatIntensity,
        duration: 2,
        delay: delay + 0.8,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, [delay, floatIntensity]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        "shadow-lg shadow-black/20",
        className
      )}
      style={{
        width: "160px",
        height: "180px",
        borderRadius: "20px",
        border: "3px solid rgba(238, 238, 238, 0.26)",
        background: "rgba(255, 255, 255, 0.11)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        ...style,
      }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-white/60 text-xs mb-1">{subtitle || "Master in"}</div>
        <div className="text-white font-semibold text-sm">{title}</div>
      </div>
    </div>
  );
}
