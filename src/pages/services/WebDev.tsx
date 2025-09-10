import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { 
  Code, 
  CheckCircle, 
  ArrowRight, 
  MonitorSmartphone, 
  BarChart3 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

import webTechImage from '@/assets/web-tech.png';
import responsiveImage from '@/assets/responsive.png';
import seoImage from '@/assets/seo.png';

const WebDevelopment = () => {
  const slalomSections = [
    {
      title: "Modern Web Technologies",
      description:
        "We build websites using the latest technologies including React, Next.js, and TypeScript. Our modern approach ensures your website is fast, secure, and scalable for the future.",
      features: ["React & Next.js", "TypeScript", "Modern Architecture", "Cloud Deployment"],
      image: webTechImage,
      icon: Code, // 💻 Matches coding & modern tech
      isReversed: false,
    },
    {
      title: "Responsive Design Excellence",
      description:
        "Every website we create is fully responsive and optimized for all devices. From mobile phones to desktop computers, your users will have a perfect experience across all platforms.",
      features: ["Mobile-First Design", "Cross-Browser Compatible", "Touch-Friendly UI", "Fast Loading Speed"],
      image: responsiveImage,
      icon: MonitorSmartphone, // 📱 Matches responsive / multi-device
      isReversed: true,
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "We don't just build beautiful websites - we build websites that perform. Our SEO optimization and performance tuning ensure your site ranks well and loads lightning fast.",
      features: ["SEO Optimized", "Performance Monitoring", "Analytics Integration", "Speed Optimization"],
      image: seoImage,
      icon: BarChart3, // 📊 Matches analytics & SEO
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Web Development | 2GreekDevs</title>
        <meta
          name="description"
          content="2GreekDevs builds modern, responsive, and SEO-friendly websites using React, Next.js, and TypeScript. Fast, secure, and scalable web development tailored to your needs."
        />
        <link rel="canonical" href="https://2greekdevs.gr/web-development" />
        <meta property="og:title" content="Web Development - 2GreekDevs" />
        <meta
          property="og:description"
          content="Transform your ideas into powerful, scalable web applications. Explore 2GreekDevs’ modern web development services with React, Next.js, and TypeScript."
        />
        <meta property="og:url" content="https://2greekdevs.gr/web-development" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4">
              <Code className="h-4 w-4 mr-2" />
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Web Development Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your ideas into powerful, scalable web applications with our expert development team. We build modern, responsive websites that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slalom Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-24">
            {slalomSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${section.isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
                >
                  {/* Image Section */}
                  <div className="flex-1 relative group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-3">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {section.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your web development needs and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/#contact">
  <Button size="lg" className="bg-primary hover:bg-primary/90">
    Contact Us Today
  </Button>
</a>

              <Button size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebDevelopment;
