import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import HowItWorksSection from '../components/HowItWorksSection';
import ComparisonSection from '../components/ComparisonSection';
import ExtensionDownload from '../components/ExtensionDownload';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CallToAction />
      <HowItWorksSection />
      <ComparisonSection />
      <ExtensionDownload />
      <FAQ />
      <Footer />
    </>
  );
}