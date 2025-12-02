"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href:string):boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-white/10 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          
          {/* axis LOGO */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tighter text-white cursor-pointer hover:opacity-80 transition-opacity"
          >
            AXIS <span className="text-[#c08e6e]">.</span>
          </Link>

          {/*DESKTOP LINKS*/}
          <div className="hidden md:flex items-center gap-10">
            {SITE_CONTENT.nav.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={`relative group text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(link.href) 
                    ? "text-[#c08e6e]" 
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#c08e6e] transition-all duration-300 ${
                    isActive(link.href) 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Enquire Button */}
            <Link 
              href="/contact" 
              className={`hidden md:flex group relative px-6 py-2.5 border rounded-full overflow-hidden transition-all ${
                isActive("/contact")
                  ? "border-[#c08e6e] bg-[#c08e6e]"
                  : "border-white/20 hover:border-[#c08e6e]"
              }`}
            >
              <div className={`absolute inset-0 bg-[#c08e6e] transition-transform duration-300 ease-out ${
                isActive("/contact") ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
              }`}></div>
              <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
                Enquire
                <ArrowUpRight className={`w-3 h-3 transition-transform ${
                  isActive("/contact") ? "" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                }`} />
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY*/}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center gap-8 md:hidden">
          {SITE_CONTENT.nav.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-2xl font-light transition-colors ${
                isActive(link.href)
                  ? "text-[#c08e6e]"
                  : "text-white hover:text-[#c08e6e]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-4 px-8 py-3 font-bold uppercase tracking-widest rounded-full transition-all ${
              isActive("/contact")
                ? "bg-[#c08e6e] text-black"
                : "bg-[#c08e6e] text-black hover:bg-[#d6a485]"
            }`}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </>
  );
}