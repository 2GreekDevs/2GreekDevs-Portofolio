import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Partners from "./pages/Partners";
import ComingSoon from "./pages/ComingSoon";
import Eshop from "./pages/Eshop";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Projects from "./pages/Projects";
import WebDevelopment from "./pages/services/WebDev";
// import MobileApps from "./pages/services/MobileApps";
import UIUXDesign from "./pages/services/UIUXDesign";
import DiscordSetup from "./pages/services/discord-services/DiscordSetup";
import DiscordBots from "./pages/services/discord-services/DiscordBots";
import ModerationTeam from "./pages/services/discord-services/Moderation";


import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";



import "swiper/css";
import "swiper/css/pagination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global toasters */}
      <Toaster />
      <Sonner />

      {/* Router */}
      <Router>
        {/* Scroll to top on route change */}
        <ScrollToTop />

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          
              <Route path="/services/web-development" element={<WebDevelopment />} />
              {/* <Route path="/services/mobile-apps" element={<MobileApps />} /> */}
              <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/services/discord-services/discord-server-setup" element={<DiscordSetup />} />
              <Route path="/services/discord-services/discord-bots" element={<DiscordBots />} />
              <Route path="/services/discord-services/moderation-team" element={<ModerationTeam />} />
              {/* <Route path="/services/consulting" element={<Consulting />} /> */}
          <Route path="/partners" element={<ComingSoon />} /> 
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/eshop" element={<ComingSoon />} /> 
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
