import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOrHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // Retry after a short delay if element isn't found yet
          setTimeout(scrollToHash, 100);
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    scrollToHash();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOrHash;
