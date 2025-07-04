
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Eshop = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">2GreekDevs Shop</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Premium web development services and digital products
          </p>
          
          {/* Categories Filter - HTML/CSS only */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              <a href="#all" className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                All
              </a>
              <a href="#services" className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-background hover:bg-accent hover:text-accent-foreground border border-input">
                Services
              </a>
              <a href="#design" className="inline-flex items-center justify-center h-10 px-4 py-2 rounded-md bg-background hover:bg-accent hover:text-accent-foreground border border-input">
                Design
              </a>
            </div>
            
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-2 border border-border rounded-md w-full md:w-64"
              />
            </div>
          </div>
          
          {/* Products Grid - HTML/CSS only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Product 1 */}
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=500" 
                  alt="Custom Website Development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Custom Website Development</h2>
                <p className="text-muted-foreground mb-4">Fully responsive custom website tailored to your brand and business needs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-greekteal">$499</span>
                  <a href="#inquire" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=500" 
                  alt="E-commerce Solution"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">E-commerce Solution</h2>
                <p className="text-muted-foreground mb-4">Complete e-commerce website with payment integration, product management and more.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-greekteal">$799</span>
                  <a href="#inquire" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=500" 
                  alt="Logo Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Logo Design</h2>
                <p className="text-muted-foreground mb-4">Professional logo design to establish your brand identity.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-greekteal">$199</span>
                  <a href="#inquire" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Product 4 */}
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=500" 
                  alt="SEO Optimization"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">SEO Optimization</h2>
                <p className="text-muted-foreground mb-4">Boost your website's visibility in search engines with our SEO package.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-greekteal">$299</span>
                  <a href="#inquire" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Product 5 */}
            <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=500" 
                  alt="Website Maintenance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Website Maintenance</h2>
                <p className="text-muted-foreground mb-4">Monthly maintenance to keep your website secure, updated, and running smoothly.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-greekteal">$99</span>
                  <a href="#inquire" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section - For Inquiries */}
          <div className="mt-12 max-w-2xl mx-auto border border-border rounded-lg p-6 bg-card">
            <h2 className="text-2xl font-bold mb-4" id="inquire">Contact Us For Inquiries</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-border rounded-md bg-background"
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border border-border rounded-md bg-background"
                    placeholder="your.email@example.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Service Interested In</label>
                <select className="w-full p-2 border border-border rounded-md bg-background">
                  <option>Custom Website Development</option>
                  <option>E-commerce Solution</option>
                  <option>Logo Design</option>
                  <option>SEO Optimization</option>
                  <option>Website Maintenance</option>
                  <option>Other (please specify)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  className="w-full p-2 border border-border rounded-md bg-background min-h-[100px]"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Eshop;
