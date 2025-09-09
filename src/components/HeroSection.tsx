import { EstenButton } from "./EstenButton";
import heroImage from "../assets/esten-hero-image.jpg";
import logoEsten from "../assets/logo-esten-hero.png";

export function HeroSection() {
  const whatsappNumber = "5544997432870";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de conhecer mais sobre a Esten.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Função para rolar suavemente para a seção de coleções
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('colecoes');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-esten-cream">
      {/* Imagem de Fundo com Sobreposição Sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-esten-cream/70"></div>
      </div>
      
      {/* Elementos Decorativos */}
      <div className="absolute top-20 left-10 text-esten-yellow opacity-30 z-10 text-4xl">✦</div>
      <div className="absolute bottom-32 right-16 text-esten-terracotta opacity-20 z-10 text-2xl">✧</div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center py-24 space-y-8">
          
          {/* Logo */}
          <div className="mb-4">
            <img 
              src={logoEsten} 
              alt="Logo Esten" 
              className="mx-auto h-20 w-20 object-contain" 
            />
          </div>
          
          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-light text-primary tracking-tight">
            O MELHOR VEM DE DENTRO.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Criamos moda modesta, sofisticada e atemporal, desenhada para inspirar 
            confiança e autenticidade em todas as ocasiões.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EstenButton 
              variant="whatsapp" 
              size="lg"
              onClick={scrollToCollections}
              className="shadow-glow"
            >
              Conheça a Coleção
            </EstenButton>
            
            <EstenButton 
              variant="outline" 
              size="lg"
              href={whatsappUrl}
            >
              Descubra a Esten
            </EstenButton>
          </div>
        </div>
      </div>
    </section>
  );
}

