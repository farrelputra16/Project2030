import { useState } from 'react';
import { Mail } from 'lucide-react';
import TwitterIcon from './TwitterIcon';
import GithubIcon from './GithubIcon';
import { TOKEN_SYMBOL, CA_PLACEHOLDER, TAGLINE, LINKS } from '@/lib/constants';

const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4';

export default function HeroSection() {
  const [caCopied, setCaCopied] = useState(false);

  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden rounded-b-[32px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8">
        <div className="w-full max-w-[1831px] mx-auto">
          <div className="lg:ml-32 max-w-[780px]">
            <h1 className="font-grotesk uppercase leading-[1.05] lg:leading-[1] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] text-cream text-left">
              PROJECT 2030
              <br />
              <span className="relative inline-block">
                One Meme.
                <span className="font-condiment text-neon text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] absolute -top-2 -right-4 sm:-right-6 lg:-right-8 -rotate-1 mix-blend-exclusion opacity-90 normal-case whitespace-nowrap">
                  The Future
                </span>
              </span>
              <br />
              One Mission.
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#how-to-buy"
                className="font-grotesk text-sm uppercase tracking-wider px-6 py-3 bg-neon text-black rounded-lg hover:bg-white transition-all duration-300"
              >
                Buy {TOKEN_SYMBOL}
              </a>
              <button
                onClick={copyCa}
                className="flex items-center gap-2 px-4 py-3 liquid-glass rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-[10px] font-mono text-cream/50 uppercase tracking-wider">CA</span>
                <code className="text-xs font-mono text-neon/70 max-w-[200px] truncate">
                  {CA_PLACEHOLDER}
                </code>
                <span className="text-[10px] font-mono text-cream/40">
                  {caCopied ? 'Copied' : 'Copy'}
                </span>
              </button>
            </div>

            <p className="font-mono text-[13px] sm:text-[14px] text-cream/50 uppercase tracking-wider mt-6 text-left max-w-[266px] leading-relaxed">
              {TAGLINE}
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-3 absolute top-32 right-6 xl:right-12 z-20">
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
            className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream/70 hover:bg-white/10 transition-colors duration-300"
          >
            <Item.icon size={20} />
          </a>
        ))}
      </div>

      <div className="flex lg:hidden justify-center gap-3 pb-10 z-20 relative">
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
            className="liquid-glass w-14 h-14 rounded-[1rem] flex items-center justify-center text-cream/70 hover:bg-white/10 transition-colors duration-300"
          >
            <Item.icon size={20} />
          </a>
        ))}
      </div>
    </section>
  );
}
