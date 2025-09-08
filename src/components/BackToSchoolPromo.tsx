import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, Gift, Users } from "lucide-react";
import { useState, useEffect } from "react";

export function BackToSchoolPromo() {
  const [remainingSpots, setRemainingSpots] = useState(73); // Simulating spots left

  useEffect(() => {
    // Simulate spots being taken
    const interval = setInterval(() => {
      setRemainingSpots(prev => Math.max(0, prev - Math.floor(Math.random() * 2)));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-promo relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 animate-float delay-100">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-8 right-20 animate-float delay-300">
          <Gift className="w-6 h-6 text-accent" />
        </div>
        <div className="absolute bottom-4 left-1/3 animate-float delay-500">
          <Users className="w-7 h-7 text-success" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Badge className="bg-success text-success-foreground animate-pulse">
                🎒 VUELTA AL COLE
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                OFERTA LIMITED
              </Badge>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ¡ACCESO GRATUITO
              </span>{" "}
              para las primeras 100 familias
            </h2>
            
            <p className="text-muted-foreground">
              Empieza el curso aprendiendo IA en familia. Sin coste, sin compromiso.
            </p>
          </div>

          {/* Center - Counter */}
          <div className="text-center bg-background/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-soft">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">PLAZAS RESTANTES</span>
            </div>
            <div className="text-3xl font-bold text-primary">
              {remainingSpots}
              <span className="text-lg text-muted-foreground">/100</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((100 - remainingSpots) / 100) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Right - CTA */}
          <div className="text-center lg:text-right">
            <Button 
              variant="hero" 
              size="lg"
              className="group animate-glow"
              onClick={() => window.open('https://www.skool.com/ia-family-skool-3802/about?ref=d6a31ab101bd437286839beb3380ac92', '_blank')}
            >
              <Gift className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Acceder GRATIS Ahora
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              * Promoción válida hasta agotar plazas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}