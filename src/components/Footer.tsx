import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Mail, Users, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              IA Family Skool
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              La plataforma de aprendizaje de IA más segura y divertida para familias. 
              Preparamos a la próxima generación para el futuro tecnológico.
            </p>
            <div className="flex gap-4">
              <Badge variant="secondary" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                100% Seguro
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Users className="w-3 h-3 mr-1" />
                500+ Familias
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#challenges" className="text-muted-foreground hover:text-primary transition-colors">
                  52 Retos
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hola@iafamilyskool.com</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open('https://www.skool.com/ia-family-skool-3802/about?ref=d6a31ab101bd437286839beb3380ac92', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar Soporte
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 IA Family Skool. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>para familias</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}