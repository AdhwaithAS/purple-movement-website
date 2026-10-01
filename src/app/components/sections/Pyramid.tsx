"use client";

import React, { useState } from "react";
import { Globe, Users, BookOpen } from "lucide-react";
import PyramidChart, { LevelData } from "./PyramidChart";

export interface PillarItem extends LevelData {
  iconType: "globe" | "users" | "book";
}

const PILLARS: PillarItem[] = [
  {
    id: 1,
    title: "Beyond Borders",
    description:
      "We can't push people apart with boundaries. Beyond Borders means enabling global access to the best talent, markets, and opportunities for everyone.",
    iconType: "globe",
  },
  {
    id: 2,
    title: "Beyond Gatekeepers",
    description:
      "We don't hold opportunities for ourselves, we share them. Beyond Gatekeepers is about lifting others up, showcasing their skills, and creating a community where growth is open, fair, and accessible.",
    iconType: "users",
  },
  {
    id: 3,
    title: "Beyond Syllabus",
    description:
      "Learning shouldn't stop at a textbook. Beyond Syllabus is about exploring, experimenting, and discovering what truly inspires — so curious minds can grow, create, and lead their own way.",
    iconType: "book",
  },
];

const ICON_MAP = {
  globe: Globe,
  users: Users,
  book: BookOpen,
};

const Pyramid: React.FC = () => {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  return (
    <section
      id="belief"
      aria-label="Purple Movement Pillars"
      className="relative w-full bg-pm-bg text-pm-text-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Ambient Background Spotlights */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] pointer-events-none rounded-full filter blur-[130px] opacity-20"
        style={{
          background: "radial-gradient(circle, var(--pm-primary) 0%, var(--pm-deep) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1440px] xl:max-w-[1500px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Belief Headline & Narrative Copy           */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center lg:pr-2">
            {/* Tagline Badge */}
            <div className="flex items-center gap-3.5 mb-6">
              <span className="text-xs font-semibold tracking-[0.25em] text-pm-text-muted uppercase font-mono">
                OUR BELIEF
              </span>
              <div
                className="h-[2px] w-14 rounded-full"
                style={{
                  background: "linear-gradient(90deg, var(--pm-primary) 0%, transparent 100%)",
                  boxShadow: "0 0 8px var(--pm-glow)",
                }}
              />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold tracking-tight text-pm-text-primary leading-[1.08] mb-6 font-montserrat">
              Growth<br />
              has no<br />
              <span
                className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 20px var(--pm-glow))",
                }}
              >
                boundaries.
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-sm sm:text-base text-pm-text-secondary font-poppins leading-relaxed max-w-md">
              Purple is a community where learning, opportunities, and people come together to create real impact.
              We believe in an open, inclusive world where everyone can explore, connect, and grow — beyond
              syllabus, beyond borders, and beyond gatekeepers.
            </p>
          </div>

          {/* ======================================================== */}
          {/* CENTER COLUMN: Interactive Glowing 3D Glass Pyramid     */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex items-center justify-center py-2 lg:py-0">
            <PyramidChart
              data={PILLARS}
              hoveredLevel={hoveredLevel}
              onHover={setHoveredLevel}
              onSelect={setHoveredLevel}
            />
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Vertical Timeline & Connected Pillar Cards */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 relative flex flex-col justify-between lg:h-[450px] py-1 space-y-8 lg:space-y-0 lg:pl-2">
            {/* Continuous Vertical Timeline Track between Node 1 and Node 3 */}
            <div
              className="absolute left-[13px] top-[22px] bottom-[48px] w-[1.5px]"
              style={{
                background: "linear-gradient(180deg, var(--pm-timeline-track) 0%, var(--pm-border-hover) 50%, var(--pm-timeline-track) 100%)",
              }}
              aria-hidden="true"
            />

            {PILLARS.map((pillar) => {
              const Icon = ICON_MAP[pillar.iconType];
              const isHovered = hoveredLevel === pillar.id;

              return (
                <div
                  key={pillar.id}
                  className="relative flex items-start gap-4 sm:gap-5 group cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredLevel(pillar.id)}
                  onMouseLeave={() => setHoveredLevel(null)}
                  onClick={() => setHoveredLevel(pillar.id)}
                >
                  {/* Glowing Node on Timeline */}
                  <div className="relative z-10 mt-3.5 w-[26px] flex items-center justify-center shrink-0">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ring-4 ring-black ${
                        isHovered
                          ? "bg-pm-light scale-125 shadow-[0_0_14px_var(--pm-accent)]"
                          : "bg-pm-timeline-node shadow-[0_0_8px_var(--pm-glow)]"
                      }`}
                    />
                  </div>

                  {/* Glassmorphic Icon Box */}
                  <div
                    className={`w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 backdrop-blur-md ${
                      isHovered
                        ? "bg-pm-primary/20 border-pm-accent shadow-[0_0_20px_var(--pm-glow)] scale-105"
                        : "bg-pm-icon-box-bg border border-pm-icon-box-border shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 stroke-[1.8] transition-all duration-300 ${
                        isHovered ? "text-pm-light scale-110 drop-shadow-[0_0_8px_var(--pm-accent)]" : "text-pm-accent"
                      }`}
                    />
                  </div>

                  {/* Title & Copy */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3
                      className={`text-lg sm:text-xl font-bold font-montserrat tracking-tight mb-1 transition-colors duration-200 ${
                        isHovered ? "text-pm-text-primary" : "text-pm-text-primary/90"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-pm-text-secondary font-poppins leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pyramid;
