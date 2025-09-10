import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import {
  ShieldCheck,
  UserCheck,
  Bell,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// import monitoringImage from "@/assets/monitoring.png";
// import enforcementImage from "@/assets/enforcement.png";
// import communityImage from "@/assets/community.png";

const ModerationTeam = () => {
  const slalomSections = [
    {
      title: "24/7 Server Monitoring",
      description:
        "Our moderation team ensures your community stays safe and welcoming around the clock. We monitor chats, activity, and behavior to prevent issues before they escalate.",
      features: [
        "24/7 Active Moderation",
        "Live Chat Monitoring",
        "Spam & Raid Protection",
        "Report Handling",
      ],
    //   image: monitoringImage,
      icon: Bell,
      isReversed: false,
    },
    {
      title: "Rule Enforcement & Safety",
      description:
        "We enforce your community rules with fairness and consistency. Our team manages warnings, mutes, bans, and escalations while protecting members from toxicity or harassment.",
      features: [
        "Rule Enforcement",
        "Warning & Escalation System",
        "Mute/Ban Management",
        "Toxicity Prevention",
      ],
    //   image: enforcementImage,
      icon: ShieldCheck,
      isReversed: true,
    },
    {
      title: "Community Growth & Engagement",
      description:
        "Moderation isn’t just about rules — it’s about building a healthy environment where members want to stay. We foster positive interactions and community engagement.",
      features: [
        "Positive Community Culture",
        "Conflict Resolution",
        "Event Support",
        "Member Retention Strategies",
      ],
    //   image: communityImage,
      icon: UserCheck,
      isReversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Moderation Team | 2GreekDevs</title>
        <meta
          name="description"
          content="Professional Discord moderation services by 2GreekDevs. 24/7 monitoring, rule enforcement, and community management to keep your server safe and thriving."
        />
        <link
          rel="canonical"
          href="https://2greekdevs.gr/discord-services/moderation-team"
        />
        <meta property="og:title" content="Moderation Team - 2GreekDevs" />
        <meta
          property="og:description"
          content="Keep your server safe with 2GreekDevs' professional moderation team. 24/7 monitoring, rule enforcement, and community growth support."
        />
        <meta
          property="og:url"
          content="https://2greekdevs.gr/discord-services/moderation-team"
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
              <ShieldCheck className="h-4 w-4 mr-2" />
              Moderation Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Moderation for Your Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our trained moderation team protects your server 24/7, ensuring a
              safe, fair, and engaging space for all your members.
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
                        // src={section.image}
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
              Ready to Secure Your Discord Server?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our moderation team will protect your community and help it grow
              without the stress of managing it alone.
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

export default ModerationTeam;
