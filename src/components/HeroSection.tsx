import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('colecoes');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center md:justify-start md:text-left overflow-hidden bg-background">
      {/* Imagem de Fundo com ajuste para mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-[80%_center] bg-no-repeat md:bg-center"
        style={{ backgroundImage: `url('/esten-hero-image.jpg')` }}
      >
        {/* A sobreposição foi removida para deixar a imagem mais clara, conforme a referência */}
      </div>
      
      {/* Conteúdo alinhado */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-xl text-left space-y-6 mx-auto md:mx-0 text-center md:text-left">
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-[68px] font-light text-white tracking-wide leading-[1.1] font-absans [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">
            O MELHOR VEM DE DENTRO.
          </h1>

          {/* Subtítulo */}
          <p className="text-base md:text-lg text-white max-w-xl leading-relaxed font-sans font-light [text-shadow:_0_1px_3px_rgb(0_0_0_/_40%)]">
            Criamos moda sofisticada e atemporal, desenhada para inspirar 
            confiança e autenticidade em todas as ocasiões.
          </p>

          {/* Botão de Ação */}
          <div className="flex pt-4 justify-center md:justify-start">
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToCollections}
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300"
            >
              Conheça a coleção
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

