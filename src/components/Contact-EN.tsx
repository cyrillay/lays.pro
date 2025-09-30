import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactEN = () => {
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
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.sendForm(
          'service_3m1r6e7',    // Replace with your service ID
          'template_98jUsgem',   // Replace with your template ID
          formRef.current!,
          'user_8lWdMVJ8JBqkAbfW5nP9i'     // Replace with your public key
      );

      console.log('Email sent successfully:', result.text);
      alert("Message sent! I'll get back to you soon.");

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
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form
                    ref={formRef}
                    id="contact-form"
                    className="form form--contact space-y-6"
                    onSubmit={handleSubmit}
                >
                  <input type="hidden" name="contact_number" />

                  <div>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="bg-card/50"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                  </div>

                  <div>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-card/50"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                  </div>

                  <div>
                    <Input
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="bg-card/50"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <Input
                        name="company"
                        type="text"
                        placeholder="Your company"
                        className="bg-card/50"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <select
                        name="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-card/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="" disabled>Interested in</option>
                      <option value="ML Engineering services">ML Engineering services</option>
                      <option value="Data engineering services">Data engineering services</option>
                      <option value="Data science services">Data science services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Textarea
                        name="full_message"
                        placeholder="Your message"
                        className="min-h-[150px] bg-card/50 resize-none"
                        value={formData.full_message}
                        onChange={(e) => setFormData({ ...formData, full_message: e.target.value })}
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
                    {isSubmitting ? "Sending..." : "Send message"}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
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