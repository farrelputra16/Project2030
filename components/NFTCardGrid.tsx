import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BUY_STEPS, TOKEN_SYMBOL, TOKENOMICS, CA_PLACEHOLDER } from '@/lib/constants';

const CARD_VIDEOS = [
  '/img/3d/htb-2.mp4',
  '/img/3d/htb-1.mp4',
  '/img/3d/htb-2.mp4',
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

function PhantomBuyCard() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    const check = () => {
      const ph = (window as any).phantom?.solana;
      setIsInstalled(!!ph?.isPhantom);
      if (ph?.isConnected) {
        setIsConnected(true);
        setWalletAddress(ph.publicKey?.toString() || '');
      }
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = async () => {
    try {
      const ph = (window as any).phantom?.solana;
      if (!ph) return;
      const resp = await ph.connect();
      setIsConnected(true);
      setWalletAddress(resp.publicKey.toString());
      window.open('https://pump.fun', '_blank');
    } catch (e) {
      console.error('Phantom connect failed', e);
    }
  };

  const handleDisconnect = async () => {
    try {
      const ph = (window as any).phantom?.solana;
      if (ph) await ph.disconnect();
      setIsConnected(false);
      setWalletAddress('');
    } catch (e) {
      console.error('Phantom disconnect failed', e);
    }
  };

  return (
    <motion.div
      className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/5 transition-colors duration-500 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 16 }}
      whileHover={{ y: -6 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.08)_0%,transparent_70%)]"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-neon/5"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-neon/10"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-8 py-10 w-full max-w-sm mx-auto">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-neon/30 via-neon/10 to-transparent border-2 border-neon/20 flex items-center justify-center shadow-2xl shadow-neon/10 mb-6"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </motion.div>

        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="font-grotesk text-2xl uppercase text-cream tracking-wide">
            {isConnected ? 'Wallet Connected' : isInstalled ? 'Ready to Buy' : 'Get Started'}
          </div>
          <p className="font-mono text-[11px] text-cream/40 mt-2 leading-relaxed max-w-[260px] mx-auto">
            {isConnected
              ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
              : isInstalled
                ? 'Click below to connect Phantom and swap SOL for $2030'
                : 'Install Phantom wallet to buy $2030 on Solana'}
          </p>
        </motion.div>

        {!isInstalled ? (
          <motion.a
            href="https://phantom.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,255,136,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Install Phantom
          </motion.a>
        ) : isConnected ? (
          <div className="flex flex-col items-center gap-3 w-full">
            <motion.button
              onClick={() => window.open('https://pump.fun', '_blank')}
              className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20 w-full"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,255,136,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Buy {TOKEN_SYMBOL}
            </motion.button>
            <motion.button
              onClick={handleDisconnect}
              className="font-mono text-[10px] text-cream/25 hover:text-cream/60 transition-colors uppercase tracking-widest"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Disconnect
            </motion.button>
          </div>
        ) : (
          <motion.button
            onClick={handleConnect}
            className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0,255,136,0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Connect & Buy
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default function NFTCardGrid() {
  const [caCopied, setCaCopied] = useState(false);
  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="how-to-buy" className="bg-[#050505] py-16 md:py-24 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={
          isInView
            ? {
                background: [
                  'radial-gradient(500px circle at 80% 20%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                  'radial-gradient(500px circle at 20% 60%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                  'radial-gradient(500px circle at 80% 20%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                ],
              }
            : {}
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
            variants={fadeUp}
          >
            <div>
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
                How to Buy
                <br />
                <span className="ml-12 md:ml-24 lg:ml-32 inline">
                  <motion.span
                    className="font-condiment text-neon normal-case"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    your
                  </motion.span>
                  {' '}
                  <span className="font-grotesk uppercase">{TOKEN_SYMBOL}</span>
                </span>
              </h2>
            </div>

            <div className="text-right">
              <motion.div
                className="inline-block"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="flex items-end gap-2">
                  <motion.span
                    className="font-grotesk text-[32px] md:text-[40px] lg:text-[60px] uppercase text-cream leading-none"
                    animate={isInView ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    3
                  </motion.span>
                  <div className="flex flex-col items-start leading-tight pb-1">
                    <span className="font-grotesk text-[20px] md:text-[28px] lg:text-[36px] uppercase text-cream">SIMPLE</span>
                    <span className="font-grotesk text-[20px] md:text-[28px] lg:text-[36px] uppercase text-cream">STEPS</span>
                  </div>
                </div>
                <motion.div
                  className="h-[6px] md:h-[8px] lg:h-[10px] bg-neon w-full mt-1"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'right' }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUY_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 80, damping: 16 }}
              whileHover={{ y: -8 }}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,255,136,0.05)] transition-all duration-500 group"
            >
              <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={CARD_VIDEOS[i]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <motion.div
                  className="absolute top-4 left-4 font-grotesk text-[28px] text-neon opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.2 }}
                >
                  {step.step}
                </motion.div>
              </div>

              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between group-hover:bg-white/[0.03] transition-all duration-500">
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[11px] uppercase text-cream/70 tracking-wider">
                    STEP {step.step}
                  </div>
                  <div className="font-grotesk text-base uppercase text-cream mt-0.5 tracking-wide group-hover:text-neon transition-colors duration-500">
                    {step.title}
                  </div>
                  <p className="font-mono text-xs text-cream/50 mt-1 leading-relaxed line-clamp-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="mt-16 max-w-md mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-grotesk text-[28px] md:text-[36px] uppercase text-cream">
                Buy Direct with Phantom
              </h3>
              <p className="font-mono text-xs text-cream/40 mt-2">
                Already have Phantom? Connect and buy in seconds.
              </p>
            </div>
            <PhantomBuyCard />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div id="tokenomics" className="mt-16">
            <h3 className="font-grotesk text-[32px] md:text-[48px] uppercase text-cream text-center mb-10">
              Tokenomics
            </h3>
            <div className="max-w-2xl mx-auto space-y-3">
              {TOKENOMICS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4, transition: { type: 'spring', stiffness: 200 } }}
                  className="liquid-glass rounded-[16px] p-4 flex items-center justify-between hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(0,255,136,0.03)] transition-all duration-500"
                >
                  <span className="font-mono text-xs uppercase text-cream/70">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-grotesk text-sm uppercase text-cream">{item.value}</span>
                    <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-neon"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: item.pct } : {}}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <span className="font-mono text-xs text-neon">{item.pct}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                onClick={copyCa}
                className="liquid-glass rounded-[16px] px-6 py-4 font-mono text-sm uppercase text-cream/70 hover:bg-white/10 hover:text-neon hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all duration-300 flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-neon group-hover:scale-110 transition-transform duration-300">CA:</span>
                <code className="font-mono text-xs">{CA_PLACEHOLDER}</code>
                <span className="text-[10px] text-cream/40">{caCopied ? 'Copied' : 'Copy'}</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
