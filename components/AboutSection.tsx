import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MISSION_FEATURES } from '@/lib/constants';

const ABOUT_VIDEO = '/img/3d/second-footage.mp4';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: 'spring',
      stiffness: 90,
      damping: 16,
    },
  }),
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="mission" className="relative min-h-screen overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={ABOUT_VIDEO}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black/40"
        animate={isInView ? { opacity: [0.5, 0.4] } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
      />

      <div className="relative z-10 max-w-[1831px] mx-auto px-6 md:px-8 py-16 md:py-20 lg:py-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div
            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12"
            variants={fadeUp}
          >
            <div className="relative">
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
                Hello!
                <br />
                We Are PROJECT 2030
              </h2>
              <motion.span
                className="font-condiment text-neon text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] absolute -bottom-6 right-0 lg:right-[-40px] -rotate-1 mix-blend-exclusion opacity-90 normal-case whitespace-nowrap leading-none"
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={isInView ? { opacity: 0.9, x: 0, rotate: -1 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                The Mission
              </motion.span>
            </div>

            <p className="font-mono text-[14px] md:text-[16px] uppercase text-cream leading-relaxed max-w-[266px]">
              A community-driven movement on Solana. We meme, we build, we conquer. No VCs, no presale — just pure decentralized energy.
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-16 lg:mt-24">
          <div className="space-y-4 flex-1">
            {MISSION_FEATURES.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardReveal}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{
                  y: -6,
                  boxShadow: '0 0 40px rgba(0,255,136,0.08)',
                  transition: { type: 'spring', stiffness: 200, damping: 15 },
                }}
                className="liquid-glass rounded-[20px] p-5 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center shrink-0 group-hover:bg-neon/20 transition-all duration-500"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <svg className="w-5 h-5 text-neon" viewBox="0 0 24 24" fill="currentColor">
                      <path d={f.icon} />
                    </svg>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-grotesk text-base uppercase text-cream tracking-wide group-hover:text-neon transition-colors duration-500">{f.title}</h3>
                    <p className="font-mono text-xs text-cream/60 mt-1 leading-relaxed">{f.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {f.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-cream/30 border border-cream/5 rounded-md uppercase tracking-wider group-hover:border-neon/20 group-hover:text-cream/50 transition-all duration-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block flex-1">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-mono text-[14px] uppercase text-cream/10 leading-relaxed space-y-6 max-w-[400px]">
                <p>A community-driven movement on Solana. We meme, we build, we conquer. No VCs, no presale — just pure decentralized energy.</p>
                <p>Built by the community, for the community. One meme, one mission. The future is ours.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
