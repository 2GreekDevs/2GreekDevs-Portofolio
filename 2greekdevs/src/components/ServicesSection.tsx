import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  ShoppingCart,
  Palette,
  Database,
  Zap,
  Globe,
  Shield,
  Cloud,
  Search,
  Bot,
  Headset,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const colorClasses = {
  greekblue: {
    bg: 'bg-blue-600/10',
    text: 'text-blue-600',
    border: 'border-blue-600/20',
  },
  greekteal: {
    bg: 'bg-teal-600/10',
    text: 'text-teal-600',
    border: 'border-teal-600/20',
  },
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description:
        'End-to-end web application development using cutting-edge technologies like React, Node.js, and modern databases.',
      features: ['React & Next.js', 'TypeScript', 'Node.js Backend', 'Database Design'],
      color: 'greekblue',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Cross-platform mobile applications with native performance using React Native and Flutter frameworks.',
      features: ['React Native', 'Flutter', 'Cross-Platform', 'App Store Publishing'],
      color: 'greekteal',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description:
        'Complete online stores with payment processing, inventory management, and advanced analytics dashboards.',
      features: ['Payment Integration', 'Inventory System', 'Analytics', 'Multi-vendor Support'],
      color: 'greekblue',
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Branding',
      description:
        'Professional design services including user research, wireframing, prototyping, and complete brand identity.',
      features: ['User Research', 'Prototyping', 'Brand Identity', 'Design Systems'],
      color: 'greekteal',
    },
    {
      icon: Shield,
      title: 'GDPR & Legal Tech Compliance',
      description:
        'Ensuring digital platforms comply with GDPR, cookie consent, data storage laws, and offering audits for legal readiness.',
      features: ['Cookie Consent', 'Data Privacy', 'Audit Reports', 'Policy Generator'],
      color: 'greekblue',
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description:
        'Comprehensive digital marketing strategies including SEO optimization, content marketing, and performance analytics.',
      features: ['SEO Optimization', 'Content Strategy', 'Analytics Setup', 'Performance Tracking'],
      color: 'greekteal',
    },
    {
      icon: Bot,
      title: 'Custom Discord Bot Development',
      description:
        'Build intelligent, scalable Discord bots tailored for community, automation, business, or SaaS needs.',
      features: ['Custom Commands', 'Slash & Button Support', 'Database Integration', 'API/Webhook Bots'],
      color: 'greekblue',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description:
        'Comprehensive security audits, GDPR compliance, and implementation of advanced security measures.',
      features: ['Security Audits', 'GDPR Compliance', 'Data Protection', 'Security Training'],
      color: 'greekteal',
    },
    {
      icon: Globe,
      title: 'Discord Server Setup & Automation',
      description:
        'Professional, branded Discord servers with custom roles, bots, channel layouts, permissions, and monetization tools.',
      features: ['Server Structuring', 'Role & Permission Setup', 'Bot Integration', 'Monetization Systems'],
      color: 'greekblue',
    },
    {
      icon: Headset,
      title: 'IT Support & Remote Assistance',
      description:
        'Reliable technical support for systems, software, servers, and networks—on-site or remotely.',
      features: ['Remote Troubleshooting', 'PC & Server Setup', 'Software Installations', 'Security & Backups'],
      color: 'greekteal',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-600/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 mt-4 px-4 py-2 text-sm font-medium bg-blue-600/10 border-blue-600/20"
          >
            <Globe className="mr-2 h-4 w-4" />
            Our Services
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive digital services that drive business
            growth and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Carousel
            currentIndex={activeIndex}
            onChange={(index) => setActiveIndex(index)}
            opts={{ align: 'start', loop: true }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="hover-lift h-full">
                    <Card className="card-professional h-full group">
                      <CardHeader className="space-y-4">
                        <div
                          className={`${colorClasses[service.color].bg} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <service.icon
                            className={`${colorClasses[service.color].text} h-6 w-6 md:h-8 md:w-8`}
                          />
                        </div>

                        <div className="space-y-2">
                          <CardTitle className="text-lg md:text-xl font-bold">
                            {service.title}
                          </CardTitle>
                          <div
                            className={`${colorClasses[service.color].text} text-md font-semibold`}
                          >
                            {/* Optional price or subtitle */}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-5 md:space-y-6">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-xs md:text-sm text-foreground">
                            Key Features:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <Badge
                                key={featureIndex}
                                variant="secondary"
                                className={`${colorClasses[service.color].bg} ${colorClasses[service.color].text} ${colorClasses[service.color].border} text-xs`}
                              >
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows: show only on lg+ screens */}
            <CarouselPrevious className="hidden lg:flex items-center justify-center absolute left-[-3rem] top-1/2 w-10 h-10 rounded-full hover:bg-blue-600 shadow-md -translate-y-1/2 cursor-pointer" aria-label="Previous" />
            <CarouselNext className="hidden lg:flex items-center justify-center absolute right-[-3rem] top-1/2 w-10 h-10 rounded-full hover:bg-blue-600 shadow-md -translate-y-1/2 cursor-pointer" aria-label="Next" />
          </Carousel>

          {/* Dots: show for mobile & tablet only */}
          <div className="flex justify-center mt-6 space-x-2 sm:flex lg:hidden">
            {services.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIndex ? 'true' : undefined}
                className={`w-3 h-3 rounded-full transition-colors ${i === activeIndex ? 'bg-blue-600' : 'bg-muted'}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
