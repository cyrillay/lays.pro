import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jonathan B.",
    position: "COO",
    company: "Simudyne",
    image: "https://www.lays.pro/assets/lays.pro/img/jonbaker.jpeg",
    text: "Cyril enthusiastically approaches complex problems and is able to think through them clearly. He is a good listener and is able to explain complicated ideas succinctly to team members on the business and technical sides. Cyril was also involved in some presentations to partners and clients where he represented the company very well. Cyril is a promising machine learning engineer and I would gladly work with him again in the future."
  },
  {
    name: "Azam A.",
    position: "Senior Data Engineer",
    company: "Gumgum",
    image: "https://www.lays.pro/assets/lays.pro/img/azam.jpeg",
    text: "At Gumgum, Cyril was working with me on data-engineering and backend development. He started as an intern, and quickly showed great aptitude and a drive for results. Eventually becoming a full time member of the team, he consistently produced results and became a key asset. I would work with him again and recommend him to any software engineering or data related role."
  },
  {
    name: "Antoine W.",
    position: "Senior Software Engineer",
    company: "MyTraffic",
    image: "https://www.lays.pro/assets/lays.pro/img/antoine.jpeg",
    text: "J'ai eu le plaisir de travailler avec Cyril sur des projets de data engineering pendant 3 mois à MyTraffic. Ca a été un plaisir: Cyril est à la fois curieux et rigoureux, il vise la perfection tout en gardant les impératifs business en tête. Il n'a jamais hésité à \"mettre les mains dans le cambouis\" et à monter en compétences sur certaines parties du produit moins axées data engineering. Et en bonus: il est super sympa ! Je suis convaincu que, grâce à ses qualités ainsi que ses capacités de raisonnement et de communication, Cyril saura relever tout défi tech qui se présente à lui."
  },
  {
    name: "Samuel K.",
    position: "Product Line Manager Datalake",
    company: "Air Liquide",
    image: "https://www.lays.pro/assets/lays.pro/img/samuel.png",
    text: "Cyril a été d'une très grande aide dans la réalisation de notre projet d'API data. Il a mis en place toute la stack technique en IaC, du développement à la production ainsi que l'implémentation à partir de la spécification fonctionnelle et au passage le pipeline d'alimentation des données avec les transformations métier. Aujourd'hui elle est déjà utilisée par plusieurs applications. Cyril est déterminé et efficace dans son travail et sait communiquer. Il est un vrai atout pour toute équipe. Je recommande et espère pouvoir travailler de nouveau avec lui."
  },
  {
    name: "Alexandre J.",
    position: "Head of Product",
    company: "Medissimo",
    image: "https://www.lays.pro/assets/lays.pro/img/alexandre.jpeg",
    text: "Cyril est intervenu chez Medissimo pour mettre en place un module analytique utilisant nos bases de données. En amont de la mission, il nous a conseillé sur la solution la plus adaptée, et a su l'intégrer efficacement à nos infrastructures existantes. Cyril a aussi réalisé une formation en présentiel sur des méthodes et bonnes pratiques data qui ont débloqué et facilité un projet de back-office. Cyril connaît son sujet et c'est avec plaisir que nous retravaillerons avec lui."
  },
  {
    name: "Victor H.",
    position: "Senior Growth Engineer",
    company: "ManoMano",
    image: "https://www.lays.pro/assets/lays.pro/img/victor.jpeg",
    text: "Cyril nous a rejoint deux semaines pour automatiser un traitement de données CRM via Python/Airflow. En s'adaptant très rapidement à nos outils ainsi qu'à nos process, il a su délivrer chaque échelon du livrable dans les temps. Les décisions techniques furent par ailleurs facilitées par une communication fluide et agréable. C'est avec plaisir que nous retravaillerions avec Cyril."
  }
];

export const TestimonialsEN = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What my clients say
          </h2>
          <p className="text-xl text-muted-foreground">
            Testimonials from professionals I've worked with
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50 transition-all">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
