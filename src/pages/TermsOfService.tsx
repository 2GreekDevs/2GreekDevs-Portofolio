import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {
  FileText,
  Users,
  Shield,
  Gavel,
  AlertTriangle,
  Mail,
  RefreshCw,
  Globe,
  Ban,
  CreditCard,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Head from 'next/head';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - 2GreekDevs";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Review the Terms of Service for 2GreekDevs, including user responsibilities, intellectual property rights, and more.'
      );
    }
  }, []);



  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content:
        'By accessing and using the services provided by 2GreekDevs, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.',
      highlight: true,
    },
    {
      icon: Users,
      title: '2. Description of Service',
      content:
        '2GreekDevs provides professional web development, mobile application development, and digital consulting services to clients worldwide. We specialize in creating custom solutions tailored to your business needs.',
    },
    {
      icon: Shield,
      title: '3. User Responsibilities',
      content:
        'Users are responsible for providing accurate information and maintaining the confidentiality of their account credentials. You agree to use our services in compliance with all applicable laws and regulations.',
    },
    {
      icon: Gavel,
      title: '4. Intellectual Property',
      content:
        'All content, features, and functionality of our services are owned by 2GreekDevs and are protected by international copyright, trademark, and other intellectual property laws.',
    },
    {
      icon: AlertTriangle,
      title: '5. Limitation of Liability',
      content:
        '2GreekDevs shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, except as required by applicable law.',
    },
    {
      icon: Ban,
      title: '6. Restrictions',
      content: (
        <>
          <p className="mb-4">
            You are specifically restricted from engaging in any of the following activities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Republishing any website material in other media without prior consent</li>
            <li>Selling, sublicensing, or otherwise commercializing website material</li>
            <li>Using the website in a manner that could damage it or impair performance</li>
            <li>Disrupting or limiting access for other users</li>
            <li>Violating any applicable laws or regulations while using the website</li>
            <li>Engaging in data mining, data harvesting, or similar data extraction practices</li>
            <li>Attempting to access restricted areas of the website without authorization</li>
          </ul>
          <p className="mt-4">
            <strong>Note:</strong> 2GreekDevs reserves the right to restrict access to any part of the website at any time, at our sole discretion.
          </p>
        </>
      ),
    },
    {
      icon: RefreshCw,
      title: '7. Changes to Terms',
      content:
        '2GreekDevs reserves the right to modify these Terms at any time. Continued use of our services after changes indicates acceptance of the new terms.',
    },
    {
      icon: Globe,
      title: '8. Governing Law',
      content:
        'These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction of Greece, Athens and you submit to the non-exclusive jurisdiction of the state and federal courts located in Athens, Greece for the resolution of any disputes.',
    },
    {
      icon: CreditCard,
      title: '9. Payments & Refunds',
      content:
        'All payments for services must be made in full before project delivery unless otherwise agreed upon. Refunds are only issued under specific conditions and at our discretion.',
    },
  ];

  return (
    
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-16">
           <motion.div
  key="terms-motion-wrapper"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-5xl mx-auto"
>

              {/* Header Section */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-greekblue to-greekteal rounded-full mb-6">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 gradient-text">
                  Terms of Service
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Please read these terms carefully before using our services. These terms govern your use of 2GreekDevs services.
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <span className="bg-greekblue/10 text-greekblue px-4 py-2 rounded-lg text-sm font-medium">
                    Last updated: January 2024
                  </span>
                </div>
              </div>

              {/* Terms Sections */}
              <div className="grid gap-8 mb-12">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className={`card-professional hover-lift ${
                        section.highlight ? 'border-greekblue/50 bg-greekblue/5' : ''
                      }`}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                section.highlight
                                  ? 'bg-greekblue text-white'
                                  : 'bg-gradient-to-r from-greekblue to-greekteal text-white'
                              }`}
                            >
                              <section.icon className="w-6 h-6" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">
                              {section.title}
                            </h2>
                            {typeof section.content === 'string' ? (
                              <p className="text-muted-foreground leading-relaxed text-lg space-y-2">
                                {section.content}
                              </p>
                            ) : (
                              <div className="text-muted-foreground leading-relaxed text-lg space-y-2">
                                {section.content}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Extra Sections */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="card-professional border-orange-200 bg-orange-50/50 dark:bg-orange-950/20 dark:border-orange-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-orange-700 dark:text-orange-400">
                      <AlertTriangle className="w-5 h-5" />
                      Service Termination
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to terminate or suspend your account at any time for violations of these terms, with or without prior notice.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-professional border-green-200 bg-green-50/50 dark:bg-green-950/20 dark:border-green-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                      <Shield className="w-5 h-5" />
                      Service Guarantee
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to delivering high-quality services and will work with you to ensure your satisfaction with our deliverables.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Section */}
              <Card className="card-professional bg-gradient-to-r from-greekblue/5 to-greekteal/5 border-greekblue/20">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-greekblue mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Need Clarification?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    If you have any questions about these Terms of Service or need clarification on any point, we're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="inline-flex items-center gap-2 text-greekblue font-medium">
                      <Mail className="w-4 h-4" />
                      <span>2greekdevs24@gmail.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    
  );
};

export default TermsOfService;
