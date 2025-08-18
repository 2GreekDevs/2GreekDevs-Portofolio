import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Cookie,
  FileText,
  Smile,
  RefreshCw,
} from 'lucide-react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
   useEffect(() => {
    document.title = "Privacy Policy - 2GreekDevs";

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
      title: '1. Information We Collect',
      content:
        'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes personal information like your name, email address, phone number, and payment details when necessary for our services.',
    },
    {
      icon: Lock,
      title: '2. How We Use Your Information',
      content:
        'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you. Your data helps us deliver personalized experiences and ensure the security of our platform.',
    },
    {
      icon: Shield,
      title: '3. Information Sharing',
      content:
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted partners who assist us in operating our website and conducting our business.',
    },
    {
      icon: Cookie,
      title: '4. Data Security',
      content:
        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security protocols include encryption, secure servers, and regular security audits.',
    },
    {
      icon: Smile,
      title: "5. Children's Privacy",
      content:
        'Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children without parental consent.',
    },
    {
      icon: RefreshCw,
      title: '6. Policy Updates',
      content:
        'We may update this Privacy Policy from time to time. We will notify users of significant changes via email or on our website.',
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - 2GreekDevs</title>
        <meta name="description" content="Understand how 2GreekDevs collects, uses, and protects your personal data in our Privacy Policy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
        <Navbar />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-greekblue to-greekteal rounded-full mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
                <div className="mt-6 inline-block">
                  <span className="bg-greekblue/10 text-greekblue px-4 py-2 rounded-lg text-sm font-medium">Last updated: January 2024</span>
                </div>
              </div>
              <div className="grid gap-8 mb-12">
                {sections.map((section, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                    <Card className="card-professional hover-lift">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-greekblue to-greekteal rounded-lg flex items-center justify-center">
                            <section.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">{section.title}</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="card-professional">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Cookie className="w-5 h-5 text-greekteal" /> Cookies and Tracking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">We use cookies and similar tracking technologies to enhance your experience on our website and analyze usage patterns.</p>
                  </CardContent>
                </Card>
                <Card className="card-professional">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-greekblue" /> Your Rights
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="card-professional bg-gradient-to-r from-greekblue/5 to-greekteal/5 border-greekblue/20">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-greekblue mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Questions About This Policy?</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">If you have any questions about this Privacy Policy or how we handle your data, please don’t hesitate to contact us.</p>
                  <div className="inline-flex items-center gap-2 text-greekblue font-medium">
                    <span>2greekdevs24@gmail.com</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;