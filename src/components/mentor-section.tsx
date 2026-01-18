"use client";

import Image from "next/image";

interface Stat {
  number: string;
  title: string;
  description: string;
}

const stats: Stat[] = [
  {
    number: "2K+",
    title: "Businesses Trust Us",
    description: "Lorem ipsum dolor sit amet consectetur cillum",
  },
  {
    number: "+75%",
    title: "Increased Productivity",
    description: "Lorem ipsum dolor sit amet consectetur cillum",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
    description: "Lorem ipsum dolor sit amet consectetur cillum",
  },
  {
    number: "4.8/5",
    title: "Star Rating",
    description: "Lorem ipsum dolor sit amet consectetur cillum",
  },
];

export function MentorSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div
          className="relative w-full max-w-[1596px] min-h-[600px] md:min-h-[650px] lg:h-[724px] overflow-hidden mx-auto border-2 md:border-4 lg:border-[6px] rounded-2xl md:rounded-3xl lg:rounded-[36px]"
          style={{
            background: "#181614",
            borderColor: "rgba(227, 227, 227, 0.1)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.11)",
          }}
        >
        {/* Responsive Grid Layout */}
        <div className="w-full h-full p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            {/* Mentor Card - Full width on mobile, left column on desktop */}
            <div className="w-full lg:w-auto h-full lg:max-w-[542px]">
              <div
                className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden"
                style={{
                  backgroundImage: "url('/images/home/mentor bg.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative w-full h-full flex flex-col justify-start px-6 md:px-8 pt-6 md:pt-8">
                  <h2
                    className="font-bold text-white mb-6 uppercase leading-tight"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      fontWeight: 800,
                      fontSize: "clamp(40px, 7vw, 59px)",
                      lineHeight: "clamp(44px, 7.5vw, 58px)",
                      letterSpacing: "-0.02em",
                      color: "rgba(255, 255, 255, 0.62)",
                    }}
                  >
                    MEET
                    <br />
                    MOHAMMED
                    <br />
                    ALFAN
                  </h2>

                  {/* Mentor Image with Green Gradient */}
                  <div className="relative w-full flex-1 min-h-[300px] mt-auto">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(34, 197, 94, 0.6) 0%, rgba(34, 197, 94, 0.3) 40%, transparent 70%)",
                        zIndex: 2,
                      }}
                    />
                    <Image
                      src="/images/home/Mentor image.png"
                      alt="Mohammed Alfan"
                      fill
                      className="object-contain object-bottom"
                      style={{ zIndex: 1 }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Cards - Stack on mobile, 2x2 grid on tablet/desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {stats.map((stat, index) => {
                const isHighlightedCard = index === 2; // 98% card
                return (
                  <div
                    key={index}
                    className={`group rounded-2xl border transition-all duration-300 cursor-pointer p-6 md:p-8 w-full min-h-[250px] lg:w-[449.1px] lg:h-[299.51px] bg-transparent hover:bg-white hover:border-transparent ${
                      isHighlightedCard ? "border-blue-500" : "border-white/10"
                    }`}
                    style={{
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Number - Gray for all cards, Green on hover */}
                    <div
                      className="font-bold mb-3 transition-colors duration-300 text-[#7B7B7B] group-hover:text-[#22c55e]"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        fontWeight: 600,
                        fontSize: "clamp(48px, 7vw, 64px)",
                        lineHeight: "clamp(52px, 7.5vw, 70px)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {stat.number}
                    </div>

                    {/* Title - White for all cards, Black on hover */}
                    <div
                      className="font-semibold mb-2 transition-colors duration-300 text-white group-hover:text-black"
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        fontSize: "clamp(18px, 2vw, 24px)",
                        lineHeight: "1.3",
                      }}
                    >
                      {stat.title}
                    </div>

                    {/* Description - Semi-transparent white for all cards */}
                    <div
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        fontWeight: 400,
                        fontSize: "clamp(16px, 2.5vw, 20px)",
                        lineHeight: "clamp(24px, 3vw, 28px)",
                        color: "rgba(255, 255, 255, 0.61)",
                      }}
                    >
                      {stat.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

          {/* Dotted Pattern Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: "url('/images/home/dot paatern.png')",
              backgroundRepeat: "repeat",
              backgroundSize: "150px",
              mixBlendMode: "overlay",
            }}
          />
        </div>
      </div>
    </section>
  );
}
