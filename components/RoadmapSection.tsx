import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ROADMAP } from '@/lib/constants';

const STATUS_ICONS: Record<string, string> = {
  current: 'M5 13l4 4L19 7',
  upcoming: 'M12 5v14M5 12h14',
  completed: 'M5 13l4 4L19 7',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -80 : 80,
    y: 40,
    scale: 0.9,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
};

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function TimelineNode({ status }: { status: string }) {
  return (
    <motion.div
      variants={dotVariants}
      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-shadow duration-500 ${
        status === 'current'
          ? 'bg-neon shadow-[0_0_20px_rgba(0,255,136,0.3)]'
          : 'bg-white/5 border border-white/10'
      }`}
      whileHover={{
        scale: 1.3,
        boxShadow: status === 'current'
          ? '0 0 40px rgba(0,255,136,0.5)'
          : '0 0 20px rgba(255,255,255,0.15)',
        transition: { type: 'spring', stiffness: 300, damping: 10 },
      }}
    >
      <svg
        className={`w-5 h-5 ${status === 'current' ? 'text-black' : 'text-cream/30'}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={STATUS_ICONS[status]} />
      </svg>
    </motion.div>
  );
}

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="roadmap"
      className="bg-[#050505] py-20 md:py-28 border-t border-white/5 relative overflow-hidden"
      ref={sectionRef}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isInView
            ? [
                'radial-gradient(600px circle at 20% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                'radial-gradient(600px circle at 80% 60%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                'radial-gradient(600px circle at 40% 80%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                'radial-gradient(600px circle at 20% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
              ]
            : 'radial-gradient(600px circle at 20% 30%, rgba(0,255,136,0.04) 0%, transparent 70%)',
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-grotesk uppercase text-[32px] md:text-[48px] text-cream text-center mb-4">
            Roadmap to 2030
          </h2>
          <p className="font-mono text-xs text-cream/40 text-center mb-16 max-w-md mx-auto leading-relaxed">
            Our journey from launch to the moon. Every milestone brings us closer to the vision.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/40 via-neon/10 to-transparent md:-translate-x-px origin-top"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          <motion.div
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {ROADMAP.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className="relative flex flex-col md:flex-row items-start gap-6 md:gap-0"
                >
                  <motion.div
                    className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}
                    variants={cardVariants}
                    custom={isLeft}
                    whileHover={{
                      y: -6,
                      transition: { type: 'spring', stiffness: 200, damping: 15 },
                    }}
                  >
                    <div
                      className={`liquid-glass rounded-[20px] p-5 md:p-6 inline-block w-full transition-shadow duration-500 ${
                        item.status === 'current' ? 'border border-neon/20' : ''
                      }`}
                    >
                      <motion.div
                        className="font-mono text-[11px] text-neon/70 tracking-wider mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        {item.year}
                      </motion.div>
                      <h3 className="font-grotesk text-lg md:text-xl uppercase text-cream tracking-wide mb-2">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-cream/50 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.status === 'current' && (
                        <motion.div
                          className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon/10 border border-neon/20"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 12,
                            delay: 0.4,
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" style={{ animationDuration: '2s' }} />
                          <span className="font-mono text-[9px] uppercase text-neon tracking-wider">Live</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                    <TimelineNode status={item.status} />
                  </div>

                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
