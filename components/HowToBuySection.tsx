import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import PhantomBuyButton from './PhantomBuyButton';
import { BUY_STEPS, TOKEN_SYMBOL, CA_PLACEHOLDER } from '@/lib/constants';
import { useState } from 'react';

export default function HowToBuySection() {
  const [caCopied, setCaCopied] = useState(false);

  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="relative min-h-[100dvh] bg-oled py-32 overflow-hidden">
      <div className="mesh-glow-1 absolute inset-0 pointer-events-none" />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="double-bezel inline-flex mb-6 mx-auto" style={{ display: 'table' }}>
            <div className="double-bezel-inner px-3 py-1">
              <span className="text-[10px] font-body font-medium text-brand-green tracking-wide uppercase">// Tutorial</span>
            </div>
          </div>
        </ScrollReveal>

        <BlurText
          text={`How to Buy ${TOKEN_SYMBOL}`}
          as="h2"
          className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-center"
          style={{ color: '#ffffff' }}
          stagger={0.06}
        />

        <ScrollReveal delay={0.3}>
          <p className="text-center text-white/40 font-body font-light mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Follow these simple steps to join the PROJECT 2030 mission. You only need a Phantom wallet and some SOL.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-4xl mx-auto">
          {BUY_STEPS.map((s, i) => (
            <ScrollReveal key={i} delay={0.12 * i} y={48}>
              <div className="double-bezel h-full">
                <div className="double-bezel-inner p-6 flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-sm font-bold font-mono"
                    style={{
                      background: 'rgba(0,255,136,0.06)',
                      color: '#00ff88',
                      border: '1px solid rgba(0,255,136,0.1)',
                    }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading italic text-lg text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-white/45 font-body font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="mt-14 text-center">
            <div className="double-bezel max-w-md mx-auto">
              <div className="double-bezel-inner p-6">
                <div className="text-[10px] font-body font-medium text-white/30 mb-3 tracking-wide uppercase">Contract Address (CA)</div>
                <div className="flex items-center justify-center gap-3">
                  <code className="text-sm font-mono text-brand-green bg-black/40 px-4 py-2 rounded-lg border border-white/5 truncate max-w-[280px]">
                    {CA_PLACEHOLDER}
                  </code>
                  <button
                    onClick={copyCa}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:text-brand-green hover:bg-brand-green/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    title="Copy CA"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-white/25 mt-3 font-body font-light">
                  {caCopied ? 'Copied!' : 'CA will be posted after launch on PumpFun.'}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-10 flex justify-center">
            <PhantomBuyButton />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
