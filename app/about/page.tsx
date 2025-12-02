import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-zinc-900 mb-6">About AXIS</h1>
        <p className="text-xl text-zinc-600 max-w-3xl">
          Since 2010, AXIS has been defining the standard for industrial warehousing. 
          We provide state-of-the-art facilities designed for the modern supply chain.
        </p>
      </div>
      <Footer />
    </main>
  );
}