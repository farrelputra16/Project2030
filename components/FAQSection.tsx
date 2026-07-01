import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-black py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,255,136,0.02) 0%, transparent 60%)',
        }}
      />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-sm font-body text-brand-green mb-4 tracking-[0.15em] uppercase text-center">// FAQ</div>
        </ScrollReveal>
        <BlurText
          text="Frequently Asked"
          as="h2"
          className="font-heading italic text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] text-center"
          style={{ color: '#ffffff' }}
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div className="liquid-glass rounded-[1.25rem] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm md:text-base text-white font-body font-medium pr-4">{faq.q}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4 shrink-0"
                    style={{ color: '#00ff88' }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-white/60 font-body font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
