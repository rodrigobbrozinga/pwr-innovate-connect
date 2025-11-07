import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Serviço</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e utilizar os serviços da PWR Tecnologia, você concorda em estar vinculado a estes Termos de Serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrição dos Serviços</h2>
            <p className="text-muted-foreground">
              A PWR Tecnologia oferece soluções em integração de sistemas, automação de processos, 
              desenvolvimento de dashboards e consultoria em tecnologia. Os serviços específicos serão 
              detalhados em contratos individuais com cada cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Responsabilidades do Cliente</h2>
            <p className="text-muted-foreground">
              O cliente é responsável por fornecer informações precisas e atualizadas, manter a 
              confidencialidade de suas credenciais de acesso e cumprir com todas as leis e regulamentos 
              aplicáveis ao uso dos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todos os direitos de propriedade intelectual relacionados aos serviços e materiais fornecidos 
              pela PWR Tecnologia permanecem de propriedade exclusiva da empresa, salvo acordo em contrário.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              A PWR Tecnologia não se responsabiliza por danos indiretos, incidentais ou consequenciais 
              decorrentes do uso ou impossibilidade de uso dos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Modificações</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão 
              em vigor imediatamente após sua publicação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Para questões sobre estes Termos de Serviço, entre em contato conosco através do email 
              pwrtecch@gmail.com ou telefone (31) 99751-3668.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
