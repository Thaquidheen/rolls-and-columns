"use client";

import { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextSegment {
  text: string;
  weight?: 400 | 600 | 700;
}

interface ScrollHighlightSectionProps {
  theme?: "light" | "dark";
}

// Text segments as a continuous paragraph
const textSegments: TextSegment[] = [
  { text: "Rows & Columns was founded by ", weight: 400 },
  { text: "Mohammed Alfan", weight: 700 },
  { text: " who is an Indian author and data enthusiast. His passion for data was the ", weight: 400 },
  { text: "ignition of his growth.", weight: 700 },
  { text: ' Microsoft recognized his passion, dedication, and contribution to society and awarded him with the title "', weight: 400 },
  { text: "MVP of Microsoft", weight: 700 },
  { text: '" twice. He has also authored a book, for Beginners which has boomed online platforms and has been accepted by multiple universities as a part of their courses.', weight: 400 },
];

// Parse text segments into individual words with weight info
function parseTextToWords(segments: TextSegment[]): { text: string; weight: number }[] {
  const words: { text: string; weight: number }[] = [];
  segments.forEach(segment => {
    const segmentWords = segment.text.split(/(\s+)/).filter(w => w.trim());
    segmentWords.forEach(word => {
      words.push({ text: word, weight: segment.weight || 400 });
    });
  });
  return words;
}

export function ScrollHighlightSection({ theme = "light" }: ScrollHighlightSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = useMemo(() => parseTextToWords(textSegments), []);

  const colors = useMemo(() => ({
    background: theme === "light" ? "bg-white" : "bg-[#0a0a0a]",
    initialColor: theme === "light" ? "rgba(0, 0, 0, 0.25)" : "rgba(255, 255, 255, 0.25)",
    animatedColor: theme === "light" ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
  }), [theme]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const wordElements = wordsRef.current.filter(Boolean) as HTMLSpanElement[];

    const ctx = gsap.context(() => {
      // Animate each word individually as it comes into view
      wordElements.forEach((word, index) => {
        gsap.to(word, {
          color: colors.animatedColor,
          scrollTrigger: {
            trigger: word,
            start: "top 80%",
            end: "top 50%",
            scrub: 0.5,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [words, colors.animatedColor]);

  return (
    <section ref={sectionRef} className={`relative py-12 md:py-24 ${colors.background}`}>
      <div className={colors.background}>
        <div
          className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8"
          style={{
            fontFamily: "var(--font-plus-jakarta)",
            fontSize: "clamp(16px, 3.5vw, 36px)",
            lineHeight: "1.5",
            letterSpacing: "-0.02em",
          }}
        >
          <p>
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  wordsRef.current[index] = el;
                }}
                style={{
                  color: colors.initialColor,
                  fontWeight: word.weight,
                  display: "inline",
                }}
              >
                {word.text}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
