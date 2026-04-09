import { useRef, useCallback } from 'react';
import Hero from '../components/landing/Hero';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import ProcessSection from '../components/landing/ProcessSection';
import CasesSection from '../components/landing/CasesSection';
import CalculatorSection from '../components/landing/CalculatorSection';
import PackagesSection from '../components/landing/PackagesSection';
import WhyUsSection from '../components/landing/WhyUsSection';
import FormatSection from '../components/landing/FormatSection';
import FAQSection from '../components/landing/FAQSection';
import FinalCTA from '../components/landing/FinalCTA';
import FloatingCTA from '../components/landing/FloatingCTA';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

export default function Landing() {
  const formRef = useRef(null);

  const scrollToForm = useCallback(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen">
      <Header onCTAClick={scrollToForm} />
      <Hero onCTAClick={scrollToForm} />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection onCTAClick={scrollToForm} />
      <CasesSection />
      <CalculatorSection onCTAClick={scrollToForm} />
      <PackagesSection onCTAClick={scrollToForm} />
      <WhyUsSection />
      <FormatSection />
      <FAQSection onCTAClick={scrollToForm} />
      <FinalCTA formRef={formRef} />
      <FloatingCTA onCTAClick={scrollToForm} />
      <Footer />
    </div>
  );
}
