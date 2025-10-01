import { Brain, Sparkles, Database, Code, LineChart, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Brain,
    title: "RAG Systems & Knowledge Bases",
    description: "Build intelligent AI systems that understand your **company data**. **RAG pipelines** connecting **LLMs** to your documents and **internal knowledge bases**."
  },
  {
    icon: Sparkles,
    title: "LLM Application Development",
    description: "**Production-ready** applications powered by the latest **LLMs**. **Automated customer support**, content generation, **intelligent assistants**."
  },
  {
    icon: Database,
    title: "End-to-end Big Data Engineering",
    description: "Complete **Big Data engineering** solutions, from **data pipeline architecture** to **production deployment**."
  },
  {
    icon: Code,
    title: "MLOps & Deployment",
    description: "**Infrastructure** and **CI/CD pipelines** for your ML models. **Monitoring**, **versioning**, and **automatic scaling** of your AI systems."
  },
  {
    icon: LineChart,
    title: "Data Mining & Analytics",
    description: "Extract **valuable insights** from your data. **Predictive models**, **trend analysis**, and **interactive visualizations**."
  },
  {
    icon: Shield,
    title: "AI Training, Audit & Consulting",
    description: "**Audit** of your existing systems, **strategic recommendations**, and **team training** on AI development and best practices."
  }
];

export const ServicesEN = () => {
  const renderDescription = (description: string) => {
    const parts = description.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How can I help you?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions to propel your business
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 rounded-2xl px-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">
                        {service.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed pl-14">
                      {renderDescription(service.description)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        <div className="text-center">
          <Link to="/en/skills">
            <Button variant="outline" size="lg" className="group">
              Discover my skills
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
