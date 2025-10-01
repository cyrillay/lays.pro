import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
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

    if (!formData.name || !formData.email || !formData.full_message) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
          'service_3m1r6e7',
          'template_98jUsgem',
          formRef.current!,
          'user_8lWdMVJ8JBqkAbfW5nP9i'
      );

      console.log('Email sent successfully:', result.text);
      alert("Message sent! I'll get back to you soon.");

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
      <section id="contact" className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's work together
              </h2>
              <p className="text-xl text-muted-foreground">
                Do you have a data or AI project? Let's talk about it.
              </p>
            </div>

            <div className="flex justify-center">
              <Card className="p-8 bg-card/50 backdrop-blur-sm w-full">
                <form
                    ref={formRef}
                    id="contact-form"
                    className="form form--contact space-y-6"
                    onSubmit={handleSubmit}
                >
                  <input type="hidden" name="contact_number" />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full name *
                    </label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
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
                        placeholder="john.doe@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background"
                        required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      Interested in
                    </label>
                    <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="ML Engineering services">ML Engineering services</option>
                      <option value="Data engineering services">Data engineering services</option>
                      <option value="Data science services">Data science services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="full_message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                        id="full_message"
                        name="full_message"
                        placeholder="Tell me about your project..."
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
                    {isSubmitting ? "Sending..." : "Send message"}
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
