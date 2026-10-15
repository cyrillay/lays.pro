import { Head } from "vite-react-ssg";
import { Navbar } from "@/components/Navbar";
import { HeroEN } from "@/components/Hero-EN";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ServicesEN } from "@/components/Services-EN";
import { TestimonialsEN } from "@/components/Testimonials-EN";
import { ContactEN } from "@/components/Contact-EN";
import { Footer } from "@/components/Footer";
import {RAGDemo} from "@/components/RAGDemo.tsx";

const IndexEN = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <html lang="en" />
        <title>Cyril LAY | GenAI Consultant & AI Expert</title>
        <meta name="description" content="GenAI consultant specializing in LLMs, RAG and AI agents. 10+ years of experience. Remote and on-site across Europe. Custom AI solutions." />
        <link rel="canonical" href="https://www.lays.pro/en" />
        <meta property="og:title" content="Cyril LAY | GenAI Consultant & AI Expert" />
        <meta property="og:description" content="GenAI consultant specializing in LLMs, RAG and AI agents. 10+ years of experience. Remote and on-site across Europe. Custom AI solutions." />
        <meta property="og:url" content="https://www.lays.pro/en" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <Navbar />
      <main>
        <div id="hero">
          <HeroEN />
        </div>
        <ClientsMarquee />
        <div id="services">
          <ServicesEN />
        </div>
      <div id="ragdemo">
          <RAGDemo />
      </div>
        <TestimonialsEN />
        <ContactEN />
      </main>
      <Footer />
    </div>
  );
};

export default IndexEN;
