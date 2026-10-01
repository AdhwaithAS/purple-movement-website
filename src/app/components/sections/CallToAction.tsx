'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section aria-labelledby="cta-heading" className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-14 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 bg-black mt-8 sm:mt-16 border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Text Section */}
      <div className="max-w-full md:max-w-[650px] text-center md:text-left flex flex-col justify-start items-center md:items-start gap-4 z-10">
        <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-montserrat text-white tracking-tight">
          Your Journey <span className="text-purple-400">Begins</span>
        </h2>

        <p className="w-full text-zinc-300 text-base sm:text-lg font-poppins font-normal leading-relaxed">
          You’ve sparked the start of a borderless, collaborative journey. Ideas will grow, 
          connections will flourish, and together, we’ll turn ambition into real impact. 
          Get ready—the movement ignites with you.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl font-bold font-montserrat text-purple-300">
          Together, we are the Purple Movement.
        </p>

        {/* Action Button */}
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/join"
            className="mt-3 inline-flex items-center gap-2.5 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-base sm:text-lg font-semibold font-montserrat uppercase tracking-wider rounded-xl shadow-lg shadow-purple-600/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <span>Join the Movement</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Image Section with smooth continuous rotation */}
      <div className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 relative shrink-0 z-10 flex items-center justify-center">
          <Image 
            fill
            src="/images/spiral.png"
            alt="Purple Movement spiral illustration"
            className="object-contain"
            sizes="(max-width: 640px) 176px, (max-width: 768px) 240px, 320px"
          />
      </div>
    </section>
  );
};