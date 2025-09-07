export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  Esten: Onde a Fé Encontra a Moda
                </h2>
                <div className="w-16 h-1 bg-esten-terracotta"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que a moda é uma ferramenta poderosa de expressão e identidade. 
                Nosso propósito é inspirar e fortalecer mulheres cristãs a se sentirem 
                confiantes, autênticas e elegantes em sua jornada de fé e vida.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Inspiradas na Rainha Ester, criamos uma comunidade onde cada mulher pode 
                brilhar e influenciar positivamente seu entorno através de um estilo que 
                celebra sua fé com sofisticação.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">Elegante</h4>
                  <p className="text-sm text-muted-foreground">Sofisticação em cada detalhe</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">Autêntica</h4>
                  <p className="text-sm text-muted-foreground">Verdadeira à sua essência</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">Acessível</h4>
                  <p className="text-sm text-muted-foreground">Qualidade ao seu alcance</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-primary">Feminina</h4>
                  <p className="text-sm text-muted-foreground">Celebrando a mulher cristã</p>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="relative p-8 gradient-elegant rounded-3xl shadow-elegant">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary-foreground rounded-full flex items-center justify-center shadow-soft">
                    {/* Correção: Usando caminho direto da pasta public */}
                    <img src="/logo-esten.png" alt="Logo Esten" className="h-16 w-16 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    Sua Luz Interior
                  </h3>
                  <p className="text-primary-foreground/90 text-sm">
                    Através da moda, buscamos construir uma comunidade onde cada mulher 
                    possa brilhar e influenciar positivamente seu entorno.
                  </p>
                </div>
                
                {/* Decorative stars */}
                <div className="absolute -top-4 -right-4 text-2xl text-primary-foreground/30">✦</div>
                <div className="absolute -bottom-4 -left-4 text-xl text-primary-foreground/20">✦</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

