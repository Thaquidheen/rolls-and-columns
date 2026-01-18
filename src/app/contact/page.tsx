"use client";

import {
  Navbar,
  ContactHeroSection,
  ContactInfoSection,
  Footer
} from "@/components";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <Footer />
    </main>
  );
}
