import {Brain, Users, Clock, Target, CheckCircle2, Calendar, ArrowRight, EuroIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TrainingsPreviewEN } from "@/components/TrainingsPreview-EN";

const trainingHighlights = [
    {
        icon: Users,
        title: "Hands-on Learning",
        description: "50% of time dedicated to practical application"
    },
    {
        icon: Clock,
        title: "3 to 6 days of training",
        description: "Choose the modules that interest you"
    },
    {
        icon: Brain,
        title: "Experienced Trainer",
        description: "Over 10 years of experience in AI and data"
    },
    {
        icon: EuroIcon,
        title: "Custom quote",
        description: "Tailored pricing based on your needs and team size"
    }
];


const learningObjectives = [
    "Understand the fundamental concepts of LLMs and chatbots",
    "Master LLM tooling with LlamaIndex",
    "Communicate effectively with a chatbot through prompt engineering",
    "Develop a complete RAG application (Indexing, embedding, vector database, reranking)",
    "Fine-tune open-source models on your own data",
    "Deploy LLMs in production",
    "Create and implement professional AI agents"
];

const program = [
    {
        day: "Day 1",
        title: "Discovering LLMs and Chatbots",
        topics: [
            "Fundamental concepts and current technical landscape",
            "Prompt engineering and functions: leveraging chatbots to 100%",
            "Introduction to RAG (Retrieval Augmented Generation)"
        ],
        practice: [
            "Using an LLM via API",
            "Prompt engineering"
        ]
    },
    {
        day: "Day 2",
        title: "Implementing a RAG",
        topics: [
            "Understanding the building blocks needed to enhance an LLM's knowledge",
            "Deploying the stack necessary for a RAG"
        ],
        practice: [
            "Indexing, vectorizing text and storing it in a vector database (LanceDB)",
            "Retrieving documents via natural language",
            "Creating a RAG pipeline with LlamaIndex"
        ]
    },
    {
        day: "Day 3",
        title: "Deploying an LLM",
        topics: [
            "Required infrastructure",
            "Putting a model into production",
            "Understanding success and performance metrics of an LLM",
        ],
        practice: [
            "Fine-tuning an open-source model on your own data",
            "Deploying an LLM in production"
        ]
    },
    {
        day: "Day 4",
        title: "Setting up Agents",
        topics: [
            "What is an AI agent?",
            "Implementing your professional agent"
        ],
        practice: [
            "Using an agent in smolagent",
            "Creating your own AI agent"
        ]
    }
];

export const TrainingsEN = () => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleCalendly = () => {
        window.open('https://calendly.com/cyril-lay-pro/30min', '_blank');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" aria-hidden="true" />

                <div className="container mx-auto px-4 relative z-10">
                    <article className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <Brain className="w-4 h-4" />
                            Professional Training
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            LLMs & RAG Training
                        </h1>

                        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Master <strong>Large Language Models</strong>, <strong>RAG</strong>, and <strong>AI agents</strong> to develop high-performance generative AI applications
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={handleContactClick}
                                className="group"
                                aria-label="Request a quote for the training"
                            >
                                Request a Quote
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleCalendly}
                                className="group"
                                aria-label="Schedule a call to discuss the training"
                            >
                                <Calendar className="mr-2" aria-hidden="true" />
                                Schedule a Call
                            </Button>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                            {trainingHighlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
                                        <Icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                                        <h3 className="font-semibold mb-2">{highlight.title}</h3>
                                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            About This Training
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                <strong>LLMs (Large Language Models)</strong> offer numerous possibilities: code assistants, translation, image generation, writing. Mastering these tools has become a real productivity asset, allowing users to optimize their time and increase their efficiency across a wide range of fields.
                            </p>

                            <p>
                                <strong>RAG applications</strong> boost LLMs by enhancing their knowledge with your documentation (internal wiki/docs, text files, PDFs, databases...). With an expanded context, the LLM can provide personalized answers based on its logic and your information base.
                            </p>

                            <p>
                                You will discover the fundamental concepts of LLMs, current challenges, and the technological landscape. You will learn to maximize the potential of LLMs in your software applications (API, functions, prompt engineering, evaluation, RAG).
                            </p>

                            <p>
                                You will put the concepts studied into practice through concrete cases: using models and functions via API, developing RAG applications, integration into existing applications, and model fine-tuning.
                            </p>

                            <p>
                                Your trainer, <strong>Cyril LAY</strong>, is a curious and passionate engineer who connects the concepts studied with his professional experience in the field, enabling learners to transfer their new skills to their company.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Objectives */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Learning Objectives
                        </h2>

                        <div className="grid gap-4">
                            {learningObjectives.map((objective, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">{objective}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TrainingsPreviewEN />

            {/* Program Details */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Detailed Program
                        </h2>

                        <Accordion type="single" collapsible className="space-y-4">
                            {program.map((day, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`day-${index}`}
                                    className="border-2 rounded-2xl px-6 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                                >
                                    <AccordionTrigger className="hover:no-underline py-6">
                                        <div className="flex items-center gap-4 text-left">
                                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 font-bold text-primary flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground font-normal">{day.day}</div>
                                                <h3 className="text-lg font-bold">{day.title}</h3>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 pt-2">
                                        <div className="space-y-6 pl-16">
                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Theory:</h4>
                                                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground marker:text-primary">
                                                    {day.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex}>{topic}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Practical Exercises:</h4>
                                                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground marker:text-accent">
                                                    {day.practice.map((practice, practiceIndex) => (
                                                        <li key={practiceIndex}>{practice}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
            {/* Prerequisites */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Prerequisites
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-card/50 border border-border">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Python
                                </h3>
                                <p className="text-muted-foreground">
                                    Intermediate level in Python required
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-card/50 border border-border">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Software Engineering
                                </h3>
                                <p className="text-muted-foreground">
                                    Basic knowledge of software engineering
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Tame LLMs? 🤖🚀
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Contact me to organize this training for your team or discuss a custom program.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={handleContactClick}
                                className="group"
                                aria-label="Request a quote for the training"
                            >
                                Request a Quote
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleCalendly}
                                className="group"
                                aria-label="Schedule a call to discuss the training"
                            >
                                <Calendar className="mr-2" aria-hidden="true" />
                                Schedule a Call
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};