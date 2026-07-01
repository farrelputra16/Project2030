import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { VIDEOS, MISSION_FEATURES } from '@/lib/constants';

export default function MissionSection() {
  return (
    <section id="mission" className="relative min-h-[100dvh] bg-oled overflow-hidden">
      <FadingVideo
        src={VIDEOS.mission}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(5,5,5,0.7)' }} />
      <div className="mesh-glow-2 absolute inset-0 z-[1] pointer-events-none" />
      <div className="scanline absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-32 pb-16 flex flex-col min-h-[100dvh]">
        <div className="mb-12">
          <ScrollReveal>
            <div className="double-bezel inline-flex mb-6">
              <div className="double-bezel-inner px-3 py-1">
                <span className="text-[10px] font-body font-medium text-brand-green tracking-wide uppercase">// Our Mission</span>
              </div>
            </div>
          </ScrollReveal>
          <BlurText
            text="One Meme. One Mission."
            as="h2"
            className="font-heading italic text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tight justify-start text-left"
            delay={0.1}
            style={{ color: '#ffffff' }}
            stagger={0.06}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 flex-1">
          {MISSION_FEATURES.map((f, i) => {
            const isFirst = i === 0;
            return (
              <ScrollReveal key={i} delay={0.15 * i} y={56}>
                <div className={`double-bezel h-full ${isFirst ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <div className={`double-bezel-inner p-7 md:p-8 flex flex-col ${isFirst ? 'min-h-[460px]' : 'min-h-[340px]'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="double-bezel">
                        <div className="double-bezel-inner w-11 h-11 flex items-center justify-center">
                          <svg className="w-5 h-5" style={{ color: '#00ff88' }} viewBox="0 0 24 24" fill="currentColor">
                            <path d={f.icon} />
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-end gap-1.5 max-w-[60%]">
                        {f.tags.map((t) => (
                          <span key={t} className="double-bezel">
                            <div className="double-bezel-inner px-2.5 py-1">
                              <span className="text-[10px] text-white/50 font-body font-medium whitespace-nowrap">{t}</span>
                            </div>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1" />
                    <div className="mt-6">
                      <h3 className="font-heading italic text-2xl md:text-3xl tracking-tight leading-none" style={{ color: '#00ff88' }}>
                        {f.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/50 font-body font-light leading-relaxed max-w-[36ch]">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
