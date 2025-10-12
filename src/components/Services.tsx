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
    title: "Systèmes RAG",
    description: "Création de systèmes IA intelligents qui comprennent vos **données d'entreprise**. **Pipelines RAG** connectant les **LLMs** à vos documents et toutes vos **sources internes**."
  },
  {
    icon: Shield,
    title: "Formation, Audit & Conseil IA",
    description: "**Audit** de vos systèmes existants, **recommandations stratégiques** et **formation de vos équipes** aux meilleures pratiques d'IA.",
    hasButton: true
  },
  {
    icon: Sparkles,
    title: "Développement d'applications utilisant les LLM",
    description: "Applications **prod-ready** alimentées par les derniers **LLMs** : LLama4, Mistral, etc. **Support client automatisé**, génération de contenu, **assistants intelligents**..."
  },
  {
    icon: Database,
    title: "Big Data Engineering",
    description: "Solutions complètes d'**ingénierie Big Data**, de l'**architecture des pipelines** de données à leur **déploiement en production**."
  },
  {
    icon: Code,
    title: "MLOps & Déploiement",
    description: "**Infrastructure** et **pipelines CI/CD** pour vos modèles ML. **Monitoring**, **versioning** et **scaling automatique** de vos systèmes d'IA."
  },
  {
    icon: LineChart,
    title: "Data Mining & Analytics",
    description: "Extraction d'**insights précieux** de vos données. **Modèles prédictifs**, **analyse de tendances** et **visualisations interactives**."
  }
];

export const Services = () => {
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
              Comment puis-je vous aider ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions d'IA sur-mesure pour propulser votre entreprise
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
                        {service.hasButton && (
                            <div className="pl-14 mt-4">
                              <Link to="/trainings" onClick={() => window.scrollTo(0, 0)}>
                                <Button variant="default" size="sm" className="group">
                                  Voir les formations
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="text-center">
            <Link to="/skills" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="outline" size="lg" className="group">
                Découvrir mes compétences
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
  );
};