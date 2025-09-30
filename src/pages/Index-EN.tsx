import { Navbar } from "@/components/Navbar";
import { HeroEN } from "@/components/Hero-EN";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { ServicesEN } from "@/components/Services-EN";
import { TestimonialsEN } from "@/components/Testimonials-EN";
import { ContactEN } from "@/components/Contact-EN";
import { Footer } from "@/components/Footer";

const IndexEN = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="hero">
          <HeroEN />
        </div>
        <ClientsMarquee />
        <div id="services">
          <ServicesEN />
        </div>
        <TestimonialsEN />
        <ContactEN />
      </main>
      <Footer />
    </div>
  );
};

export default IndexEN;
