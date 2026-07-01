import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { TOKEN_SYMBOL, TOKENOMICS } from '@/lib/constants';

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative min-h-screen bg-black py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(0,255,136,0.03) 0%, transparent 60%)',
        }}
      />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-sm font-body text-brand-green mb-4 tracking-[0.15em] uppercase text-center">// Tokenomics</div>
        </ScrollReveal>
        <BlurText
          text={`${TOKEN_SYMBOL} Tokenomics`}
          as="h2"
          className="font-heading italic text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-[-3px] text-center"
          style={{ color: '#ffffff' }}
        />

        <ScrollReveal delay={0.3}>
          <p className="text-center text-white/60 font-body font-light mt-4 max-w-xl mx-auto text-sm">
            Fair launch with no presale. 70% of supply goes to liquidity. Built to last.
          </p>
        </ScrollReveal>

        <div className="mt-12 max-w-2xl mx-auto">
          <ScrollReveal delay={0.4}>
            <div className="liquid-glass rounded-[1.25rem] p-8">
              <div className="flex flex-col gap-4">
                {TOKENOMICS.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-white/80 font-body">{item.label}</span>
                      <span className="text-sm font-mono text-white/60">{item.value}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: item.pct,
                          background: item.color || 'rgba(0,255,136,0.3)',
                          boxShadow: `0 0 10px ${item.color || 'rgba(0,255,136,0.2)'}`,
                        }}
                      />
                    </div>
                    <div className="flex justify-end mt-0.5">
                      <span className="text-[11px] text-white/40 font-mono">{item.pct}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="liquid-glass rounded-[1.25rem] p-5 text-center">
                <div className="font-heading italic text-2xl" style={{ color: '#00ff88' }}>0%</div>
                <div className="text-xs text-white/50 font-body mt-1">Buy Tax</div>
              </div>
              <div className="liquid-glass rounded-[1.25rem] p-5 text-center">
                <div className="font-heading italic text-2xl" style={{ color: '#00ff88' }}>0%</div>
                <div className="text-xs text-white/50 font-body mt-1">Sell Tax</div>
              </div>
              <div className="liquid-glass rounded-[1.25rem] p-5 text-center">
                <div className="font-heading italic text-2xl" style={{ color: '#00ff88' }}>LP</div>
                <div className="text-xs text-white/50 font-body mt-1">Burnt</div>
              </div>
              <div className="liquid-glass rounded-[1.25rem] p-5 text-center">
                <div className="font-heading italic text-2xl" style={{ color: '#00ff88' }}>✓</div>
                <div className="text-xs text-white/50 font-body mt-1">Renounced</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
