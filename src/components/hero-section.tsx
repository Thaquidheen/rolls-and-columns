"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { FloatingCard } from "./floating-card";
import { AvatarStack } from "./avatar-stack";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Headline animation - word by word
      const words = headlineRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.from(words, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.2,
          ease: "power4.out",
        });
      }

      // Subtext animation
      gsap.from(subtextRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power3.out",
      });

      // Button animation
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        delay: 0.7,
        ease: "back.out(1.7)",
      });

      // Hero image animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Pixelated Arrow Icon (matching your brand style)
  const PixelArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="8" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="7" y="3" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="7" y="8" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="12" y="8" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );

  // Excel icon - Matching the Figma design with layered sheets
  const ExcelIcon = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: "clamp(56px, 14vw, 80px)", height: "clamp(56px, 14vw, 80px)" }}>
        {/* Back sheet - lighter */}
        <div
          className="absolute rounded-lg"
          style={{
            width: "70%",
            height: "85%",
            top: "0",
            right: "0",
            background: "linear-gradient(135deg, #86EFAC 0%, #4ADE80 100%)",
          }}
        />
        {/* Middle sheet */}
        <div
          className="absolute rounded-lg"
          style={{
            width: "75%",
            height: "88%",
            top: "6%",
            right: "8%",
            background: "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)",
          }}
        />
        {/* Front sheet - Excel green with X */}
        <div
          className="absolute rounded-lg shadow-lg flex items-center justify-center"
          style={{
            width: "70%",
            height: "85%",
            bottom: "0",
            left: "0",
            background: "linear-gradient(135deg, #217346 0%, #185C37 100%)",
          }}
        >
          <span
            className="font-bold text-white"
            style={{
              fontSize: "clamp(24px, 6vw, 36px)",
              fontFamily: "system-ui, -apple-system",
            }}
          >
            X
          </span>
        </div>
      </div>
    </div>
  );

  // Power BI icon - Plus/cross pattern matching Figma
  const PowerBIIcon = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: "clamp(56px, 14vw, 80px)", height: "clamp(56px, 14vw, 80px)" }}>
        <svg viewBox="0 0 80 80" className="w-full h-full">
          {/* Center plus - white - larger */}
          <g transform="translate(40, 40)">
            <rect x="-3" y="-16" width="6" height="32" fill="white" rx="1" />
            <rect x="-16" y="-3" width="32" height="6" fill="white" rx="1" />
          </g>
          {/* Top plus - cyan */}
          <g transform="translate(40, 12)">
            <rect x="-2" y="-8" width="4" height="16" fill="#00D4FF" rx="1" />
            <rect x="-8" y="-2" width="16" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Bottom plus - cyan */}
          <g transform="translate(40, 68)">
            <rect x="-2" y="-8" width="4" height="16" fill="#00D4FF" rx="1" />
            <rect x="-8" y="-2" width="16" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Left plus - cyan */}
          <g transform="translate(12, 40)">
            <rect x="-2" y="-8" width="4" height="16" fill="#00D4FF" rx="1" />
            <rect x="-8" y="-2" width="16" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Right plus - cyan */}
          <g transform="translate(68, 40)">
            <rect x="-2" y="-8" width="4" height="16" fill="#00D4FF" rx="1" />
            <rect x="-8" y="-2" width="16" height="4" fill="#00D4FF" rx="1" />
          </g>
        </svg>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden lg:h-screen pb-6 sm:pb-8 md:pb-10 lg:pb-0"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/herobg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `url('/images/home/dot paatern.png')`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* Green gradient glow - Bottom-left flow */}
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] lg:w-[900px] h-[180px] sm:h-[300px] lg:h-[700px] bg-[#22c55e]/25 sm:bg-[#22c55e]/30 blur-[80px] sm:blur-[100px] lg:blur-[200px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-[200px] sm:w-[350px] lg:w-[600px] h-[140px] sm:h-[250px] lg:h-[500px] bg-[#22c55e]/15 sm:bg-[#22c55e]/20 blur-[60px] sm:blur-[80px] lg:blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-[160px] sm:w-[280px] lg:w-[450px] h-[100px] sm:h-[180px] lg:h-[350px] bg-[#22c55e]/8 sm:bg-[#22c55e]/10 blur-[50px] sm:blur-[60px] lg:blur-[120px] rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 lg:h-full">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 lg:h-full">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[45%] pt-32 sm:pt-36 md:pt-40 lg:pt-0 relative z-20">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-extrabold uppercase"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "clamp(32px, 8vw, 72px)",
                  lineHeight: "1.0",
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="word inline-block text-white">UNLOCK</span>
                <br />
                <span className="word inline-block text-white">NEW </span>
                <span className="word inline-block text-[#22c55e]">CAREER</span>
                <br />
                <span className="word inline-block text-white">OPPORTUNITIES</span>
              </h1>

              {/* Subtext */}
              <p
                ref={subtextRef}
                className="text-white/60 text-sm lg:text-base max-w-sm leading-relaxed"
              >
                Lorem ipsum dolor sit amet consectetur. Nisl risus lacus nulla.
                Laoreet in nulla risus et met adipiscing.
              </p>

              {/* CTA Button - With pixelated arrow icon */}
              <button
                ref={buttonRef}
                className={cn(
                  "group flex items-center gap-4 bg-transparent text-white",
                  "px-6 py-3 rounded-full font-medium text-sm",
                  "border border-white/30 hover:border-white hover:bg-white/5",
                  "transition-all duration-300"
                )}
              >
                Discover More
                <PixelArrowIcon />
              </button>

              {/* Trust Indicator */}
              <div className="pt-2 sm:pt-3 md:pt-4 lg:pt-8">
                <AvatarStack delay={0.9} />
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image & Floating Cards */}
          <div
            ref={imageRef}
            className="relative w-full lg:w-[70%] h-[240px] sm:h-[280px] md:h-[360px] lg:h-[calc(100vh-80px)] lg:absolute lg:bottom-0 lg:right-0"
          >
            {/* Main Hero Image */}
            <div className="relative w-full h-full">
              <Image
                src="/images/home/hero image.png"
                alt="Professional learning Excel and Power BI"
                fill
                className="object-contain object-bottom lg:object-cover lg:object-right-bottom"
                priority
              />

              {/* Excel Floating Card - Positioned to overlap with person on left */}
              <FloatingCard
                icon={<ExcelIcon />}
                title="Microsoft Excel"
                subtitle="Master in"
                className="absolute hidden lg:block"
                style={{
                  top: "35%",
                  left: "10%",
                }}
                delay={1.0}
                floatIntensity={8}
              />

              {/* Power BI Floating Card - Positioned on right shoulder area */}
              <FloatingCard
                icon={<PowerBIIcon />}
                title="Power BI Tools"
                subtitle="Master in"
                className="absolute hidden lg:block"
                style={{
                  top: "45%",
                  right: "15%",
                }}
                delay={1.2}
                floatIntensity={12}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 lg:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}