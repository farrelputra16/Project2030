import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-oled py-32 overflow-hidden">
      <div className="mesh-glow-2 absolute inset-0 pointer-events-none" />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="double-bezel inline-flex mb-6 mx-auto" style={{ display: 'table' }}>
            <div className="double-bezel-inner px-3 py-1">
              <span className="text-[10px] font-body font-medium text-brand-green tracking-wide uppercase">// FAQ</span>
            </div>
          </div>
        </ScrollReveal>

        <BlurText
          text="Frequently Asked"
          as="h2"
          className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-center"
          style={{ color: '#ffffff' }}
          stagger={0.06}
        />

        <div className="mt-14 space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={0.08 * i} y={32}>
              <div className="double-bezel">
                <div className="double-bezel-inner">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-sm md:text-base text-white/70 font-body font-medium pr-4 tracking-tight">{faq.q}</span>
                    <motion.svg
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="w-4 h-4 shrink-0"
                      style={{ color: '#00ff88' }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm text-white/40 font-body font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
