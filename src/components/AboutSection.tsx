import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre a PWR Tecnologia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A PWR Tecnologia nasceu para desenvolver soluções digitais sob medida, unindo tecnologia, 
              dados e inovação para tornar empresas mais ágeis, eficientes e conectadas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa missão é transformar tecnologia em valor real, apoiando organizações em todas as 
              etapas da transformação digital.
            </p>
          </div>

          <Card className="border-border shadow-card animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Dados Institucionais</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">CNPJ</p>
                    <p className="text-muted-foreground">55.360.017/0001-41</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground">
                      Avenida do Contorno, nº 2333, loja 503 A<br />
                      Santa Tereza, Belo Horizonte/MG<br />
                      CEP 31.010-085
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <a
                      href="mailto:pwrtecch@gmail.com"
                      className="text-accent hover:underline"
                    >
                      pwrtecch@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <a
                      href="tel:+553197513668"
                      className="text-accent hover:underline"
                    >
                      (31) 99751-3668
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
