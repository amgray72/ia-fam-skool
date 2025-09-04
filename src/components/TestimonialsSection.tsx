import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de 2 niños",
      age: "Niños: 8 y 12 años",
      content: "¡Increíble! Mis hijos ahora entienden conceptos de IA que yo ni sabía que existían. Los retos son perfectos para hacer en familia los fines de semana.",
      rating: 5,
      weeks: "Semana 15"
    },
    {
      name: "Carlos Mendoza",
      role: "Padre ingeniero",
      age: "Hija: 10 años",
      content: "Como desarrollador, quería que mi hija conociera la tecnología desde pequeña. Esta plataforma es perfecta - contenido técnico pero adaptado para niños.",
      rating: 5,
      weeks: "Semana 28"
    },
    {
      name: "Ana & Luis Martín",
      role: "Familia completa",
      age: "3 hijos: 7, 9, 14 años",
      content: "Los 3 niños están enganchados. Cada uno aporta algo diferente según su edad. Es genial ver cómo colaboran y aprenden juntos sobre IA.",
      rating: 5,
      weeks: "Semana 42"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Lo que dicen las familias
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Familias reales,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Más de 500 familias ya están transformando su comprensión de la IA 
            y preparando a sus hijos para el futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Content */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="space-y-2">
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.age}
                    </div>
                  </div>
                  
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-primary/10 text-primary"
                  >
                    {testimonial.weeks} completada
                  </Badge>
                </div>
              </CardContent>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-primary opacity-10 rounded-bl-full"></div>
            </Card>
          ))}
        </div>

        {/* Community stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Familias activas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Retos completados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">4.9/5</div>
              <div className="text-sm text-muted-foreground">Valoración media</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Recomiendan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}