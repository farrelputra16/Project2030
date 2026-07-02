import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ROADMAP } from '@/lib/constants';

const STATUS_ICONS: Record<string, string> = {
  current: 'M5 13l4 4L19 7',
  upcoming: 'M12 5v14M5 12h14',
  completed: 'M5 13l4 4L19 7',
};

export default function RoadmapSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="roadmap" className="bg-[#050505] py-20 md:py-28 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-neon/3 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div ref={ref} className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
        <h2 className="font-grotesk uppercase text-[32px] md:text-[48px] text-cream text-center mb-4">
          Roadmap to 2030
        </h2>
        <p className="font-mono text-xs text-cream/40 text-center mb-16 max-w-md mx-auto leading-relaxed">
          Our journey from launch to the moon. Every milestone brings us closer to the vision.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/40 via-neon/10 to-transparent md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {ROADMAP.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                    <div className={`liquid-glass rounded-[20px] p-5 md:p-6 inline-block w-full ${item.status === 'current' ? 'border border-neon/20' : ''}`}>
                      <div className="font-mono text-[11px] text-neon/70 tracking-wider mb-1">
                        {item.year}
                      </div>
                      <h3 className="font-grotesk text-lg md:text-xl uppercase text-cream tracking-wide mb-2">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-cream/50 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.status === 'current' && (
                        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon/10 border border-neon/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" style={{ animationDuration: '2s' }} />
                          <span className="font-mono text-[9px] uppercase text-neon tracking-wider">Live</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      item.status === 'current'
                        ? 'bg-neon shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                        : 'bg-white/5 border border-white/10'
                    }`}>
                      <svg className={`w-5 h-5 ${item.status === 'current' ? 'text-black' : 'text-cream/30'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={STATUS_ICONS[item.status]} />
                      </svg>
                    </div>
                  </div>

                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
