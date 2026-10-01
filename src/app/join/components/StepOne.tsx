"use client";

import Image from "next/image";

interface StepOneProps {
  selectedOption: string | null;
  onCardClick: (optionId: string) => void;
}

export default function StepOne({ selectedOption, onCardClick }: StepOneProps) {
  const options = [
    {
      id: "individual",
      label: "Individual",
      text: "Students, creators, and entrepreneurs collaborating, contributing, and networking to drive meaningful impact together.",
      svgPath: "/svgs/ind.svg",
    },
    {
      id: "organization",
      label: "Organization",
      text: "Nonprofit organizations, startups, universities, and research labs enabling learning, fostering innovation, and creating scalable solutions.",
      svgPath: "/svgs/org.svg",
    },
    {
      id: "government",
      label: "Government",
      text: "Government departments, policymakers, and public institutions shaping programs, fostering the ecosystem, and enabling impactful collaboration.",
      svgPath: "/svgs/gov.svg",
    },
  ];

  return (
    <div className="space-y-8 sm:space-y-12 w-full">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
          What Defines You?
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal font-poppins text-zinc-300">
          Select the category that best represents your role in the movement.
        </p>
      </div>

      {/* Selection Cards */}
      <div className="w-full flex flex-wrap items-stretch justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onCardClick(option.id)}
            className={`w-full sm:w-72 p-6 sm:p-8 rounded-2xl border text-left flex flex-col justify-between gap-5 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 group ${
              selectedOption === option.id
                ? "border-purple-500 bg-purple-950/40 shadow-xl shadow-purple-900/30 scale-[1.02]"
                : "border-white/10 bg-slate-900/80 hover:border-purple-500/50 hover:bg-slate-900 hover:-translate-y-1 shadow-lg"
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                <Image
                  src={option.svgPath}
                  alt=""
                  width={26}
                  height={26}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className={`text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full ${
                selectedOption === option.id ? "bg-purple-600 text-white" : "bg-white/5 text-purple-200/70"
              }`}>
                {option.id}
              </span>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-montserrat text-white mb-2 group-hover:text-purple-300 transition-colors">
                {option.label}
              </h2>
              <p className="text-zinc-300 text-sm font-normal font-poppins leading-relaxed">
                {option.text}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
