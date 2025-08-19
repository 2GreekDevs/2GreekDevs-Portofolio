import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTopOrHash = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM updates first
    const scroll = () => {
      if (!hash) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }

      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Wait a frame to ensure new page content is rendered
    const frame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTopOrHash;
