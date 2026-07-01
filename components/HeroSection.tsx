import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';
import Navbar from './Navbar';
import BlurText from './BlurText';
import { VIDEOS, TOKEN_SYMBOL } from '@/lib/constants';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1], delay },
});

function StatsCard({ icon, value, label }: { icon: 'clock' | 'globe'; value: string; label: string }) {
  return (
    <div className="double-bezel">
      <div className="double-bezel-inner p-5 w-[210px]">
        <svg className="text-white/60 mb-3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {icon === 'clock' ? (
            <>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </>
          ) : (
            <>
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </>
          )}
        </svg>
        <div className="font-heading italic text-3xl tracking-tight leading-none" style={{ color: '#00ff88' }}>
          {value}
        </div>
        <div className="text-[11px] text-white/40 font-body font-light mt-1.5 tracking-tight">{label}</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden bg-oled">
      <FadingVideo
        src={VIDEOS.hero}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(5,5,5,0.55)' }} />
      <div className="mesh-glow-1 absolute inset-0 z-[1] pointer-events-none" />
      <div className="scanline absolute inset-0 z-[1] pointer-events-none" />

      <Navbar />

      <div className="relative z-10 flex flex-col min-h-[100dvh] pt-28">
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <motion.div {...fadeUp(0.3)}>
            <div className="double-bezel inline-flex">
              <div className="double-bezel-inner px-3.5 py-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-soft" />
                <span className="text-[10px] font-body font-medium text-white/60 tracking-wide uppercase">Solana · PumpFun</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="mt-8">
            <div className="double-bezel" style={{ borderRadius: '9999px', padding: '2px' }}>
              <div className="p-1 rounded-full bg-oled" style={{ borderRadius: 'calc(9999px - 2px)' }}>
                <img
                  src="/img/project2030-main.jpg"
                  alt="PROJECT 2030"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="mt-6">
            <BlurText
              text="PROJECT 2030"
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic leading-[0.85] max-w-4xl justify-center tracking-tight"
              delay={0.5}
              style={{ color: '#00ff88' }}
              stagger={0.08}
            />
          </div>

          <motion.p
            {...fadeUp(0.7)}
            className="text-sm md:text-base text-white/60 max-w-2xl font-body font-light leading-tight mt-4 tracking-[0.12em] uppercase"
          >
            ONE MEME. ONE MISSION. THE FUTURE IS OURS.
          </motion.p>

          <motion.p
            {...fadeUp(0.8)}
            className="text-sm text-white/40 max-w-lg font-body font-light leading-relaxed mt-3"
          >
            A community-driven movement on Solana. We meme, we build, we conquer. The year 2030 is our destination.
          </motion.p>

          <motion.div {...fadeUp(0.95)} className="flex items-center gap-5 mt-8">
            <a href="#how-to-buy" className="double-bezel-strong group">
              <div className="double-bezel-strong-inner px-6 py-3 flex items-center gap-3 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]">
                Buy {TOKEN_SYMBOL}
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
            <a href="#mission" className="group flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              Explore Mission
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(1.1)}
            className="flex items-stretch gap-4 mt-10 flex-wrap justify-center"
            style={{ transform: 'perspective(800px) rotateX(2deg)' }}
          >
            <div style={{ transform: 'translateY(0) rotate(-1deg)' }}>
              <StatsCard icon="clock" value="69M" label="Total Supply" />
            </div>
            <div style={{ transform: 'translateY(8px) rotate(1deg)' }}>
              <StatsCard icon="globe" value="10K+" label="Holders Soon" />
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(1.25)}
          className="flex flex-col items-center gap-3 pb-6"
        >
          <div className="double-bezel">
            <div className="double-bezel-inner px-3.5 py-1">
              <span className="text-[10px] font-body font-medium text-white/30 tracking-wide uppercase">Powered by Solana · PumpFun · Phantom</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
