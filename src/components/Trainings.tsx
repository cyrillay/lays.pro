import {Brain, Users, Clock, CheckCircle2, Calendar, ArrowRight, EuroIcon} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { TrainingsPreview } from "@/components/TrainingsPreview.tsx";

const trainingHighlights = [
    {
        icon: Users,
        title: "Apprentissage concret",
        description: "50% du temps consacré à la mise en pratique"
    },
    {
        icon: Clock,
        title: "3 à 6 jours de formation",
        description: "Vous choisissez les parties qui vous intéressent"
    },
    {
        icon: Brain,
        title: "Formateur expérimenté",
        description: "Plus de 10 ans d’expérience en IA et data"
    },
    {
        icon: EuroIcon,
        title: "Un devis personnalisé",
        description: "Un tarif sur mesure selon vos besoins et la taille de votre équipe"
    }
];


const learningObjectives = [
    "Comprendre les concepts fondamentaux des LLMs et chatbots",
    "Maîtriser l'outillage autour des LLMs avec LlamaIndex",
    "Communiquer efficacement avec un chatbot via le prompt engineering",
    "Développer une application RAG complète (Indexing, embedding, base de données vectorielle, reranking)",
    "Fine-tuner des modèles open-source sur vos propres données",
    "Déployer des LLMs en production",
    "Créer et implémenter des agents IA professionnels"
];

const program = [
    {
        day: "Jour 1",
        title: "Découverte des LLMs et chatbots",
        topics: [
            "Concepts fondamentaux et panorama technique actuel",
            "Prompt engineering et fonctions : exploiter les chatbots à 100%",
            "Découverte du RAG (Retrieval Augmented Generation)"
        ],
        practice: [
            "Utilisation d'un LLM via API",
            "Prompt engineering"
        ]
    },
    {
        day: "Jour 2",
        title: "Implémenter un RAG",
        topics: [
            "Comprendre les briques nécessaires pour augmenter les connaissances d'un LLM",
            "Déployer la stack nécessaire à un RAG"
        ],
        practice: [
            "Indexer, vectoriser du texte et le stocker dans une base de données vectorielle (LanceDB)",
            "Retrouver des documents via du langage naturel",
            "Créer une pipeline RAG avec LlamaIndex"
        ]
    },
    {
        day: "Jour 3",
        title: "Déploiement d'un LLM",
        topics: [
            "Les infrastructures nécessaires",
            "Mettre un modèle en production",
            "Comprendre les métriques de succès et de performance d'un LLM",
        ],
        practice: [
            "Fine-tuner un modèle open-source sur ses propres données",
            "Déployer un LLM en production"
        ]
    },
    {
        day: "Jour 4",
        title: "Mise en place d'agents",
        topics: [
            "Qu'est-ce qu'un agent IA ?",
            "Implémenter son agent professionnel"
        ],
        practice: [
            "Utiliser un agent dans smolagent",
            "Créer son propre agent IA"
        ]
    }
];

export const Trainings = () => {
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
                            Formation professionnelle
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Formation LLMs & RAG
                        </h1>

                        <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                            Maîtrisez les <strong>Large Language Models</strong>, le <strong>RAG</strong> et les <strong>agents IA</strong> pour développer des applications d'IA générative performantes
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={handleContactClick}
                                className="group"
                                aria-label="Demander un devis pour la formation"
                            >
                                Demander un devis
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleCalendly}
                                className="group"
                                aria-label="Réserver un appel pour discuter de la formation"
                            >
                                <Calendar className="mr-2" aria-hidden="true" />
                                Réserver un appel
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
                            À propos de cette formation
                        </h2>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                            <p>
                                Les <strong>LLMs (Large Language Models)</strong> offrent de nombreuses possibilités : assistants de code, traduction, génération d'image, écriture. Maîtriser ces outils est devenu un véritable atout de productivité, permettant aux utilisateurs d'optimiser leur temps et d'augmenter leur efficacité dans un vaste panel de domaines.
                            </p>

                            <p>
                                Les <strong>applications RAG</strong> permettent de booster les LLMs en augmentant leurs connaissances avec votre documentation (wiki/doc interne, fichiers texte, PDF, bases de données…). Le LLM, disposant d'un contexte élargi, est ainsi en mesure de fournir des réponses personnalisées en s'appuyant sur sa logique et votre base d'information.
                            </p>

                            <p>
                                Vous découvrirez les concepts fondamentaux des LLMs, les enjeux du moment et la scène technologique actuelle. Vous apprendrez à exploiter au maximum les possibilités des LLMs dans vos applications software (API, fonctions, prompt engineering, évaluation, RAG).
                            </p>

                            <p>
                                Vous mettrez en pratique les notions étudiées dans des cas concrets : utilisation des modèles et fonctions par API, développement d'application RAG, intégration dans des applications existantes, fine-tuning de modèles.
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
                            Objectifs pédagogiques
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

            <TrainingsPreview />

            {/* Program Details */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            Programme détaillé
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
                                                <h4 className="font-semibold mb-3 text-foreground">Théorie :</h4>
                                                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground marker:text-primary">
                                                    {day.topics.map((topic, topicIndex) => (
                                                        <li key={topicIndex}>{topic}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Mises en pratique :</h4>
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
                            Prérequis
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl bg-card/50 border border-border">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Python
                                </h3>
                                <p className="text-muted-foreground">
                                    Niveau intermédiaire en Python requis
                                </p>
                            </div>

                            <div className="p-6 rounded-xl bg-card/50 border border-border">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    Software Engineering
                                </h3>
                                <p className="text-muted-foreground">
                                    Quelques notions de software engineering
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
                            Prêt à dompter les LLM ? 🤖🚀
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Contactez-moi pour organiser cette formation pour votre équipe ou discuter d'un programme sur-mesure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                variant="hero"
                                size="lg"
                                onClick={handleContactClick}
                                className="group"
                                aria-label="Demander un devis pour la formation"
                            >
                                Demander un devis
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={handleCalendly}
                                className="group"
                                aria-label="Réserver un appel pour discuter de la formation"
                            >
                                <Calendar className="mr-2" aria-hidden="true" />
                                Réserver un appel
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};