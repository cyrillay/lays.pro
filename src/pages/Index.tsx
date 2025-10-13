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
