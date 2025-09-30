import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

// Import images
import oglSvg from "@/assets/experiences/ogl.svg";
import sagemakerkubeflowmetaflow3 from "@/assets/experiences/sagemakerkubeflowmetaflow3.png";
import cyrilformation from "@/assets/experiences/cyrilformation.png";
import isochrone from "@/assets/experiences/isochrone.png";
import footfallWeek from "@/assets/experiences/footfall-week.png";
import canibMonth from "@/assets/experiences/canib-month.png";
import footfallYear from "@/assets/experiences/footfall-year.png";
import gumgumPipeline from "@/assets/experiences/gumgum-pipeline.png";
import cruiseControl from "@/assets/experiences/cruise-control.jpg";
import gumgumForecasting from "@/assets/experiences/gumgum-forecasting.png";
import inferenceApiScreenshot from "@/assets/experiences/inference-api-screenshot.png";

const experiences = [
    {
        title: "OpenGateLLM - Sovereign GenAI Solution",
        company: "Etalab",
        date: "Nov 2024",
        image: oglSvg,
        description: "At Etalab, I developed OpenGateLLM, an opensource sovereign generative AI solution for French public entities, handling 300k daily requests. Deployed dozens of self-hosted LLMs with advanced features (RAG, agentic, MCP...). Secured infrastructure and obtained ANSSI certification.",
        links: [
            { label: "Github Link", url: "https://github.com/etalab-ia/OpenGateLLM", type: "github" }
        ],
        backgroundColor: "white"
    },
    {
        title: "MLOps Platform Architecture",
        company: "ManoMano",
        date: "Feb 2022",
        image: sagemakerkubeflowmetaflow3,
        description: "At ManoMano, I designed the architecture of an MLOps platform on AWS, then implemented and industrialized it for all the data teams in the company. It is currently used daily by the data science team for building, deploying and monitoring ML models.",
        links: [
            { label: "Learn more", url: "https://medium.com/manomano-tech/product-categorization-classical-machine-learning-problem-for-a-difficult-e-commerce-task-b5a9039d884b", type: "external" }
        ]
    },
    {
        title: "Data Training & Education",
        company: "Jedha & Various Companies",
        date: "Apr 2022",
        image: cyrilformation,
        description: "I teach data courses and trainings in schools and companies covering model deployment, data science, data engineering, CI/CD, and best practices in data.",
        links: [
            { label: "Learn more", url: "https://www.jedha.co/", type: "external" }
        ]
    },
    {
        title: "Pedestrian Traffic Insights",
        company: "MyTraffic",
        date: "Jan 2020",
        image: isochrone,
        images: [isochrone, footfallWeek, canibMonth, footfallYear],
        description: "At MyTraffic, I implemented data science models at high scale, and deployed them on the cloud for pedestrian traffic insights.",
        links: [
            { label: "Learn more", url: "https://www.mytraffic.io/", type: "external" }
        ]
    },
    {
        title: "Big Data Pipelines",
        company: "GumGum",
        date: "Feb 2019",
        image: gumgumPipeline,
        description: "Built and maintained batch and real-time data pipelines to provide business insights on a continuous basis. These pipelines were downstream from a programmatic ad-serving platform generating 50 TB of data a day.",
        links: [
            { label: "Learn more", url: "https://gumgum.com/", type: "external" }
        ]
    },
    {
        title: "Kafka Cluster Management",
        company: "GumGum",
        date: "Apr 2019",
        image: cruiseControl,
        description: "Deployed a suite of monitoring and management tools across multiple Kafka clusters. These tools reduced the engineering time of certain cluster operations (scaling, rebalancing) by 90% as well as enhanced the overall visibility into the health of these clusters.",
        links: [
            { label: "Learn more", url: "https://github.com/linkedin/cruise-control", type: "github" }
        ]
    },
    {
        title: "Programmatic Inventory Forecasting",
        company: "GumGum",
        date: "Aug 2019",
        image: gumgumForecasting,
        description: "Developed a high-scale programmatic inventory forecasting web tool. This tool uses an ARIMA model and terabytes of historical data to predict ad inventory. In close cooperation with operational teams, we provided the end-users the ability to determine achievable ad campaigns goals with confidence using the forecast results.",
        links: [
            { label: "Learn more", url: "https://medium.com/gumgum-tech/time-series-forecasting-at-scale-8201f03a3217", type: "external" },
            { label: "AWS Case study", url: "https://aws.amazon.com/fr/solutions/case-studies/gumgum/", type: "external" }
        ]
    },
    {
        title: "Computer Vision Classification System",
        company: "Personal Project",
        date: "Feb 2020",
        image: inferenceApiScreenshot,
        description: "A simple computer vision system able to classify images into 1000 object categories, such as keyboard, pencil, and many animals.",
        links: [
            { label: "Visit the UI", url: "http://datascience.lays.pro", type: "external" }
        ]
    }
];

const ExperiencesEN = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="pt-20">
                <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                My Experiences
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Here are some examples of projects I worked on, in various contexts (start-ups, bigger companies, independently, as an employee).
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {experiences.map((experience, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm hover:shadow-xl group"
                                >
                                    {experience.images ? (
                                        <div className="relative h-56 overflow-hidden bg-muted/30">
                                            <div className="relative h-full">
                                                <img
                                                    src={experience.images[currentImageIndex]}
                                                    alt={`${experience.title} - Image ${currentImageIndex + 1}`}
                                                    className="w-full h-full object-contain cursor-pointer transition-transform duration-300"
                                                    onClick={() => setSelectedImage(experience.images![currentImageIndex])}
                                                />
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) =>
                                                            prev === 0 ? experience.images!.length - 1 : prev - 1
                                                        );
                                                    }}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) =>
                                                            prev === experience.images!.length - 1 ? 0 : prev + 1
                                                        );
                                                    }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                                                    {experience.images.map((_, imgIndex) => (
                                                        <button
                                                            key={imgIndex}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(imgIndex);
                                                            }}
                                                            className={`w-2 h-2 rounded-full transition-colors ${
                                                                imgIndex === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={experience.image}
                                                alt={experience.title}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                                style={experience.backgroundColor ? { backgroundColor: experience.backgroundColor } : {}}
                                            />
                                        </div>
                                    )}
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

            {/* Modal to display enlarged image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged view"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default ExperiencesEN;