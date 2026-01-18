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

  // Excel icon - matches Figma with green background and grid pattern
  const ExcelIcon = () => (
    <div className="w-12 h-12 bg-[#217346] rounded-lg flex items-center justify-center overflow-hidden">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        {/* Left green panel */}
        <rect x="2" y="4" width="10" height="24" fill="#185C37" rx="2" />
        {/* White X on green */}
        <path d="M5 10L9 18M9 10L5 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {/* Right white panel with grid */}
        <rect x="12" y="4" width="18" height="24" fill="white" rx="2" />
        {/* Grid lines */}
        <path d="M12 10H30M12 16H30M12 22H30M18 4V28M24 4V28" stroke="#E0E0E0" strokeWidth="1" />
        {/* Green cells */}
        <rect x="13" y="5" width="4" height="4" fill="#C6EFCE" />
        <rect x="19" y="5" width="4" height="4" fill="#C6EFCE" />
        <rect x="13" y="11" width="4" height="4" fill="#C6EFCE" />
        <rect x="25" y="11" width="4" height="4" fill="#C6EFCE" />
        <rect x="19" y="17" width="4" height="4" fill="#C6EFCE" />
      </svg>
    </div>
  );

  // Power BI icon - matches Figma with plus/cross pattern
  const PowerBIIcon = () => (
    <div className="w-12 h-12 rounded-lg flex items-center justify-center">
      <div className="grid grid-cols-3 gap-1">
        {/* Row 1 */}
        <div className="w-2 h-2"></div>
        <div className="text-[#00D4FF] text-lg font-bold">+</div>
        <div className="w-2 h-2"></div>
        {/* Row 2 */}
        <div className="text-[#00D4FF] text-lg font-bold">+</div>
        <div className="text-white text-lg font-bold">+</div>
        <div className="text-[#00D4FF] text-lg font-bold">+</div>
        {/* Row 3 */}
        <div className="w-2 h-2"></div>
        <div className="text-[#00D4FF] text-lg font-bold">+</div>
        <div className="w-2 h-2"></div>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
      style={{ height: "100vh", maxHeight: "900px" }}
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/home/dot paatern.png')`,
            backgroundRepeat: "repeat",
          }}
        />
        {/* Green gradient glow */}
        <div className="absolute bottom-0 left-1/4 w-[200px] sm:w-[400px] lg:w-[600px] h-[150px] sm:h-[250px] lg:h-[400px] bg-[#22c55e]/20 blur-[80px] lg:blur-[150px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[150px] sm:w-[300px] lg:w-[400px] h-[100px] sm:h-[200px] lg:h-[300px] bg-[#22c55e]/10 blur-[60px] lg:blur-[120px] rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="h-full flex items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[45%] pt-16 lg:pt-0">
            <div className="space-y-6">
              {/* Headline */}
              <h1
                ref={headlineRef}
                className="font-extrabold uppercase"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "clamp(48px, 6vw, 72px)",
                  lineHeight: "0.95",
                  letterSpacing: "-0.02em",
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

              {/* CTA Button */}
              <button
                ref={buttonRef}
                className={cn(
                  "group flex items-center gap-3 bg-white text-black",
                  "px-4 py-2 sm:px-5 sm:py-3 rounded-full font-medium text-sm",
                  "hover:bg-white/90 transition-all duration-300"
                )}
              >
                Discover More
                <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg
                    className="w-3.5 h-3.5"
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
            className="relative lg:absolute right-0 bottom-0 w-full lg:w-[58%] h-[300px] lg:h-[95%] mt-8 lg:mt-0"
          >
            {/* Main Hero Image */}
            <div className="relative w-full h-full">
              <Image
                src="/images/home/hero image.png"
                alt="Professional learning Excel and Power BI"
                fill
                className="object-contain object-right-bottom"
                priority
              />

              {/* Excel Floating Card - positioned on left side of person */}
              <FloatingCard
                icon={<ExcelIcon />}
                title="Microsoft Excel"
                subtitle="Master in"
                className="absolute hidden md:block"
                style={{
                  top: "28%",
                  left: "8%",
                }}
                delay={1.0}
                floatIntensity={8}
              />

              {/* Power BI Floating Card - positioned on right shoulder */}
              <FloatingCard
                icon={<PowerBIIcon />}
                title="Power BI Tools"
                subtitle="Master in"
                className="absolute hidden md:block"
                style={{
                  top: "18%",
                  right: "5%",
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
