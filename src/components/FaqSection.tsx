import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      q: "Como funciona o atendimento via WhatsApp?",
      a: "Nossa equipe especializada está disponível para te atender via WhatsApp de segunda a sábado, das 9h às 18h. Você pode tirar dúvidas sobre produtos, tamanhos, cores e fazer seu pedido diretamente conosco."
    },
    {
      q: "Quais são as formas de pagamento?",
      a: "Aceitamos PIX e Cartão de Crédito. Para mais detalhes sobre as condições e opções de parcelamento, por favor, consulte nossa equipe de atendimento via WhatsApp."
    },
    {
      q: "Qual o diferencial das peças Esten?",
      a: "Nossas peças são criadas para a mulher moderna que busca elegância e qualidade. Utilizamos tecidos selecionados, modelagem pensada para o corpo feminino e um design atemporal."
    },
    {
      q: "Como funciona a política de trocas e devoluções?",
      a: "Você tem até 7 dias para trocar ou devolver qualquer produto. Basta entrar em contato conosco via WhatsApp. As peças devem estar sem uso, com etiquetas e em perfeito estado."
    },
    {
      q: "Vocês entregam para todo o Brasil?",
      a: "Sim, enviamos para todo o Brasil! Para consultar prazos e valores de frete para a sua região, entre em contato conosco."
    },
  ];

  return (
    <section className="py-20 bg-esten-cream/50 font-absans">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
              DÚVIDAS FREQUENTES
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Encontre respostas para as principais dúvidas sobre nossa marca e produtos.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg"
              >
                <AccordionTrigger className="text-left font-light text-foreground px-6 py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12 text-muted-foreground">
            <p className="font-light">Não encontrou a resposta que procurava?</p>
            <a href="https://wa.me/5544997432870" target="_blank" rel="noopener noreferrer" className="text-primary font-light hover:underline">
              Entre em contato conosco via WhatsApp!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}