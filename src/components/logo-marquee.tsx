"use client";

import Image from "next/image";

interface Logo {
  name: string;
  src?: string;
}

const logos: Logo[] = [
  { name: "Logo 1", src: "/images/home/image 59.png" },
  { name: "Logo 2", src: "/images/home/image 60.png" },
  { name: "Logo 3", src: "/images/home/image 61.png" },
  { name: "Logo 4", src: "/images/home/image 62.png" },
  { name: "Logo 5", src: "/images/home/image 63.png" },
  { name: "Logo 6", src: "/images/home/image 64.png" },
  { name: "Logo 7", src: "/images/home/image 65.png" },
  { name: "Logo 8", src: "/images/home/image 66.png" },
  { name: "Logo 9", src: "/images/home/image 67.png" },
];

export function LogoMarquee() {
  return (
    <section
      className="bg-white overflow-hidden min-h-[250px] md:min-h-[280px] lg:min-h-[300px] py-12 md:py-14 lg:py-16"
    >
      {/* Container matching other sections */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
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
                  width: "clamp(100px, 12vw, 129px)",
                  height: "clamp(100px, 12vw, 129px)",
                  marginRight: "clamp(32px, 5vw, 64px)",
                }}
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={129}
                    height={129}
                    className="object-contain w-full h-full"
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
                  width: "clamp(100px, 12vw, 129px)",
                  height: "clamp(100px, 12vw, 129px)",
                  marginRight: "clamp(32px, 5vw, 64px)",
                }}
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={129}
                    height={129}
                    className="object-contain w-full h-full"
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
