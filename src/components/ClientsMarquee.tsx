import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

import airLiquide from "@/assets/clients/air-liquide.png";
import xbto from "@/assets/clients/xbto.png";
import creditAgricole from "@/assets/clients/credit-agricole.png";
import medissimo from "@/assets/clients/medissimo.png";
import manomano from "@/assets/clients/manomano.png";
import dinum from "@/assets/clients/dinum.png";
import gumgum from "@/assets/clients/gumgum.png";
import jedha from "@/assets/clients/jedha.png";
import mytraffic from "@/assets/clients/mytraffic.png";
import simudyne from "@/assets/clients/simudyne.png";
import ubisoft from "@/assets/clients/ubisoft.svg";

const clients = [
  { name: "Simudyne", logo: simudyne },
  { name: "Air Liquide", logo: airLiquide },
  { name: "XBTO", logo: xbto },
  { name: "Ubisoft", logo: ubisoft },
  { name: "GumGum", logo: gumgum },
  { name: "Crédit Agricole", logo: creditAgricole },
  { name: "ManoMano", logo: manomano },
  { name: "DINUM", logo: dinum },
  { name: "MyTraffic", logo: mytraffic },
  { name: "Medissimo", logo: medissimo },
  { name: "Jedha", logo: jedha },
];

export const ClientsMarquee = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');

  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll avec requestAnimationFrame pour plus de fluidité
  useEffect(() => {
    if (!scrollRef.current || isPaused || isDragging) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    let lastTime = performance.now();
    const speed = 0.5; // pixels par frame

    const animate = (currentTime) => {
      if (!scrollRef.current) return;

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Scroll progressif
      scrollRef.current.scrollLeft += speed * (deltaTime / 16.67);

      // Reset seamless au 1/3 du contenu
      const oneThird = scrollRef.current.scrollWidth / 3;
      if (scrollRef.current.scrollLeft >= oneThird) {
        scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - oneThird;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (isDragging && scrollRef.current) {
      // Normaliser la position après le drag
      const oneThird = scrollRef.current.scrollWidth / 3;
      const current = scrollRef.current.scrollLeft;

      if (current < 0) {
        scrollRef.current.scrollLeft = current + oneThird;
      } else if (current >= oneThird * 2) {
        scrollRef.current.scrollLeft = current - oneThird;
      }
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (isDragging && scrollRef.current) {
      // Normaliser la position après le drag
      const oneThird = scrollRef.current.scrollWidth / 3;
      const current = scrollRef.current.scrollLeft;

      if (current < 0) {
        scrollRef.current.scrollLeft = current + oneThird;
      } else if (current >= oneThird * 2) {
        scrollRef.current.scrollLeft = current - oneThird;
      }
    }
    setIsDragging(false);
  };

  return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            {isEnglish ? "They trust me" : "Ils me font confiance"}
          </h2>
          <p className="text-center text-muted-foreground">
            {isEnglish
                ? "Companies of all sizes, from startups to large corporations"
                : "Des entreprises de toutes tailles, de la startup au grand groupe"}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
              ref={scrollRef}
              className={`flex gap-12 overflow-x-auto scrollbar-hide ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                userSelect: "none"
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseEnter={() => setIsPaused(true)}
              onMouseOut={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
          >
            {/* Triple le contenu pour un scroll infini seamless */}
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
            <Link
                to={isEnglish ? "/en/experiences" : "/experiences"}
                onClick={() => window.scrollTo(0, 0)}
            >
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