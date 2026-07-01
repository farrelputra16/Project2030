import { motion } from 'framer-motion';
import Navbar from './Navbar';
import HeroSlider from './HeroSlider';
import { TOKEN_SYMBOL } from '@/lib/constants';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1], delay },
});

interface PumpStatProps {
  label: string;
  value: string;
  sub?: string;
  color?: string;
}

function PumpStat({ label, value, sub, color }: PumpStatProps) {
  return (
    <div className="double-bezel">
      <div className="double-bezel-inner px-4 py-3 min-w-[120px] text-center">
        <div className="text-[10px] font-body font-medium text-white/30 tracking-wide uppercase mb-1">{label}</div>
        <div className="font-heading italic text-xl tracking-tight" style={{ color: color || '#00ff88' }}>{value}</div>
        {sub && <div className="text-[10px] text-white/20 font-body mt-0.5">{sub}</div>}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden bg-oled">
      <div className="mesh-glow-1 absolute inset-0 z-[1] pointer-events-none" />
      <div className="scanline absolute inset-0 z-[1] pointer-events-none" />

      <Navbar />

      <HeroSlider />

      <div className="absolute bottom-6 left-0 right-0 z-10 px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto">
          <motion.div {...fadeUp(0.3)}>
            <PumpStat label="Supply" value="69M" sub="Total" />
          </motion.div>
          <motion.div {...fadeUp(0.4)}>
            <PumpStat label="Market Cap" value="TBD" sub="Coming Soon" color="#ffffff" />
          </motion.div>
          <motion.div {...fadeUp(0.5)}>
            <PumpStat label="Price" value="—" sub="Launching on PumpFun" color="#ffffff" />
          </motion.div>
          <motion.div {...fadeUp(0.6)}>
            <PumpStat label="Liquidity" value="Locked" sub="100%" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
