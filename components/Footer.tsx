"use client";
import React from "react";

export default function FooterSection() {
  
  const projectLinks = [
    { name: "Overview", href: "#overview" },     
    { name: "Warehouses", href: "/warehouse" }, 
    { name: "Location", href: "#contact" },
    { name: "Amenities", href: "#why-choose" },  
    { name: "Gallery", href: "#design" },
  ];

  const resourceLinks = [
    { name: "Brochure", href: "#download" },     
    { name: "Floor Plans", href: "#warehouses" },
    { name: "Construction", href: "#" },
    { name: "FAQs", href: "#" },                 
    ]
  const companyLinks = [
    { name: "Developer", href: "#" },           
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Disclaimer", href: "#" },           
    { name: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
          
          {/*LEFT*/}
          <div className="lg:w-5/12">
            <h2 className="text-[6rem] md:text-[9rem] leading-[0.8] font-bold text-[#151515] select-none tracking-tighter -ml-2">
              AXIS
            </h2>
            <p className="text-zinc-500 text-lg font-medium tracking-wide mt-2 mb-10 pl-2">
              Elite Storage Solutions
            </p>
            <div className="flex flex-col gap-6 pl-2">
              <div className="space-y-3">
                <a
                  href="mailto:info@creativelivinginnovations.com.au"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c08e6e] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-400 group-hover:text-black"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm group-hover:text-white transition-colors">
                    info@creativelivinginnovations.com.au
                  </span>
                </a>
                <a
                  href="tel:+610414394798"
                  className="flex items-center gap-3 group w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c08e6e] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-zinc-400 group-hover:text-black"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-zinc-400 text-sm group-hover:text-white transition-colors">
                    +61 0414 394 798
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/*RIGHT */}
          <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pt-8">
            
            {/* Project Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">
                Project
              </h4>
              <ul className="space-y-3">
                {projectLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-zinc-500 hover:text-[#c08e6e] text-sm transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">
                Resources
              </h4>
              <ul className="space-y-3">
                {resourceLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-zinc-500 hover:text-[#c08e6e] text-sm transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">
                Company
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-zinc-500 hover:text-[#c08e6e] text-sm transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/*BOTTOM BAR*/}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-12 border-t border-white/5 gap-4">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2025 Axis Elite Storage Solutions · All Rights Reserved
          </p>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest text-center">
            AIMP | Modern. Functional. Refined.
          </p>
        </div>
      </div>
    </footer>
  );
}