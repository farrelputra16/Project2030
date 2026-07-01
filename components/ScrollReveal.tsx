import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollReveal({ children, className, delay = 0, y = 48, duration = 0.9 }: ScrollRevealProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={triggered ? false : { opacity: 0, y, filter: 'blur(4px)' }}
      animate={triggered ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration, ease: [0.32, 0.72, 0, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
