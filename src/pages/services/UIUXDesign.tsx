import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Palette,
  CheckCircle,
  ArrowRight,
  Search,
  LayoutTemplate,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import researchImage from "@/assets/research.png";
import wireframeImage from "@/assets/wireframe.png";
import visualDesignImage from "@/assets/visual.png";

const UIUXDesign = () => {
  const slalomSections = [
    {
      title: "User Research & Strategy",
      description:
        "We start every design project with thorough user research to understand your audience's needs, behaviors, and pain points. This data-driven approach ensures we create designs that truly resonate with users.",
      features: [
        "User Interviews",
        "Market Research",
        "Persona Development",
        "Journey Mapping",
      ],
      image: researchImage,
      icon: Search, // 🔍 Matches "research"
      isReversed: false,
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Before creating the final design, we build detailed wireframes and interactive prototypes. This allows us to test and refine the user experience, ensuring optimal usability before development begins.",
      features: [
        "Low-Fi Wireframes",
        "Interactive Prototypes",
        "Usability Testing",
        "Design Validation",
      ],
      image: wireframeImage,
      icon: LayoutTemplate, // 🖼 Matches "wireframes"
      isReversed: true,
    },
    {
      title: "Visual Design & Systems",
      description:
        "Our visual designs combine aesthetics with functionality, creating beautiful interfaces that align with your brand. We also develop comprehensive design systems for consistency across all touchpoints.",
      features: [
        "Visual Identity",
        "Design Systems",
        "Brand Consistency",
        "Accessibility Focus",
      ],
      image: visualDesignImage,
      icon: Layers, // 🪜 Matches "systems" & layered design
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>UI/UX Design | 2GreekDevs</title>
        <meta
          name="description"
          content="Discover 2GreekDevs' UI/UX design services — from user research and prototyping to polished design systems. We craft user-centered solutions that balance beauty and usability."
        />
        <link rel="canonical" href="https://2greekdevs.gr/ui-ux-design" />
        <meta property="og:title" content="UI/UX Design - 2GreekDevs" />
        <meta
          property="og:description"
          content="Discover 2GreekDevs' UI/UX design services — from research and strategy to visual design and accessibility. User-centered solutions that drive results."
        />
        <meta property="og:url" content="https://2greekdevs.gr/ui-ux-design" />
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
              <Palette className="h-4 w-4 mr-2" />
              UI/UX Design
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              User-Centered Design Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create intuitive, beautiful interfaces that users love. Our design
              process focuses on user needs, business goals, and modern design
              principles.
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
                  className={`flex flex-col ${
                    section.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-12 lg:gap-16`}
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
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
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
              Ready to Improve Your User Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create beautiful, user-friendly designs that convert
              visitors into customers.
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

export default UIUXDesign;
