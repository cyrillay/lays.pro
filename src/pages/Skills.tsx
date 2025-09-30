import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Database, Brain, Cog, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Sparkles,
    title: "LLM & GenAI Engineering",
    description: "En tant qu'ingénieur LLM/GenAI, je peux déployer les derniers LLMs open-source dans le cloud ou on-site, concevoir et déployer des applications LLM end-to-end et des systèmes RAG.",
    details: "Par exemple, je vous aide à  :",
    capabilities: [
      "🚀 Déployer les derniers LLMs open-source dans le cloud ou sur site, en tant qu'APIs ou chatbots",
      "🧩 Concevoir, architecturer et déployer des applications LLM end-to-end et des systèmes RAG",
      "📈 Booster la productivité de vos data scientists avec des outils MLOps/LLMOps",
      "⚡️ Optimiser les performances d'inférence avec la quantization de modèles et un serving efficace",
      "🎯 Fine-tuner et adapter les modèles foundation à votre domaine et cas d'usage spécifiques"
    ],
    frameworks: [
      { name: "Hugging Face", logo: "https://www.lays.pro/assets/lays.pro/img/png/hf_logo.png" },
      { name: "vLLM", logo: "https://www.lays.pro/assets/lays.pro/img/png/vllm.png" },
      { name: "LangChain", logo: "https://miro.medium.com/0*k7y6OrKRXFHjFNm8.jpeg" },
      { name: "MLflow", logo: "https://www.lays.pro/assets/lays.pro/svg/mlflow.svg" },
      { name: "AWS Sagemaker", logo: "https://www.lays.pro/assets/lays.pro/img/png/sagemaker_logo.png" },
      { name: "Docker", logo: "https://www.lays.pro/assets/lays.pro/svg/docker.svg" }
    ]
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Ma mission est de m'assurer que les données de votre organisation sont bien préparées, propres et fiables. Je peux vous aider à créer des pipelines de données à grande échelle qui peuvent impliquer la mise en commun de nombreux systèmes différents.",
    details: "En tant qu'ingénieur data, je peux vous aider à choisir les bons outils pour le travail et les combiner pour créer des solutions permettant les processus métier de votre entreprise avec des pipelines de données.",
    languages: [
      { name: "Scala", logo: "https://www.lays.pro/assets/lays.pro/img/png/scala_logo.png" },
      { name: "Python", logo: "https://www.lays.pro/assets/lays.pro/img/png/python_logo.png" },
      { name: "SQL", logo: "https://www.lays.pro/assets/lays.pro/img/png/sql_logo.png" },
      { name: "Bash", logo: "https://www.lays.pro/assets/lays.pro/img/png/bash_logo.png" }
    ],
    frameworks: [
      { name: "Apache Spark", logo: "https://www.lays.pro/assets/lays.pro/svg/apache-spark.svg" },
      { name: "Hadoop", logo: "https://www.lays.pro/assets/lays.pro/svg/hadoop.svg" },
      { name: "Airflow", logo: "https://www.lays.pro/assets/lays.pro/svg/airflow.svg" },
      { name: "Apache Kafka", logo: "https://www.lays.pro/assets/lays.pro/svg/apache-kafka.svg" },
      { name: "AWS", logo: "https://www.lays.pro/assets/lays.pro/svg/aws.svg" },
      { name: "Azure", logo: "https://www.lays.pro/assets/lays.pro/svg/microsoft-azure.svg" },
      { name: "Looker", logo: "https://www.lays.pro/assets/lays.pro/svg/looker.svg" }
    ]
  },
  {
    icon: Brain,
    title: "Machine Learning & Data Science",
    description: "Ma mission est de vous aider à comprendre si et où le machine learning peut être utile pour votre entreprise, et d'implémenter les modèles et systèmes d'IA pour vous.",
    details: "En tant que data scientist, je peux vous aider à créer des pipelines de données pour le machine learning (extraction, nettoyage, augmentation) et déployer des modèles state-of-the-art adaptés à votre problématique.",
    languages: [
      { name: "Python", logo: "https://www.lays.pro/assets/lays.pro/img/png/python_logo.png" },
      { name: "SQL", logo: "https://www.lays.pro/assets/lays.pro/img/png/sql_logo.png" },
      { name: "R", logo: "https://www.lays.pro/assets/lays.pro/img/png/r_logo.png" }
    ],
    frameworks: [
      { name: "Keras", logo: "https://www.lays.pro/assets/lays.pro/svg/keras.svg" },
      { name: "Scikit-learn", logo: "https://www.lays.pro/assets/lays.pro/svg/scikit-learn.svg" },
      { name: "TensorFlow", logo: "https://www.lays.pro/assets/lays.pro/svg/tensorflow.svg" },
      { name: "OpenCV", logo: "https://www.lays.pro/assets/lays.pro/svg/open-cv.svg" }
    ]
  },
  {
    icon: Cog,
    title: "DevOps & MLOps",
    description: "Je peux travailler avec votre équipe pour raccourcir et optimiser le cycle de vie de vos applications, et faciliter des déploiements rapides et propres via la standardisation et l'automatisation.",
    details: "Je suis également capable d'architecturer vos systèmes en utilisant un fournisseur cloud de votre choix (AWS, GCP, Azure, IBMCloud). Si vous devez déployer des pipelines CI/CD dans votre organisation ou exposer des applications en tant que micro-services, sur site ou dans le cloud, je peux le faire pour vous.",
    languages: [
      { name: "Python", logo: "https://www.lays.pro/assets/lays.pro/img/png/python_logo.png" },
      { name: "Bash", logo: "https://www.lays.pro/assets/lays.pro/img/png/bash_logo.png" },
      { name: "YAML", logo: "https://www.lays.pro/assets/lays.pro/img/png/yaml_logo.png" }
    ],
    frameworks: [
      { name: "Docker", logo: "https://www.lays.pro/assets/lays.pro/svg/docker.svg" },
      { name: "Drone", logo: "https://www.lays.pro/assets/lays.pro/svg/drone.svg" },
      { name: "Jenkins", logo: "https://www.lays.pro/assets/lays.pro/svg/jenkins.svg" },
      { name: "Terraform", logo: "https://www.lays.pro/assets/lays.pro/svg/terraform.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mes Compétences
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Je suis un spécialiste des systèmes data et back-end. Je peux cependant être full stack et apprendre le bon outil pour le bon besoin.
              </p>
            </div>

            <div className="space-y-16 max-w-7xl mx-auto">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card 
                    key={index}
                    className="p-8 md:p-12 border-2 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                          <Icon className="w-12 h-12 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-grow space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                          <p className="text-lg text-muted-foreground mb-3">
                            {category.description}
                          </p>
                          <p className="text-muted-foreground">
                            {category.details}
                          </p>
                        </div>

                        {category.capabilities && (
                          <div className="space-y-2">
                            {category.capabilities.map((capability, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {capability}
                              </p>
                            ))}
                          </div>
                        )}

                        {category.languages && (
                          <div>
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                              Langages
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {category.languages.map((lang, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                  <img 
                                    src={lang.logo} 
                                    alt={lang.name}
                                    className="h-8 w-8 object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {category.frameworks && (
                          <div>
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-3">
                              {category.title === "LLM & GenAI Engineering" ? "Frameworks & Outils" : "Frameworks"}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                              {category.frameworks.map((framework, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                                  <img 
                                    src={framework.logo} 
                                    alt={framework.name}
                                    className="h-8 object-contain max-w-[80px]"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
