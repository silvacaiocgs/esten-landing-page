import { EstenButton } from "./EstenButton";

export function HeroSection() {
  const whatsappNumber = "5544997432870";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de um atendimento personalizado.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          // Correção: Usando o caminho direto para a imagem na pasta 'public'
          backgroundImage: `url(/esten-hero-image.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-esten-cream/80"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-20 left-10 star-pattern opacity-30 z-10">
        <div className="w-8 h-8 text-esten-yellow text-4xl">✦</div>
      </div>
      <div className="absolute bottom-32 right-16 star-pattern opacity-20 z-10">
        <div className="w-6 h-6 text-esten-terracotta text-2xl">✦</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand Image */}
          <div className="mb-8">
            <img 
              src="/logo-horizontal-esten.png" 
              alt="Logo Esten" 
              className="mx-auto h-auto w-full max-w-[280px] md:max-w-[380px]" 
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Vista a sua Fé,<br />
            <span className="text-esten-terracotta">Expresse a sua Essência</span>
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Moda que fortalece, eleva e inspira. Descubra peças que celebram a sua identidade, 
            fé e personalidade com elegância e sofisticação.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botão Principal */}
            <EstenButton 
              variant="whatsapp" 
              size="lg"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-glow"
            >
              Conheça as Nossas Coleções
            </EstenButton>
            
            {/* Botão Secundário */}
            <EstenButton 
              variant="outline" 
              size="lg"
              href={whatsappUrl}
            >
              Atendimento Personalizado
            </EstenButton>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-esten-terracotta rounded-full"></div>
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-esten-yellow rounded-full"></div>
              <span>Entrega para Todo o Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-esten-olive rounded-full"></div>
              <span>Qualidade Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

