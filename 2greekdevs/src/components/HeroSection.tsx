import { motion } from 'framer-motion';
import { ChevronDown, Play, Star, Users, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import dev1 from '/public/Dev1.png';
import dev2 from '/public/Dev2.png';



const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: Code, value: "100+", label: "Projects Completed" },
    { icon: Star, value: "5.0", label: "Client Rating" },
    { icon: Zap, value: "24/7", label: "Support" }
  ];

  const devs = [
    {
      name: "Ευδόκιμος Πετράκης",
      roleBadges: [
        { text: "Full-Stack", color: "bg-greekblue/10 text-greekblue border-greekblue/20" },
        { text: "Game Dev", color: "bg-greekteal/10 text-greekteal border-greekteal/20" },
      ],
      src: "/Dev1.png",
      socials: [
        { icon: "ri-github-fill", link: "#" },
        { icon: "ri-linkedin-box-fill", link: "#" },
        { icon: "ri-instagram-fill", link: "#" }
      ]
    },
    {
      name: "Αναστάσιος Μπίζτας",
      roleBadges: [
        { text: "UI/UX", color: "bg-greekteal/10 text-greekteal border-greekteal/20" },
        { text: "Frontend", color: "bg-greekblue/10 text-greekblue border-greekblue/20" },
      ],
      image: "/Dev2.png",
      socials: [
        { icon: "ri-github-fill", link: "#" },
        { icon: "ri-linkedin-box-fill", link: "#" },
        { icon: "ri-instagram-fill", link: "#" }
      ]
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-greekblue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-greekteal/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span className="text-greekblue">2Greek</span>
                <span className="text-greekteal">Devs</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed mx-auto lg:mx-0">
                Crafting innovative digital solutions with cutting-edge technology and Greek excellence. Transform your ideas into powerful web applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-greekblue to-greekblue-hover hover:from-greekblue-hover hover:to-greekblue text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-medium rounded-xl border-2 hover:bg-greekteal/10 hover:border-greekteal transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="h-5 w-5 text-greekteal" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Developer Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center"
          >
            {devs.map((dev, i) => (
              <motion.div
                key={i}
                className="w-[300px] bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/30 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-greekblue/5 to-transparent"></div>
                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-greekblue/20 to-greekteal/20 p-1">
                      <img 
                        src={dev.image}
                        alt={dev.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{dev.name}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {dev.roleBadges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className={badge.color}
                        >
                          {badge.text}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 pt-3">
                      {dev.socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-greekteal transition-colors text-xl"
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 1, y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <button
            onClick={scrollToAbout}
            className="flex items-center flex-col text-muted-foreground hover:text-greekteal transition-colors"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;