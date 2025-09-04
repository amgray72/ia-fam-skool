import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar, Users, Gamepad2, BookOpen, Award } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Entorno 100% Seguro",
      description: "Contenido verificado y moderado específicamente para niños y familias.",
      badge: "Verificado",
      color: "success"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "52 Retos Semanales",
      description: "Un reto nuevo cada semana durante todo el año para mantener el aprendizaje constante.",
      badge: "Todo el año",
      color: "primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Aprendizaje en Familia",
      description: "Actividades diseñadas para que padres e hijos aprendan y exploren juntos.",
      badge: "Juntos",
      color: "accent"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Ejercicios Interactivos",
      description: "Actividades gamificadas que hacen el aprendizaje divertido y memorable.",
      badge: "Divertido",
      color: "success"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Guías para Padres",
      description: "Recursos completos para que los padres puedan guiar efectivamente a sus hijos.",
      badge: "Apoyo",
      color: "primary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificados de Logros",
      description: "Reconocimiento del progreso con certificados y insignias motivacionales.",
      badge: "Logros",
      color: "accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            ¿Por qué elegir IA Family Skool?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Todo lo que necesitas para aprender IA{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              en familia
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hemos creado la plataforma más completa y segura para que familias 
            completas puedan adentrarse en el mundo de la inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-card/60 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-2xl mb-6 ${
                    feature.color === 'success' ? 'bg-success/10 text-success' :
                    feature.color === 'accent' ? 'bg-accent/10 text-accent' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {feature.icon}
                  </div>
                  
                  {/* Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-0 right-0 text-xs"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}