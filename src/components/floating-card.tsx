"use client";

import { useRef, useEffect, ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  icon?: ReactNode;
  image?: string;
  title: string;
  subtitle?: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  floatIntensity?: number;
}

export function FloatingCard({
  icon,
  image,
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
        "flex flex-col items-center justify-end gap-4 sm:gap-6 p-4 sm:p-6",
        "shadow-lg shadow-black/20",
        className
      )}
      style={{
        width: "clamp(180px, 45vw, 251px)",
        height: "clamp(220px, 55vw, 308px)",
        borderRadius: "clamp(20px, 5vw, 29px)",
        border: "3px solid rgba(238, 238, 238, 0.26)",
        background: "rgba(255, 255, 255, 0.11)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {/* Image or Icon */}
      {image ? (
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="relative" style={{
            width: "clamp(120px, 30vw, 172px)",
            height: "clamp(100px, 25vw, 140px)",
          }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      ) : icon ? (
        <div className="w-full flex-1 flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        </div>
      ) : null}

      {/* Title */}
      <div className="text-center w-full">
        <h3
          className="text-white font-semibold leading-tight"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(18px, 4.5vw, 29px)",
            lineHeight: "clamp(22px, 5.5vw, 34px)",
            letterSpacing: "-0.04em",
            fontWeight: 600,
          }}
        >
          {subtitle && (
            <span className="block text-xs sm:text-sm mb-1 font-normal text-white/70">
              {subtitle}
            </span>
          )}
          {title}
        </h3>
      </div>
    </div>
  );
}
