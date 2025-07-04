import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const popupRef = useRef(null);
  const triggerRef = useRef(null);

  // Trap focus inside modal when open
  useEffect(() => {
    if (showPopup) {
      const focusableElements = popupRef.current?.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];

      function handleTab(e) {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }

      document.addEventListener("keydown", handleTab);
      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [showPopup]);

  // Restore focus to button after popup closes
  useEffect(() => {
    if (!showPopup && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [showPopup]);

  // Check localStorage on mount to auto-hide popup if subscribed
  useEffect(() => {
    const subscribedFlag = localStorage.getItem("subscribed");
    if (subscribedFlag === "true") {
      setSubscribed(true);
    }
  }, []);

  // Timer for countdown
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Focus input on popup show
  useEffect(() => {
    if (showPopup && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopup]);

  const validateEmail = (email) => {
    // Basic email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    try {
      // Simulate async API call
      await new Promise((r) => setTimeout(r, 1500));

      console.log("Subscribed email:", email);
      setEmail("");
      setSubscribed(true);
      localStorage.setItem("subscribed", "true");

      setTimeout(() => {
        setSubscribed(false);
        setShowPopup(false);
      }, 2000);
    } catch (err) {
      setError("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <img
          src="/banner2.png"
          alt="2GreekDevs"
          className="h-100 w-auto mx-auto dark:hidden"
        />
        <img
          src="/banner.png"
          alt="2GreekDevs"
          className="h-100 w-auto mx-auto hidden dark:block"
        />

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our e-Shop is Coming Soon
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're working hard to bring you an amazing online shopping experience. Stay tuned!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-card shadow-lg rounded-lg p-4">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-md mx-auto space-y-4 pt-4">
          <p className="text-muted-foreground">
            Want to be notified when we launch?
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button
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
        </div>

        <div className="flex justify-center space-x-4 pt-8">
          <a
            href="https://www.facebook.com/profile.php?id=61560473642817"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://discord.gg/dHCvUaFAAH"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-indigo-600 transition-colors"
            aria-label="Discord"
          >
            <i className="fab fa-discord text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/2greekdevs/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/2greek-devs-3a2097329/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>

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
              className="bg-white p-6 rounded-2xl shadow-2xl w-80 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold mb-4">Subscribe to Updates</h2>
              {!subscribed ? (
                <form onSubmit={handleSubscribe}>
                  <input
                    ref={inputRef}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full border p-2 rounded-lg mb-2 focus:outline-none focus:ring-2 ${
                      error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                  {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-lg text-white transition ${
                      loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
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
                <div className="flex flex-col items-center justify-center text-green-600">
                  <CheckCircle className="w-12 h-12 mb-2" />
                  <p className="font-medium">Subscribed successfully!</p>
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
