"use client";

interface CourseCard {
  id: number;
  tag: string;
  title: string;
  lessons: string;
  duration: string;
  level: string;
  description: string;
  theme: "excel" | "powerbi";
}

const courses: CourseCard[] = [
  {
    id: 1,
    tag: "ROWS & COLUMNS",
    title: "MICROSOFT EXCEL BASIC TO ADVANCE",
    lessons: "1 lessons",
    duration: "35:13:00",
    level: "Basic",
    description: "Dive into our curated feed for the freshest insights and essential",
    theme: "excel",
  },
  {
    id: 2,
    tag: "ROWS & COLUMNS",
    title: "MICROSOFT POWER BI BASIC TO ADVANCE",
    lessons: "1 lessons",
    duration: "42:30:00",
    level: "Next",
    description: "Learn to visualize data like the best insight right at your fingertips",
    theme: "powerbi",
  },
  {
    id: 3,
    tag: "ROWS & COLUMNS",
    title: "MICROSOFT EXCEL BASIC TO ADVANCE",
    lessons: "1 lessons",
    duration: "35:13:00",
    level: "Basic",
    description: "Dive into our curated feed for the freshest insights and essential",
    theme: "excel",
  },
  {
    id: 4,
    tag: "ROWS & COLUMNS",
    title: "MICROSOFT POWER BI BASIC TO ADVANCE",
    lessons: "1 lessons",
    duration: "42:30:00",
    level: "Next",
    description: "Learn to visualize data like the best insight right at your fingertips",
    theme: "powerbi",
  },
];

export function CourseGridSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-24">
      <div className="px-4 sm:px-6 md:px-16 lg:px-24 max-w-[1463px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[58px] justify-items-center">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CourseCardProps {
  course: CourseCard;
}

function CourseCard({ course }: CourseCardProps) {
  const isExcel = course.theme === "excel";

  return (
    <div
      className="group relative overflow-hidden transition-all duration-300 md:hover:scale-[1.02] cursor-pointer w-full"
      style={{
        maxWidth: "702px",
        aspectRatio: "702 / 727",
        background: "#FFFFFF",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.11)",
        borderRadius: "clamp(16px, 3vw, 23px)",
      }}
    >
      {/* Card Container - Flex Column */}
      <div className="relative h-full flex flex-col">
        {/* Top Section - White Background with Content */}
        <div
          className="flex flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12"
          style={{
            minHeight: "clamp(320px, 60vh, 446px)",
          }}
        >
          {/* Content Group */}
          <div>
            {/* Tag */}
            <div
              className="mb-2 md:mb-3"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 700,
                fontSize: "clamp(14px, 2vw, 19px)",
                lineHeight: "clamp(24px, 5vw, 58px)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: "#009412",
              }}
            >
              {course.tag}
            </div>

            {/* Title */}
            <h3
              className="mb-4 md:mb-6"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "clamp(20px, 4vw, 40px)",
                lineHeight: "clamp(24px, 4.5vw, 43px)",
                textTransform: "uppercase",
                color: "#000000",
              }}
            >
              {course.title}
            </h3>

            {/* Metadata Icons Row */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              {/* Lessons */}
              <div className="flex items-center gap-1.5 md:gap-2">
                <div
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-black/5"
                >
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#000000" }}
                  >
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    color: "#000000",
                  }}
                >
                  {course.lessons}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5 md:gap-2">
                <div
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-black/5"
                >
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#000000" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    color: "#000000",
                  }}
                >
                  {course.duration}
                </span>
              </div>

              {/* Level */}
              <div className="flex items-center gap-1.5 md:gap-2">
                <div
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center bg-black/5"
                >
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#000000" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    color: "#000000",
                  }}
                >
                  {course.level}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                fontWeight: 400,
                fontSize: "clamp(14px, 2vw, 18px)",
                lineHeight: "clamp(22px, 3vw, 30px)",
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              {course.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-4 md:mt-6">
            <button
              className="group/btn relative overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                background: "#009412",
                borderRadius: "69px",
                padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 28px)",
              }}
            >
              <span
                className="relative z-10 block transition-opacity duration-300 group-hover/btn:opacity-90"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 2.5vw, 22px)",
                  lineHeight: "clamp(28px, 4vw, 42px)",
                  textAlign: "center",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                Take this Course
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section - Colored Background with Watermark */}
        <div
          className="relative overflow-hidden flex items-center justify-center gap-4 md:gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-12"
          style={{
            height: "281px",
            background: isExcel
              ? "linear-gradient(89.81deg, #214B3A 0.18%, #03D372 97.2%)"
              : "linear-gradient(89.81deg, #f59e0b 0.18%, #eab308 97.2%)",
            borderRadius: "0px 0px clamp(16px, 3vw, 23px) clamp(16px, 3vw, 23px)",
          }}
        >
          {/* Large Watermark Text */}
          <div
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 58px)",
              lineHeight: "clamp(28px, 4.5vw, 50px)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "rgba(238, 238, 238, 0.3)",
            }}
          >
            {isExcel ? (
              <>
                MICROSOFT
                <br />
                EXCEL
              </>
            ) : (
              <>
                MICROSOFT
                <br />
                POWER BI
              </>
            )}
          </div>

          {/* Icon */}
          <div
            className="flex-shrink-0"
            style={{
              width: "clamp(100px, 20vw, 180px)",
              height: "clamp(100px, 20vw, 180px)",
            }}
          >
            {isExcel ? (
              // Excel Icon - Using actual image
              <img
                src="/images/courses/Gemini_Generated_Image_domyyqdomyyqdomy 1.png"
                alt="Excel Icon"
                className="w-full h-full object-contain"
              />
            ) : (
              // Power BI Icon - Using actual image
              <img
                src="/images/courses/image 122.png"
                alt="Power BI Icon"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isExcel
            ? "radial-gradient(circle at center, rgba(0, 148, 18, 0.2) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
