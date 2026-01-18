"use client";

import { Navbar, AboutHeroSection, ScrollHighlightSection, StatisticsSection, MissionVisionSection, MeetFounderSection, CoreValuesSection, ClientLogosSection, EnquirySection, Footer } from "@/components";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <AboutHeroSection />
      <ScrollHighlightSection />

      <MissionVisionSection />
      <MeetFounderSection />
      <StatisticsSection />
      <CoreValuesSection />
      <ClientLogosSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
