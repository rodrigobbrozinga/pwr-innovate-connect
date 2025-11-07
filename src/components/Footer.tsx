import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">PWR Tecnologia</h3>
            <p className="text-primary-foreground/80">
              Transformando tecnologia em valor real para o seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solucoes")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+553197513668" className="hover:text-primary-foreground transition-colors">
                  (31) 99751-3668
                </a>
              </li>
              <li>
                <a href="mailto:pwrtecch@gmail.com" className="hover:text-primary-foreground transition-colors">
                  pwrtecch@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Endereço</h4>
            <p className="text-primary-foreground/80 text-sm">
              Avenida do Contorno, nº 2333<br />
              loja 503 A, Santa Tereza<br />
              Belo Horizonte/MG<br />
              CEP 31.010-085
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>CNPJ: 55.360.017/0001-41</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-4">
                <Link 
                  to="/termos-de-servico" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  Termos de Serviço
                </Link>
                <span>•</span>
                <Link 
                  to="/politica-de-privacidade" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  Política de Privacidade
                </Link>
              </div>
              <p>© 2025 PWR Tecnologia. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
