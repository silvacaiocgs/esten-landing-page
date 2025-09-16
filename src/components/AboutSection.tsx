import AboutImage from "@/assets/produto6-foto2-camisetaoffwhitecoragem.png";
import SealImage from "@/assets/layer_1.png"; // Importando a nova imagem do selo

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background font-absans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Imagem com Selo */}
          <div className="relative">
            <img 
              src={AboutImage} 
              alt="Modelo Esten vestindo camiseta Coragem" 
              className="rounded-lg shadow-lg w-full" 
            />
            {/* O SVG foi substituído por uma div com a imagem para replicar o design solicitado */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 transform rotate-[-15deg] bg-[#A3462D] rounded-full flex items-center justify-center p-1.5 shadow-lg">
              <img 
                src={SealImage} 
                alt="Selo - O melhor vem de dentro" 
                className="w-full h-auto" 
              />
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-light text-primary">
                BELEZA COM PROPÓSITO
              </h2>
            </div>
            
            <div className="space-y-4 text-base text-foreground leading-relaxed font-light">
              <p>
                Na Esten, acreditamos que a verdadeira elegância transcende o que se veste, emanando da essência de cada mulher. Criamos moda modesta, sofisticada e atemporal, desenhada para inspirar confiança e autenticidade.
              </p>
              <p>
                Para a mulher que busca vestir-se com propósito e estilo, a Esten oferece peças que celebram a beleza real — da empresária à médica, da visionária à realizadora. Nosso compromisso é com a qualidade e o empoderamento, permitindo que você expresse quem você é, de dentro para fora.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-light text-primary">Elegante</h4>
                <p className="text-sm text-foreground/80 font-light">Sofisticação em cada detalhe.</p>
              </div>
              <div>
                <h4 className="font-light text-primary">Atemporal</h4>
                <p className="text-sm text-foreground/80 font-light">Estilo que transcende tendências.</p>
              </div>
              <div>
                <h4 className="font-light text-primary">Autêntica</h4>
                <p className="text-sm text-foreground/80 font-light">Verdadeira à sua essência.</p>
              </div>
              <div>
                <h4 className="font-light text-primary">Com Propósito</h4>
                <p className="text-sm text-foreground/80 font-light">Peças que refletem seus valores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

