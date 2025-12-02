"use client";
import React from "react";
import { SITE_CONTENT } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative pt-24 px-4 md:px-6 pb-12 max-w-[1400px] mx-auto">
      <div className="relative w-full h-[75vh] md:h-[85vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
        <img
          // src={SITE_CONTENT.hero.image}
          src='../img9.jpeg'
          alt="Axis Warehouse Hero"
          className="w-full h-full object-cover transform scale-105 hover:scale-100 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">
          <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-2 drop-shadow-md">
            {SITE_CONTENT.hero.subtitle}
          </p>
          <h1
            className="text-[6rem] md:text-[12rem] font-bold leading-none tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #c08e6e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {SITE_CONTENT.hero.title}
          </h1>
          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-[#d6a485] to-[#8c5e45] text-black font-bold text-sm uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(192,142,110,0.4)] hover:shadow-[0_0_30px_rgba(192,142,110,0.6)] hover:scale-105 transition-all">
            Explore Now
          </button>
        </div>
      </div>
      <div className="mt-12 text-center max-w-4xl mx-auto px-4">
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
          {SITE_CONTENT.hero.bottomDesc}
        </p>
      </div>
    </section>
  );
}
