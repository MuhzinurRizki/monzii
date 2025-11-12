import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeaturesSection";
import HighlightSection from "@/components/sections/HighlightSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import FeaturesSection from "@/components/sections/FeaturesSection";

export const metadata: Metadata = {
  title: "MonZii — Smart Money Tracker untuk Hidup Lebih Terkontrol",
  description:
    "MonZii membantu kamu melacak pengeluaran, membuat anggaran, dan mencapai tujuan finansial dengan mudah. Didesain modern, aman, dan intuitif.",
  icons: {
    icon: "/piggy-bank.svg", // akan kita buat di langkah berikutnya
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section id="home">
          <HeroSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="highlight">
          <HighlightSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="newsletter">
          <NewsletterSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
