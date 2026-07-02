import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { LINKS, SITE_NAME, FAQS } from '@/lib/constants';

const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

const faqVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 80, damping: 16 },
  }),
};

const answerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CTASection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <>
      <section id="cta" className="relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
            src={CTA_VIDEO}
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full max-w-[1831px] mx-auto px-6 md:px-8">
            <motion.span
              className="font-condiment text-neon text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] absolute top-0 left-[8%] lg:left-[15%] -translate-y-full mix-blend-exclusion opacity-90 normal-case whitespace-nowrap"
              initial={{ opacity: 0, x: -40, rotate: -5 }}
              whileInView={{ opacity: 0.9, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Join Us
            </motion.span>

            <motion.div
              className="text-right lg:pr-[20%] lg:pl-[15%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="font-grotesk uppercase text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] text-cream leading-[1.1]">
                <motion.div className="mb-4 md:mb-8 lg:mb-12" variants={fadeUp}>JOIN THE MOVEMENT.</motion.div>
                <motion.div variants={fadeUp}>BUILD THE FUTURE.</motion.div>
                <motion.div variants={fadeUp}>HODL THE VISION.</motion.div>
                <motion.div variants={fadeUp}>$2030.</motion.div>
              </h2>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute left-[8%] bottom-[12%] md:bottom-[15%] lg:bottom-[20%] hidden lg:block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="liquid-glass rounded-[0.5rem] md:rounded-[1.25rem] flex flex-col">
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
                className={`flex items-center justify-center text-cream/70 hover:text-neon hover:bg-white/5 transition-all duration-300 w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] ${i < 2 ? 'border-b border-white/10' : ''}`}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,255,136,0.05)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Item.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="faq" className="bg-[#050505] py-16 md:py-24 border-t border-white/5 relative overflow-hidden" ref={sectionRef}>
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={
            isInView
              ? {
                  background: [
                    'radial-gradient(400px circle at 30% 80%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                    'radial-gradient(400px circle at 70% 20%, rgba(0,255,136,0.04) 0%, transparent 70%)',
                    'radial-gradient(400px circle at 30% 80%, rgba(0,255,136,0.04) 0%, transparent 70%)',
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
            <motion.h2
              className="font-grotesk uppercase text-[32px] md:text-[48px] text-cream text-center mb-12"
              variants={fadeUp}
            >
              FAQ
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={faqVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="liquid-glass rounded-[20px] overflow-hidden hover:border hover:border-white/[0.03] transition-all duration-500"
              >
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                >
                  <span className="font-mono text-sm uppercase text-cream/80 tracking-wide pr-4 group-hover:text-neon transition-colors duration-300">
                    {faq.q}
                  </span>
                  <motion.svg
                    className="w-4 h-4 text-neon shrink-0"
                    animate={{ rotate: openFAQ === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </motion.button>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div
                      key="answer"
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="font-mono text-xs text-cream/50 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.footer
        className="bg-[#050505] border-t border-white/5 py-8 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-neon/2 rounded-full blur-[80px]"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-grotesk text-sm uppercase text-cream/50">
            {SITE_NAME}
          </div>
          <div className="font-mono text-[10px] uppercase text-cream/20 tracking-wider text-center md:text-right">
            &copy; 2030 PROJECT 2030. All rights reserved.<br />
            $2030 is a memecoin. Not financial advice.
          </div>
          <div className="flex items-center gap-3 md:hidden">
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
                className="liquid-glass w-10 h-10 rounded-lg flex items-center justify-center text-cream/50 hover:text-neon transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Item.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </>
  );
}
