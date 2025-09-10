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
import { Helmet } from 'react-helmet';

const Index = () => {
  // Load Font Awesome dynamically
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
      {/* SEO Meta */}
      <Helmet>
        <title>2GreekDevs - Web Development, Apps, Bots & Design</title>
        <meta
          name="description"
          content="2GreekDevs offers professional web development, Discord bots, mobile apps, and design solutions. Explore our projects, services, and expertise."
        />
        <link rel="canonical" href="https://2greekdevs.gr/" />
        <meta property="og:title" content="2GreekDevs - Web Development, Apps, Bots & Design" />
        <meta
          property="og:description"
          content="2GreekDevs offers professional web development, Discord bots, mobile apps, and design solutions. Explore our projects, services, and expertise."
        />
        <meta property="og:url" content="https://2greekdevs.gr/" />
      </Helmet>

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
