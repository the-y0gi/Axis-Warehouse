"use client";
import React from "react";
import { Check } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export default function PromisesSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 border border-white/10 relative group">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Architectural Detail"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-white">
          What We Promise to Deliver
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SITE_CONTENT.promises.map((promise, idx) => (
          <div
            key={idx}
            className="bg-[#0f0f0f] p-8 rounded-xl border border-white/5 hover:border-[#c08e6e]/50 hover:bg-[#151515] transition-all duration-300 group flex items-start gap-4"
          >
            <div className="mt-1 shrink-0 p-2 rounded-full bg-white/5 group-hover:bg-[#c08e6e]/20">
              <Check className="w-4 h-4 text-zinc-400 group-hover:text-[#c08e6e] transition-colors" />
            </div>
            <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
              {promise}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}