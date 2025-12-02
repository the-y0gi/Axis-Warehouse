"use client";
import React from "react";
import {
  Check,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  LocateIcon,
  LocationEdit,
} from "lucide-react";

export default function ContactCompactComplete() {
  return (
    <section className="relative bg-[#050505] flex items-center justify-center py-12 px-4 md:px-6 overflow-hidden min-h-[105vh]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c08e6e]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c08e6e]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT SIDE*/}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-[#c08e6e]"></div>
              <span className="text-[#c08e6e] text-[10px] font-bold uppercase tracking-[0.2em]">
                Get In Touch
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 leading-tight">
              Let’s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a485] to-[#8c5e45]">
                Something Great.
              </span>
            </h1>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light max-w-sm">
              We are ready to design the perfect solution for your premium
              storage or investment needs.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 gap-3 mb-8 border-l border-white/10 pl-6 relative">
              <div className="absolute left-0 top-0 w-[1px] h-8 bg-[#c08e6e]"></div>
              {[
                "Secure Industrial Zoning",
                "24/7 Smart Access",
                "High-Clearance Warehousing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-1 h-1 rounded-full bg-[#c08e6e] group-hover:shadow-[0_0_6px_#c08e6e] transition-all" />
                  <span className="text-zinc-300 text-xs tracking-wide group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
            <a
              href="tel:+610414394798"
              className="text-zinc-500 hover:text-[#c08e6e] transition-colors flex items-center gap-2 text-xs"
            >
              <Phone className="w-3 h-3" /> +61 0414 394 798
            </a>
            <a
              href="mailto:info@axis.com.au"
              className="text-zinc-500 hover:text-[#c08e6e] transition-colors flex items-center gap-2 text-xs"
            >
              <Mail className="w-3 h-3" /> info@creativelivinginnovations.com.au
            </a>
            <a
              href="mailto:info@axis.com.au"
              className="text-zinc-500 hover:text-[#c08e6e] transition-colors flex items-center gap-2 text-xs"
            >
              <LocationEdit className="w-3 h-3" /> Lot58, Axis Boulevard,
              Officer South, Victoria
            </a>
          </div>
        </div>

        {/*RIGHT SIDE: FORM */}
        <div className="lg:col-span-7 relative">
          <div className="bg-[#0a0a0a]/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 border border-[#c08e6e]/0 group-hover:border-[#c08e6e]/20 rounded-2xl transition-colors duration-700 pointer-events-none"></div>

            <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+61 ..."
                    className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1 relative">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    Timeline
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-zinc-300 appearance-none focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] cursor-pointer">
                      <option>0-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6-12 Months</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
                <div className="space-y-1 relative">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                    Budget
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-zinc-300 appearance-none focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] cursor-pointer">
                      <option>$500k - $600k</option>
                      <option>$600k - $800k</option>
                      <option>$800k+</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                  Finance Secured?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="finance"
                        className="peer appearance-none w-4 h-4 rounded-full border border-zinc-600 checked:border-[#c08e6e] transition-all"
                      />
                      <div className="w-2 h-2 rounded-full bg-[#c08e6e] absolute opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-zinc-400 text-xs group-hover:text-white transition-colors">
                      Yes, secured
                    </span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="finance"
                        className="peer appearance-none w-4 h-4 rounded-full border border-zinc-600 checked:border-[#c08e6e] transition-all"
                        defaultChecked
                      />
                      <div className="w-2 h-2 rounded-full bg-[#c08e6e] absolute opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-zinc-400 text-xs group-hover:text-white transition-colors">
                      No, not yet
                    </span>
                  </label>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-[#121212] border border-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#c08e6e]/40 focus:bg-[#161616] transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button className="w-full py-3.5 bg-gradient-to-r from-[#d6a485] to-[#8c5e45] text-black font-bold uppercase tracking-[0.15em] text-xs rounded-lg hover:shadow-[0_0_20px_rgba(192,142,110,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2">
                Send Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
