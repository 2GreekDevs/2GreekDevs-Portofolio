import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use modern technologies including React, Vue.js, Node.js, Python, and cloud platforms like AWS and Azure. Our tech stack is always evolving to include the latest industry standards.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on complexity and requirements. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. This includes security updates, performance optimization, bug fixes, and feature enhancements to keep your application running smoothly.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We excel at collaborating with in-house teams and other agencies. We can integrate seamlessly into your existing workflow and development processes.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our process includes discovery, planning, design, development, testing, and deployment phases. We use agile methodologies with regular check-ins and updates throughout the project.",
    },
    {
      question: "Do you offer mobile app development?",
      answer:
        "Yes, we develop responsive web applications and native mobile apps for iOS and Android. We also specialize in Progressive Web Apps (PWAs) that work seamlessly across all devices.",
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30 relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-greekblue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-greekteal/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-professional overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <Minus className="h-5 w-5 text-greekteal" />
                      ) : (
                        <Plus className="h-5 w-5 text-greekteal" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openItems.includes(index) && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border/30 overflow-hidden"
                      >
                        <div className="p-6 pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
