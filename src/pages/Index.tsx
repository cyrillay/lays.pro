import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {RAGDemo} from "@/components/RAGDemo.tsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <html lang="fr" />
        <title>Cyril LAY | Consultant GenAI & Expert IA Générative</title>
        <meta name="description" content="Consultant GenAI spécialisé en LLMs, RAG et agents IA. 10+ ans d'expérience. Interventions remote et sur site en France (Marseille, Paris, Lyon). Solutions IA sur-mesure." />
        <link rel="canonical" href="https://www.lays.pro/" />
        <meta property="og:url" content="https://www.lays.pro/" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <ClientsMarquee />
        <div id="services">
          <Services />
        </div>
      <div id="ragdemo">
          <RAGDemo />
      </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
