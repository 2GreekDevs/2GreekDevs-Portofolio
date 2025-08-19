import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use a short delay to ensure content has rendered
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 50); // 50ms is usually enough

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;
