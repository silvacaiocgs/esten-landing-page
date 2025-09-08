import { EstenButton } from "@/components/EstenButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- IMPORTAÇÃO DAS IMAGENS DOS PRODUTOS ---
// Caminhos corrigidos para usar o alias '@' do projeto.

// Produto 1
import produto1foto1 from '@/assets/produto1-foto1-camisetaamarela.png';
import produto1foto2 from '@/assets/produto1-foto2-camisetaamarela.png';
import produto1foto3 from '@/assets/produto1-foto3-camisetaamarela.png';
import produto1foto4 from '@/assets/produto1-foto4-camisetaamarela.png';

// Produto 2
import produto2foto1 from '@/assets/produto2-foto1-camisetaroxa.png';
import produto2foto2 from '@/assets/produto2-foto2-camisetaroxa.png';
import produto2foto3 from '@/assets/produto2-foto3-camisetaroxa.png';
import produto2foto4 from '@/assets/produto2-foto4-camisetaroxa.png';

// Produto 3
import produto3foto1 from '@/assets/produto3-foto1-camisetaverde.png';
import produto3foto2 from '@/assets/produto3-foto2-camisetaverde.png';
import produto3foto3 from '@/assets/produto3-foto3-camisetaverde.png';

// Produto 4
import produto4foto1 from '@/assets/produto4-foto1-camisetarosa.png';
import produto4foto2 from '@/assets/produto4-foto2-camisetarosa.png';
import produto4foto3 from '@/assets/produto4-foto3-camisetarosa.png';

// Produto 5
import produto5foto1 from '@/assets/produto5-foto1-camisetamarrom.png';
import produto5foto2 from '@/assets/produto5-foto2-camisetamarrom.png';
import produto5foto3 from '@/assets/produto5-foto3-camisetamarrom.png';

// Produto 6
import produto6foto1 from '@/assets/produto6-foto1-camisetabranca.png';
import produto6foto2 from '@/assets/produto6-foto2-camisetabranca.png';
import produto6foto3 from '@/assets/produto6-foto3-camisetabranca.png';
import produto6foto4 from '@/assets/produto6-foto4-camisetabranca.png';

// Produto 7
import produto7foto1 from '@/assets/produto7-foto1-camisetapreta.png';
import produto7foto2 from '@/assets/produto7-foto2-camisetapreta.png';
import produto7foto3 from '@/assets/produto7-foto3-camisetapreta.png';

// Produto 8
import produto8foto1 from '@/assets/produto8-foto1-conjuntorosa.png';
import produto8foto2 from '@/assets/produto8-foto2-conjuntorosa.png';
import produto8foto3 from '@/assets/produto8-foto3-conjuntorosa.png';
import produto8foto4 from '@/assets/produto8-foto4-conjuntorosa.png';

// Produto 9
import produto9foto1 from '@/assets/produto9-foto1-conjuntoverde.png';
import produto9foto2 from '@/assets/produto9-foto2-conjuntoverde.png';
import produto9foto3 from '@/assets/produto9-foto3-conjuntoverde.png';
import produto9foto4 from '@/assets/produto9-foto4-conjuntoverde.png';

// Produto 10
import produto10foto1 from '@/assets/produto10-foto1-conjuntopreto.png';
import produto10foto2 from '@/assets/produto10-foto2-conjuntopreto.png';
import produto10foto3 from '@/assets/produto10-foto3-conjuntopreto.png';

// Produto 11
import produto11foto1 from '@/assets/produto11-foto1-conjuntobege.png';
import produto11foto2 from '@/assets/produto11-foto2-conjuntobege.png';
import produto11foto3 from '@/assets/produto11-foto3-conjuntobege.png';


export function ProductsSection() {
  const whatsappNumber = "5544997432870";

  const products = [
    { id: 1, name: "Camiseta Amarela", images: [produto1foto1, produto1foto2, produto1foto3, produto1foto4] },
    { id: 2, name: "Camiseta Roxa", images: [produto2foto1, produto2foto2, produto2foto3, produto2foto4] },
    { id: 3, name: "Camiseta Verde", images: [produto3foto1, produto3foto2, produto3foto3] },
    { id: 4, name: "Camiseta Rosa", images: [produto4foto1, produto4foto2, produto4foto3] },
    { id: 5, name: "Camiseta Marrom", images: [produto5foto1, produto5foto2, produto5foto3] },
    { id: 6, name: "Camiseta Branca", images: [produto6foto1, produto6foto2, produto6foto3, produto6foto4] },
    { id: 7, name: "Camiseta Preta", images: [produto7foto1, produto7foto2, produto7foto3] },
    { id: 8, name: "Conjunto Rosa", images: [produto8foto1, produto8foto2, produto8foto3, produto8foto4] },
    { id: 9, name: "Conjunto Verde", images: [produto9foto1, produto9foto2, produto9foto3, produto9foto4] },
    { id: 10, name: "Conjunto Preto", images: [produto10foto1, produto10foto2, produto10foto3] },
    { id: 11, name: "Conjunto Bege", images: [produto11foto1, produto11foto2, produto11foto3] },
  ];

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
            <div key={product.id} className="bg-card rounded-lg p-6 shadow-soft transition-elegant hover:shadow-elegant flex flex-col">
              <Carousel className="mb-6">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${product.name} - foto ${index + 1}`} 
                          className="w-full h-full object-cover object-center" 
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>

              <div className="text-center mt-auto">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 h-14 flex items-center justify-center">
                  {product.name}
                </h3>
                <EstenButton 
                  variant="whatsapp" 
                  size="md"
                  href={`https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}. Pode me dar mais detalhes?`}
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

