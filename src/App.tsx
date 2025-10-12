import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexEN from "./pages/Index-EN";
import Skills from "./pages/Skills";
import SkillsEN from "./pages/Skills-EN";
import Experiences from "./pages/Experiences";
import ExperiencesEN from "./pages/Experiences-EN";
import Trainings from "./pages/Trainings";
import TrainingsEN from "./pages/Trainings-EN";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<IndexEN />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/en/skills" element={<SkillsEN />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/en/experiences" element={<ExperiencesEN />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/en/trainings" element={<TrainingsEN />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;