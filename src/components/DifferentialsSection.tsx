import { Card, CardContent } from "@/components/ui/card";
import { Link2, Settings, LineChart, Brain, Shield } from "lucide-react";

const differentials = [
  {
    icon: Link2,
    title: "Integração ponta a ponta",
    description: "Conectamos sistemas, dados e times.",
  },
  {
    icon: Settings,
    title: "Automação completa",
    description: "Processos inteligentes que reduzem tempo e erros.",
  },
  {
    icon: LineChart,
    title: "Inteligência de dados",
    description: "Dashboards, métricas e análises estratégicas.",
  },
  {
    icon: Brain,
    title: "Equipe técnica especializada",
    description: "Profissionais com experiência em soluções corporativas e automação.",
  },
  {
    icon: Shield,
    title: "Segurança e confiabilidade",
    description: "Foco em conformidade, estabilidade e performance.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a PWR
          </h2>
          <p className="text-lg text-muted-foreground">
            Diferenciais que fazem da PWR Tecnologia a parceira ideal para a transformação digital do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <Card
                key={index}
                className="border-border bg-background hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {differential.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
