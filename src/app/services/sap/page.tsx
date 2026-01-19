"use client";

import { Navbar, SapHeroSection, SapWhyIntegrationSection, SapChallengesSection, SapBestPracticesSection, EnquirySection, Footer } from "@/components";

export default function SapPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <SapHeroSection />
      <SapWhyIntegrationSection />
      <SapChallengesSection />
      <SapBestPracticesSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
