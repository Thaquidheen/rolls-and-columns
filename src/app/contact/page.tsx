"use client";

import {
  Navbar,
  ContactHeroSection,
  ContactInfoSection,
  ContactFormSection,
  FAQSection,
  Footer
} from "@/components";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
