import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTopOrHash = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // No hash → just scroll to top
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to home if not already there
      if (pathname !== "/") {
        navigate("/", { replace: false });
      }

      // Poll until element exists
      const interval = setInterval(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          clearInterval(interval);
        }
      }, 50);

      // Stop polling after 2 seconds
      setTimeout(() => clearInterval(interval), 2000);
    }
  }, [pathname, hash, navigate]);

  return null;
};

export default ScrollToTopOrHash;
