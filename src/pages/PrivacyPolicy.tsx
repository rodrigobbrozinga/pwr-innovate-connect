import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
            <p className="text-muted-foreground">
              A PWR Tecnologia está comprometida em proteger a privacidade dos dados pessoais de seus 
              clientes e usuários. Esta Política de Privacidade descreve como coletamos, usamos, 
              armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de 
              Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados Coletados</h2>
            <p className="text-muted-foreground mb-4">
              Coletamos as seguintes categorias de dados pessoais:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Dados de identificação: nome, e-mail, telefone, empresa</li>
              <li>Dados de navegação: endereço IP, tipo de navegador, páginas visitadas</li>
              <li>Dados fornecidos voluntariamente através de formulários de contato</li>
              <li>Dados necessários para a prestação de serviços contratados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalidade do Tratamento</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos seus dados pessoais para:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Prestação de serviços de tecnologia contratados</li>
              <li>Comunicação sobre serviços, atualizações e suporte técnico</li>
              <li>Melhorias em nossos produtos e serviços</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
              <li>Análise de uso do site para otimização da experiência do usuário</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não compartilhamos, vendemos ou alugamos seus dados pessoais a terceiros, exceto quando 
              necessário para a prestação de serviços contratados, mediante autorização expressa, ou 
              por determinação legal. Quando o compartilhamento for necessário, garantimos que os 
              terceiros sigam os mesmos padrões de proteção de dados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados 
              pessoais contra acesso não autorizado, perda, destruição ou alteração. Utilizamos 
              criptografia, controles de acesso e monitoramento contínuo de segurança.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Direitos do Titular</h2>
            <p className="text-muted-foreground mb-4">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Confirmação da existência de tratamento de dados</li>
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados a outro fornecedor</li>
              <li>Eliminação dos dados pessoais tratados com seu consentimento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retenção de Dados</h2>
            <p className="text-muted-foreground">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas 
              nesta política ou conforme exigido por lei. Após esse período, os dados serão eliminados 
              ou anonimizados de forma segura.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies e Tecnologias Similares</h2>
            <p className="text-muted-foreground">
              Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação, 
              analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador 
              para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Alterações nesta Política</h2>
            <p className="text-muted-foreground">
              Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. 
              Alterações significativas serão comunicadas através do site ou por e-mail. A versão 
              atualizada entrará em vigor imediatamente após sua publicação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contato</h2>
            <p className="text-muted-foreground">
              Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações relacionadas a esta 
              Política de Privacidade, entre em contato conosco:
            </p>
            <ul className="list-none text-muted-foreground mt-4 space-y-2">
              <li><strong>E-mail:</strong> pwrtecch@gmail.com</li>
              <li><strong>Telefone:</strong> (31) 99751-3668</li>
              <li><strong>Endereço:</strong> Avenida do Contorno, nº 2333, loja 503 A, Santa Tereza, Belo Horizonte/MG, CEP 31.010-085</li>
            </ul>
          </section>

          <p className="text-sm text-muted-foreground mt-12 border-t border-border pt-6">
            Última atualização: Janeiro de 2025
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
