import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('colecoes');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Imagem de Fundo com Sobreposição */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/esten-hero-image.jpg')` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-24 space-y-6">
          
          {/* Título Principal */}
          <h1 className="text-6xl md:text-8xl font-light text-primary tracking-tight leading-tight font-playfair">
            O MELHOR VEM DE DENTRO.
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-lg text-foreground max-w-xl mx-auto leading-relaxed">
            Criamos moda sofisticada e atemporal, desenhada para inspirar 
            confiança e autenticidade em todas as ocasiões.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToCollections}
            >
              Conheça a coleção
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

