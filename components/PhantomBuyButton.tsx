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
        className="liquid-glass-strong rounded-full px-8 py-4 text-base font-medium text-white flex items-center gap-3 hover:brightness-110 transition-all pulse-green disabled:opacity-50"
      >
        {connecting ? (
          <>
            <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.4 31.4" />
            </svg>
            Connecting...
          </>
        ) : isConnected ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
            Buy {TOKEN_SYMBOL} with SOL
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Connect Phantom
          </>
        )}
      </button>
      {isConnected && walletAddress && (
        <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
          <span className="w-2 h-2 rounded-full bg-brand-green" />
          {walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}
          <button onClick={disconnect} className="text-white/30 hover:text-white/60 transition-colors ml-1">
            Disconnect
          </button>
        </div>
      )}
      {!isInstalled && (
        <p className="text-xs text-white/40 text-center">
          Phantom not detected.{' '}
          <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-brand-green underline">
            Install Phantom
          </a>
        </p>
      )}
    </div>
  );
}
