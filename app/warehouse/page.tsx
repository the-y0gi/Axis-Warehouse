"use client";
import React, { useState } from "react";
import { ArrowRight, Box, Layers, Check } from "lucide-react";

const WAREHOUSE_DATA = [
  // Corner Unit 1 (Unique Size)
  {
    id: 1,
    type: "Corner Suite",
    total: 306.8,
    warehouse: 232.3,
    office: 74.5,
    status: "Available",
    description:
      "High-exposure corner site featuring dual-street frontage and premium first-floor office.",
  },
  // Standard Units 2-6 (Identical Sizes)
  {
    id: 2,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Sold",
    description:
      "Efficient warehouse layout with modern amenities, perfect for small to medium logistics.",
  },
  {
    id: 3,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Secure industrial unit offering 179m² of high-clearance storage and smart office integration.",
  },
  {
    id: 4,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Versatile workspace designed for functionality with direct driveway access.",
  },
  {
    id: 5,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Reserved",
    description:
      "Ideal entry-level investment unit featuring robust concrete panel construction.",
  },
  {
    id: 6,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Centrally located unit optimizing floor space for maximum operational efficiency.",
  },
  // Premium Large Units 7-8 (Largest in complex)
  {
    id: 7,
    type: "Premium Flagship",
    total: 350.6,
    warehouse: 254.9,
    office: 95.7,
    status: "Available",
    description:
      "Massive flagship suite with expansive 255m² warehousing and deluxe executive office.",
  },
  {
    id: 8,
    type: "Premium Flagship",
    total: 350.6,
    warehouse: 254.9,
    office: 95.7,
    status: "Available",
    description:
      "The crown jewel of the estate, offering superior square footage and commanding presence.",
  },
  // Standard Units 9-13 (Identical Sizes)
  {
    id: 9,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Smart industrial solution with 75m² office space, ideal for growing businesses.",
  },
  {
    id: 10,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "High-quality finishes throughout, combining practical storage with professional office presentation.",
  },
  {
    id: 11,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Reliable and robust unit offering excellent vehicle access and turning circles.",
  },
  {
    id: 12,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Perfectly balanced layout with equal emphasis on storage capacity and staff comfort.",
  },
  {
    id: 13,
    type: "Standard Suite",
    total: 254.8,
    warehouse: 179.0,
    office: 75.8,
    status: "Available",
    description:
      "Final standard unit in the row, offering privacy and streamlined access.",
  },
  // Corner Unit 14 (Unique Size)
  {
    id: 14,
    type: "Corner Suite",
    total: 302.7,
    warehouse: 239.4,
    office: 63.3,
    status: "Available",
    description:
      "Prominent end-of-row position with maximum natural light and 239m² of versatile floor space.",
  },
];

export default function WarehouseListing() {
  const [filter, setFilter] = useState("All");

  const scrollToCollection = () => {
    const section = document.getElementById("collection-grid");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredData = WAREHOUSE_DATA.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Available") return item.status === "Available";
    if (filter === "Premium") return item.total > 300;
    return true;
  });

  return (
    <section className="min-h-screen bg-[#050505] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#c08e6e]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden mb-24 flex flex-col lg:flex-row shadow-2xl relative group">
          {/* Left Content */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#c08e6e] mb-6 leading-tight">
              Where Growth Meets Opportunity
            </h2>
            <h3 className="text-xl md:text-2xl text-white font-light mb-8">
              14 Exclusive Warehouses in Officer South <br />
              <span className="text-zinc-400 text-base mt-2 block">
                No Stamp Duty • Final Stage Pre-Sale
              </span>
            </h3>

            <div className="flex flex-wrap gap-8 mb-8 border-y border-white/10 py-6">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                  Total Sizes
                </p>
                <p className="text-white text-xl font-bold">179m² - 350m²</p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
                  Status
                </p>
                <p className="text-white text-xl font-bold">Now Selling</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#c08e6e]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#c08e6e]" />
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  Only <span className="text-white font-bold">5 units</span>{" "}
                  available to purchase off the plan immediately.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#c08e6e]/20 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#c08e6e]" />
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  First choice of premium spaces with options to customize your
                  unit fit-out.
                </p>
              </div>
            </div>

            {/* SCROLL BUTTON */}
            <button
              onClick={scrollToCollection}
              className="w-fit px-8 py-4 bg-gradient-to-r from-[#d6a485] to-[#8c5e45] text-black font-bold text-sm uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(192,142,110,0.4)] transition-all flex items-center gap-2"
            >
              Find Out More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Axis Building Exterior"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
          </div>
        </div>

        {/*MAIN LISTING HEADER*/}
        <div
          id="collection-grid"
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 pt-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-[#c08e6e]"></div>
              <span className="text-[#c08e6e] text-xs font-bold uppercase tracking-[0.2em]">
                The Collection
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium text-white leading-tight">
              Select Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6a485] to-[#8c5e45]">
                Space of Distinction.
              </span>
            </h1>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 bg-[#0a0a0a] p-1.5 rounded-full border border-white/10">
            {["All", "Available", "Premium"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${
                  filter === tab
                    ? "bg-[#c08e6e] text-black shadow-[0_0_15px_rgba(192,142,110,0.4)]"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* WAREHOUSE GRID*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredData.map((unit) => (
            <div
              key={unit.id}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c08e6e]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Area */}
              <div className="h-48 bg-[#121212] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  alt="Warehouse Interior"
                />

                {/* Unit Number Big */}
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="text-5xl font-bold text-white/10 group-hover:text-white/100 transition-colors duration-500">
                    {unit.id < 10 ? `0${unit.id}` : unit.id}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-white text-lg font-medium">
                      {unit.type}
                    </h3>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                      Total Area
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-white">
                      {unit.total}{" "}
                      <span className="text-sm text-[#c08e6e]">m²</span>
                    </span>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#121212] p-3 rounded-lg border border-white/5 group-hover:border-[#c08e6e]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Box className="w-3 h-3 text-[#c08e6e]" />
                      <span className="text-zinc-500 text-[10px] uppercase">
                        Warehouse
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {unit.warehouse} m²
                    </span>
                  </div>
                  <div className="bg-[#121212] p-3 rounded-lg border border-white/5 group-hover:border-[#c08e6e]/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-3 h-3 text-[#c08e6e]" />
                      <span className="text-zinc-500 text-[10px] uppercase">
                        Office
                      </span>
                    </div>
                    <span className="text-white font-medium">
                      {unit.office} m²
                    </span>
                  </div>
                </div>

                {/* Footer*/}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 w-full">
                    {unit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
