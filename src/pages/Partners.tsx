
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const partners = [
  {
    name: "Sample Partner 1",
    description: "A description of what this partner does and how they collaborate with 2GreekDevs.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1374&auto=format",
    website: "#"
  },
  {
    name: "Sample Partner 2",
    description: "A description of what this partner does and how they collaborate with 2GreekDevs.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1064&auto=format",
    website: "#"
  },
  {
    name: "Sample Partner 3",
    description: "A description of what this partner does and how they collaborate with 2GreekDevs.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format",
    website: "#"
  },
  {
    name: "Sample Partner 4",
    description: "A description of what this partner does and how they collaborate with 2GreekDevs.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format",
    website: "#"
  }
]; 

const Partners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-28">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Partners</h1>
              <div className="mt-2 mx-auto w-20 h-1 bg-greekteal"></div>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the companies and organizations we collaborate with to deliver exceptional solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <h2 className="text-xl font-semibold">{partner.name}</h2>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{partner.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a href={partner.website} target="_blank" rel="noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20 text-center"
            >
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Partner</h2>
                <p className="text-muted-foreground mb-8"> 
                  Interested in partnering with 2GreekDevs? We're always looking for new collaborations and opportunities to grow together.
                </p>
                <Button size="lg" asChild>
                  <a href="/#contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
