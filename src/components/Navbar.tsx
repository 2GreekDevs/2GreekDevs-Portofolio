import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Info,
  Folder,
  Mail,
  Users,
  ShoppingCart,
  CodeXml,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import banner1 from "@/assets/banner.png";
import banner2 from "@/assets/banner2.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let scrollY = 0;
    if (mobileMenuOpen) {
      scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const y = parseInt(document.body.style.top || "0", 10) * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <Info className="w-5 h-5" /> },
    { name: "Projects", href: "/projects", icon: <Folder className="w-5 h-5" /> },
    {
      name: "Services",
      href: "/services",
      icon: <CodeXml className="w-5 h-5" />,
      dropdown: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Apps", href: "/services/mobile" },
        {
          name: "Discord Services",
          href: "/discord-services",
          subDropdown: [
            { name: "Bot Development", href: "/services/discord-services/discord-bots" },
            { name: "Server Setup", href: "/services/discord-services/discord-server-setup" },
            { name: "Moderation Team", href: "/services/discord-services/moderation-team" },
          ],
        },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
      ],
    },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
    { name: "Partners", href: "/partners", icon: <Users className="w-5 h-5" /> },
    { name: "e-shop", href: "/eshop", icon: <ShoppingCart className="w-5 h-5" /> },
  ];

  const handleLinkClick = (href: string) => {
    if (!href.startsWith("#")) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setMobileMenuOpen(false);
    setOpenDropdowns([]);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <nav
          className="flex items-center justify-between px-4 py-3"
          role="navigation"
          aria-label="Main navigation"
        >
          <Link to="/" className="flex items-center">
            <img
              src={banner2}
              alt="2GreekDevs Logo"
              className="h-[90px] mb-2 dark:hidden"
            />
            <img
              src={banner1}
              alt="2GreekDevs Logo"
              className="h-[90px] mb-2 hidden dark:block"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <button
                    className="dropdown-trigger flex items-center gap-1 text-foreground hover:text-greekteal transition-colors relative z-10 focus:outline-none bg-transparent border-none"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className="absolute left-0 mt-2 w-56 
                               bg-background text-foreground 
                               shadow-lg rounded-xl py-2 z-20
                               opacity-0 scale-95 invisible 
                               group-hover:opacity-100 group-hover:scale-100 group-hover:visible 
                               transition-all duration-200 origin-top"
                  >
                    {link.dropdown.map((item) =>
                      item.subDropdown ? (
                        <div key={item.name} className="relative group/sub">
                          <button
                            className="dropdown-trigger flex items-center justify-between w-full px-4 py-2 
                                       text-sm text-muted-foreground hover:bg-muted hover:text-foreground 
                                       rounded-md relative z-10 focus:outline-none bg-transparent border-none"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.name}
                            <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/sub:translate-x-1" />
                          </button>

                          <div
                            className="absolute left-full top-0 ml-2 w-52 
                                       bg-background text-foreground 
                                       shadow-lg rounded-xl py-2 z-20
                                       opacity-0 scale-95 invisible 
                                       group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:visible 
                                       transition-all duration-200 origin-top-left"
                          >
                            {item.subDropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => handleLinkClick(sub.href)}
                                className="block px-4 py-2 text-sm text-muted-foreground 
                                           hover:bg-muted hover:text-foreground rounded-md"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className="block px-4 py-2 text-sm text-muted-foreground 
                                     hover:bg-muted hover:text-foreground rounded-md"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : link.href.startsWith("#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-foreground hover:text-greekteal transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="nav-link text-foreground hover:text-greekteal transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" aria-hidden="true">
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close menu backdrop"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setMobileMenuOpen(false);
              } else if (e.key === "Escape") {
                e.preventDefault();
                setMobileMenuOpen(false);
              }
            }}
          />

          <aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-label"
            className={cn(
              "fixed top-0 right-0 h-screen w-64 sm:w-72 md:w-80 bg-background/90 backdrop-blur-md shadow-xl rounded-l-2xl z-50",
              "flex flex-col justify-between transition-transform duration-300 overflow-hidden",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="px-4 pt-4">
              <div className="flex justify-between items-center">
                <Link
                  to="/"
                  className="w-full text-center"
                  onClick={() => handleLinkClick("/")}
                >
                  <img
                    src={banner2}
                    alt="2GreekDevs"
                    className="h-[70px] dark:hidden mx-auto"
                  />
                  <img
                    src={banner1}
                    alt="2GreekDevs"
                    className="h-[70px] hidden dark:block mx-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </Button>
              </div>
            </div>

            <nav
              className="mt-6 px-4 flex-1 overflow-y-auto space-y-5"
              aria-label="Mobile navigation links"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="dropdown-trigger flex items-center justify-between w-full px-4 py-2 rounded-xl hover:bg-muted transition-all text-base font-medium text-muted-foreground hover:text-foreground focus:outline-none bg-transparent border-none"
                      aria-expanded={openDropdowns.includes(link.name)}
                      aria-haspopup="true"
                    >
                      <span className="flex items-center gap-3">
                        {link.icon}
                        {link.name}
                      </span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openDropdowns.includes(link.name)
                            ? "rotate-180"
                            : "rotate-0"
                        )}
                      />
                    </button>
                    {openDropdowns.includes(link.name) && (
                      <div className="ml-6 mt-2 space-y-2 bg-background text-foreground rounded-lg p-2 shadow-md">
                        {link.dropdown.map((item) =>
                          item.subDropdown ? (
                            <div key={item.name}>
                              <button
                                onClick={() => toggleDropdown(item.name)}
                                className="dropdown-trigger flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none bg-transparent border-none"
                                aria-expanded={openDropdowns.includes(item.name)}
                                aria-haspopup="true"
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={cn(
                                    "w-4 h-4 transition-transform duration-200",
                                    openDropdowns.includes(item.name)
                                      ? "rotate-180"
                                      : "rotate-0"
                                  )}
                                />
                              </button>
                              {openDropdowns.includes(item.name) && (
                                <div className="ml-6 mt-2 space-y-2 bg-background text-foreground rounded-lg p-2 shadow-md">
                                  {item.subDropdown.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      to={sub.href}
                                      onClick={() => handleLinkClick(sub.href)}
                                      className="block px-3 py-2 text-sm rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => handleLinkClick(item.href)}
                              className="block px-3 py-2 text-sm rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : link.href.startsWith("#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted transition-all text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted transition-all text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div className="px-4 pb-20 space-y-4">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Button
                className="w-full text-base font-semibold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/coming-soon");
                  window.scrollTo({ top: 0, behavior: "auto" });
                }}
              >
                Visit E-Shop
              </Button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Navbar;
