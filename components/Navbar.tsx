const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'How to Buy', href: '#how-to-buy' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 md:pt-5">
      <div className="flex items-center justify-between w-full max-w-[1831px] px-4 md:px-6 lg:px-8">
        <a href="#home" className="font-grotesk text-base uppercase tracking-wider text-cream">
          PROJECT 2030
        </a>

        <div className="hidden lg:block">
          <div className="liquid-glass rounded-[28px] px-[52px] py-[24px] flex items-center gap-8">
            {NAV_ITEMS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-grotesk text-[13px] uppercase tracking-wider text-cream hover:text-neon transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="w-20" />
      </div>
    </nav>
  );
}
