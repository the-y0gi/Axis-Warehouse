"use client";
import React from "react";
import { SITE_CONTENT } from "@/data/content";

export default function DesignSection() {
  return (
    <section id="design" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">
            Where Proven Capability meets
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d6a485] to-[#8c5e45] uppercase">
            Exceptional Industrial Design
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[900px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group">
            <img
              // src={SITE_CONTENT.bento.images.largeRight}
              src='../img10.jpeg'
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute bottom-6 left-6 text-xl font-bold text-white z-10 uppercase tracking-widest">
              Quality
              <br />
              Workmanship
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-1 bg-[#121212] p-8 flex flex-col justify-center border border-white/5 rounded-xl">
            <h3 className="text-[#c08e6e] text-xs font-bold uppercase tracking-widest mb-4">
              Experience
            </h3>
            <p className="text-white text-2xl font-light">
              20+ Years of creating landmark industrial projects across
              Australia.
            </p>
          </div>
          <div className="md:col-span-1 md:row-span-1 relative rounded-xl overflow-hidden">
            <img
              // src={SITE_CONTENT.bento.images.tallLeft}
              src='../img7.jpeg'
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-1 md:row-span-1 bg-[#151515] rounded-xl flex items-center justify-center border border-white/5">
            <img
              // src={SITE_CONTENT.bento.images.bottomWide}
                            src='../img8.jpeg'
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}