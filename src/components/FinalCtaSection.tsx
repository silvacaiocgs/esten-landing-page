import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Shield, Truck } from "lucide-react";

export function FinalCtaSection() {
  const whatsappUrl = `https://wa.me/5544997432870?text=${encodeURIComponent("Olá! Estou pronta para brilhar com Esten! ✨")}`;

  const benefits = [
    { icon: <MessageCircle />, title: "Atendimento Personalizado", description: "Nossa equipe te atende com carinho via WhatsApp." },
    { icon: <Heart />, title: "Feito com Propósito", description: "Peças que refletem seus valores e sua essência." },
    { icon: <Shield />, title: "Qualidade Garantida", description: "Tecidos selecionados e acabamento premium." },
    { icon: <Truck />, title: "Entrega Nacional", description: "Levamos Esten para todo o Brasil." }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-card p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            PRONTA PARA BRILHAR COM ESTEN?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Sua próxima peça favorita te espera. Nossa equipe está pronta para te atender com toda atenção e carinho via WhatsApp.
          </p>
          <Button asChild size="lg">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Fale conosco no WhatsApp
            </a>
          </Button>

          <div className="border-t my-12 border-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

           <div className="mt-12">
            <p className="text-base italic text-muted-foreground">
              "Acreditamos em uma moda que celebra a sua essência e empodera suas escolhas."
            </p>
            <p className="text-sm mt-2 font-medium text-primary">
              - Hosana Pinea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
