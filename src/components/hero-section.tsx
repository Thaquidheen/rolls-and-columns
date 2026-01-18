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

  // Excel icon - Enhanced design matching screenshot
  const ExcelIcon = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: "clamp(48px, 12vw, 72px)", height: "clamp(48px, 12vw, 72px)" }}>
        {/* Excel Green Background with gradient */}
        <div
          className="absolute inset-0 rounded-lg shadow-lg"
          style={{
            background: "linear-gradient(135deg, #217346 0%, #185C37 100%)",
          }}
        />
        {/* Excel "X" Symbol - Large and prominent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-bold text-white"
            style={{
              fontSize: "clamp(28px, 8vw, 44px)",
              fontFamily: "system-ui, -apple-system",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            X
          </span>
        </div>
        {/* Subtle grid pattern overlay */}
        <div className="absolute bottom-2 right-2 opacity-30">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <rect x="0" y="0" width="8" height="8" />
            <rect x="11" y="0" width="8" height="8" />
            <rect x="0" y="11" width="8" height="8" />
            <rect x="11" y="11" width="8" height="8" />
          </svg>
        </div>
      </div>
    </div>
  );

  // Power BI icon - Enhanced plus/cross pattern matching screenshot
  const PowerBIIcon = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative" style={{ width: "clamp(48px, 12vw, 72px)", height: "clamp(48px, 12vw, 72px)" }}>
        {/* Plus/Cross Pattern Grid using SVG for precision */}
        <svg viewBox="0 0 80 80" className="w-full h-full">
          {/* Center plus - white - larger */}
          <g transform="translate(40, 40)">
            <rect x="-2.5" y="-14" width="5" height="28" fill="white" rx="1" />
            <rect x="-14" y="-2.5" width="28" height="5" fill="white" rx="1" />
          </g>
          {/* Top plus - cyan */}
          <g transform="translate(40, 15)">
            <rect x="-2" y="-10" width="4" height="20" fill="#00D4FF" rx="1" />
            <rect x="-10" y="-2" width="20" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Bottom plus - cyan */}
          <g transform="translate(40, 65)">
            <rect x="-2" y="-10" width="4" height="20" fill="#00D4FF" rx="1" />
            <rect x="-10" y="-2" width="20" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Left plus - cyan */}
          <g transform="translate(15, 40)">
            <rect x="-2" y="-10" width="4" height="20" fill="#00D4FF" rx="1" />
            <rect x="-10" y="-2" width="20" height="4" fill="#00D4FF" rx="1" />
          </g>
          {/* Right plus - cyan */}
          <g transform="translate(65, 40)">
            <rect x="-2" y="-10" width="4" height="20" fill="#00D4FF" rx="1" />
            <rect x="-10" y="-2" width="20" height="4" fill="#00D4FF" rx="1" />
          </g>
        </svg>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "700px", height: "100vh", maxHeight: "1200px" }}
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
        {/* Main gradient - bottom left, stronger */}
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[550px] lg:w-[900px] h-[250px] sm:h-[400px] lg:h-[700px] bg-[#22c55e]/30 blur-[120px] lg:blur-[200px] rounded-full" />
        {/* Secondary gradient - left side, medium */}
        <div className="absolute bottom-1/4 left-1/4 w-[250px] sm:w-[450px] lg:w-[600px] h-[200px] sm:h-[350px] lg:h-[500px] bg-[#22c55e]/20 blur-[100px] lg:blur-[160px] rounded-full" />
        {/* Subtle accent - right side */}
        <div className="absolute bottom-1/3 right-1/3 w-[200px] sm:w-[350px] lg:w-[450px] h-[150px] sm:h-[250px] lg:h-[350px] bg-[#22c55e]/10 blur-[80px] lg:blur-[120px] rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[45%] pt-16 lg:pt-0 lg:pr-4">
            <div className="space-y-6">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-extrabold uppercase"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "clamp(48px, 6vw, 72px)",
                  lineHeight: "1.0",
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="word inline-block text-white">UNLOCK</span>
                <br />
                <span className="word inline-block text-white mr-2">NEW</span>
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

              {/* CTA Button */}
              <button
                ref={buttonRef}
                className={cn(
                  "group flex items-center gap-3 bg-transparent text-white",
                  "px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-medium text-sm",
                  "border-2 border-white/30 hover:border-white hover:bg-white/10",
                  "transition-all duration-300"
                )}
              >
                Discover More
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg
                    className="w-3.5 h-3.5 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              {/* Trust Indicator */}
              <div className="pt-8">
                <AvatarStack delay={0.9} />
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image & Floating Cards */}
          <div
            ref={imageRef}
            className="relative w-full lg:w-[55%] h-[750px] md:h-[950px] lg:h-full mt-8 lg:mt-0"
          >
            {/* Main Hero Image */}
            <div className="relative w-full h-full">
              <Image
                src="/images/home/hero image.png"
                alt="Professional learning Excel and Power BI"
                fill
                className="object-cover object-center-bottom scale-105"
                priority
              />

              {/* Excel Floating Card - positioned on left side of person */}
              <FloatingCard
                icon={<ExcelIcon />}
                title="Microsoft Excel"
                subtitle="Master in"
                className="absolute hidden lg:block"
                style={{
                  top: "clamp(35%, 40vh, 45%)",
                  left: "clamp(15%, 18vw, 22%)",
                }}
                delay={1.0}
                floatIntensity={8}
              />

              {/* Power BI Floating Card - positioned on right shoulder */}
              <FloatingCard
                icon={<PowerBIIcon />}
                title="Power BI Tools"
                subtitle="Master in"
                className="absolute hidden lg:block"
                style={{
                  top: "clamp(50%, 55vh, 60%)",
                  right: "clamp(18%, 22vw, 26%)",
                }}
                delay={1.2}
                floatIntensity={12}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
