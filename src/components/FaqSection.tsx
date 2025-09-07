import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      question: "Como funciona o atendimento via WhatsApp?",
      answer: "Nossa equipe especializada está disponível para te atender via WhatsApp de segunda a sábado, das 9h às 18h. Você pode tirar dúvidas sobre produtos, tamanhos, cores e fazer seu pedido diretamente conosco. O atendimento é personalizado e humanizado, como você merece."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos PIX e Cartão de Crédito. Para mais detalhes sobre as condições e opções de parcelamento, por favor, consulte nossa equipe de atendimento via WhatsApp."
    },
    {
      question: "Como funciona a política de trocas e devoluções?",
      answer: "Você tem até 7 dias para trocar ou devolver qualquer produto que não esteja de acordo com suas expectativas. Basta entrar em contato conosco via WhatsApp que orientamos todo o processo. As peças devem estar sem uso, com etiquetas e em perfeito estado."
    },
    {
      question: "Vocês entregam para todo o Brasil?",
      answer: "Sim, enviamos para todo o Brasil! Para consultar prazos de entrega e valores de frete para a sua região, por favor, entre em contato conosco via WhatsApp."
    },
    {
      question: "Qual o diferencial das peças Esten?",
      answer: "Nossas peças são criadas especialmente para a mulher cristã moderna que busca elegância, qualidade e propósito. Utilizamos tecidos selecionados, modelagem pensada para o corpo feminino e design que permite expressar sua fé com sofisticação, fugindo do comum e do vulgar."
    },
    {
      question: "Como a Esten se conecta com a fé cristã?",
      answer: "A Esten é inspirada na Rainha Ester, símbolo de coragem, sabedoria e elegância. Nossa marca foi criada para construir uma comunidade de mulheres cristãs que desejam expressar sua identidade e fé através da moda, sempre respeitando valores cristãos de modéstia e elegância."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Dúvidas Frequentes sobre a Esten
            </h2>
            <p className="text-lg text-muted-foreground">
              Encontre respostas para as principais dúvidas sobre nossa marca e produtos
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-esten-terracotta transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-6 bg-card rounded-lg shadow-soft">
            <p className="text-muted-foreground mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <p className="text-lg font-medium text-primary">
              Entre em contato conosco via WhatsApp e tire todas suas dúvidas! 💬
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
