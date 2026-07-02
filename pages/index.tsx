import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NFTCardGrid from '@/components/NFTCardGrid';
import StatsSection from '@/components/StatsSection';
import RoadmapSection from '@/components/RoadmapSection';
import MarqueeTicker from '@/components/MarqueeTicker';
import CTASection from '@/components/CTASection';
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#010828] text-cream overflow-x-hidden">
      <div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ mixBlendMode: 'lighten' }}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'url(/texture.png) center/cover',
            opacity: 0.6,
          }}
        />
      </div>
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <StatsSection />
      <NFTCardGrid />
      <RoadmapSection />
      <CTASection />
      <ClosingSection />
    </div>
  );
}
