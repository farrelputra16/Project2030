import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const totalSteps = duration / step;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: 'spring',
      stiffness: 80,
      damping: 16,
    },
  }),
};

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#050505] py-20 md:py-28 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={
          isInView
            ? {
                background: [
                  'radial-gradient(600px circle at 25% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                  'radial-gradient(600px circle at 75% 50%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                  'radial-gradient(600px circle at 50% 80%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                  'radial-gradient(600px circle at 25% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                ],
              }
            : {}
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 200, damping: 12 },
              }}
              className="liquid-glass rounded-[24px] p-6 md:p-8 text-center group"
            >
              <motion.div
                className="font-grotesk text-[36px] md:text-[48px] lg:text-[56px] text-neon leading-none mb-2"
                whileHover={{ scale: 1.05 }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} isVisible={isInView} />
              </motion.div>
              <div className="font-mono text-[11px] uppercase text-cream/40 tracking-wider group-hover:text-cream/60 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
