import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import {
  Server,
  ShieldCheck,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import serverSetupImage from "@/assets/setup.png";
import moderationImage from "@/assets/secure.png";
import communityImage from "@/assets/engage.png";

const DiscordSetup = () => {
  const slalomSections = [
    {
      title: "Professional Server Setup",
      description:
        "We create fully optimized Discord servers tailored to your brand and community. From roles and channels to permissions and integrations, everything is set up for maximum efficiency.",
      features: [
        "Custom Roles & Permissions",
        "Optimized Channel Structure",
        "Branded Visual Identity",
        "Third-Party Integrations",
      ],
      image: serverSetupImage,
      icon: Server, // 🖥 Professional setup
      isReversed: false,
    },
    {
      title: "Security & Moderation Tools",
      description:
        "Keep your community safe with advanced moderation tools and bots. We configure everything from anti-spam systems to verification flows so your members feel secure.",
      features: [
        "Anti-Spam Protection",
        "Verification Systems",
        "Bot-Powered Moderation",
        "Role-Based Access",
      ],
      image: moderationImage,
      icon: ShieldCheck, // 🛡 Matches security
      isReversed: true,
    },
    {
      title: "Engaging Community Experience",
      description:
        "Your Discord server isn’t just a chatroom – it’s a community hub. We enhance engagement with event setups, custom bots, and interactive features that keep members coming back.",
      features: [
        "Event Management",
        "Gamification Systems",
        "Custom Welcome Flows",
        "Community Growth Tools",
      ],
      image: communityImage,
      icon: Users, // 👥 Matches engagement
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Discord Server Setup | 2GreekDevs</title>
        <meta
          name="description"
          content="2GreekDevs sets up professional Discord servers with custom roles, moderation tools, and community features. Safe, optimized, and tailored to your needs."
        />
        <link
          rel="canonical"
          href="https://2greekdevs.gr/discord-services/setup"
        />
        <meta property="og:title" content="Discord Server Setup - 2GreekDevs" />
        <meta
          property="og:description"
          content="Get your Discord community professionally set up with secure moderation, engaging features, and custom branding by 2GreekDevs."
        />
        <meta
          property="og:url"
          content="https://2greekdevs.gr/discord-services/setup"
        />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4">
              <Server className="h-4 w-4 mr-2" />
              Discord Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Discord Server Setup
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Launch a professional, secure, and engaging Discord community. We
              handle setup, moderation, and optimization so you can focus on
              growing your audience.
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <div className="w-12 h-12 rounded-lg bg-indigo-500/30 backdrop-blur-sm flex items-center justify-center mb-3">
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
              Ready to Launch Your Server?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us build you a professional Discord server that’s safe,
              engaging, and tailored to your community’s needs.
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

export default DiscordSetup;
