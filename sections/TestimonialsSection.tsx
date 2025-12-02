"use client";
import React from "react";
import { SITE_CONTENT } from "@/data/content";

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-zinc-400 text-sm uppercase tracking-widest mb-12">
          Perspectives from clients who value distinction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SITE_CONTENT.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-white/5 hover:border-[#c08e6e]/40 transition-all duration-300 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#c08e6e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                      {item.name}
                    </h4>
                    <p className="text-zinc-500 text-xs">{item.role}</p>
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}