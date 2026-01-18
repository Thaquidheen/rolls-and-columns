"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  course: string;
}

const courses = [
  "Master Power BI With Real Project",
  "Advanced Excel Mastery",
  "Data Analytics Fundamentals",
  "SQL for Business Intelligence",
  "Python for Data Analysis",
];

export function EnquirySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left content animation
      gsap.from(leftContentRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Form animation
      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCourseSelect = (course: string) => {
    setFormData((prev) => ({ ...prev, course }));
    setIsDropdownOpen(false);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: "#161616" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/home/enquiry-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1.0,
        }}
      />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Center brightening gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 40% 30% at 50% 100%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical Separator Line with Gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"
          style={{
            width: "1px",
            height: "468px",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.68) 53.12%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6 lg:pr-12">
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(36px, 5vw, 66px)",
                lineHeight: "72px",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              Ready to Grow your Business smarter?
            </h2>
            <p
              className="text-[#999999] max-w-md"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "14px",
                lineHeight: "1.7",
              }}
            >
              Rows & Columns was founded by Mohammed Alfan who is an Indian author and data enthusiast. His passion for data was the ignition of his growth. Microsoft recognized his passion, dedication, and contribution to society and awarded
            </p>
            <a
              href="/discover"
              className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white rounded-full font-medium transition-all duration-300 hover:bg-[#1ea851] w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontSize: "14px",
              }}
            >
              Discover More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Right Form */}
          <div ref={formRef} className="lg:pl-12">
            <div className="space-y-4">
              <div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "clamp(28px, 3vw, 40px)",
                    lineHeight: "63px",
                    color: "#FFFFFF",
                  }}
                >
                  Enquiry form
                </h3>
                <p
                  className="text-[#666666]"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "13px",
                  }}
                >
                  Fill out the form below to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] text-white placeholder-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] transition-all"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "14px",
                    }}
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] text-white placeholder-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] transition-all"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "14px",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] text-white placeholder-[#666666] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] transition-all"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "14px",
                    }}
                  />
                </div>

                {/* Course Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 bg-[#1E1E1E] border border-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#333333] transition-all flex items-center justify-between"
                    style={{
                      fontFamily: "var(--font-plus-jakarta)",
                      fontSize: "14px",
                    }}
                  >
                    <span className={formData.course ? "text-white" : "text-[#666666]"}>
                      {formData.course || "Select a Course"}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-20 w-full mt-2 bg-[#1E1E1E] border border-[#2A2A2A] rounded-lg overflow-hidden">
                      {courses.map((course, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleCourseSelect(course)}
                          className="w-full px-4 py-3 text-left text-white hover:bg-[#2A2A2A] transition-colors"
                          style={{
                            fontFamily: "var(--font-plus-jakarta)",
                            fontSize: "14px",
                          }}
                        >
                          {course}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-transparent border-2 border-[#444444] text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                >
                  Submit
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
