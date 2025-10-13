import { useState } from "react";
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import pretrainingSlide from "@/assets/trainings/pretraining.png";
import fewshotSlide from "@/assets/trainings/prompting.png";
import ragSlide from "@/assets/trainings/rag-architecture.png";
import mcpSlide1 from "@/assets/trainings/mcp-1.png";
import mcpSlide2 from "@/assets/trainings/mcp-2.png";
import cyrilFormation from "@/assets/experiences/cyrilformation.png";

const slides = [
    {
        title: "MCP - Model Context Protocol",
        description: "How to connect LLMs to any application",
        image: mcpSlide1,
        alt: "slide explaining MCP"
    },
    {
        title: "Building an LLM - pre-training fundamentals",
        description: "Understand how large language models are trained and how they predict the next token",
        image: pretrainingSlide,
        alt: "slide explaining LLM pre-training with tokenization example"
    },
    {
        title: "MCP - Model Context Protocol",
        description: "How to connect LLMs to any application",
        image: mcpSlide2,
        alt: "slide explaining MCP"
    },
    {
        title: "Prompt engineering techniques",
        description: "Write better prompts, get better responses",
        image: fewshotSlide,
        alt: "comparison chart of 0-shot, 1-shot and few-shot prompting techniques"
    },
    {
        title: "RAG architecture overview",
        description: "Design and implement a RAG system with embedding, vector database and reranking",
        image: ragSlide,
        alt: "architecture diagram of a RAG system with LlamaIndex"
    }
];

export const TrainingsPreviewEN = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const previousSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="py-12" aria-label="training program preview">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                        <Presentation className="w-4 h-4" />
                        Training preview
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Discover the training content
                    </h2>
                    <p className="text-muted-foreground">
                        Sample slides and concepts covered in the course
                    </p>
                </div>

                <div className="relative bg-card rounded-2xl border overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-[minmax(280px,380px),minmax(500px,1fr)] gap-0">
                        {/* Left side - Instructor */}
                        <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 p-6 flex flex-col">
                            <div className="w-full">
                                <img
                                    src={cyrilFormation}
                                    alt="Cyril teaching an LLM training course"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                            <div className="mt-4 space-y-4">
                                <div className="text-center space-y-3">
                                    <h3 className="text-lg font-bold text-foreground">
                                        LLM training programs
                                    </h3>
                                    <div className="w-16 h-0.5 bg-primary/30 mx-auto"></div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Your instructor, <strong>Cyril LAY</strong>, is a curious and passionate engineer who connects theoretical concepts with real-world professional experience in the field, enabling learners to apply their new skills in their own companies.
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
                                            aria-label="previous slide"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={nextSlide}
                                            className="bg-background/95 backdrop-blur-sm shadow-lg"
                                            aria-label="next slide"
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

                                <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="slide navigation">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all ${
                                                index === currentSlide
                                                    ? "w-8 bg-primary"
                                                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                            role="tab"
                                            aria-selected={index === currentSlide}
                                            aria-label={`go to slide ${index + 1}`}
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