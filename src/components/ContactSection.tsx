import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Honeypot check
    if ((form._gotcha as HTMLInputElement).value) {
      console.warn("Spam detected! Submission blocked.");
      setIsSubmitting(false);
      return;
    }

    // Optional timestamp check (less than 3s submission)
    const now = Date.now();
    const formTime = parseInt((form._timestamp as HTMLInputElement).value, 10);
    if (now - formTime < 3000) {
      console.warn("Spam detected! Too fast.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xbjnwrod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: '', email: '', message: '', subject: '' });
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "2greekdevs24@gmail.com",
      description: "Send us an email anytime"
    },
        {
      icon: Clock,
      title: "Working Hours",
      details: "24/7 Support",
      description: "We're always here to help"
    },
    {
      icon: Phone,
      title: "Call Us",
      details2: "+30 6988529373",
      description: "Mon-Fri from 9am to 6pm"
    },
        {
      icon: Phone,
      title: "Call Us",
      details2: "+30 6988529373",
      description: "Mon-Fri from 9am to 6pm"
    }
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   details: "SOON",
    //   description: "Come say hello at our office"
    // },

  ];

  const inquiryOptions = [
    { value: 'website-development', label: 'Website Development' },
    { value: 'ecommerce-solution', label: 'E-commerce Solution' },
    { value: 'logo-design', label: 'Logo & Branding Design' },
    { value: 'seo-optimization', label: 'SEO Optimization' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'other', label: 'Other Services' }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden pb-6 ">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We're here to help you transform your ideas into powerful digital solutions. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-professional h-full hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-greekblue/20 to-greekteal/20 flex items-center justify-center">
                            <info.icon className="h-6 w-6 text-greekblue" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-sm font-medium text-greekteal mb-1">
                            {info.details}

                            
                          </p>
                          <p className="text-sm font-medium text-greekteal mb-1">
                            {info.details2}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="card-professional">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field (invisible to bots) */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="_gotcha">Leave this empty</label>
                    <input type="text" id="_gotcha" name="_gotcha" autoComplete="off" />
                  </div>

                  {/* Timestamp field for bot detection */}
                  <input type="hidden" name="_timestamp" value={Date.now()} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-professional"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-professional"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, subject: value }))
                      }
                    >
                      <SelectTrigger className="input-professional" id="subject" name="subject">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="input-professional min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-greekblue to-greekblue-hover hover:from-greekblue-hover hover:to-greekblue text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
