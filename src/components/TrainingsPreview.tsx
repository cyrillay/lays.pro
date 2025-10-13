import { useState } from "react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import pretrainingSlide from "@/assets/trainings/pretraining.png";
import fewshotSlide from "@/assets/trainings/prompting.png";
import ragSlide from "@/assets/trainings/rag-architecture.png";
import cyrilFormation from "@/assets/experiences/cyrilformation.png";
import mcpSlide1 from "@/assets/trainings/mcp-1.png";
import mcpSlide2 from "@/assets/trainings/mcp-2.png";

const slides = [
    {
        title: "MCP - Model Context Protocol",
        description: "Comment connecter des IA à n'importe quelle application",
        image: mcpSlide1,
        alt: "slide explaining MCP"
    },
    {
        title: "Création d'un LLM - Le pre-training",
        description: "Comprendre comment les modèles sont entraînés et prédisent le token suivant",
        image: pretrainingSlide,
        alt: "Slide expliquant le pre-training des LLMs avec exemple de tokenization"
    },
    {
        title: "MCP - Model Context Protocol",
        description: "Comment connecter des IA à n'importe quelle application",
        image: mcpSlide2,
        alt: "slide explaining MCP"
    },
    {
        title: "Prompt Engineering",
        description: "7 techniques de prompting pour améliorer les réponses des LLMs avec des exemples",
        image: fewshotSlide,
        alt: "Tableau comparatif des techniques 0-shot, 1-shot et few-shot prompting"
    },
    {
        title: "Architecture RAG",
        description: "Concevez et implémentez un système RAG avec embedding, base vectorielle et reranking",
        image: ragSlide,
        alt: "Diagramme d'architecture d'un système RAG avec LlamaIndex"
    }
];

export const TrainingsPreview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        <Presentation className="w-4 h-4" />
                        Aperçu de la formation
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Découvrez le contenu de la formation
                    </h2>
                    <p className="text-muted-foreground">
                        Exemples de slides et concepts abordés
                    </p>
                </div>

                <div className="relative bg-card rounded-2xl border overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-[minmax(280px,380px),minmax(500px,1fr)] gap-0">
                        {/* Left side - Instructor */}
                        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-6 flex flex-col">
                            <div className="w-full">
                                <img
                                    src={cyrilFormation}
                                    alt="Cyril donnant une formation sur les LLMs"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                            <div className="mt-4 space-y-4">
                                <div className="text-center space-y-3">
                                    <h3 className="text-lg font-bold text-foreground">
                                        Formations sur les LLMs
                                    </h3>
                                    <div className="w-16 h-0.5 bg-primary/30 mx-auto"></div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Votre formateur, <strong>Cyril LAY</strong>, est un ingénieur curieux et passionné qui met en relation les notions étudiées avec son expérience professionnelle dans le domaine, permettant aux apprenant·e·s de transposer leurs nouvelles compétences dans leur entreprise.
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 pt-2">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        Huggingface
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        vLLM
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        agents
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        Python
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                        API
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Slides carousel */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="relative">
                                <div className="aspect-video bg-muted/30 relative group rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].alt}
                                        className="w-full h-full object-contain"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={previousSlide}
                                            className="bg-background/95 backdrop-blur-sm shadow-lg"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={nextSlide}
                                            className="bg-background/95 backdrop-blur-sm shadow-lg"
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl font-bold mb-2">
                                        {slides[currentSlide].title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {slides[currentSlide].description}
                                    </p>
                                </div>

                                <div className="flex justify-center gap-2 mt-6">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all ${
                                                index === currentSlide
                                                    ? "w-8 bg-primary"
                                                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                            aria-label={`Aller au slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};