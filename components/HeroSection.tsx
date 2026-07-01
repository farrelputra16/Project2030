import { motion } from 'framer-motion';
import FadingVideo from './FadingVideo';
import Navbar from './Navbar';
import BlurText from './BlurText';
import { VIDEOS, TOKEN_SYMBOL } from '@/lib/constants';

function StatsCard({ icon, value, label }: { icon: 'clock' | 'globe'; value: string; label: string }) {
  return (
    <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
      <svg className="text-white mb-3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <div className="font-heading italic text-4xl tracking-[-1px] leading-none" style={{ color: '#00ff88' }}>
        {value}
      </div>
      <div className="text-xs text-white/70 font-body font-light mt-2">{label}</div>
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 } as const,
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <FadingVideo
        src={VIDEOS.hero}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(0,0,0,0.6)' }} />
      <div className="scanline absolute inset-0 z-[1] pointer-events-none" />

      <Navbar />

      <div className="relative z-10 flex flex-col min-h-screen pt-24">
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <motion.div {...fadeUp(0.4)} className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-6">
            <span className="bg-brand-green text-black px-3 py-1 text-xs font-semibold rounded-full">New</span>
            <span className="text-sm text-white/90 pr-2 font-body">Solana Memecoin Launching 2030</span>
          </motion.div>

          <motion.div {...fadeUp(0.5)}>
            <img
              src="/img/project2030-main.jpg"
              alt="PROJECT 2030"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto mb-4 glow-green border-glow"
            />
          </motion.div>

          <BlurText
            text="PROJECT 2030"
            as="h1"
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic leading-[0.8] max-w-3xl justify-center tracking-[-4px]"
            delay={0.5}
            style={{ color: '#00ff88' }}
          />

          <motion.p
            {...fadeUp(0.8)}
            className="text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-tight mt-4 tracking-[0.1em] uppercase"
          >
            ONE MEME. ONE MISSION. THE FUTURE IS OURS.
          </motion.p>

          <motion.p
            {...fadeUp(0.9)}
            className="text-sm md:text-base text-white/60 max-w-xl font-body font-light leading-tight mt-3"
          >
            A community-driven movement on Solana. We meme, we build, we conquer. The year 2030 is our destination.
          </motion.p>

          <motion.div {...fadeUp(1.1)} className="flex items-center gap-6 mt-6">
            <a href="#how-to-buy" className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:brightness-110 transition-all">
              Buy {TOKEN_SYMBOL}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" /><path d="M7 7h10v10" />
              </svg>
            </a>
            <a href="#mission" className="text-sm font-medium text-white/70 hover:text-brand-green transition-colors flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
              Explore Mission
            </a>
          </motion.div>

          <motion.div {...fadeUp(1.3)} className="flex items-stretch gap-4 mt-8 flex-wrap justify-center">
            <StatsCard icon="clock" value="69M" label="Total Supply" />
            <StatsCard icon="globe" value="10K+" label="Holders Soon" />
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(1.4)}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white/80">
            Powered by Solana · PumpFun
          </div>
          <div className="flex items-center gap-8 md:gap-16 text-lg md:text-2xl font-heading italic text-white/40 tracking-tight">
            <span>Solana</span>
            <span style={{ color: '#00ff88' }}>·</span>
            <span>PumpFun</span>
            <span style={{ color: '#00ff88' }}>·</span>
            <span>Phantom</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
