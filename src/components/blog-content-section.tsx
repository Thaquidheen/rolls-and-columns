"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogPost } from "@/types/blog";

gsap.registerPlugin(ScrollTrigger);

interface BlogContentSectionProps {
  blog: BlogPost;
}

export function BlogContentSection({ blog }: BlogContentSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Content sections animation
      const sections = contentRef.current?.querySelectorAll(".content-block");
      if (sections) {
        sections.forEach((section) => {
          gsap.from(section, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Use featuredImage if available, otherwise fall back to image
  const displayImage = blog.featuredImage || blog.image;

  // Split content: first section, then image, then remaining sections
  const firstContent = blog.content?.[0];
  const remainingContent = blog.content?.slice(1) || [];

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Sections */}
        <div ref={contentRef} className="space-y-12 md:space-y-16">
          {/* First Content Block */}
          {firstContent && (
            <div className="content-block">
              {firstContent.heading && (
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 600,
                    fontSize: "clamp(28px, 4vw, 46px)",
                    lineHeight: "1.24",
                    letterSpacing: "-0.02em",
                    color: "#303030",
                  }}
                >
                  {firstContent.heading}
                </h2>
              )}
              <div
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                {firstContent.text.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex > 0 ? "mt-6" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Featured Image - After first content */}
          <div
            ref={imageRef}
            className="content-block relative w-full overflow-hidden rounded-2xl"
            style={{
              height: "clamp(300px, 45vw, 649px)",
            }}
          >
            <Image
              src={displayImage}
              alt={blog.imageAlt || blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Remaining Content Blocks */}
          {remainingContent.map((section, index) => (
            <div key={index} className="content-block">
              {section.heading && (
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 600,
                    fontSize: "clamp(28px, 4vw, 46px)",
                    lineHeight: "1.24",
                    letterSpacing: "-0.02em",
                    color: "#303030",
                  }}
                >
                  {section.heading}
                </h2>
              )}
              <div
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                {section.text.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex} className={pIndex > 0 ? "mt-6" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.image && (
                <div className="relative w-full h-[400px] mt-8 rounded-xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.heading || "Blog content image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
