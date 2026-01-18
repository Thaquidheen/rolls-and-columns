"use client";

import Image from "next/image";

interface Logo {
  name: string;
  src?: string;
}

const logos: Logo[] = [
  { name: "Indian Express" },
  { name: "Hit 96.7" },
  { name: "360 Radio" },
  { name: "Radio Asia 94.7FM" },
  { name: "The Hindu" },
  { name: "Mathrubhumi" },
  { name: "24 News" },
  { name: "Emarat Beats" },
  { name: "Club FM" },
];

export function LogoMarquee() {
  return (
    <section
      className="bg-white overflow-hidden min-h-[150px] md:min-h-[180px] lg:min-h-[201px] py-8 md:py-10"
    >
      {/* Container with left padding matching hero section */}
      <div className="pl-8 lg:pl-16 xl:pl-24 pr-8">
        {/* Headline */}
        <p
          className="text-gray-700 mb-8"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "clamp(14px, 1.5vw, 16px)",
            fontWeight: 400,
          }}
        >
          Be part of the 100+ businesses transforming their presence.
        </p>

        {/* Logo row with auto-scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  minWidth: "clamp(80px, 15vw, 100px)",
                  height: "clamp(32px, 6vw, 40px)",
                  marginRight: "clamp(24px, 4vw, 48px)",
                }}
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <div
                    className="text-gray-500 font-medium text-sm whitespace-nowrap"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  minWidth: "clamp(80px, 15vw, 100px)",
                  height: "clamp(32px, 6vw, 40px)",
                  marginRight: "clamp(24px, 4vw, 48px)",
                }}
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <div
                    className="text-gray-500 font-medium text-sm whitespace-nowrap"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
