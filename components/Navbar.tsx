import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, TOKEN_SYMBOL } from '@/lib/constants';

const staggerItem = (i: number) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 + i * 0.08 },
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-6 px-4">
        <div className="double-bezel">
          <div className="double-bezel-inner px-5 py-3 flex items-center gap-6">
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
                <span className="font-heading italic text-brand-green text-sm">P</span>
              </div>
              <span className="hidden sm:block font-heading italic text-white text-sm tracking-tight">2030</span>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] font-medium text-white/50 hover:text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] font-body tracking-tight"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#how-to-buy"
                className="double-bezel-strong group"
              >
                <div className="double-bezel-strong-inner px-4 py-2 flex items-center gap-2 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]">
                  <span>Buy {TOKEN_SYMBOL}</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative"
                aria-label="Menu"
              >
                <div className="w-4 h-3 relative">
                  <span
                    className={`absolute left-0 right-0 top-0 h-[1.5px] bg-white/70 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`}
                  />
                  <span
                    className={`absolute left-0 right-0 top-1/2 -translate-y-[0.75px] h-[1.5px] bg-white/70 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
                  />
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[1.5px] bg-white/70 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center"
            style={{ background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(80px)', WebkitBackdropFilter: 'blur(80px)' }}
          >
            <nav className="flex flex-col items-center gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  {...staggerItem(i)}
                  className="text-4xl md:text-5xl font-heading italic text-white/80 hover:text-brand-green transition-colors duration-500"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#how-to-buy"
                onClick={() => setIsOpen(false)}
                {...staggerItem(NAV_ITEMS.length)}
                className="mt-8 double-bezel-strong group"
              >
                <div className="double-bezel-strong-inner px-8 py-4 flex items-center gap-3 text-lg font-semibold text-white">
                  Buy {TOKEN_SYMBOL}
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
