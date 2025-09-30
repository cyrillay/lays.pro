import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    full_message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.full_message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      // Get them from https://dashboard.emailjs.com/
      const result = await emailjs.sendForm(
          'service_3m1r6e7',    // Replace with your service ID
          'template_98jUsgem',   // Replace with your template ID
          formRef.current!,
          'user_8lWdMVJ8JBqkAbfW5nP9i'     // Replace with your public key
      );

      console.log('Email sent successfully:', result.text);

      toast({
        title: "Message envoyé !",
        description: "Je reviendrai vers vous dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        full_message: ""
      });
    } catch (error) {
      console.error('Email send failed:', error);

      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez ré-essayer ou envoyer votre message sur Linkedin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section id="contact" className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Parlons de votre projet
              </h2>
              <p className="text-xl text-muted-foreground">
                Vous avez un projet d'IA ? Discutons-en ensemble
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-all bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:contact@lays.pro" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        contact@lays.pro
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                          href="https://www.linkedin.com/in/cyril-lay-2017/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connectez-vous
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-all bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GitHub</h3>
                      <a
                          href="https://github.com/cyrillay"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Voir mes projets
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form - Matching old structure for EmailJS/GTM */}
              <Card className="md:col-span-2 p-8 bg-card/50 backdrop-blur-sm">
                <form
                    ref={formRef}
                    id="contact-form"
                    className="form form--contact space-y-6"
                    onSubmit={handleSubmit}
                >
                  {/* Hidden field for contact number (EmailJS tracking) */}
                  <input type="hidden" name="contact_number" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background"
                        required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean.dupont@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background"
                        required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Entreprise
                    </label>
                    <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Votre entreprise"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Intéressé par
                    </label>
                    <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Sélectionnez une option</option>
                      <option value="ML Engineering services">Services ML Engineering</option>
                      <option value="Data engineering services">Services Data engineering</option>
                      <option value="Data science services">Services Data science</option>
                      <option value="Other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="full_message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                        id="full_message"
                        name="full_message"
                        placeholder="Parlez-moi de votre projet..."
                        rows={6}
                        value={formData.full_message}
                        onChange={(e) => setFormData({ ...formData, full_message: e.target.value })}
                        className="bg-background resize-none"
                        required
                    />
                  </div>

                  <Button
                      id="send-contact-form"
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};