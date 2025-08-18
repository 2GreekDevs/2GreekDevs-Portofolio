
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Add font awesome script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
         <ServicesSection />
         <WhyChooseUsSection />
        <ProjectsSection />
        <FAQSection />
        <ContactSection />
        
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
