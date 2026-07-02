import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { TOKEN_SYMBOL, CA_PLACEHOLDER, TAGLINE, LINKS } from '@/lib/constants';

const HERO_VIDEO = '/img/3d/first-footage.mp4';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 80,
      damping: 18,
    },
  }),
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function HeroSection() {
  const [caCopied, setCaCopied] = useState(false);

  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden rounded-b-[32px]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={HERO_VIDEO}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8">
        <div className="w-full max-w-[1831px] mx-auto">
          <div className="lg:ml-32 max-w-[780px]">
            <motion.h1
              className="font-grotesk uppercase leading-[1.05] lg:leading-[1] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] text-cream text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span className="block" variants={fadeUp} custom={0}>
                PROJECT 2030
              </motion.span>
              <motion.span className="relative inline-block" variants={fadeUp} custom={1}>
                One Meme.
                <motion.span
                  className="font-condiment text-neon text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] absolute -top-2 -right-4 sm:-right-6 lg:-right-8 -rotate-1 mix-blend-exclusion opacity-90 normal-case whitespace-nowrap"
                  initial={{ opacity: 0, x: 20, rotate: -5 }}
                  animate={{ opacity: 0.9, x: 0, rotate: -1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  The Future
                </motion.span>
              </motion.span>
              <motion.span className="block" variants={fadeUp} custom={2}>
                One Mission.
              </motion.span>
            </motion.h1>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.a
                href="#how-to-buy"
                className="font-grotesk text-sm uppercase tracking-wider px-6 py-3 bg-neon text-black rounded-lg hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy {TOKEN_SYMBOL}
              </motion.a>
              <motion.button
                onClick={copyCa}
                className="flex items-center gap-2 px-4 py-3 liquid-glass rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[10px] font-mono text-cream/50 uppercase tracking-wider">CA</span>
                <code className="text-xs font-mono text-neon/70 max-w-[200px] truncate">
                  {CA_PLACEHOLDER}
                </code>
                <span className="text-[10px] font-mono text-cream/40">
                  {caCopied ? 'Copied' : 'Copy'}
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              className="font-mono text-[13px] sm:text-[14px] text-cream/50 uppercase tracking-wider mt-6 text-left max-w-[266px] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {TAGLINE}
            </motion.p>
          </div>
        </div>
      </div>

      <motion.div
        className="hidden lg:flex flex-col gap-3 absolute top-32 right-6 xl:right-12 z-20"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6, staggerChildren: 0.1 }}
      >
        {[
          { icon: Mail, href: `mailto:hello@project2030.xyz` },
          { icon: TwitterIcon, href: LINKS.twitter },
          { icon: GithubIcon, href: LINKS.telegram },
        ].map((Item, i) => (
          <motion.a
            key={i}
            href={Item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream/70 hover:bg-white/10 transition-colors duration-300"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <Item.icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="flex lg:hidden justify-center gap-3 pb-10 z-20 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[
          { icon: Mail, href: `mailto:hello@project2030.xyz` },
          { icon: TwitterIcon, href: LINKS.twitter },
          { icon: GithubIcon, href: LINKS.telegram },
        ].map((Item, i) => (
          <motion.a
            key={i}
            href={Item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream/70 hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Item.icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
