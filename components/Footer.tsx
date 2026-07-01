import { LINKS } from '@/lib/constants';

export default function Footer() {
  const socials = [
    {
      href: LINKS.twitter,
      title: 'Twitter / X',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: LINKS.telegram,
      title: 'Telegram',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      href: LINKS.pumpfun,
      title: 'PumpFun',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      href: LINKS.solscan,
      title: 'Solscan',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-oled border-t border-white/[0.03] py-16 overflow-hidden">
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="double-bezel">
              <div className="double-bezel-inner w-10 h-10 flex items-center justify-center">
                <span className="font-heading italic text-brand-green text-sm">P</span>
              </div>
            </div>
            <div>
              <div className="font-heading italic text-white text-sm tracking-tight">PROJECT 2030</div>
              <div className="text-[10px] text-white/20 font-body tracking-tight">ONE MEME. ONE MISSION.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="double-bezel group"
                title={s.title}
              >
                <div className="double-bezel-inner w-9 h-9 flex items-center justify-center text-white/30 group-hover:text-brand-green transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  {s.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="text-xs text-white/15 font-body font-light text-center md:text-right leading-relaxed">
            &copy; 2030 PROJECT 2030. All rights reserved.<br />
            $2030 is a memecoin. Not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
