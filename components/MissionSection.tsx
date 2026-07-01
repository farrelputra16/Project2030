import FadingVideo from './FadingVideo';
import BlurText from './BlurText';
import ScrollReveal from './ScrollReveal';
import { VIDEOS, MISSION_FEATURES } from '@/lib/constants';

export default function MissionSection() {
  return (
    <section id="mission" className="relative min-h-screen bg-black overflow-hidden">
      <FadingVideo
        src={VIDEOS.mission}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(0,0,0,0.7)' }} />
      <div className="scanline absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen">
        <div className="mb-auto">
          <ScrollReveal>
            <div className="text-sm font-body text-brand-green mb-4 tracking-[0.15em] uppercase">// Our Mission</div>
          </ScrollReveal>
          <BlurText
            text="One Meme"
            as="h2"
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] justify-start text-left"
            delay={0.1}
            style={{ color: '#ffffff' }}
          />
          <BlurText
            text="One Mission"
            as="h2"
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] justify-start text-left"
            delay={0.3}
            style={{ color: '#00ff88' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {MISSION_FEATURES.map((f, i) => (
            <ScrollReveal key={i} delay={0.2 * i}>
              <div className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center">
                    <svg className="w-6 h-6" style={{ color: '#00ff88' }} viewBox="0 0 24 24" fill="currentColor">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                    {f.tags.map((t) => (
                      <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/80 font-body whitespace-nowrap">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1" />
                <div className="mt-6">
                  <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none" style={{ color: '#00ff88' }}>
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70 font-body font-light leading-snug max-w-[32ch]">
                    {f.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
