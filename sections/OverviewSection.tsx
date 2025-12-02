"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12  border-white/10 pb-6">
        <h2 className="text-3xl text-white font-light">Development Overview</h2>
        <ArrowRight className="text-[#c08e6e] w-8 h-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SITE_CONTENT.overview.map((item, idx) => (
          <div key={idx} className="group">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-6 border border-white/10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <h3 className="text-white text-lg font-medium mb-3 min-h-[56px] flex items-center">
              {item.title}
            </h3>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              {item.desc}
            </p>
            <button className="px-6 py-2 rounded bg-[#1a1a1a] text-[#c08e6e] border border-[#c08e6e]/30 text-xs font-bold uppercase tracking-widest hover:bg-[#c08e6e] hover:text-black transition-all flex items-center gap-2">
              Learn More <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}