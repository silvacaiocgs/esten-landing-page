import { EstenButton } from "./EstenButton";
import { MessageCircle, Heart, Shield, Truck } from "lucide-react";

export function FinalCtaSection() {
  const whatsappNumber = "5544997432870"; // Número de telefone atualizado
  const whatsappMessage = encodeURIComponent("Olá! Estou pronta para brilhar com Esten! Pode me ajudar a escolher as peças perfeitas? 💫");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const benefits = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe te atende com carinho via WhatsApp"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Feito com Propósito",
      description: "Cada peça é criada pensando na mulher cristã"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Qualidade Garantida",
      description: "Tecidos selecionados e acabamento premium"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Entrega Nacional",
      description: "Levamos Esten para todo o Brasil"
    }
  ];

  return (
    <section className="py-20 gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Background decorative stars */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">✦</div>
      <div className="absolute top-20 right-20 text-4xl opacity-10">✧</div>
      <div className="absolute bottom-10 left-1/4 text-5xl opacity-10">✦</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-10">✧</div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronta para Brilhar com Esten?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Sua próxima peça favorita te espera. Nossa equipe está pronta para 
              te atender com toda atenção e carinho via WhatsApp.
            </p>
            
            <EstenButton 
              variant="secondary" 
              size="lg"
              href={whatsappUrl}
              className="text-xl px-12 py-6 shadow-glow hover:scale-110"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Fale Conosco no WhatsApp Agora!
            </EstenButton>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <div className="text-primary-foreground">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg">
                  {benefit.title}
                </h4>
                <p className="text-sm opacity-80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="mt-16 p-8 bg-primary-foreground/10 rounded-2xl">
            <p className="text-lg italic opacity-90">
              "Através da moda, buscamos construir uma comunidade onde cada mulher 
              possa brilhar e influenciar positivamente seu entorno."
            </p>
            <p className="text-sm mt-3 font-medium">
              — Equipe Esten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
