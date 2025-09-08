import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-family-ai.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 animate-float delay-100">
          <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float delay-300">
          <div className="w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float delay-500">
          <div className="w-20 h-20 bg-success/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
                <Star className="w-4 h-4 mr-2" />
                #1 Plataforma de IA para Familias
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  IA Family Skool
                </span>
                <br />
                <span className="text-foreground/90">
                  Aprende IA en Familia
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Una comunidad segura donde padres e hijos aprenden inteligencia artificial juntos. 
                <span className="font-semibold text-primary"> 52 retos semanales</span> diseñados para toda la familia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => window.open('https://www.skool.com/ia-family-skool-3802/about?ref=d6a31ab101bd437286839beb3380ac92', '_blank')}
              >
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Empezar Ahora - $9/mes
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-2 hover:border-primary/50"
                onClick={() => window.open('https://www.skool.com/ia-family-skool-3802/about?ref=d6a31ab101bd437286839beb3380ac92', '_blank')}
              >
                <Users className="w-5 h-5 mr-2" />
                Ver Demo Gratuita
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Familias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">52</div>
                <div className="text-sm text-muted-foreground">Retos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Seguro</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong animate-fade-in">
              <img 
                src={heroImage} 
                alt="Familia aprendiendo IA juntos en un ambiente seguro y divertido"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 animate-float">
              <Badge className="bg-success text-success-foreground px-4 py-2 shadow-medium">
                ✨ Ambiente 100% Seguro
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}