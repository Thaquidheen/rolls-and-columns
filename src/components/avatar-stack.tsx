"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  count?: number;
  text?: string;
  className?: string;
  delay?: number;
}

// Placeholder avatar URLs
const avatarUrls = [
  "https://i.pravatar.cc/80?img=1",
  "https://i.pravatar.cc/80?img=2",
  "https://i.pravatar.cc/80?img=3",
  "https://i.pravatar.cc/80?img=4",
];

export function AvatarStack({
  count = 4,
  text = "Trusted by over 14k+ founders",
  className,
  delay = 0,
}: AvatarStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the text
      gsap.from(".trust-text", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay,
        ease: "power3.out",
      });

      // Animate avatars with stagger
      gsap.from(".avatar-item", {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        delay: delay + 0.2,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={cn("flex flex-col gap-3", className)}>
      <p className="trust-text text-white/60 text-sm">{text}</p>
      <div className="flex items-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "avatar-item w-10 h-10 rounded-full border-2 border-[#0a0a0a] overflow-hidden",
              index !== 0 && "-ml-3"
            )}
          >
            <Image
              src={avatarUrls[index % avatarUrls.length]}
              alt={`User ${index + 1}`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
