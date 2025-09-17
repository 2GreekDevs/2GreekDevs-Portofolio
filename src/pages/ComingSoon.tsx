import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import banner1 from "@/assets/banner.png";
import banner2 from "@/assets/banner2.png";

const ComingSoon = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Trap focus inside modal
  useEffect(() => {
    if (!showPopup || !popupRef.current) return;
    const focusableElements = popupRef.current.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstEl = focusableElements[0] as HTMLElement;
    const lastEl = focusableElements[focusableElements.length - 1] as HTMLElement;

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [showPopup]);

  // Restore focus to trigger button
  useEffect(() => {
    if (!showPopup && triggerRef.current) triggerRef.current.focus();
  }, [showPopup]);

  // Auto-focus input when popup opens
  useEffect(() => {
    if (showPopup && inputRef.current) inputRef.current.focus();
  }, [showPopup]);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Honeypot check
    if (honeypot.trim() !== "") {
      setError("Spam detected.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Rate limit check
    const lastSubmit = localStorage.getItem("lastSubmitTime");
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 30 * 1000) {
      setError("Please wait before subscribing again.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwkY40Ego4xdumCw7VdLrH4X2mLL_iLuSCMRXmB9xsfmEbgHcYlX8n-8-SLUO7McLpv/exec",
        {
          method: "POST",
          body: new URLSearchParams({
            email: email.trim().toLowerCase(),
            origin: window.location.origin,
          }),
        }
      );

      const resultText = await response.text();

      if (resultText === "Success") {
        setEmail("");
        setSubscribed(true);
        localStorage.setItem("lastSubmitTime", now.toString());
        setTimeout(() => {
          setSubscribed(false);
          setShowPopup(false);
        }, 2000);
      } else if (resultText === "Already subscribed") {
        setError("This email is already subscribed!");
      } else if (resultText === "Invalid origin") {
        setError("Subscription failed: invalid domain.");
      } else {
        setError("Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4 text-center">
      <Helmet>
        <title>Coming Soon - 2GreekDevs</title>
        <meta
          name="description"
          content="Our e-Shop is coming soon! Subscribe to get notified when 2GreekDevs launches their online store."
        />
        <meta property="og:title" content="Coming Soon - 2GreekDevs" />
        <meta
          property="og:description"
          content="Our e-Shop is coming soon! Subscribe to get notified when 2GreekDevs launches their online store."
        />
        <meta property="og:image" content="/2.png" />
      </Helmet>

      <div className="max-w-3xl mx-auto space-y-8">
        <img src={banner2} alt="2GreekDevs" className="h-40 w-auto mx-auto dark:hidden" />
        <img src={banner1} alt="2GreekDevs" className="h-40 w-auto mx-auto hidden dark:block" />

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our e-Shop is Coming Soon
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're working hard to bring you an amazing online shopping experience. Stay tuned!
        </p>

        <div className="max-w-md mx-auto space-y-4 pt-4">
          <p className="text-muted-foreground">Want to be notified when we launch?</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              ref={triggerRef}
              onClick={(e) => {
                e.preventDefault();
                setShowPopup(true);
              }}
              variant="outline"
              className="w-full"
            >
              Get Notified
            </Button>
            <Button className="w-full" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 pt-8 text-2xl">
  {[
    { href: "https://www.facebook.com/profile.php?id=61560473642817", icon: "ri-facebook-fill", color: "hover:text-blue-600" },
    { href: "https://discord.gg/dHCvUaFAAH", icon: "ri-discord-fill", color: "hover:text-indigo-600" },
    { href: "https://www.instagram.com/2greekdevs/", icon: "ri-instagram-fill", color: "hover:text-pink-600" },
    { href: "https://www.linkedin.com/in/2greek-devs-3a2097329/", icon: "ri-linkedin-fill", color: "hover:text-blue-700" },
  ].map((social) => (
    <a
      key={social.href}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors ${social.color}`}
      aria-label={social.icon}
    >
      <i className={`${social.icon}`}></i>
    </a>
  ))}
</div>
        </div>
      </div>

      {/* Subscribe Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={popupRef}
              className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-xl w-11/12 max-w-md relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl transition"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                &times;
              </button>

              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Subscribe to Updates
              </h2>

              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full border rounded-xl p-3 text-gray-800 dark:text-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      error ? "border-red-500 focus:ring-red-500" : "border-gray-300 dark:border-gray-600"
                    }`}
                  />
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl text-white font-medium transition ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                    }`}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-green-600 space-y-2">
                  <CheckCircle className="w-16 h-16" />
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    Subscribed successfully!
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComingSoon;
