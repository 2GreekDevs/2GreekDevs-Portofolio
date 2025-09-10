import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import {
  Bot,
  Workflow,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import customBotsImage from "@/assets/bot.png";
import automationImage from "@/assets/automation.png";
import moderationImage from "@/assets/securityBot.png";

const DiscordBots = () => {
  const slalomSections = [
    {
      title: "Custom Bot Development",
      description:
        "We design and build powerful Discord bots tailored to your community. From unique commands to advanced features, our bots are made to fit your exact needs.",
      features: [
        "Custom Commands",
        "Unique Features",
        "API Integrations",
        "Fully Scalable",
      ],
      image: customBotsImage,
      icon: Bot,
      isReversed: false,
    },
    {
      title: "Automation & Workflows",
      description:
        "Automate repetitive tasks and improve server efficiency with smart bots. From role assignment to ticket systems, we make your server run smoothly.",
      features: [
        "Auto Role Management",
        "Ticket Systems",
        "Event Automation",
        "Seamless Workflows",
      ],
      image: automationImage,
      icon: Workflow,
      isReversed: true,
    },
    {
      title: "Security & Moderation Bots",
      description:
        "Protect your community with bots designed for moderation and security. Keep spam away, verify members, and ensure a safe environment for everyone.",
      features: [
        "Anti-Spam Systems",
        "Auto Moderation",
        "Verification Tools",
        "Custom Moderation Rules",
      ],
      image: moderationImage,
      icon: Shield,
      isReversed: false,
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Discord Bots | 2GreekDevs</title>
        <meta
          name="description"
          content="Custom Discord bots by 2GreekDevs — automation, integrations, and performance-focused solutions that enhance your community."
        />
        <link
          rel="canonical"
          href="https://2greekdevs.gr/discord-services/bots"
        />
        <meta property="og:title" content="Discord Bots - 2GreekDevs" />
        <meta
          property="og:description"
          content="Automate, engage, and scale your Discord server with custom bots built by 2GreekDevs. Unique features, integrations, and optimized performance."
        />
        <meta
          property="og:url"
          content="https://2greekdevs.gr/discord-services/bots"
        />
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
              <Bot className="h-4 w-4 mr-2" />
              Discord Bots
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Custom Discord Bot Development
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Enhance your server with automation, moderation, and unique
              features. We build scalable bots that empower your community.
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
              Ready to Power Up Your Discord Server?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let’s build you a smart, scalable Discord bot that makes your
              community thrive.
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

export default DiscordBots;
