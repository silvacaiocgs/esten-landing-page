import AboutImage from "../assets/produto6-foto2-camisetaoffwhitecoragem.png";

const SealSVG = () => (
    <svg
      width="144"
      height="144"
      viewBox="0 0 144 144"
      className="absolute -bottom-8 -right-8 w-36 h-36 transform rotate-[-15deg]"
    >
      <defs>
        <path
          id="circlePath"
          d="M 72, 72 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
        />
      </defs>
      <circle cx="72" cy="72" r="72" fill="#BC846C" />
      <g className="text-white fill-current">
        <text
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="600"
          letterSpacing="2.5"
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            O MELHOR VEM DE DENTRO
          </textPath>
        </text>
        <path d="M72 58.65L77.7 70.35L90 72L80.85 80.85L82.8 93L72 87.15L61.2 93L63.15 80.85L54 72L66.3 70.35L72 58.65Z" />
      </g>
    </svg>
  );

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Imagem com Selo */}
          <div className="relative">
            <img src={AboutImage} alt="Modelo Esten vestindo camiseta Coragem" className="rounded-lg shadow-lg w-full" />
            <SealSVG />
          </div>

          {/* Conteúdo de Texto */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                BELEZA COM PROPÓSITO
              </h2>
            </div>
            
            <div className="space-y-4 text-base text-foreground leading-relaxed">
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
                <p className="text-sm text-foreground/80">Sofisticação em cada detalhe.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Atemporal</h4>
                <p className="text-sm text-foreground/80">Estilo que transcende tendências.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Autêntica</h4>
                <p className="text-sm text-foreground/80">Verdadeira à sua essência.</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Com Propósito</h4>
                <p className="text-sm text-foreground/80">Peças que refletem seus valores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

