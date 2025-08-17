import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "5+ years of experience delivering high-quality web solutions across various industries."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule without compromising quality."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure your project meets the highest standards."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 customer support and maintenance services to keep your solution running smoothly."
    },
    {
      icon: Zap,
      title: "Modern Technology",
      description: "We use cutting-edge technologies and best practices for optimal performance and scalability."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We serve clients worldwide with multilingual support and international best practices."
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden my-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose 2GreekDevs?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           We combine Greek innovation with international expertise to deliver exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional h-full hover-lift group">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-greekblue/20 to-greekteal/20 group-hover:from-greekblue/30 group-hover:to-greekteal/30 transition-all duration-300 mb-4">
                      <benefit.icon className="h-8 w-8 text-greekblue group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;