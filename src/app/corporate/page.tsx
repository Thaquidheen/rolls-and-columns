"use client";

import { Navbar, CorporateHeroSection, CorporateInfoSection, CorporateVideoSection, CorporateTrainingProgramsSection, CorporateLearningApproachSection, CorporateGlobalLocationsSection, CorporateWhyChooseSection, EnquirySection, Footer } from "@/components";

export default function CorporatePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <CorporateHeroSection />
      <CorporateInfoSection />
      <CorporateVideoSection />
      <CorporateTrainingProgramsSection />
      <CorporateLearningApproachSection />
      <CorporateGlobalLocationsSection />
      <CorporateWhyChooseSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
