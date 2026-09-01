import { features } from '../data';
import { HeroSection } from './home/HeroSection';
import { FeatureSection } from './home/FeatureSection';
import { DeepLinksSection } from './home/DeepLinksSection';
import { PixelsSection } from './home/PixelsSection';
import { TestimonialsSection } from './home/TestimonialsSection';
import { PricingSection } from './home/PricingSection';
import { FaqSection } from './home/FaqSection';
import { CtaSection } from './home/CtaSection';
import { Footer, Navbar } from '../components/layout';

export function HomePage() {
  return (
    <div className="page page--home">
      <Navbar landing />
      <HeroSection />
      {features.map((feature) => (
        <FeatureSection key={feature.id} feature={feature} />
      ))}
      <DeepLinksSection />
      <PixelsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
