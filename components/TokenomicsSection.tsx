import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { TOKEN_SYMBOL, TOKENOMICS } from '@/lib/constants';

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="relative min-h-[100dvh] bg-oled py-32 overflow-hidden">
      <div className="mesh-glow-3 absolute inset-0 pointer-events-none" />
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="double-bezel inline-flex mb-6 mx-auto" style={{ display: 'table' }}>
            <div className="double-bezel-inner px-3 py-1">
              <span className="text-[10px] font-body font-medium text-brand-green tracking-wide uppercase">// Tokenomics</span>
            </div>
          </div>
        </ScrollReveal>

        <BlurText
          text={`${TOKEN_SYMBOL} Tokenomics`}
          as="h2"
          className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tight text-center"
          style={{ color: '#ffffff' }}
          stagger={0.06}
        />

        <ScrollReveal delay={0.3}>
          <p className="text-center text-white/40 font-body font-light mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Fair launch. No presale. 70% liquidity. Built to last.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-14 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.35}>
              <div className="double-bezel h-full">
                <div className="double-bezel-inner p-7 md:p-8">
                  <h3 className="font-heading italic text-lg text-white/60 mb-6 tracking-tight">Supply Distribution</h3>
                  <div className="flex flex-col gap-4">
                    {TOKENOMICS.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm text-white/70 font-body font-medium">{item.label}</span>
                          <span className="text-xs font-mono text-white/30">{item.value}</span>
                        </div>
                        <div className="w-full h-[3px] rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: item.pct,
                              background: item.color || 'rgba(0,255,136,0.3)',
                            }}
                          />
                        </div>
                        <div className="flex justify-end mt-0.5">
                          <span className="text-[10px] text-white/20 font-mono">{item.pct}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={0.45}>
              <div className="double-bezel h-full">
                <div className="double-bezel-inner p-7 md:p-8 flex flex-col justify-between h-full">
                  <h3 className="font-heading italic text-lg text-white/60 mb-6 tracking-tight">Guarantees</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '0%', label: 'Buy Tax' },
                      { value: '0%', label: 'Sell Tax' },
                      { value: 'LP', label: 'Burnt' },
                      { value: '✓', label: 'Renounced' },
                    ].map((g, i) => (
                      <div key={i} className="double-bezel">
                        <div className="double-bezel-inner p-4 text-center">
                          <div className="font-heading italic text-xl" style={{ color: '#00ff88' }}>{g.value}</div>
                          <div className="text-[10px] text-white/30 font-body mt-1 tracking-tight">{g.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
