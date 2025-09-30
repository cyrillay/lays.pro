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
    name: "Marouane Mouttaki",
    role: "Senior Data Engineer",
    company: "Air Liquide",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGV4gC8kHMXEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631697486892?e=1741219200&v=beta&t=xHhY6kNBDUZYYo-rGu63Qcry2BkIU_-wJ9hCiLjvQSY",
    text: "Cyril is an excellent data engineer with strong skills across the entire data pipeline. He's also a great team player, always available to share his knowledge."
  },
  {
    name: "Antoine Sipolla",
    role: "Head of Data Science",
    company: "Crédit Agricole",
    image: "https://media.licdn.com/dms/image/v2/C5603AQG6ZIbVQOw5Aw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1599668933621?e=1741219200&v=beta&t=8qCKYL-R4SFlJgVhUE0hA_jg0xVlD1FdXpC1i29pUPo",
    text: "Cyril is a very skilled data engineer who can handle projects from A to Z: from requirements gathering and solution design to delivery. He's also a good communicator, which is increasingly rare in the industry."
  },
  {
    name: "Clément Chantreuil",
    role: "Chief Data Officer",
    company: "Medissimo",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGvgW9jH6_oFw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1570525837267?e=1741219200&v=beta&t=jcljWU4gSpYTH5vxrMpL5gn2FxaXfK1nHgJUIWMq9Vw",
    text: "Cyril is a top-notch data engineer with in-depth knowledge of the entire data stack and MLOps. He's very autonomous, proactive, and has a great sense of communication. It's a pleasure to work with him!"
  },
  {
    name: "Romain Graux",
    role: "Machine Learning Engineer",
    company: "ManoMano",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHXPihMlY2E4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689763843835?e=1741219200&v=beta&t=4XBY7GgVJyJBz4fQ3rq8EQNBs0vu_oG0H1r4aBRO7kA",
    text: "Cyril is an exceptional data engineer who can handle multiple subjects simultaneously. He has a global vision of data projects and always seeks the best solutions. His rigor and professionalism make him a valuable asset."
  },
  {
    name: "Dylan Tientcheu",
    role: "Senior Data Analyst",
    company: "GumGum",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHrH1JvqJh5ig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698252488634?e=1741219200&v=beta&t=jVRQqNwHdJMWL1AUgHUExgSQvvjMfJ0D9NTa5jsCWpQ",
    text: "Cyril is a data engineer who doesn't settle for doing the minimum. He always seeks the best solution, both technically and from a user experience perspective. He's passionate and very pleasant to work with."
  },
  {
    name: "Marc Chouraki",
    role: "Head of Data",
    company: "MyTraffic",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHhR0hbh9MxiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1643105046547?e=1741219200&v=beta&t=YJPKXDQcQZg01OJNyiHyLBrQFCjKjKZBdSKRiCmFOHw",
    text: "I had the pleasure of working with Cyril for over a year. He's a top-tier data engineer with a broad skill set. He's autonomous, efficient, and always has a friendly word. A great professional!"
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
