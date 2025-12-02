"use client";
import React from "react";
import { SITE_CONTENT } from "@/data/content";

export default function IntroSection() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
            {SITE_CONTENT.intro.heading}
          </h2>
          <div className="h-1 w-20 bg-[#c08e6e] mb-10"></div>
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light mb-6">
            This exclusive collection of{" "}
            <span className="text-[#c08e6e] font-semibold">
              {SITE_CONTENT.intro.highlight}
            </span>{" "}
            sets a new benchmark for modern warehousing.
          </p>
          <p className="text-zinc-500 leading-relaxed text-base md:text-lg">
            Offering seamless transport connectivity, strong commercial demand,
            and a tightly held supply of premium facilities, it represents a
            rare opportunity to{" "}
            secure a long-term foothold {"  "}
            in a high-performance industrial precinct.
          </p>
        </div>
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 group">
          <img
            // src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            src='../img2.jpeg'
            alt="Axis Building Detail"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}