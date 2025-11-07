import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">PWR Tecnologia</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre nós
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Fale com a PWR
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("solucoes")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre nós
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Fale com a PWR
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
