"use client";

import { useState, useEffect } from "react";

interface Course {
  id: number;
  tag: string;
  title: string;
  lessons: string;
  duration: string;
  level: string;
  color: string;
}

const courses: Course[] = [
  {
    id: 1,
    tag: "ROWS & COLUMNS",
    title: "MICROSOFT EXCEL BASIC TO ADVANCE",
    lessons: "1 lessons",
    duration: "35:13:00",
    level: "Basic",
    color: "#22c55e",
  },
  {
    id: 2,
    tag: "ROWS & COLUMNS",
    title: "ADVANCED DATA ANALYTICS WITH POWER BI",
    lessons: "1 lessons",
    duration: "42:30:00",
    level: "Advanced",
    color: "#3b82f6",
  },
  {
    id: 3,
    tag: "ROWS & COLUMNS",
    title: "DATA VISUALIZATION MASTERCLASS",
    lessons: "1 lessons",
    duration: "28:45:00",
    level: "Intermediate",
    color: "#f59e0b",
  },
];

export function DiscoverCoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const deltaX = currentX - startX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        // Dragged left - next slide
        setCurrentIndex((prev) => (prev + 1) % courses.length);
      } else {
        // Dragged right - previous slide
        setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
      }
    }

    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  // Auto-slide effect
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full max-w-[1596px] min-h-[450px] md:min-h-[600px] lg:min-h-[792px] overflow-hidden mx-auto border-2 md:border-4 lg:border-[6px] rounded-2xl md:rounded-3xl lg:rounded-[36px]"
          style={{
            boxSizing: "border-box",
            background: "#181614",
            borderColor: "rgba(227, 227, 227, 0.1)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.11)",
          }}
        >
          {/* Responsive Flexbox Layout */}
          <div className="w-full h-full p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <div className="mb-6 md:mb-8">
                <h2
                  className="font-bold text-white mb-4 uppercase leading-tight"
                  style={{
                    fontFamily: "var(--font-montserrat)",
                    fontSize: "clamp(28px, 5vw, 56px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  DISCOVER
                  <br />
                  OUR COURSES
                </h2>

                <p
                  className="text-white/70 mb-3"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(14px, 1.5vw, 16px)",
                    lineHeight: "1.5",
                  }}
                >
                  100+ unique excel online course list
                </p>

                <p
                  className="text-white/50 max-w-md"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontSize: "clamp(12px, 1.2vw, 14px)",
                    lineHeight: "1.5",
                  }}
                >
                  Rows & Columns was founded by Mohammed Alfan who is an Indian author and data enthusiast.
                </p>
              </div>

              <button
                className="flex items-center gap-3 bg-transparent hover:bg-white/10 border-2 border-white/30 rounded-full px-4 py-2 md:px-7 md:py-3 transition-all duration-300 w-fit"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontWeight: 600,
                }}
              >
                <span className="text-white">Discover More</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Course Cards Slider */}
            <div
              className="relative w-full lg:w-3/5 flex items-center justify-start min-h-[350px] sm:min-h-[400px] md:min-h-[480px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="relative w-full h-full flex items-center justify-start"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                {/* Stacked cards with slider effect */}
                {courses.map((course, index) => {
                  const offset = (index - currentIndex + courses.length) % courses.length;
                  const isActive = offset === 0;
                  const isNext = offset === 1;

                  return (
                    <div
                      key={course.id}
                      className="absolute transition-all duration-700 ease-out rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[85vw] sm:max-w-[88vw] md:max-w-[580px]"
                      style={{
                        aspectRatio: "580 / 480",
                        left: "0px",
                        transform: isActive
                          ? "translateX(0) scale(1)"
                          : isNext
                          ? "translateX(clamp(20px, 8vw, 120px)) scale(0.93)"
                          : "translateX(clamp(40px, 12vw, 200px)) scale(0.87)",
                        opacity: 1,
                        zIndex: isActive ? 30 : isNext ? 20 : 10,
                        pointerEvents: isActive ? "auto" : "none",
                        background: isActive
                          ? "linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)"
                          : course.color,
                        userSelect: 'none',
                      }}
                    >
                      <div className="relative w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                        {isActive && (
                          <>
                            {/* Top Content Group */}
                            <div>
                              {/* Course Tag */}
                              <div
                                className="text-xs font-bold mb-2 uppercase"
                                style={{
                                  fontFamily: "var(--font-plus-jakarta)",
                                  color: course.color,
                                  letterSpacing: "0.05em",
                                }}
                              >
                                {course.tag}
                              </div>

                              {/* Course Title */}
                              <h3
                                className="font-bold text-black mb-4"
                                style={{
                                  fontFamily: "var(--font-montserrat)",
                                  fontSize: "clamp(20px, 3vw, 28px)",
                                  lineHeight: "1.1",
                                  letterSpacing: "-0.02em",
                                }}
                              >
                                {course.title}
                              </h3>

                              {/* Course Details */}
                              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                                  </svg>
                                  <span className="text-gray-700 text-xs font-medium">{course.lessons}</span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-gray-700 text-xs font-medium">{course.duration}</span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <span className="text-gray-700 text-xs font-medium">{course.level}</span>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Content Group */}
                            <div className="flex items-end justify-between">
                              {/* CTA Button */}
                              <button
                                className="rounded-xl sm:rounded-2xl text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 transition-all duration-300 hover:shadow-lg hover:opacity-90"
                                style={{
                                  background: course.color,
                                  fontFamily: "var(--font-plus-jakarta)",
                                  fontSize: "clamp(12px, 2vw, 14px)",
                                }}
                              >
                                Take this Course
                              </button>

                              {/* Excel Icon */}
                              <div
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold"
                                style={{
                                  background: `linear-gradient(135deg, ${course.color}40 0%, ${course.color}20 100%)`,
                                  color: course.color,
                                  fontFamily: "var(--font-montserrat)",
                                }}
                              >
                                X
                              </div>
                            </div>
                          </>
                        )}
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
