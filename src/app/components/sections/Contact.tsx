'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Contact = () => {
  const [question, setQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Auto-clear status messages after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit question');
      }

      setSubmitStatus('success');
      setQuestion('');
    } catch (error) {
      console.error('Error submitting question:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section aria-labelledby="contact-heading" className="w-[95%] sm:w-[90%] lg:w-[1070px] mx-auto mt-12 sm:mt-16 md:mt-24 px-6 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-14 bg-gradient-to-b from-zinc-900/90 via-slate-950/95 to-zinc-950 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 backdrop-blur-sm">
      
      {/* Image Section */}
      <div className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 flex-shrink-0 hidden sm:block">
        <Image 
          src="/images/qtnmark.png" 
          alt="Question Mark"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 224px"
        />
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col items-start text-left gap-3 sm:gap-4">
        {/* Heading */}
        <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-white leading-tight">
          Any <span className="text-purple-400">Questions?</span>
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium font-poppins max-w-xl leading-relaxed">
          We&apos;re here to help, reach out anytime!
        </p>

        {/* Input and Submit Section */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <label htmlFor="contact-question-input" className="sr-only">Type your question</label>
            <input 
              id="contact-question-input"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 w-full sm:max-w-md h-14 bg-zinc-950/60 border border-zinc-700/80 text-white text-base px-4 py-3 rounded-xl font-poppins placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:border-transparent transition"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={!question.trim() || isSubmitting}
              className={`w-full sm:w-auto h-14 px-8 rounded-xl font-poppins text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                question.trim() && !isSubmitting
                  ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/20 active:scale-95'
                  : 'bg-zinc-800/80 text-zinc-500 border border-white/5 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="text-emerald-400 text-sm font-poppins flex items-center gap-1.5">
              <span>✓</span> Question submitted successfully! We&apos;ll get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-sm font-poppins flex items-center gap-1.5">
              <span>✗</span> Failed to submit question. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};