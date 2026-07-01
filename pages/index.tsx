import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import HowToBuySection from '@/components/HowToBuySection';
import TokenomicsSection from '@/components/TokenomicsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white font-body">
      <HeroSection />
      <MissionSection />
      <HowToBuySection />
      <TokenomicsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
