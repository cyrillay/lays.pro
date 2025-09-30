import airLiquide from "@/assets/clients/air-liquide.png";
import xbto from "@/assets/clients/xbto.png";
import creditAgricole from "@/assets/clients/credit-agricole.png";
import medissimo from "@/assets/clients/medissimo.png";
import manomano from "@/assets/clients/manomano.png";
import gumgum from "@/assets/clients/gumgum.png";
import jedha from "@/assets/clients/jedha.png";
import mytraffic from "@/assets/clients/mytraffic.png";
import simudyne from "@/assets/clients/simudyne.png";

const clients = [
  { name: "Simudyne", logo: simudyne },
  { name: "Air Liquide", logo: airLiquide },
  { name: "XBTO", logo: xbto },
  { name: "GumGum", logo: gumgum },
  { name: "Crédit Agricole", logo: creditAgricole },
  { name: "ManoMano", logo: manomano },
  { name: "MyTraffic", logo: mytraffic },
  { name: "Medissimo", logo: medissimo },
  { name: "Jedha", logo: jedha },
];

export const ClientsMarquee = () => {
  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Ils m'ont fait confiance
        </h2>
        <p className="text-center text-muted-foreground">
          Des entreprises de toutes tailles, de la startup au grand groupe
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-marquee">
          {/* Premier groupe de logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center mx-6 min-w-[180px]"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="h-24 w-auto object-contain brightness-100 hover:brightness-110 transition-all hover:scale-110"
              />
            </div>
          ))}
          {/* Duplication pour l'effet de boucle infinie */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center mx-6 min-w-[180px]"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="h-24 w-auto object-contain brightness-100 hover:brightness-110 transition-all hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
