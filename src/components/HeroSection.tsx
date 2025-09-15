import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('colecoes');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-background">
      {/* Imagem de Fundo sem Sobreposição */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/esten-hero-image.jpg')` }}
      >
        {/* A sobreposição foi removida para deixar a imagem mais clara, conforme a referência */}
      </div>
      
      {/* Conteúdo alinhado à esquerda */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-xl text-left space-y-6">
          
          {/* Título Principal */}
          <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight leading-tight font-playfair">
            O MELHOR VEM DE DENTRO.
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-lg text-white max-w-xl leading-relaxed">
            Criamos moda sofisticada e atemporal, desenhada para inspirar 
            confiança e autenticidade em todas as ocasiões.
          </p>

          {/* Botão de Ação */}
          <div className="flex pt-4">
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToCollections}
              className="border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
            >
              Conheça a coleção
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
