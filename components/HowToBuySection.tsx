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
    <section id="how-to-buy" className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.03) 0%, transparent 60%)',
        }}
      />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-sm font-body text-brand-green mb-4 tracking-[0.15em] uppercase text-center">// Tutorial</div>
        </ScrollReveal>
        <BlurText
          text={`How to Buy ${TOKEN_SYMBOL}`}
          as="h2"
          className="font-heading italic text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] text-center"
          style={{ color: '#ffffff' }}
        />

        <ScrollReveal delay={0.3}>
          <p className="text-center text-white/60 font-body font-light mt-4 max-w-xl mx-auto text-sm">
            Follow these simple steps to join the PROJECT 2030 mission. You only need a Phantom wallet and some SOL.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {BUY_STEPS.map((s, i) => (
            <ScrollReveal key={i} delay={0.15 * i}>
              <div className="liquid-glass rounded-[1.25rem] p-6 flex gap-5 items-start">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 text-lg font-bold font-body"
                  style={{
                    background: 'rgba(0,255,136,0.1)',
                    color: '#00ff88',
                    border: '1px solid rgba(0,255,136,0.2)',
                  }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-heading italic text-xl text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-white/60 font-body font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="mt-12 text-center">
            <div className="liquid-glass rounded-[1.25rem] p-6 max-w-lg mx-auto">
              <div className="text-xs font-body text-white/50 mb-2 tracking-[0.1em] uppercase">Contract Address (CA)</div>
              <div className="flex items-center justify-center gap-3">
                <code className="text-sm font-mono text-brand-green bg-black/50 px-4 py-2 rounded-lg border border-white/10 truncate max-w-[300px]">
                  {CA_PLACEHOLDER}
                </code>
                <button
                  onClick={copyCa}
                  className="text-white/50 hover:text-brand-green transition-colors shrink-0"
                  title="Copy CA"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-white/40 mt-3 font-body">
                {caCopied ? 'Copied!' : 'CA will be posted here after launch on PumpFun. Stay tuned.'}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-8 flex justify-center">
            <PhantomBuyButton />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
