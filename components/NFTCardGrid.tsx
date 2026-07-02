import { useState, useEffect } from 'react';
import { BUY_STEPS, TOKEN_SYMBOL, TOKENOMICS, CA_PLACEHOLDER } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CARD_VIDEOS = [
  '/img/3d/htb-2.mp4',
  '/img/3d/htb-1.mp4',
  '/img/3d/htb-2.mp4',
];

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

function PhantomBuyCard({ step }: { step?: typeof BUY_STEPS[number] }) {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const check = () => {
      const ph = (window as any).phantom?.solana;
      setIsInstalled(!!ph?.isPhantom);
      if (ph?.isConnected) {
        setIsConnected(true);
        setWalletAddress(ph.publicKey?.toString() || '');
      }
    };
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConnect = async () => {
    try {
      const ph = (window as any).phantom?.solana;
      if (!ph) return;
      const resp = await ph.connect();
      setIsConnected(true);
      setWalletAddress(resp.publicKey.toString());
      window.open('https://pump.fun', '_blank');
    } catch (e) {
      console.error('Phantom connect failed', e);
    }
  };

  const handleDisconnect = async () => {
    try {
      const ph = (window as any).phantom?.solana;
      if (ph) await ph.disconnect();
      setIsConnected(false);
      setWalletAddress('');
    } catch (e) {
      console.error('Phantom disconnect failed', e);
    }
  };

  return (
    <div
      className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/5 transition-all duration-500 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.08)_0%,transparent_70%)]"
          style={{
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-neon/5"
          style={{
            animation: 'pingSlow 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-neon/10"
          style={{
            animation: 'pingSlow 4s ease-in-out infinite 1s',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-8 py-10 w-full max-w-sm mx-auto">
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-neon/30 via-neon/10 to-transparent border-2 border-neon/20 flex items-center justify-center shadow-2xl shadow-neon/10 mb-6"
          style={{
            animation: 'floatIcon 4s ease-in-out infinite',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <div
          className="text-center mb-8"
          style={{
            animation: 'fadeUp 0.6s ease-out',
          }}
        >
          <div className="font-grotesk text-2xl uppercase text-cream tracking-wide">
            {isConnected ? 'Wallet Connected' : isInstalled ? 'Ready to Buy' : 'Get Started'}
          </div>
          <p className="font-mono text-[11px] text-cream/40 mt-2 leading-relaxed max-w-[260px] mx-auto">
            {isConnected
              ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`
              : isInstalled
                ? 'Click below to connect Phantom and swap SOL for $2030'
                : 'Install Phantom wallet to buy $2030 on Solana'}
          </p>
        </div>

        {!isInstalled ? (
          <a
            href="https://phantom.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20"
          >
            Install Phantom
          </a>
        ) : isConnected ? (
          <div className="flex flex-col items-center gap-3 w-full">
            <button
              onClick={() => window.open('https://pump.fun', '_blank')}
              className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20 w-full"
            >
              Buy {TOKEN_SYMBOL}
            </button>
            <button
              onClick={handleDisconnect}
              className="font-mono text-[10px] text-cream/25 hover:text-cream/60 transition-colors uppercase tracking-widest"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnect}
            className="font-grotesk text-sm uppercase tracking-wider px-12 py-4 rounded-full bg-gradient-to-r from-neon via-emerald-400 to-teal-400 text-black hover:from-white hover:to-white hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:shadow-neon/40 hover:scale-105 transition-all duration-500 text-center shadow-lg shadow-neon/20"
          >
            Connect & Buy
          </button>
        )}

        {step && (
          <div className="absolute bottom-5 left-5 right-5 border-t border-white/5 pt-3 text-center">
            <div className="font-grotesk text-xs uppercase text-cream/20 tracking-wider">
              STEP {step.step} &mdash; {step.title}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes pingSlow {
          0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function NFTCardGrid() {
  const [caCopied, setCaCopied] = useState(false);
  const copyCa = () => {
    navigator.clipboard?.writeText(CA_PLACEHOLDER);
    setCaCopied(true);
    setTimeout(() => setCaCopied(false), 2000);
  };

  return (
    <section id="how-to-buy" className="bg-[#050505] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/3 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
      </div>
      <div className="max-w-[1831px] mx-auto px-6 md:px-8 relative z-10">
        <RevealWrapper>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-cream leading-[1.1]">
                How to Buy
                <br />
                <span className="ml-12 md:ml-24 lg:ml-32 inline">
                  <span className="font-condiment text-neon normal-case">your</span>
                  {' '}
                  <span className="font-grotesk uppercase">{TOKEN_SYMBOL}</span>
                </span>
              </h2>
            </div>

            <div className="text-right">
              <div className="inline-block">
                <div className="flex items-end gap-2">
                  <span className="font-grotesk text-[32px] md:text-[40px] lg:text-[60px] uppercase text-cream leading-none">3</span>
                  <div className="flex flex-col items-start leading-tight pb-1">
                    <span className="font-grotesk text-[20px] md:text-[28px] lg:text-[36px] uppercase text-cream">SIMPLE</span>
                    <span className="font-grotesk text-[20px] md:text-[28px] lg:text-[36px] uppercase text-cream">STEPS</span>
                  </div>
                </div>
                <div className="h-[6px] md:h-[8px] lg:h-[10px] bg-neon w-full mt-1" />
              </div>
            </div>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUY_STEPS.map((step, i) => (
            <RevealWrapper key={i} delay={i * 150}>
              <div className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(0,255,136,0.05)] transition-all duration-500 group">
                <div className="relative pb-[100%] rounded-[24px] overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={CARD_VIDEOS[i]}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-grotesk text-[28px] text-neon opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                    {step.step}
                  </div>
                </div>

                <div className="liquid-glass rounded-[20px] px-5 py-4 mt-3 flex items-center justify-between group-hover:bg-white/[0.03] transition-all duration-500">
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[11px] uppercase text-cream/70 tracking-wider">
                      STEP {step.step}
                    </div>
                    <div className="font-grotesk text-base uppercase text-cream mt-0.5 tracking-wide group-hover:text-neon transition-colors duration-500">
                      {step.title}
                    </div>
                    <p className="font-mono text-xs text-cream/50 mt-1 leading-relaxed line-clamp-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper delay={400}>
          <div className="mt-16 max-w-md mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-grotesk text-[28px] md:text-[36px] uppercase text-cream">
                Buy Direct with Phantom
              </h3>
              <p className="font-mono text-xs text-cream/40 mt-2">
                Already have Phantom? Connect and buy in seconds.
              </p>
            </div>
            <PhantomBuyCard />
          </div>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <div id="tokenomics" className="mt-16">
            <h3 className="font-grotesk text-[32px] md:text-[48px] uppercase text-cream text-center mb-10">
              Tokenomics
            </h3>
            <div className="max-w-2xl mx-auto space-y-3">
              {TOKENOMICS.map((item, i) => (
                <div key={i} className="liquid-glass rounded-[16px] p-4 flex items-center justify-between hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(0,255,136,0.03)] transition-all duration-500">
                  <span className="font-mono text-xs uppercase text-cream/70">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-grotesk text-sm uppercase text-cream">{item.value}</span>
                    <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-neon" style={{ width: item.pct }} />
                    </div>
                    <span className="font-mono text-xs text-neon">{item.pct}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={copyCa}
                className="liquid-glass rounded-[16px] px-6 py-4 font-mono text-sm uppercase text-cream/70 hover:bg-white/10 hover:text-neon hover:shadow-[0_0_30px_rgba(0,255,136,0.1)] transition-all duration-300 flex items-center gap-3 group"
              >
                <span className="text-neon group-hover:scale-110 transition-transform duration-300">CA:</span>
                <code className="font-mono text-xs">{CA_PLACEHOLDER}</code>
                <span className="text-[10px] text-cream/40">{caCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
