import { useState } from 'react';
import { Mail } from 'lucide-react';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { LINKS, SITE_NAME, FAQS } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CTA_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4';

function RevealWrapper({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function CTASection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <section id="cta" className="relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
          src={CTA_VIDEO}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full max-w-[1831px] mx-auto px-6 md:px-8">
            <span className="font-condiment text-neon text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] absolute top-0 left-[8%] lg:left-[15%] -translate-y-full mix-blend-exclusion opacity-90 normal-case whitespace-nowrap">
              Join Us
            </span>

            <div className="text-right lg:pr-[20%] lg:pl-[15%]">
              <h2 className="font-grotesk uppercase text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] text-cream leading-[1.1]">
                <div className="mb-4 md:mb-8 lg:mb-12">JOIN THE MOVEMENT.</div>
                <div>BUILD THE FUTURE.</div>
                <div>HODL THE VISION.</div>
                <div>$2030.</div>
              </h2>
            </div>
          </div>
        </div>

        <div className="absolute left-[8%] bottom-[12%] md:bottom-[15%] lg:bottom-[20%] hidden lg:block">
          <div className="liquid-glass rounded-[0.5rem] md:rounded-[1.25rem] flex flex-col">
            {[
              { icon: Mail, href: `mailto:hello@project2030.xyz` },
              { icon: TwitterIcon, href: LINKS.twitter },
              { icon: GithubIcon, href: LINKS.telegram },
            ].map((Item, i) => (
              <a
                key={i}
                href={Item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center text-cream/70 hover:text-neon hover:bg-white/5 transition-all duration-300 w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[14vw] sm:h-[14.375rem] md:h-[10.78125rem] lg:h-[16.77rem] ${i < 2 ? 'border-b border-white/10' : ''}`}
              >
                <Item.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#050505] py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-neon/3 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '9s' }} />
        </div>
        <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
          <RevealWrapper>
            <h2 className="font-grotesk uppercase text-[32px] md:text-[48px] text-cream text-center mb-12">
              FAQ
            </h2>
          </RevealWrapper>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <RevealWrapper key={i} delay={i * 100}>
                <div className="liquid-glass rounded-[20px] overflow-hidden hover:border hover:border-white/[0.03] transition-all duration-500">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  >
                    <span className="font-mono text-sm uppercase text-cream/80 tracking-wide pr-4 group-hover:text-neon transition-colors duration-300">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-4 h-4 text-neon shrink-0 transition-all duration-300 ${openFAQ === i ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFAQ === i && (
                    <div className="px-6 pb-5">
                      <p className="font-mono text-xs text-cream/50 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] border-t border-white/5 py-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-neon/2 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s' }} />
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
              <a
                key={i}
                href={Item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass w-10 h-10 rounded-lg flex items-center justify-center text-cream/50 hover:text-neon transition-colors"
              >
                <Item.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
