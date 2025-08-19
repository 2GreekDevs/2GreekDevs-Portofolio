import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top on page change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRoute;
