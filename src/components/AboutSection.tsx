import AboutImage from "../assets/produto6-foto2-camisetaoffwhitecoragem.png";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-esten-cream/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Imagem com Selo */}
          <div className="relative">
            <img src={AboutImage} alt="Modelo Esten vestindo camiseta Coragem" className="rounded-lg shadow-lg w-full" />
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-esten-terracotta rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-xl transform rotate-[-15deg]">
              <span className="text-2xl font-bold">*</span>
              <span className="font-semibold text-sm leading-tight">O MELHOR VEM DE DENTRO</span>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                BELEZA COM PROPÓSITO
              </h2>
              <div className="w-20 h-1 bg-esten-terracotta"></div>
            </div>
            
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Na Esten, acreditamos que a verdadeira elegância transcende o que se veste, emanando da essência de cada mulher. Criamos moda modesta, sofisticada e atemporal, desenhada para inspirar confiança e autenticidade.
              </p>
              <p>
                Para a mulher que busca vestir-se com propósito e estilo, a Esten oferece peças que celebram a beleza real — da empresária à médica, da visionária à realizadora. Nosso compromisso é com a qualidade e o empoderamento, permitindo que você expresse quem você é, de dentro para fora.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-primary">Elegante</h4>
                <p className="text-sm text-muted-foreground">Sofisticação em cada detalhe.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Atemporal</h4>
                <p className="text-sm text-muted-foreground">Estilo que transcende tendências.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Autêntica</h4>
                <p className="text-sm text-muted-foreground">Verdadeira à sua essência.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Com Propósito</h4>
                <p className="text-sm text-muted-foreground">Peças que refletem seus valores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
