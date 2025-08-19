// ScrollManager.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
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

    requestAnimationFrame(scroll);
  }, [pathname, hash]);

  return null; // no UI
};

export default ScrollManager;
