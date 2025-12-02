"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WhyChooseSection from "@/sections/WhyChooseSection";
import IntroSection from "@/sections/IntroSection";
import PromisesSection from "@/sections/PromisesSection";
import DesignSection from "@/sections/DesignSection";
import OverviewSection from "@/sections/OverviewSection";
import DownloadSection from "@/sections/DownloadSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import NewsletterSection from "@/sections/NewsletterSection";
import FooterSection from "@/components/Footer";


const page = () => {
 return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#c08e6e] selection:text-white overflow-x-hidden">
      <HeroSection />
      <WhyChooseSection />
      <IntroSection />
      <PromisesSection />
      <DesignSection />
      <OverviewSection />
      <DownloadSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}

export default page
