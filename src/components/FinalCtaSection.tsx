import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Shield, Truck } from "lucide-react";

export function FinalCtaSection() {
  const whatsappUrl = `https://wa.me/5544997432870?text=${encodeURIComponent("Olá! Estou pronta para brilhar com Esten! ✨")}`;

  const benefits = [
    { icon: <MessageCircle size={24} />, title: "Atendimento Personalizado", description: "Nossa equipe te atende com carinho via WhatsApp." },
    { icon: <Heart size={24} />, title: "Feito com Propósito", description: "Peças que refletem seus valores e sua essência." },
    { icon: <Shield size={24} />, title: "Qualidade Garantida", description: "Tecidos selecionados e acabamento premium." },
    { icon: <Truck size={24} />, title: "Entrega Nacional", description: "Levamos Esten para todo o Brasil." }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground font-absans">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-primary-foreground mb-4">
            PRONTA PARA BRILHAR COM ESTEN?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-light">
            Sua próxima peça favorita te espera. Nossa equipe está pronta para te atender com toda atenção e carinho via WhatsApp.
          </p>
          <Button asChild size="lg" className="bg-esten-terracotta text-primary-foreground hover:bg-esten-terracotta/90">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Fale conosco no WhatsApp
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-esten-terracotta text-primary-foreground rounded-full flex items-center justify-center">
                {benefit.icon}
              </div>
              <h4 className="font-light text-primary-foreground pt-2">{benefit.title}</h4>
              <p className="text-sm text-primary-foreground/80 font-light">{benefit.description}</p>
            </div>
          ))}
        </div>

         <div className="text-center mt-20">
          <p className="text-base italic text-primary-foreground/70 font-light">
            "Acreditamos em uma moda que celebra a sua essência e empodera suas escolhas."
          </p>
          <p className="text-sm mt-2 font-light text-esten-terracotta">
            - Hosana Pinea
          </p>
        </div>
      </div>
    </section>
  );
}
