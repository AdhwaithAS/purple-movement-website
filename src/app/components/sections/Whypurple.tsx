"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RedOrb: React.FC = () => (
  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
    <svg
      viewBox="0 0 60 60"
      className="w-full h-full overflow-visible"
      style={{ filter: "drop-shadow(0 0 16px var(--pm-orb-red-glow))" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="red-sphere-grad" cx="40%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="14%" stopColor="var(--pm-orb-red-highlight)" />
          <stop offset="42%" stopColor="var(--pm-orb-red-base)" />
          <stop offset="78%" stopColor="var(--pm-orb-red-dark)" />
          <stop offset="100%" stopColor="#1f000b" />
        </radialGradient>
      </defs>
      {/* 3D Sphere Body */}
      <circle cx="30" cy="30" r="21" fill="url(#red-sphere-grad)" />
      {/* Primary Specular Glint */}
      <circle cx="25" cy="23" r="3.2" fill="#ffffff" opacity="0.92" />
      <circle cx="24.5" cy="22.5" r="1.3" fill="#ffffff" opacity="1" />
    </svg>
  </div>
);

const BlueOrb: React.FC = () => (
  <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center">
    <svg
      viewBox="0 0 60 60"
      className="w-full h-full overflow-visible"
      style={{ filter: "drop-shadow(0 0 16px var(--pm-orb-blue-glow))" }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="blue-sphere-grad" cx="40%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="14%" stopColor="var(--pm-orb-blue-highlight)" />
          <stop offset="42%" stopColor="var(--pm-orb-blue-base)" />
          <stop offset="78%" stopColor="var(--pm-orb-blue-dark)" />
          <stop offset="100%" stopColor="#0c0724" />
        </radialGradient>
      </defs>
      {/* 3D Sphere Body */}
      <circle cx="30" cy="30" r="21" fill="url(#blue-sphere-grad)" />
      {/* Primary Specular Glint */}
      <circle cx="25" cy="23" r="3.2" fill="#ffffff" opacity="0.92" />
      <circle cx="24.5" cy="22.5" r="1.3" fill="#ffffff" opacity="1" />
    </svg>
  </div>
);

export const Whypurple = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="story"
      aria-label="Why Purple Story Section"
      className="relative w-full bg-pm-bg text-pm-text-primary py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Radial Spotlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full filter blur-[130px] opacity-15"
        style={{
          background: "radial-gradient(circle, var(--pm-primary) 0%, var(--pm-deep) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl mx-auto z-10">
        
        {/* ======================================================== */}
        {/* HEADER: OUR STORY & WHY PURPLE?                          */}
        {/* ======================================================== */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Display Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-pm-text-primary font-montserrat mb-4">
            Why{" "}
            <span
              className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent"
              style={{ filter: "drop-shadow(0 0 24px var(--pm-glow-strong))" }}
            >
              Purple?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-pm-text-secondary font-poppins max-w-2xl mx-auto">
            Purple isn&apos;t just a colour for us — it represents what happens when two worlds meet.
          </p>
        </div>

        {/* ======================================================== */}
        {/* RED & BLUE 3D ORB CARDS                                  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Red Card */}
          <div className="flex items-center gap-5 sm:gap-6 p-6 sm:p-7 rounded-3xl bg-pm-story-card-bg border border-pm-story-card-border hover:border-pm-story-card-hover backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] group">
            <RedOrb />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-pm-text-primary mb-1 tracking-tight">
                Red
              </h3>
              <p className="text-xs sm:text-sm text-pm-text-secondary font-poppins leading-relaxed">
                The youth: energetic, passionate, curious, and ready to create change.
              </p>
            </div>
          </div>

          {/* Blue Card */}
          <div className="flex items-center gap-5 sm:gap-6 p-6 sm:p-7 rounded-3xl bg-pm-story-card-bg border border-pm-story-card-border hover:border-pm-story-card-hover backdrop-blur-md transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] group">
            <BlueOrb />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-montserrat text-pm-text-primary mb-1 tracking-tight">
                Blue
              </h3>
              <p className="text-xs sm:text-sm text-pm-text-secondary font-poppins leading-relaxed">
                Experienced professionals: steady, knowledgeable, and capable of unlocking new possibilities.
              </p>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* EXPANDABLE NARRATIVE DETAILS                             */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="why-purple-more"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden max-w-3xl mx-auto"
            >
              <div className="space-y-6 pt-10 font-poppins text-pm-text-secondary text-sm sm:text-base leading-relaxed text-left border-t border-pm-border mt-10">
                <p>
                  Today, a gap exists between these two groups. There&apos;s no bridge, no shared space where they can learn from each other.
                </p>

                <p className="font-semibold text-pm-accent">
                  We aim to bridge that gap.
                </p>

                <ul className="space-y-2.5 pl-4 sm:pl-6 list-disc marker:text-pm-primary">
                  <li>
                    A place where young minds can prove that change is possible and necessary.
                  </li>
                  <li>
                    A place where experts can guide, inspire, and open doors to new opportunities.
                  </li>
                  <li>
                    A place where everyone can be themselves, grow together, and lift each other up.
                  </li>
                </ul>

                <p>
                  When red and blue come together, they create purple — a symbol of collaboration, balance, and the future we want to build.
                </p>

                <p>
                  And that thought every person has felt at least once:{" "}
                  <span className="italic text-pm-text-primary">
                    &quot;If only there was a place where I could learn, connect, and be understood&quot;
                  </span>
                </p>

                <p className="pt-2 font-medium text-pm-text-primary">
                  We&apos;re here to make that place real.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* READ MORE / READ LESS PILL BUTTON                        */}
        {/* ======================================================== */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="why-purple-more"
            className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-pm-primary/40 bg-pm-card hover:bg-pm-card-hover hover:border-pm-accent text-xs font-semibold tracking-wider text-pm-text-primary uppercase transition-all duration-300 shadow-[0_0_14px_rgba(168,85,247,0.15)] hover:shadow-[0_0_22px_var(--pm-glow)] cursor-pointer backdrop-blur-md"
          >
            <span>{isExpanded ? "READ LESS" : "READ MORE"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-pm-accent group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 text-pm-accent group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Whypurple;