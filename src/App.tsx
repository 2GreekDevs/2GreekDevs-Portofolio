import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import ComingSoon from "./pages/ComingSoon";
import Eshop from "./pages/Eshop";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";

import Navbar from "./components/Navbar";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";
import ScrollToTop from "./components/ScrollToTop";

import "swiper/css";
import "swiper/css/pagination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        {/* Auto scroll to top on page change */}
        <ScrollToTopOnRoute />

        {/* Floating scroll-to-top button */}
        <ScrollToTop />

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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
