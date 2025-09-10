import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, Gamepad2, ShoppingCart } from 'lucide-react';

const AboutSection = () => {
 

  return (
    <section id="about" className="py-10 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-greekteal/10 border border-greekteal/20 mb-4">
              <div className="w-1.5 h-1.5 bg-greekteal rounded-full"></div>
              <span className="text-sm font-medium text-greekteal">About 2GreekDevs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Who We Are
            </h2>
            <div className="mt-2 mx-auto w-20 h-1 bg-gradient-to-r from-greekteal to-greekblue rounded-full"></div>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  
                  We are an online business primarily focused on website development and integrating an electronic library for data storage and usage across any website. For example, we can create e-shops, portfolios, blogs, and various other types of sites.
                  
                </p>
                <p className="text-muted-foreground">
                  
                   We also work on logo creation and editing. Additionally, we are beginner-level game developers. Lastly, we have a Discord server where we share everything about our work and offer or sell Discord servers.
                  
                </p>
              </div>
              
              <Button 
                asChild
                className=" bg-indigo-600 hover:bg-indigo-700 text-white font-medium group"
              >
                <a 
                  href="https://discord.gg/dHCvUaFAAH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                  >
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"></path>
                  </svg>
                  Join our Discord Server
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-greekteal/10 to-greekblue/10 rounded-2xl p-8 border border-greekteal/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Years Experience", value: "5+" },
                    { label: "Projects Completed", value: "8+" },
                    { label: "Happy Clients", value: "10+" },
                    { label: "Discord Members", value: "50+" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-greekteal">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-greekteal/20 to-greekblue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-greekblue/20 to-greekteal/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;