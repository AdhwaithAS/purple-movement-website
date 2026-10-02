'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* <Image src={"/image.webp"}         className="absolute inset-0 w-full h-full object-cover" */}
{/* width={100} sizes='fill' height={100} alt='img'/> */}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Ambient background aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px] pointer-events-none z-[2]"
      />

      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:-mt-32 -mt-6">
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col justify-start items-center gap-5">
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-purple-300/90 text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase font-montserrat"
            >
              We Are the
            </motion.span>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase font-montserrat tracking-tight"
            >
              Purple <span className="text-purple-400">Movement</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal font-poppins leading-relaxed max-w-2xl px-2"
            >
              Where purposeful people gather to explore, tackle issues, and create 
              meaningful change. A community without barriers, where your skills matter 
              and open new possibilities. Sounds like you?
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/join"
                className="mt-4 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 border border-purple-500/40 
                rounded-lg flex justify-center items-center shadow-lg shadow-purple-600/25
                transition-colors duration-200 text-white text-base sm:text-lg font-semibold uppercase tracking-wider
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Join Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}