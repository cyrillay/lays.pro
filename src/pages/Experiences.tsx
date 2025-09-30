import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// Import images
import oglSvg from "@/assets/experiences/ogl.svg";
import sagemakerkubeflowmetaflow3 from "@/assets/experiences/sagemakerkubeflowmetaflow3.png";
import cyrilformation from "@/assets/experiences/cyrilformation.png";
import isochrone from "@/assets/experiences/isochrone.png";
import gumgumPipeline from "@/assets/experiences/gumgum-pipeline.png";
import cruiseControl from "@/assets/experiences/cruise-control.jpg";
import gumgumForecasting from "@/assets/experiences/gumgum-forecasting.png";
import inferenceApiScreenshot from "@/assets/experiences/inference-api-screenshot.png";

const experiences = [
    {
        title: "OpenGateLLM - Solution GenAI Souveraine",
        company: "Etalab",
        date: "Nov 2024",
        image: oglSvg,
        description: "Chez Etalab, j'ai développé OpenGateLLM, une solution open source d'IA générative souveraine pour les entités publiques françaises, gérant 300k requêtes quotidiennes. Déploiement de dizaines de LLMs auto-hébergés avec des fonctionnalités avancées (RAG, agents, MCP...). Infrastructure sécurisée et certification ANSSI obtenue.",
        links: [
            { label: "Lien Github", url: "https://github.com/etalab-ia/OpenGateLLM", type: "github" }
        ],
        backgroundColor: "white"
    },
    {
        title: "Architecture de Plateforme MLOps",
        company: "ManoMano",
        date: "Fév 2022",
        image: sagemakerkubeflowmetaflow3,
        description: "Chez ManoMano, j'ai conçu l'architecture d'une plateforme MLOps sur AWS, puis l'ai implémentée et industrialisée pour toutes les équipes data de l'entreprise. Elle est actuellement utilisée quotidiennement par l'équipe data science pour construire, déployer et monitorer les modèles ML.",
        links: [
            { label: "En savoir plus", url: "https://medium.com/manomano-tech/product-categorization-classical-machine-learning-problem-for-a-difficult-e-commerce-task-b5a9039d884b", type: "external" }
        ]
    },
    {
        title: "Formation Data & Enseignement",
        company: "Jedha & Diverses Entreprises",
        date: "Avr 2022",
        image: cyrilformation,
        description: "J'enseigne des cours et formations data dans des écoles et entreprises couvrant le déploiement de modèles, la data science, le data engineering, le CI/CD et les bonnes pratiques data.",
        links: [
            { label: "En savoir plus", url: "https://www.jedha.co/", type: "external" }
        ]
    },
    {
        title: "Insights Trafic Piétonnier",
        company: "MyTraffic",
        date: "Jan 2020",
        image: isochrone,
        description: "Chez MyTraffic, j'ai implémenté des modèles de data science à grande échelle et les ai déployés dans le cloud pour des insights sur le trafic piétonnier.",
        links: [
            { label: "En savoir plus", url: "https://www.mytraffic.io/", type: "external" }
        ]
    },
    {
        title: "Pipelines Big Data",
        company: "GumGum",
        date: "Fév 2019",
        image: gumgumPipeline,
        description: "Construction et maintenance de pipelines de données batch et temps réel pour fournir des insights business en continu. Ces pipelines étaient en aval d'une plateforme d'ad-serving programmatique générant 50 To de données par jour.",
        links: [
            { label: "En savoir plus", url: "https://gumgum.com/", type: "external" }
        ]
    },
    {
        title: "Gestion de Clusters Kafka",
        company: "GumGum",
        date: "Avr 2019",
        image: cruiseControl,
        description: "Déploiement d'une suite d'outils de monitoring et de gestion sur plusieurs clusters Kafka. Ces outils ont réduit de 90% le temps d'engineering pour certaines opérations de cluster (scaling, rééquilibrage) et amélioré la visibilité sur la santé de ces clusters.",
        links: [
            { label: "En savoir plus", url: "https://github.com/linkedin/cruise-control", type: "github" }
        ]
    },
    {
        title: "Prévision d'Inventaire Programmatique",
        company: "GumGum",
        date: "Août 2019",
        image: gumgumForecasting,
        description: "Développement d'un outil web de prévision d'inventaire programmatique à grande échelle. Cet outil utilise un modèle ARIMA et des téraoctets de données historiques pour prédire l'inventaire publicitaire. En étroite collaboration avec les équipes opérationnelles, nous avons fourni aux utilisateurs finaux la capacité de déterminer avec confiance des objectifs de campagnes publicitaires réalisables.",
        links: [
            { label: "En savoir plus", url: "https://medium.com/gumgum-tech/time-series-forecasting-at-scale-8201f03a3217", type: "external" },
            { label: "Étude de cas AWS", url: "https://aws.amazon.com/fr/solutions/case-studies/gumgum/", type: "external" }
        ]
    },
    {
        title: "Système de Classification Vision",
        company: "Projet Personnel",
        date: "Fév 2020",
        image: inferenceApiScreenshot,
        description: "Un système de vision par ordinateur simple capable de classifier des images en 1000 catégories d'objets, comme clavier, crayon et de nombreux animaux.",
        links: [
            { label: "Voir l'interface", url: "http://datascience.lays.pro", type: "external" }
        ]
    }
];

const Experiences = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                Mes Expériences
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Voici quelques exemples de projets sur lesquels j'ai travaillé, dans divers contextes (start-ups, grandes entreprises, indépendant, en tant qu'employé).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {experiences.map((experience, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            src={experience.image}
                                            alt={experience.title}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            style={experience.backgroundColor ? { backgroundColor: experience.backgroundColor } : {}}
                                        />
                                    </div>
                                    <CardContent className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                                                <span className="font-semibold text-primary">{experience.company}</span>
                                                <span>{experience.date}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {experience.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {experience.links.map((link, linkIndex) => (
                                                <Button
                                                    key={linkIndex}
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                    className="text-xs"
                                                >
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1"
                                                    >
                                                        {link.type === "github" ? (
                                                            <Github className="w-3 h-3" />
                                                        ) : (
                                                            <ExternalLink className="w-3 h-3" />
                                                        )}
                                                        {link.label}
                                                    </a>
                                                </Button>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Experiences;