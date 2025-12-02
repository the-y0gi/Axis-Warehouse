"use client";
import React from "react";
import { ArrowRight, Mail, User } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c08e6e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-[#c08e6e]"></div>
            <span className="text-[#c08e6e] text-xs font-bold uppercase tracking-[0.2em]">
              Join The Circle
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl text-white font-medium mb-6 leading-tight">
            Be Part of Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a485] to-[#8c5e45]">
              Insider Community
            </span>
          </h2>

          <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-md">
            Gain priority access to new releases, off-market opportunities, and
            refined industry intelligence before anyone else.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#c08e6e]/0 via-[#c08e6e]/40 to-[#c08e6e]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

          <div className="relative bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <form className="space-y-5">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#151515] border border-white/5 text-white pl-12 pr-6 py-4 rounded-xl focus:outline-none focus:border-[#c08e6e]/50 focus:bg-[#1a1a1a] transition-all placeholder:text-zinc-600 text-sm"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#151515] border border-white/5 text-white pl-12 pr-6 py-4 rounded-xl focus:outline-none focus:border-[#c08e6e]/50 focus:bg-[#1a1a1a] transition-all placeholder:text-zinc-600 text-sm"
                />
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#d6a485] to-[#8c5e45] text-black font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(192,142,110,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group/btn">
                Subscribe Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-zinc-600 text-[10px] uppercase tracking-wider">
                No spam. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
