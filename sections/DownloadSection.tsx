"use client";
import React from "react";
import { Download } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export default function DownloadSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto bg-[#0f0f0f] border border-white/5 rounded-2xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl text-white font-medium mb-6">
            Download Brochure
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Get the full details including floor plans, site specifications, and
            investment potential for AXIS Officer South.
          </p>
            <button className="px-6 py-2 rounded bg-[#1a1a1a] text-[#c08e6e] border border-[#c08e6e]/30 text-xs font-bold uppercase tracking-widest hover:bg-[#c08e6e] hover:text-black transition-all flex items-center gap-2">
            Download PDF <Download className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#c08e6e]/10 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex gap-4 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="w-32 h-40 bg-zinc-800 rounded-lg overflow-hidden transform translate-y-4 border border-white/10">
            <img
              src={SITE_CONTENT.overview[0].image}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-32 h-40 bg-zinc-800 rounded-lg overflow-hidden transform -translate-y-4 border border-white/10">
            <img
              // src={SITE_CONTENT.hero.image}
              src='../img5.jpeg'
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}