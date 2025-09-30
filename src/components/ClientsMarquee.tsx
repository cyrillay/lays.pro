import airLiquide from "@/assets/clients/air-liquide.png";
import xbto from "@/assets/clients/xbto.png";
import creditAgricole from "@/assets/clients/credit-agricole.png";
import medissimo from "@/assets/clients/medissimo.png";
import manomano from "@/assets/clients/manomano.png";
import gumgum from "@/assets/clients/gumgum.png";
import jedha from "@/assets/clients/jedha.png";
import mytraffic from "@/assets/clients/mytraffic.png";
import simudyne from "@/assets/clients/simudyne.png";
import ubisoft from "@/assets/clients/ubisoft.svg";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const clients = [
  { name: "Simudyne", logo: simudyne },
  { name: "Air Liquide", logo: airLiquide },
  { name: "XBTO", logo: xbto },
  { name: "Ubisoft", logo: ubisoft },
  { name: "GumGum", logo: gumgum },
  { name: "Crédit Agricole", logo: creditAgricole },
  { name: "ManoMano", logo: manomano },
  { name: "MyTraffic", logo: mytraffic },
  { name: "Medissimo", logo: medissimo },
  { name: "Jedha", logo: jedha },
];

export const ClientsMarquee = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!trackRef.current) return;
    setIsDragging(false);
    trackRef.current.style.animationPlayState = 'running';
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.animationPlayState = 'paused';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!trackRef.current) return;
    setIsDragging(false);
    trackRef.current.style.animationPlayState = 'running';
  };

  return (
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            {isEnglish ? "They trusted me" : "Ils m'ont fait confiance"}
          </h2>
          <p className="text-center text-muted-foreground">
            {isEnglish
                ? "Companies of all sizes, from startups to large corporations"
                : "Des entreprises de toutes tailles, de la startup au grand groupe"}
          </p>
        </div>

        <div className="relative">
          <div
              ref={trackRef}
              className={`flex gap-12 animate-scroll overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ userSelect: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
          >
            {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 shrink-0">
                  {clients.map((client, index) => (
                      <div
                          key={`${setIndex}-${index}`}
                          className="flex items-center justify-center w-[180px] shrink-0"
                      >
                        <img
                            src={client.logo}
                            alt={`Logo ${client.name}`}
                            className="h-24 w-auto object-contain hover:scale-110 transition-transform pointer-events-none"
                            draggable="false"
                        />
                      </div>
                  ))}
                </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={isEnglish ? "/en/experiences" : "/experiences"}>
              <Button variant="outline" size="lg" className="group">
                {isEnglish
                    ? "Discover my latest projects"
                    : "Découvrir mes derniers projets"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
          scroll-behavior: smooth;
        }
        
        .animate-scroll:hover:not(:active) {
          animation-play-state: paused;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </section>
  );
};