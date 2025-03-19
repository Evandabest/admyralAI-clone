import HeroSection from '@/components/HeroSection';
import WorkflowSection from '@/components/WorkflowSection';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import PartnersSection from '@/components/PartnersSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SecuritySection from '@/components/SecuritySection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <WorkflowSection />
      <FeaturesSection />
      <ComparisonSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <SecuritySection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
