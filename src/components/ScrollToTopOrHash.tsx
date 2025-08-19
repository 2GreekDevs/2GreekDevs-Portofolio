import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOrHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scroll = () => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    // Wait a tick for layout to finish
    const timeout = setTimeout(scroll, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOrHash;
