"use client";

import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const FAQs: FAQItem[] = [
  {
    question: "What is The Purple Movement?",
    answer:
      "The Purple Movement is where curious, purpose-driven people come together to explore big ideas, solve real problems, and spark meaningful change. A barrier-free community where your skills actually matter.",
  },
  {
    question: "Who can join?",
    answer:
      "If you’re driven by purpose, you belong here. No limitations. A place to connect and grow alongside others on the same path.",
  },
  {
    question: "What does 'Beyond Syllabus' mean?",
    answer:
      "Beyond Syllabus is where learning stops being rigid. It is about picking up real skills, trying new things, and exploring what actually excites you—not just what is written in textbooks.",
  },
  {
    question: "What does 'Beyond Gatekeepers' mean?",
    answer:
      "Beyond Gatekeepers gives everyone a real chance to grow. By lifting each other up, we create a space where anyone with purpose can connect, contribute, and move forward without limitations.",
  },
  {
    question: "What does 'Beyond Borders' mean?",
    answer:
      "Beyond Borders is all about breaking limits. It helps people connect, share ideas, and access opportunities without being held back by geography, systems, or labels. It’s a space where ambition isn’t boxed in and you can dream big, build big, and grow beyond boundaries.",
  },
  {
    question: "How can I contribute?",
    answer: (
      <>
        Click{" "}
        <Link href="/join" className="text-purple-400 font-semibold hover:text-purple-300 underline underline-offset-4 transition-colors">
          Join Us
        </Link>
        —that&apos;s all it takes to get started.
      </>
    ),
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section aria-labelledby="faq-heading" className="w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24 bg-black flex flex-col justify-center items-center gap-6 sm:gap-10">
      {/* Title */}
      <h2 id="faq-heading" className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat">
        FAQ
      </h2>

      {/* Subtitle */}
      <p className="w-full max-w-2xl text-center text-zinc-300 text-sm sm:text-base md:text-lg font-normal font-poppins px-2 sm:px-0">
        Got questions? We&apos;ve got answers. Here are some of the most common things people ask 
        about the Purple Movement.
      </p>

      {/* FAQ List */}
      <div className="w-full max-w-3xl flex flex-col gap-3 sm:gap-4">
        {FAQs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full rounded-2xl overflow-hidden border transition-colors duration-300 ${
                isOpen 
                  ? "bg-zinc-900/80 border-purple-500/40 shadow-lg shadow-purple-950/20" 
                  : "bg-zinc-900/40 hover:bg-zinc-900/60 border-white/10 hover:border-purple-500/20"
              }`}
            >
              {/* Question button */}
              <button
                type="button"
                id={`faq-question-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-2xl"
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold font-montserrat pr-4">
                  {faq.question}
                </span>
                <span className="shrink-0 p-1.5 rounded-full bg-white/5 border border-white/10 text-purple-300">
                  {isOpen ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </span>
              </button>

              {/* Answer block with smooth natural height transition */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 mx-5 sm:mx-7" />
                    <div className="px-5 sm:px-7 pb-5 pt-4 text-zinc-300 text-sm sm:text-base font-poppins leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};