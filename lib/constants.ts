export const SITE_NAME = 'PROJECT 2030';
export const TAGLINE = 'ONE MEME. ONE MISSION. THE FUTURE IS OURS.';
export const TOKEN_SYMBOL = '$2030';
export const TOTAL_SUPPLY = 69_000_000;

export const LINKS = {
  twitter: 'https://twitter.com/project2030',
  telegram: 'https://t.me/project2030',
  pumpfun: 'https://pump.fun',
  solscan: 'https://solscan.io',
};

export const VIDEOS = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4',
  mission: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4',
};

export const CA_PLACEHOLDER = 'TBA — Coming Soon';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Mission', href: '#mission' },
  { label: 'How to Buy', href: '#how-to-buy' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'FAQ', href: '#faq' },
];

export const BUY_STEPS = [
  {
    step: '01',
    title: 'Install Phantom',
    desc: 'Download Phantom wallet from the official app store or Chrome extension store. Create a new wallet and securely save your seed phrase.',
  },
  {
    step: '02',
    title: 'Fund with SOL',
    desc: 'Buy Solana (SOL) from an exchange like Coinbase, Binance, or Kraken. Transfer your SOL to your Phantom wallet address.',
  },
  {
    step: '03',
    title: 'Go to PumpFun',
    desc: 'Visit pump.fun and connect your Phantom wallet. Search for PROJECT 2030 ($2030) in the live tokens section.',
  },
  {
    step: '04',
    title: 'Buy $2030',
    desc: 'Set the amount of SOL you want to swap and confirm the transaction in Phantom. You now hold PROJECT 2030 tokens!',
  },
];

export const FAQS = [
  {
    q: 'What is PROJECT 2030?',
    a: 'PROJECT 2030 is a community-driven memecoin on the Solana blockchain. It started as a meme with a mission — to build one of the strongest crypto communities by the year 2030.',
  },
  {
    q: 'When and where will $2030 launch?',
    a: '$2030 will launch on PumpFun, a fair launchpad on Solana. The exact date will be announced on our Twitter/X and Telegram. No presale — everyone buys at the same price.',
  },
  {
    q: 'How do I buy $2030?',
    a: 'You need a Phantom wallet with some SOL. Visit pump.fun, connect your wallet, and swap SOL for $2030. See our "How to Buy" section above for a detailed guide.',
  },
  {
    q: 'What is the total supply?',
    a: 'The total supply is 69,000,000 $2030 tokens. 70% goes to liquidity, 15% community airdrops, 10% marketing/CEX listings, and 5% team (vested).',
  },
  {
    q: 'Is the contract renounced?',
    a: 'Yes. The contract will be renounced at launch to ensure fairness and transparency. No one can mint more tokens or modify the contract.',
  },
  {
    q: 'What makes PROJECT 2030 different?',
    a: 'We combine the power of memes with real community building. Our roadmap includes milestones leading to 2030, with NFT collections, merchandise, DAO governance, and charitable initiatives.',
  },
];

export const TOKENOMICS = [
  { label: 'Total Supply', value: '69,000,000', pct: '100%' },
  { label: 'Liquidity Pool', value: 'TBD at launch', pct: '70%', color: '#00ff88' },
  { label: 'Community & Airdrop', value: 'TBD at launch', pct: '15%', color: '#00cc6a' },
  { label: 'Marketing & CEX', value: 'TBD at launch', pct: '10%', color: '#009955' },
  { label: 'Team (Vested)', value: 'TBD at launch', pct: '5%', color: '#006633' },
];

export const MISSION_FEATURES = [
  {
    icon: 'M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z',
    title: 'Community Driven',
    desc: 'Built by the community, for the community. No VCs, no presale — just pure decentralized energy.',
    tags: ['Fair Launch', 'No Presale', 'Community First', 'Transparent'],
  },
  {
    icon: 'M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z',
    title: 'Solana Native',
    desc: 'Lightning-fast transactions on Solana with minimal fees. Powered by PumpFun launchpad.',
    tags: ['Solana', 'Fast Trades', 'Low Fees', 'PumpFun'],
  },
  {
    icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z',
    title: 'Mission 2030',
    desc: 'Our goal: reach the moon by 2030. Not just a meme — a movement with milestones and purpose.',
    tags: ['Roadmap', 'Milestones', 'Long-term', 'Vision'],
  },
];
