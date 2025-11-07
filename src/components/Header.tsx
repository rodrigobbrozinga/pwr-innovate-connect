import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (id: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === "/") {
      // Se já está na home, só faz o scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se está em outra página, navega para home e depois faz scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate("/");
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity cursor-pointer"
            >
              PWR Tecnologia
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => navigateToSection("solucoes")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => navigateToSection("diferenciais")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => navigateToSection("sobre")}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre nós
            </button>
            <Button
              onClick={() => navigateToSection("contato")}
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
              onClick={() => navigateToSection("inicio")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => navigateToSection("solucoes")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => navigateToSection("diferenciais")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => navigateToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre nós
            </button>
            <Button
              onClick={() => navigateToSection("contato")}
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
