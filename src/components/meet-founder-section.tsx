"use client";

export function MeetFounderSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[844px]">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24 flex flex-col justify-center relative z-10">
          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-montserrat)",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "clamp(28px, 7vw, 59px)",
              lineHeight: "1.1",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "rgba(255, 255, 255, 0.62)" }}>
              MEET
            </span>
            <br />
            <span style={{ color: "#FFFFFF" }}>
              MOHAMMED
            </span>
            <br />
            <span style={{ color: "#FFFFFF" }}>
              ALFAN
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-[#23B835] font-medium mt-4"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(14px, 3.5vw, 18px)",
            }}
          >
            Founder | Corporate Trainer
          </p>

          {/* Bio */}
          <p
            className="text-white/70 mt-6 max-w-md"
            style={{
              fontFamily: "var(--font-plus-jakarta)",
              fontSize: "clamp(14px, 3vw, 16px)",
              lineHeight: "1.7",
            }}
          >
            Mohammed Alfan, a four-time Microsoft Most Valuable Professional (MVP) awardee,
            is the Founder and Chief Consultant at Rows & Columns, a data analytics training
            and consulting firm based in India. With over 17+ years of professional experience
            working with leading organizations such as TCS, IBM, Accenture, and Cargill, he
            specializes in Power BI and Excel-based analytics consulting and training. He has
            also delivered corporate training programs for renowned multinational companies and
            serves as a guest lecturer at the National Institute of Technology (India), Ajman
            University, and the American University of Sharjah (UAE).
          </p>

          {/* Signature */}
          <div className="mt-8">
            <img
              src="/images/about/signature.png"
              alt="Mohammed Alfan Signature"
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Right Side - Photo with Green Radial Glow */}
        <div className="w-full lg:w-[55%] relative min-h-[400px] md:min-h-[500px] lg:min-h-full">
          {/* Green radial glow background */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 50% 70% at 85% 50%, #23B835 0%, #0a0a0a 55%)"
            }}
          />

          {/* Photo */}
          <img
            src="/images/home/Mentor image.png"
            alt="Mohammed Alfan"
            className="absolute bottom-0 right-0 object-contain z-10"
            style={{
              width: "clamp(300px, 100%, 745.3px)",
              height: "auto",
              maxHeight: "844.23px",
            }}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
