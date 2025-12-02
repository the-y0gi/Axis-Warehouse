"use client";
import React from "react";
import { SITE_CONTENT } from "@/data/content";

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden border border-white/10 group">
          <img
            // src={SITE_CONTENT.whyChoose.image}
                        src='../img10.jpeg'

            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            alt="Why Choose Axis"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
            Why Choose <span className="text-[#c08e6e]">AXIS?</span>
          </h2>
          <p className="text-zinc-500 mb-12">
            {SITE_CONTENT.whyChoose.subheading}
          </p>
          <div className="space-y-10 border-l border-[#c08e6e]/30 ml-3 pl-10 relative">
            <div className="absolute -left-[8px] top-0 w-4 h-2 bg-[#050505]"></div>
            {SITE_CONTENT.whyChoose.points.map((point, idx) => {
              const isLast = idx === SITE_CONTENT.whyChoose.points.length - 1;
              return (
                <div key={idx} className="relative group">
                  {isLast && (
                    <div className="absolute -left-[50px] top-[20px] w-6 h-full bg-[#050505]"></div>
                  )}
                  <div className="absolute -left-[46px] top-2 w-3 h-3 rounded-full bg-[#050505] border-2 border-[#c08e6e] group-hover:bg-[#c08e6e] transition-colors shadow-[0_0_10px_rgba(192,142,110,0.5)] z-10"></div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c08e6e] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-zinc-500 mt-2 text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}