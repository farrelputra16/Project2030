import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { LINKS, SITE_NAME } from '@/lib/constants';

const CLOSING_VIDEO = '/img/3d/closing-footage.mp4';

const floatUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  }),
};

export default function ClosingSection() {
  return (
    <section id="closing" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={CLOSING_VIDEO}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(800px circle at 30% 40%, rgba(0,255,136,0.06) 0%, transparent 60%)',
            'radial-gradient(800px circle at 70% 60%, rgba(0,255,136,0.06) 0%, transparent 60%)',
            'radial-gradient(800px circle at 30% 40%, rgba(0,255,136,0.06) 0%, transparent 60%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          className="w-full max-w-[1831px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className="font-mono text-xs md:text-sm text-neon/60 uppercase tracking-[0.3em] mb-6"
            variants={floatUp}
            custom={0}
          >
            One Meme. One Mission.
          </motion.p>

          <motion.h1
            className="font-grotesk uppercase text-[48px] sm:text-[72px] md:text-[100px] lg:text-[140px] text-cream leading-[0.9] tracking-tight"
            variants={floatUp}
            custom={1}
          >
            PROJECT
            <br />
            2030
          </motion.h1>

          <motion.div
            className="w-24 h-[3px] bg-neon mx-auto my-8"
            variants={floatUp}
            custom={2}
          />

          <motion.p
            className="font-mono text-xs md:text-sm text-cream/40 max-w-md mx-auto leading-relaxed"
            variants={floatUp}
            custom={3}
          >
            The future is ours. Built by the community, for the community.
            No VCs, no presale — just pure decentralized energy.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
            variants={floatUp}
            custom={4}
          >
            {[
              { icon: TwitterIcon, href: LINKS.twitter, label: 'Twitter' },
              { icon: GithubIcon, href: LINKS.telegram, label: 'Telegram' },
              { icon: Mail, href: `mailto:hello@project2030.xyz`, label: 'Email' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass w-14 h-14 md:w-16 md:h-16 rounded-[1rem] flex items-center justify-center text-cream/50 hover:text-neon hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="font-mono text-[8px] uppercase text-cream tracking-[0.3em]">
          {SITE_NAME} &mdash; {new Date().getFullYear()}
        </div>
      </motion.div>
    </section>
  );
}
