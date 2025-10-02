import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroEN = () => {
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCalendly = () => {
    window.open('https://calendly.com/cyril-lay-pro/30min', '_blank');
  };

  return (
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
              src={heroBg}
              alt="Technology background representing artificial intelligence and machine learning"
              className="w-full h-full object-cover opacity-20"
              loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <article className="max-w-5xl mx-auto text-center">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" aria-hidden="true" />
                <img
                    src={profileImage}
                    alt="Professional photo of Cyril LAY, Expert in Artificial Intelligence and Machine Learning"
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-background shadow-2xl"
                    loading="eager"
                    width="128"
                    height="128"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cyril LAY - Senior AI Engineer
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              GenAI Consultant | AI & Machine Learning Expert
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert in generative AI, LLMs and Machine Learning with <strong>10 years of experience</strong>. I transform your data into competitive advantages with tailor-made artificial intelligence solutions: RAG, fine-tuning, AI agents and data engineering.
            </p>

            {/* Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto" aria-label="Statistics and achievements">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-md">
                <div className="text-4xl font-bold text-primary mb-2" aria-label="More than 10 years">10+</div>
                <div className="text-sm text-muted-foreground">Years of experience in Data</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-md">
                <div className="text-4xl font-bold text-primary mb-2" aria-label="More than 15 clients">15+</div>
                <div className="text-sm text-muted-foreground">Satisfied clients (Air Liquide, Crédit Agricole, ManoMano...)</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-md">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
              </div>
            </section>

            {/* CTAs */}
            <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center" aria-label="Main actions">
              <Button
                  variant="hero"
                  size="lg"
                  onClick={handleContact}
                  className="group"
                  aria-label="Request a free quote for your AI project"
              >
                Request a free quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
              <Button
                  variant="outline"
                  size="lg"
                  onClick={handleCalendly}
                  className="group"
                  aria-label="Book a free consultation call"
              >
                <Calendar className="mr-2" aria-hidden="true" />
                Book a call
              </Button>
            </nav>
          </article>
        </div>

      </header>
  );
};