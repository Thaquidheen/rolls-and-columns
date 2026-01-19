import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CaseStudyHeroSection } from "@/components/case-study-hero-section";
import { CaseStudyContentSection } from "@/components/case-study-content-section";
import { CaseStudyFeaturesCard } from "@/components/case-study-features-card";

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <CaseStudyHeroSection />

      {/* Business Objective */}
      <CaseStudyContentSection
        title="Business Objective"
        description="To replace Excel driven operations with an automated analytics platform that improves reporting speed, data accuracy, and real-time operational visibility across departments."
      />

      {/* About the Organisation */}
      <CaseStudyContentSection
        title="About the Organisation"
        description="A leading plywood manufacturing company managing finance, inventory, HR, supply chain, logistics, and production using spreadsheet based processes."
        list={{
          header: "Focus Areas",
          items: [
            "Financial reporting and forecasting",
            "Inventory control and stock optimisation",
            "Workforce productivity and attendance tracking",
            "Supply chain and logistics efficiency",
            "Production and sales performance monitoring",
          ],
        }}
      />

      {/* Challenges */}
      <CaseStudyContentSection
        title="Challenges"
        description="The organisation relied heavily on Excel to manage all core business functions, leading to slow reporting cycles, inconsistent data, and limited visibility into operational performance."
        list={{
          header: "Key Challenges",
          items: [
            "Multiple Excel files with inconsistent formats",
            "Manual calculations and reconciliation errors",
            "Time-consuming daily, weekly, and monthly reporting",
            "No centralised view of business performance",
            "Delayed and assumption based decision making",
          ],
        }}
      />

      {/* The Need */}
      <CaseStudyContentSection
        title="The Need"
        description="A centralised, automated, and analytics-driven system to unify data, eliminate manual effort, and enable real time, data backed decision making."
        list={{
          header: "Process Mapping",
          items: [
            "Multiple Excel files with inconsistent formats",
            "Manual calculations and reconciliation errors",
            "Time-consuming daily, weekly, and monthly reporting",
            "No centralised view of business performance",
            "Delayed and assumption based decision making",
          ],
        }}
      />

      {/* Technology Solution */}
      <CaseStudyContentSection
        title="Technology Solution"
        description="A Power Platform based analytics and automation ecosystem integrating data, workflows, and insights into a single unified system."
      />

      {/* Our Approach */}
      <CaseStudyContentSection
        title="Our Approach"
        description="The solution focused on streamlining operations, centralising data, automating reporting, and enabling user adoption across departments. By transforming manual spreadsheet processes into a Power Platform driven analytics ecosystem, the organisation gained real time visibility into finance, inventory, HR, supply chain, and production, allowing faster and smarter business decisions."
      />

      {/* Features Card */}
      <CaseStudyFeaturesCard
        topLeft={{
          title: "Core Features",
          items: [
            "Department wise real time Power BI dashboards",
            "Automated data refresh and reporting",
            "KPI and performance tracking",
            "Power Apps based structured data entry",
            "Mobile access for leadership",
          ],
        }}
        topRight={{
          title: "Advanced Analytics Layers",
          items: [
            "Descriptive: Real time operational KPIs",
            "Diagnostic: Identification of inefficiencies and variances",
            "Predictive: Forecasting inventory demand and costs",
            "Prescriptive: Optimisation insights for planning and control",
          ],
        }}
        bottomLeft={{
          title: "User Adoption",
          items: [
            "Department level onboarding",
            "Training and enablement session",
            "Change management support",
            "Continuous monitoring and improvement",
          ],
        }}
        bottomRight={{
          title: "Results & Impacts",
          items: [
            "90% reduction in reporting time",
            "Significant reduction in manual errors",
            "Real time visibility across departments",
            "Faster and more accurate decision making",
          ],
        }}
      />

      {/* Summary */}
      <CaseStudyContentSection
        title="Summary"
        description="The solution transformed fragmented, manual operations into a unified, automated, and insight driven system. It improved governance, operational efficiency, and scalability, enabling the organisation to make faster decisions and support long term growth."
      />

      <Footer />
    </main>
  );
}
