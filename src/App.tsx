import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuzzerPage from "./pages/BuzzerPage";
import UltrasonicPage from "./pages/UltrasonicPage";
import DHTPage from "./pages/DHTPage";
import NotFound from "./pages/NotFound";
import Breadboard from "./pages/breadboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buzzer" element={<BuzzerPage />} />
          <Route path="/ultrasonic" element={<UltrasonicPage />} />
          <Route path="/dht" element={<DHTPage />} />
          <Route path="/breadboard" element={<Breadboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
