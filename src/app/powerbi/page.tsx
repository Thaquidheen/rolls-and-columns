"use client";

import { ContactFormSection, ContactInfoSection, CorporateExpertiseSection, EnquirySection, Footer, Navbar, PowerBIHeroSection } from "@/components";

export default function PowerBIPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <PowerBIHeroSection />
        <CorporateExpertiseSection />
        <EnquirySection/>
        <Footer/>
    </main>
  );
}
