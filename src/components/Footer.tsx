import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import banner1 from "@/assets/banner.png";
import banner2 from "@/assets/banner2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "E-commerce", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/#contact" },
    ],
    resources: [
      { name: "FAQ", href: "/#faq" },
      { name: "Partners", href: "/partners" },
    ],
    legal: [
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/2greekdevs", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/2greek-devs-3a2097329/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/2greekdevs",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61560473642817",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10 md:pl-8">
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-6 md:pl-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  to="/"
                  className="flex items-center mb-6"
                  aria-label="2GreekDevs Home"
                >
                  <span className="sr-only">2GreekDevs Home</span>
                  <img
                    src={banner2}
                    alt="2GreekDevs Logo Light"
                    className="h-[110px] w-auto dark:hidden transition-all duration-300"
                  />
                  <img
                    src={banner1}
                    alt="2GreekDevs Logo Dark"
                    className="h-[110px] w-auto hidden dark:block transition-all duration-300"
                  />
                </Link>

                <p className="text-muted-foreground leading-relaxed max-w-md mb-5">
                  Crafting innovative digital solutions with Greek excellence
                  and international expertise. Transform your ideas into
                  powerful web applications.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-greekteal" />
                    <a
                      href="mailto:2greekdevs24@gmail.com"
                      className="hover:text-greekteal transition-colors"
                    >
                      2greekdevs24@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-greekteal" />
                    <a
                      href="tel:+306987377673"
                      className="hover:text-greekteal transition-colors"
                    >
                      +30 6987377673
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-greekteal" />
                    <a
                      href="tel:+306987377673"
                      className="hover:text-greekteal transition-colors"
                    >
                      +30 6988529373
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-greekteal" />
                    <span>Soon</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links], i) => (
              <div className="space-y-6 md:pl-6" key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-foreground mb-4 capitalize">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => {
                      const isHashLink = link.href.includes("#");

                      // Hash link + on homepage → smooth scroll
                      if (isHashLink && location.pathname === "/") {
                        return (
                          <li key={`${title}-${index}`}>
                            <HashLink
                              smooth
                              to={link.href}
                              className="text-sm text-muted-foreground hover:text-greekteal transition-colors"
                            >
                              {link.name}
                            </HashLink>
                          </li>
                        );
                      }

                      // Hash link + on other pages → navigate first
                      if (isHashLink) {
                        return (
                          <li key={`${title}-${index}`}>
                            <Link
                              to={link.href}
                              className="text-sm text-muted-foreground hover:text-greekteal transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        );
                      }

                      // Normal internal route
                      if (link.href.startsWith("/")) {
                        return (
                          <li key={`${title}-${index}`}>
                            <Link
                              to={link.href}
                              className="text-sm text-muted-foreground hover:text-greekteal transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        );
                      }

                      // External link
                      return (
                        <li key={`${title}-${index}`}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-greekteal transition-colors"
                          >
                            {link.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} 2GreekDevs.</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={`${social.label}-${index}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon bg-muted/50 hover:bg-greekteal/10 text-muted-foreground hover:text-greekteal p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
