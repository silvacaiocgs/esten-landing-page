import logoEsten from "../assets/logo-esten.png";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Conteúdo de Texto */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Beleza com Propósito
                </h2>
                <div className="w-20 h-1 bg-esten-terracotta"></div>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Na Esten, acreditamos que a verdadeira elegância transcende o que se veste, 
                  emanando da essência de cada mulher. Criamos moda modesta, sofisticada e 
                  atemporal, desenhada para inspirar confiança e autenticidade.
                </p>
                <p>
                  Para a mulher que busca vestir-se com propósito e estilo, a Esten oferece 
                  peças que celebram a beleza real — da empresária à médica, da visionária 
                  à realizadora. Nosso compromisso é com a qualidade e o empoderamento, 
                  permitindo que você expresse quem você é, de dentro para fora.
                </p>
              </div>

              {/* Valores */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary text-lg">Elegante</h4>
                  <p className="text-sm text-muted-foreground">Sofisticação em cada detalhe.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary text-lg">Autêntica</h4>
                  <p className="text-sm text-muted-foreground">Verdadeira à sua essência.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary text-lg">Atemporal</h4>
                  <p className="text-sm text-muted-foreground">Estilo que transcende tendências.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary text-lg">Com Propósito</h4>
                  <p className="text-sm text-muted-foreground">Peças que refletem seus valores.</p>
                </div>
              </div>
            </div>

            {/* Elemento Visual */}
            <div className="relative flex items-center justify-center">
              <div className="relative p-8 gradient-elegant rounded-3xl shadow-elegant w-full max-w-sm">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary-foreground/80 rounded-full flex items-center justify-center shadow-soft backdrop-blur-sm">
                    <img src={logoEsten} alt="Logo Esten" className="h-16 w-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Beleza Real
                  </h3>
                  <p className="text-primary-foreground/90 text-sm leading-relaxed">
                    Celebramos uma moda que valoriza a sua identidade, 
                    oferecendo peças de alta qualidade para o seu dia a dia.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 text-2xl text-primary-foreground/30">✦</div>
                <div className="absolute -bottom-4 -left-4 text-xl text-primary-foreground/20">✧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

