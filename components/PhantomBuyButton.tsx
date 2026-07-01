import { usePhantom } from '@/hooks/usePhantom';
import { TOKEN_SYMBOL } from '@/lib/constants';

export default function PhantomBuyButton() {
  const { isInstalled, isConnected, walletAddress, connecting, connect, disconnect, buyTokens } = usePhantom();

  const handleBuy = async () => {
    if (!isInstalled) {
      window.open('https://phantom.app/', '_blank');
      return;
    }
    if (!isConnected) {
      await connect();
      return;
    }
    try {
      const sig = await buyTokens(0.1);
      if (sig) {
        alert(`Transaction sent! Signature: ${sig.slice(0, 8)}...${sig.slice(-4)}`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Transaction failed';
      alert(msg);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleBuy}
        disabled={connecting}
        className="double-bezel-strong group disabled:opacity-40"
      >
        <div className="double-bezel-strong-inner px-7 py-3.5 flex items-center gap-3 text-sm font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]">
          {connecting ? (
            <>
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.4 31.4" />
              </svg>
              Connecting...
            </>
          ) : isConnected ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              Buy {TOKEN_SYMBOL} with SOL
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </span>
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Connect Phantom
            </>
          )}
        </div>
      </button>
      {isConnected && walletAddress && (
        <div className="flex items-center gap-2 text-xs text-white/30 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
          {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          <button onClick={disconnect} className="text-white/20 hover:text-white/50 transition-colors ml-1 text-[11px]">
            Disconnect
          </button>
        </div>
      )}
      {!isInstalled && (
        <p className="text-xs text-white/30 text-center font-body font-light">
          Phantom not detected.{' '}
          <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-brand-green underline underline-offset-2">
            Install Phantom
          </a>
        </p>
      )}
    </div>
  );
}
