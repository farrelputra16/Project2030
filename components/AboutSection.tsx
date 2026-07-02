import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MISSION_FEATURES } from '@/lib/constants';

const ABOUT_VIDEO = '/img/3d/second-footage.mp4';

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

export default function AboutSection() {
  return (
    <section id="mission" className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-[1831px] mx-auto px-6 md:px-8 py-16 md:py-20 lg:py-24 min-h-screen flex flex-col justify-center">
        <RevealWrapper>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="relative">
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
                Hello!
                <br />
                We Are PROJECT 2030
              </h2>
              <span
                className="font-condiment text-neon text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] absolute -bottom-6 right-0 lg:right-[-40px] -rotate-1 mix-blend-exclusion opacity-90 normal-case whitespace-nowrap leading-none"
              >
                The Mission
              </span>
            </div>

            <p className="font-mono text-[14px] md:text-[16px] uppercase text-cream leading-relaxed max-w-[266px]">
              A community-driven movement on Solana. We meme, we build, we conquer. No VCs, no presale — just pure decentralized energy.
            </p>
          </div>
        </RevealWrapper>

        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-16 lg:mt-24">
          <div className="space-y-4 flex-1">
            {MISSION_FEATURES.map((f, i) => (
              <RevealWrapper key={i} delay={i * 150}>
                <div className="liquid-glass rounded-[20px] p-5 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,255,136,0.05)] transition-all duration-500 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center shrink-0 group-hover:bg-neon/20 group-hover:scale-110 transition-all duration-500">
                      <svg className="w-5 h-5 text-neon" viewBox="0 0 24 24" fill="currentColor">
                        <path d={f.icon} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-grotesk text-base uppercase text-cream tracking-wide group-hover:text-neon transition-colors duration-500">{f.title}</h3>
                      <p className="font-mono text-xs text-cream/60 mt-1 leading-relaxed">{f.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {f.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-cream/30 border border-cream/5 rounded-md uppercase tracking-wider group-hover:border-neon/20 group-hover:text-cream/50 transition-all duration-500">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div className="hidden lg:block flex-1">
            <RevealWrapper delay={400}>
              <div className="font-mono text-[14px] uppercase text-cream/10 leading-relaxed space-y-6 max-w-[400px]">
                <p>A community-driven movement on Solana. We meme, we build, we conquer. No VCs, no presale — just pure decentralized energy.</p>
                <p>Built by the community, for the community. One meme, one mission. The future is ours.</p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
