import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users2, Zap } from "lucide-react";

export function WeeklyChallengesSection() {
  const sampleChallenges = [
    {
      week: "Semana 1",
      title: "Transforma tu dibujo con IA",
      description: "Dibuja algo que te encante y con ayuda de mamá o papá, imagina cómo la IA puede transformarlo de manera mágica y divertida.",
      difficulty: "Principiante",
      duration: "45 min",
      participants: "Toda la familia",
      skills: ["Creatividad", "Arte digital", "Transformación IA"]
    },
    {
      week: "Semana 12",
      title: "Detector de Emociones en Fotos",
      description: "Construir una app que identifique emociones en fotos familiares usando visión artificial.",
      difficulty: "Intermedio",
      duration: "90 min",
      participants: "Niños 8+ y padres",
      skills: ["Visión artificial", "Análisis emocional", "Fotografía"]
    },
    {
      week: "Semana 26",
      title: "Asistente Virtual del Hogar",
      description: "Diseñar un asistente que ayude con tareas domésticas usando comandos de voz.",
      difficulty: "Avanzado",
      duration: "120 min",
      participants: "Adolescentes y padres",
      skills: ["Procesamiento de voz", "Automatización", "Smart home"]
    },
    {
      week: "Semana 52",
      title: "Proyecto Final: IA para el Bien",
      description: "Crear una solución de IA que resuelva un problema real de su comunidad.",
      difficulty: "Experto",
      duration: "180 min",
      participants: "Toda la familia",
      skills: ["Proyecto completo", "Impacto social", "Presentación"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Principiante":
        return "bg-success/10 text-success";
      case "Intermedio":
        return "bg-primary/10 text-primary";
      case "Avanzado":
        return "bg-accent/10 text-accent";
      case "Experto":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            52 Retos Únicos
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Un reto nuevo cada{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              semana del año
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Desde conceptos básicos hasta proyectos avanzados, cada reto está diseñado 
            para ser completado en familia y construir sobre el conocimiento previo.
          </p>
          
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              45-180 min por reto
            </div>
            <div className="flex items-center gap-2">
              <Users2 className="w-4 h-4" />
              Toda la familia
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Dificultad progresiva
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {sampleChallenges.map((challenge, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs font-medium">
                    {challenge.week}
                  </Badge>
                  <Badge className={getDifficultyColor(challenge.difficulty)}>
                    {challenge.difficulty}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {challenge.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {challenge.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users2 className="w-4 h-4" />
                      {challenge.participants}
                    </span>
                  </div>
                </div>
              </CardContent>
              
              {/* Progress indicator */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary opacity-60"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" className="group">
            <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Ver Todos los 52 Retos
          </Button>
        </div>
      </div>
    </section>
  );
}

// Helper import that was missing
import { Calendar } from "lucide-react";