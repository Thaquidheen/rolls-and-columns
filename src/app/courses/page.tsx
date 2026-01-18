"use client";

import {
  Navbar,
  CoursesHeroSection,
  CourseGridSection,
  EnquirySection,
  Footer
} from "@/components";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <CoursesHeroSection />
      <CourseGridSection />
      <EnquirySection />
      <Footer />
    </main>
  );
}
