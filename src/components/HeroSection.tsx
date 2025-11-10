import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              PWR Tecnologia
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Soluções inteligentes que impulsionam negócios através da inovação e da automação.
            </p>
            <p className="text-lg text-primary-foreground/80">
              Conectamos tecnologia, dados e eficiência para transformar desafios em resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("solucoes")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Quero saber mais
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Tecnologia e Automação PWR"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
