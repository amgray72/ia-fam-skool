import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Heart, GraduationCap, Gift, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function PricingSection() {
  const [remainingSpots, setRemainingSpots] = useState(73);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSpots(prev => Math.max(0, prev - Math.floor(Math.random() * 2)));
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    "52 retos semanales completos",
    "Guías paso a paso para padres",
    "Comunidad privada y segura",
    "Certificados de logros",
    "Soporte técnico familiar",
    "Recursos descargables",
    "Actualizaciones mensuales",
    "Acceso móvil y web"
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Precio familiar
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Acceso completo por solo{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              $9 al mes
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Menos de $0.17 por día para que toda tu familia aprenda el futuro. 
            Cancela cuando quieras, sin compromisos.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-card/80 backdrop-blur-sm shadow-strong">
            {/* Popular badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-gradient-primary text-primary-foreground px-6 py-2 shadow-medium">
                <Star className="w-4 h-4 mr-2" />
                Plan Familiar
              </Badge>
            </div>
            
            <CardHeader className="text-center pt-12 pb-6">
              <CardTitle className="text-4xl font-bold text-foreground mb-2">
                $9
                <span className="text-lg text-muted-foreground font-normal">/mes</span>
              </CardTitle>
              
              <p className="text-muted-foreground">
                Para toda la familia • Sin límites
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-success" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  onClick={() => window.open('https://www.skool.com/ia-family-skool-3802/about?ref=d6a31ab101bd437286839beb3380ac92', '_blank')}
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Empezar Ahora - $9/mes
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    ✨ Primera semana gratis • Cancela cuando quieras
                  </p>
                  <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground">
                    <span>🔒 Pago seguro</span>
                    <span>📱 Acceso inmediato</span>
                    <span>👨‍👩‍👧‍👦 Toda la familia</span>
                  </div>
                </div>
              </div>
            </CardContent>
            
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none"></div>
          </Card>
        </div>

        {/* Trust signals */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Más de 500 familias ya están aprendiendo IA con nosotros
          </p>
          
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-xs font-medium">⭐⭐⭐⭐⭐</div>
            <div className="text-xs">4.9/5 valoración</div>
            <div className="text-xs">500+ familias activas</div>
            <div className="text-xs">🏆 Mejor plataforma 2024</div>
          </div>
        </div>

        {/* Back to School Promotion */}
        <div className="mt-16">
          <Card className="bg-gradient-promo border-primary/20 shadow-strong overflow-hidden">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge className="bg-success text-success-foreground animate-pulse">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    VUELTA AL COLE 2024
                  </Badge>
                  <Badge variant="outline" className="border-primary text-primary">
                    OFERTA LIMITADA
                  </Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    ¡ACCESO TOTALMENTE GRATUITO!
                  </span>
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Las primeras <strong>100 familias</strong> tendrán acceso completo sin coste durante el nuevo curso escolar
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Counter */}
                <div className="text-center bg-background/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-soft">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-muted-foreground">PLAZAS RESTANTES</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {remainingSpots}
                    <span className="text-lg text-muted-foreground">/100</span>
                  </div>
                  <div className="w-32 bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((100 - remainingSpots) / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>52 retos completos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Comunidad familiar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Sin compromisos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span>Ambiente 100% seguro</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button 
                    variant="hero" 
                    size="xl"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}