import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Database, Brain, Cog, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "My mission is to ensure that your organization's data is well-prepared, clean, and reliable. I can help you create large-scale data pipelines that may involve pooling many different systems.",
    details: "As a data engineer, I can help you choose the right tools for the job and combine them to create solutions that enable your company's business processes with data pipelines.",
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
    description: "My mission is to help you understand if and where machine learning can be useful for your business, and to implement the AI models and systems for you.",
    details: "As a data scientist, I can help you create data pipelines for machine learning (extraction, cleaning, augmentation) and deploy state-of-the-art models tailored to your problem.",
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
    description: "I can work with your team to shorten and optimize your application lifecycle, and facilitate fast and clean deployments through standardization and automation.",
    details: "I'm also able to architect your systems using a cloud provider of your choice (AWS, GCP, Azure, IBMCloud). If you need to deploy CI/CD pipelines in your organization or expose applications as microservices, on-premise or in the cloud, I can do it for you.",
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
  },
  {
    icon: Sparkles,
    title: "LLM & GenAI Engineering",
    description: "As an LLM/GenAI engineer, I can deploy the latest open-source LLMs in the cloud or on-premise, design and deploy end-to-end LLM applications and RAG systems.",
    details: "I can also optimize inference performance with model quantization and efficient serving, and fine-tune and adapt foundation models to your specific domain and use cases.",
    capabilities: [
      "🚀 Deploy the latest open-source LLMs in the cloud or on-premise, as APIs or chatbots",
      "🧩 Design, architect and deploy end-to-end LLM applications and RAG systems",
      "📈 Boost your data scientists' productivity with MLOps/LLMOps tools",
      "⚡️ Optimize inference performance with model quantization and efficient serving",
      "🎯 Fine-tune and adapt foundation models to your specific domain and use cases"
    ],
    frameworks: [
      { name: "Hugging Face", logo: "https://www.lays.pro/assets/lays.pro/img/png/hf_logo.png" },
      { name: "vLLM", logo: "https://www.lays.pro/assets/lays.pro/img/png/vllm.png" },
      { name: "LangChain", logo: "https://miro.medium.com/0*k7y6OrKRXFHjFNm8.jpeg" },
      { name: "MLflow", logo: "https://www.lays.pro/assets/lays.pro/svg/mlflow.svg" },
      { name: "AWS Sagemaker", logo: "https://www.lays.pro/assets/lays.pro/img/png/sagemaker_logo.png" },
      { name: "Docker", logo: "https://www.lays.pro/assets/lays.pro/svg/docker.svg" }
    ]
  }
];

const SkillsEN = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                My Skills
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                I am a back-end systems specialist and data expert. I also have experience as a full-stack engineer and can quickly learn new technologies.
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
                              Languages
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
                              {category.title === "LLM & GenAI Engineering" ? "Frameworks & Tools" : "Frameworks"}
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

export default SkillsEN;
