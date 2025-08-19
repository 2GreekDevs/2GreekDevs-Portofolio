import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import ComingSoon from "./pages/ComingSoon";
import Eshop from "./pages/Eshop";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop"; 
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();



const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // change to "smooth" if you want animation
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        {/* NEW: resets scroll every time the route changes */}
        <ScrollToTopOnRouteChange />

        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/eshop" element={<ComingSoon />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Your existing button stays */}
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
