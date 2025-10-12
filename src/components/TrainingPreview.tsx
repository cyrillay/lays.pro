import { useState } from "react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import pretrainingSlide from "@/assets/trainings/pretraining.png";
import fewshotSlide from "@/assets/trainings/prompting.png";
import ragSlide from "@/assets/trainings/rag-architecture.png";

const slides = [
    {
        title: "Création d'un LLM - Le pre-training",
        description: "Comprendre comment les LLMs sont entraînés et comment ils prédisent le token suivant",
        image: pretrainingSlide,
        alt: "Slide expliquant le pre-training des LLMs avec exemple de tokenization"
    },
    {
        title: "Prompt Engineering",
        description: "Techniques de prompting pour améliorer les performances des LLMs avec des exemples",
        image: fewshotSlide,
        alt: "Tableau comparatif des techniques 0-shot, 1-shot et few-shot prompting"
    },
    {
        title: "Architecture RAG",
        description: "Pipeline complet d'un système RAG avec embedding, base vectorielle et reranking",
        image: ragSlide,
        alt: "Diagramme d'architecture d'un système RAG avec LlamaIndex"
    }
];

export const TrainingPreview = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-4xl">
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

                <div className="relative bg-card rounded-xl border overflow-hidden shadow-lg max-w-xl mx-auto">
                    <div className="aspect-video bg-muted/30 relative group">
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].alt}
                            className="w-full h-full object-contain"
                        />

                        <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={previousSlide}
                                className="bg-background/90 backdrop-blur-sm"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={nextSlide}
                                className="bg-background/90 backdrop-blur-sm"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-1">
                            {slides[currentSlide].title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {slides[currentSlide].description}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
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
        </section>
    );
};