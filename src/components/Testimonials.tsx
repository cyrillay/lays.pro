import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import jonbaker from "@/assets/testimonials/jonbaker.jpeg";
import azam from "@/assets/testimonials/azam.jpeg";
import antoine from "@/assets/testimonials/antoine.jpeg";
import samuel from "@/assets/testimonials/samuel.png";
import alexandre from "@/assets/testimonials/alexandre.jpeg";
import victor from "@/assets/testimonials/victor.jpeg";

const testimonials = [
  {
    name: "Jonathan B.",
    position: "COO",
    company: "Simudyne",
    image: jonbaker,
    text: "Cyril enthusiastically approaches complex problems and is able to think through them clearly. He is a good listener and is able to explain complicated ideas succinctly to team members on the business and technical sides. Cyril was also involved in some presentations to partners and clients where he represented the company very well. Cyril is a promising machine learning engineer and I would gladly work with him again in the future."
  },
  {
    name: "Azam A.",
    position: "Senior Data Engineer",
    company: "Gumgum",
    image: azam,
    text: "At Gumgum, Cyril was working with me on data-engineering and backend development. He started as an intern, and quickly showed great aptitude and a drive for results. Eventually becoming a full time member of the team, he consistently produced results and became a key asset. I would work with him again and recommend him to any software engineering or data related role."
  },
  {
    name: "Antoine W.",
    position: "Senior Software Engineer",
    company: "MyTraffic",
    image: antoine,
    text: "J'ai eu le plaisir de travailler avec Cyril sur des projets de data engineering pendant 3 mois à MyTraffic. Ca a été un plaisir: Cyril est à la fois curieux et rigoureux, il vise la perfection tout en gardant les impératifs business en tête. Il n'a jamais hésité à \"mettre les mains dans le cambouis\" et à monter en compétences sur certaines parties du produit moins axées data engineering. Et en bonus: il est super sympa ! Je suis convaincu que, grâce à ses qualités ainsi que ses capacités de raisonnement et de communication, Cyril saura relever tout défi tech qui se présente à lui."
  },
  {
    name: "Samuel K.",
    position: "Product Line Manager Datalake",
    company: "Air Liquide",
    image: samuel,
    text: "Cyril a été d'une très grande aide dans la réalisation de notre projet d'API data. Il a mis en place toute la stack technique en IaC, du développement à la production ainsi que l'implémentation à partir de la spécification fonctionnelle et au passage le pipeline d'alimentation des données avec les transformations métier. Aujourd'hui elle est déjà utilisée par plusieurs applications. Cyril est déterminé et efficace dans son travail et sait communiquer. Il est un vrai atout pour toute équipe. Je recommande et espère pouvoir travailler de nouveau avec lui."
  },
  {
    name: "Alexandre J.",
    position: "Head of Product",
    company: "Medissimo",
    image: alexandre,
    text: "Cyril est intervenu chez Medissimo pour mettre en place un module analytique utilisant nos bases de données. En amont de la mission, il nous a conseillé sur la solution la plus adaptée, et a su l'intégrer efficacement à nos infrastructures existantes. Cyril a aussi réalisé une formation en présentiel sur des méthodes et bonnes pratiques data qui ont débloqué et facilité un projet de back-office. Cyril connaît son sujet et c'est avec plaisir que nous retravaillerons avec lui."
  },
  {
    name: "Victor H.",
    position: "Senior Growth Engineer",
    company: "ManoMano",
    image: victor,
    text: "Cyril nous a rejoint deux semaines pour automatiser un traitement de données CRM via Python/Airflow. En s'adaptant très rapidement à nos outils ainsi qu'à nos process, il a su délivrer chaque échelon du livrable dans les temps. Les décisions techniques furent par ailleurs facilitées par une communication fluide et agréable. C'est avec plaisir que nous retravaillerions avec Cyril."
  }
];

export const Testimonials = () => {
  return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que mes clients disent
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Retours d'expérience de clients
            </p>
          </div>

          <div className="relative">
            <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm group relative">
                        <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
                        <CardContent className="p-0 flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                            />
                            <div>
                              <h3 className="font-bold text-lg">{testimonial.name}</h3>
                              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                              <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed flex-grow">
                            {testimonial.text}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/10 text-primary-foreground hover:bg-primary/40 w-10 h-10 shadow-lg z-10" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/10 text-primary-foreground hover:bg-primary/40 w-10 h-10 shadow-lg z-10" />
            </Carousel>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                  <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-primary/20 hover:bg-primary/50 transition-colors"
                  />
              ))}
            </div>
          </div>

        </div>
      </section>
  );
};