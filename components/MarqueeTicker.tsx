import { TOKEN_SYMBOL, CA_PLACEHOLDER } from '@/lib/constants';

const TICKER_ITEMS = [
  `${TOKEN_SYMBOL} /// Community Powered /// Fair Launch /// No Presale ///`,
  `CA: ${CA_PLACEHOLDER} ///`,
  `One Meme. One Mission. The Future is Ours. ///`,
  `${TOKEN_SYMBOL} /// Built on Solana /// Lightning Fast ///`,
];

export default function MarqueeTicker() {
  return (
    <div className="bg-[#050505] border-y border-white/5 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, loop) => (
          <div key={loop} className="flex items-center gap-0 mx-0">
            {TICKER_ITEMS.map((item, i) => (
              <span key={`${loop}-${i}`} className="font-mono text-[11px] uppercase text-cream/20 tracking-widest mx-8">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
