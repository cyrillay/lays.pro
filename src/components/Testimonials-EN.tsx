import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

import jonbaker from "@/assets/testimonials/jonbaker.jpeg";
import azam from "@/assets/testimonials/azam.jpeg";
import antoine from "@/assets/testimonials/antoine.jpeg";
import samuel from "@/assets/testimonials/samuel.png";
import alexandre from "@/assets/testimonials/alexandre.jpeg";
import victor from "@/assets/testimonials/victor.jpeg";
import jules from "@/assets/testimonials/jules.jpeg";

const testimonials = [
  {
    name: "Jules P.",
    position: "Head of Product",
    company: "Albert API",
    image: jules,
    text:
        "Cyril is an outstanding professional — reliable, meticulous, and highly autonomous. Initially recruited into my team to work on securing the Albert API — where he played a key role — Cyril has far exceeded my expectations. He actively contributed to several strategic projects, including load testing, infrastructure cost optimization, and improving AI model inference, to name just a few. A true Swiss Army knife, Cyril delivers with ease on a wide range of topics: data science, DevSecOps, backend development, and the highly sought-after LLMOps expertise. He combines technical excellence, teamwork, and strong initiative — a rare profile who is a real pleasure to work with and whom I recommend without hesitation.",
  },
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
    text: "I had the pleasure of working with Cyril on data engineering projects for 3 months at MyTraffic. It was a real pleasure: Cyril is both curious and rigorous, aiming for perfection while keeping business constraints in mind. He never hesitated to get his hands dirty and ramp up on parts of the product less focused on data engineering. And as a bonus: he's super nice! I'm convinced that thanks to his qualities as well as his reasoning and communication skills, Cyril will be able to take on any tech challenge."
  },
  {
    name: "Samuel K.",
    position: "Product Line Manager Datalake",
    company: "Air Liquide",
    image: samuel,
    text: "Cyril was of great help in the realization of our data API project. He set up the entire technical stack in IaC, from development to production as well as the implementation from the functional specification and the data ingestion pipeline with business transformations. Today it is already used by several applications. Cyril is determined, efficient, and knows how to communicate. He is a real asset to any team. I recommend him and hope to work with him again."
  },
  {
    name: "Alexandre J.",
    position: "Head of Product",
    company: "Medissimo",
    image: alexandre,
    text: "Cyril worked at Medissimo to implement an analytics module using our databases. Before the mission, he advised us on the most suitable solution, and integrated it effectively into our existing infrastructures. Cyril also conducted an in-person training on data methods and best practices that unblocked and facilitated a back-office project. Cyril knows his subject and it will be a pleasure to work with him again."
  },
  {
    name: "Victor H.",
    position: "Senior Growth Engineer",
    company: "ManoMano",
    image: victor,
    text: "Cyril joined us for two weeks to automate CRM data processing via Python/Airflow. Adapting very quickly to our tools and processes, he delivered each stage of the deliverable on time. Technical decisions were also made easier thanks to smooth and pleasant communication. It will be a pleasure to work with Cyril again."
  }
];

export const TestimonialsEN = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const snaps = api.scrollSnapList?.() ?? [];
    setCount(snaps.length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
  }, [api]);

  return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What my clients say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Testimonials from previous clients
            </p>
          </div>

          <div className="relative">
            <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-6xl mx-auto"
                setApi={setApi}
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

            {/* Clickable indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, i) => (
                  <button
                      key={i}
                      type="button"
                      onClick={() => api?.scrollTo(i)}
                      aria-label={`Go to page ${i + 1}`}
                      className={[
                        "h-2 rounded-full transition-all",
                        i === current
                            ? "w-6 bg-primary"
                            : "w-2 bg-primary/30 hover:bg-primary/60",
                      ].join(" ")}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
