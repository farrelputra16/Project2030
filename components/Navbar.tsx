import { NAV_ITEMS, TOKEN_SYMBOL } from '@/lib/constants';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center shrink-0">
          <span className="font-heading italic text-brand-green text-xl">P</span>
        </a>
        <div className="hidden lg:flex items-center liquid-glass rounded-full px-1.5 py-1.5 gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-brand-green font-body transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#how-to-buy"
            className="rounded-full px-5 py-2 text-sm font-semibold bg-brand-green text-black whitespace-nowrap hover:bg-white transition-colors ml-2"
          >
            Buy {TOKEN_SYMBOL}
            <svg className="inline-block ml-1.5 -mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
        <div className="w-12 h-12 lg:hidden flex items-center justify-center">
          <a href="#how-to-buy" className="rounded-full px-4 py-2 text-xs font-semibold bg-brand-green text-black whitespace-nowrap">
            Buy {TOKEN_SYMBOL}
          </a>
        </div>
        <div className="w-12 h-12 hidden lg:block" />
      </div>
    </nav>
  );
}
