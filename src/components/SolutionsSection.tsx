import { Card, CardContent } from "@/components/ui/card";
import { Link2, Cog, BarChart3, Lightbulb, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Link2,
    title: "Integração de sistemas e APIs",
    description: "Conectamos plataformas e otimizamos fluxos de dados para maior eficiência operacional.",
  },
  {
    icon: Cog,
    title: "Automação de processos",
    description: "Eliminamos tarefas repetitivas e criamos rotinas inteligentes sob medida para cada operação.",
  },
  {
    icon: BarChart3,
    title: "Desenvolvimento de dashboards e painéis de dados",
    description: "Informações estratégicas, visualmente acessíveis e em tempo real para tomada de decisão.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria em tecnologia e dados",
    description: "Mapeamento de processos, estruturação de pipelines de dados e suporte técnico especializado.",
  },
  {
    icon: Puzzle,
    title: "Projetos sob medida",
    description: "Soluções personalizadas em software e integrações para atender necessidades específicas.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos soluções tecnológicas completas para otimizar processos e impulsionar resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
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

export default SolutionsSection;
