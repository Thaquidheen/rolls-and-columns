"use client";

import {
  Navbar,
  HeroSection,
  ScrollHighlightSection,
  LogoMarquee,
  MentorSection,
  DiscoverCoursesSection,
  FeaturedSection,
  WhyBusinessLoveSection,
  ArticlesSection,
  EnquirySection,
  Footer
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <ScrollHighlightSection />
      <LogoMarquee />
      <MentorSection />
      <DiscoverCoursesSection />
      <FeaturedSection />
      <WhyBusinessLoveSection />
      <ArticlesSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
