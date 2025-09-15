import { ProductCard } from './ProductCard';

// Importação das imagens dos produtos
import produto1foto1 from '../assets/produto1-foto1-camisetaamarela.png';
import produto2foto1 from '../assets/produto2-foto1-camisetaroxa.png';
import produto3foto1 from '../assets/produto3-foto1-camisetaverde.png';
import produto4foto1 from '../assets/produto4-foto1-camisetarosa.png';
import produto5foto1 from '../assets/produto5-foto1-camisetamarrom.png';
import produto6foto1 from '../assets/produto6-foto1-camisetaoffwhitecoragem.png';
import produto7foto1 from '../assets/produto7-foto1-camisetaoffwhite.png';
import produto8foto1 from '../assets/produto8-foto1-camisetapreta.png';
import produto9foto1 from '../assets/produto9-foto1-conjuntorosa.png';
import produto10foto1 from '../assets/produto10-foto1-conjuntoverde.png';
import produto11foto1 from '../assets/produto11-foto1-conjuntopreto.png';
import produto12foto1 from '../assets/produto12-foto1-conjuntobege.png';

const camisetas = [
  { id: 1, name: "Camiseta Amarela", description: "Tudo Posso", images: [produto1foto1] },
  { id: 2, name: "Camiseta Roxa", description: "Leveza", images: [produto2foto1] },
  { id: 3, name: "Camiseta Verde", description: "God is Good", images: [produto3foto1] },
  { id: 4, name: "Camiseta Rosa", description: "A Paz", images: [produto4foto1] },
  { id: 5, name: "Camiseta Marrom", description: "Entre Flores e Processos", images: [produto5foto1] },
  { id: 6, name: "Camiseta Off-White", description: "Coragem", images: [produto6foto1] },
  { id: 7, name: "Camiseta Off-White", description: "Floresça", images: [produto7foto1] },
  { id: 8, name: "Camiseta Preta", description: "Seja forte", images: [produto8foto1] },
];

const conjuntos = [
    { id: 9, name: "Conjunto Rosa", description: "", images: [produto9foto1] },
    { id: 10, name: "Conjunto Verde", description: "", images: [produto10foto1] },
    { id: 11, name: "Conjunto Preto", description: "", images: [produto11foto1] },
    { id: 12, name: "Conjunto Bege", description: "", images: [produto12foto1] },
];

export function ProductsSection() {
  return (
    <section id="colecoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            NOSSA COLEÇÃO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra peças que celebram sua identidade com elegância e sofisticação.
          </p>
        </div>

        {/* Seção Camisetas */}
        <div id="camisetas" className="mb-20">
          <h3 className="text-3xl font-semibold text-foreground text-center mb-10">CAMISETAS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {camisetas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Seção Conjuntos */}
        <div id="conjuntos">
          <h3 className="text-3xl font-semibold text-foreground text-center mb-10">CONJUNTOS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {conjuntos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
