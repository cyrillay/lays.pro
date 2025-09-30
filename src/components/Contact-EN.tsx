import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export const ContactEN = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's work together
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your data into competitive advantage?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Your name" 
                    className="bg-card/50"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-card/50"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your message" 
                    className="min-h-[150px] bg-card/50"
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                >
                  Send message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact information</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@lays.pro"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contact@lays.pro
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/cyril-lay-2017/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/cyrillay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="text-muted-foreground">
                  Available for freelance missions and consulting.
                  Response within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
