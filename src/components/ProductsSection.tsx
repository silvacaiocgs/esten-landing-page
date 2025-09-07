import { EstenButton } from "@/components/EstenButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductsSection() {
  const whatsappNumber = "5544997432870"; // Número de telefone atualizado

  // Array com 11 produtos - você pode adicionar as imagens reais aqui
  const products = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    name: `Produto ${index + 1}`,
    images: [
      `/placeholder-${index + 1}-1.jpg`,
      `/placeholder-${index + 1}-2.jpg`,
      `/placeholder-${index + 1}-3.jpg`,
    ]
  }));

  return (
    <section id="colecoes" className="py-20 px-6 bg-gradient-soft">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="star-pattern inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Coleção
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra peças que celebram sua identidade, fé e personalidade com elegância e sofisticação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-card rounded-lg p-6 shadow-soft transition-elegant hover:shadow-elegant">
              <Carousel className="mb-6">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-muted-foreground text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                            ✦
                          </div>
                          <p className="text-sm">
                            Foto {index + 1} do<br />
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {product.name}
                </h3>
                <EstenButton 
                  variant="whatsapp" 
                  size="md"
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse no ${encodeURIComponent(product.name)}. Podem me enviar mais detalhes?`}
                  className="w-full"
                >
                  Conversar no WhatsApp
                </EstenButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
