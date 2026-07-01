import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import { VIDEOS, TOKEN_SYMBOL, CA_PLACEHOLDER } from '@/lib/constants';

interface SlideProps {
  isActive: boolean;
  direction: number;
}

function SlideLogo({ isActive, direction }: SlideProps) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, x: direction > 0 ? 300 : -300, filter: 'blur(12px)' }}
      animate={isActive ? { opacity: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, x: direction > 0 ? -200 : 200, filter: 'blur(12px)' }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
    >
      <div
        className="relative mb-6"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          animate={{
            rotateY: [0, 10, -10, 5, 0],
            rotateX: [0, -5, 5, -3, 0],
            y: [0, -8, 0, -4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: [0.32, 0.72, 0, 1],
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="double-bezel" style={{ borderRadius: '9999px', padding: '2.5px' }}>
            <div className="p-1 rounded-full bg-oled" style={{ borderRadius: 'calc(9999px - 2.5px)' }}>
              <div className="relative" style={{ width: '120px', height: '120px' }}>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(0,255,136,0.3), transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'translateZ(-20px)',
                  }}
                />
                <img
                  src="/img/project2030-main.jpg"
                  alt="PROJECT 2030"
                  className="w-[120px] h-[120px] rounded-full object-cover relative"
                  style={{ transform: 'translateZ(10px)' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BlurText
        text="PROJECT 2030"
        as="h1"
        className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic leading-[0.85] max-w-4xl justify-center tracking-tight"
        style={{ color: '#00ff88' }}
        stagger={0.08}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
        className="text-sm md:text-base text-white/60 max-w-2xl font-body font-light leading-tight mt-4 tracking-[0.12em] uppercase"
      >
        ONE MEME. ONE MISSION. THE FUTURE IS OURS.
      </motion.p>
    </motion.div>
  );
}

function SlideVideo({ isActive, direction }: SlideProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: direction > 0 ? -200 : 200 }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
    >
      <FadingVideo
        src={VIDEOS.hero}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(5,5,5,0.6)' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={isActive ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          </div>
        </motion.div>

        <BlurText
          text="Venture Beyond"
          as="h1"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic leading-[0.85] max-w-4xl justify-center tracking-tight"
          style={{ color: '#ffffff' }}
          stagger={0.08}
          delay={0.3}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.7 }}
          className="text-sm md:text-base text-white/50 max-w-xl font-body font-light leading-relaxed mt-4 text-center"
        >
          Deep-space exploration meets blockchain. Our vessels carry the future across the universe.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [caCopied, setCaCopied] = useState(false);

  const totalSlides = 2;

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  return (
    <div
      className="absolute inset-0 z-[2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait" custom={direction}>
        {current === 0 ? (
          <SlideLogo key="logo" isActive direction={direction} />
        ) : (
          <SlideVideo key="video" isActive direction={direction} />
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            style={{
              width: current === i ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: current === i ? '#00ff88' : 'rgba(255,255,255,0.2)',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Floating CA badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 1.5 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 z-10 md:bottom-40"
      >
        <div className="double-bezel">
          <div className="double-bezel-inner px-4 py-2 flex items-center gap-2.5">
            <span className="text-[10px] font-body font-medium text-white/30 tracking-wide uppercase">CA</span>
            <code className="text-xs font-mono text-brand-green/80 max-w-[160px] md:max-w-[240px] truncate">
              {CA_PLACEHOLDER}
            </code>
            <button
              onClick={copyCa}
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-brand-green hover:bg-brand-green/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              title="Copy CA"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
            {caCopied && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-brand-green font-mono"
              >
                Copied!
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
