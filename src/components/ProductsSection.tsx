import { ProductCard } from '@/components/ProductCard';

// Importação das imagens dos produtos
// Camisetas
import produto1foto1 from '@/assets/produto1-foto1-camisetaamarela.png';
import produto1foto2 from '@/assets/produto1-foto2-camisetaamarela.png';
import produto1foto3 from '@/assets/produto1-foto3-camisetaamarela.png';
import produto1foto4 from '@/assets/produto1-foto4-camisetaamarela.png';

import produto2foto1 from '@/assets/produto2-foto1-camisetaroxa.png';
import produto2foto2 from '@/assets/produto2-foto2-camisetaroxa.png';
import produto2foto3 from '@/assets/produto2-foto3-camisetaroxa.png';
import produto2foto4 from '@/assets/produto2-foto4-camisetaroxa.png';

import produto3foto1 from '@/assets/produto3-foto1-camisetaverde.png';
import produto3foto2 from '@/assets/produto3-foto2-camisetaverde.png';
import produto3foto3 from '@/assets/produto3-foto3-camisetaverde.png';

import produto4foto1 from '@/assets/produto4-foto1-camisetarosa.png';
import produto4foto2 from '@/assets/produto4-foto2-camisetarosa.png';
import produto4foto3 from '@/assets/produto4-foto3-camisetarosa.png';

import produto5foto1 from '@/assets/produto5-foto1-camisetamarrom.png';
import produto5foto2 from '@/assets/produto5-foto2-camisetamarrom.png';
import produto5foto3 from '@/assets/produto5-foto3-camisetamarrom.png';

import produto6foto1 from '@/assets/produto6-foto1-camisetaoffwhitecoragem.png';
import produto6foto2 from '@/assets/produto6-foto2-camisetaoffwhitecoragem.png';
import produto6foto3 from '@/assets/produto6-foto3-camisetaoffwhitecoragem.png';

import produto7foto1 from '@/assets/produto7-foto1-camisetaoffwhite.png';
import produto7foto2 from '@/assets/produto7-foto2-camisetaoffwhite.png';
import produto7foto3 from '@/assets/produto7-foto3-camisetaoffwhite.png';

import produto8foto1 from '@/assets/produto8-foto1-camisetapreta.png';
import produto8foto2 from '@/assets/produto8-foto2-camisetapreta.png';
import produto8foto3 from '@/assets/produto8-foto3-camisetapreta.png';

// Conjuntos
import produto9foto1 from '@/assets/produto9-foto1-conjuntorosa.png';
import produto9foto2 from '@/assets/produto9-foto2-conjuntorosa.png';
import produto9foto3 from '@/assets/produto9-foto3-conjuntorosa.png';
import produto9foto4 from '@/assets/produto9-foto4-conjuntorosa.png';

import produto10foto1 from '@/assets/produto10-foto1-conjuntoverde.png';
import produto10foto2 from '@/assets/produto10-foto2-conjuntoverde.png';
import produto10foto3 from '@/assets/produto10-foto3-conjuntoverde.png';
import produto10foto4 from '@/assets/produto10-foto4-conjuntoverde.png';

import produto11foto1 from '@/assets/produto11-foto1-conjuntopreto.png';
import produto11foto2 from '@/assets/produto11-foto2-conjuntopreto.png';
import produto11foto3 from '@/assets/produto11-foto3-conjuntopreto.png';

import produto12foto1 from '@/assets/produto12-foto1-conjuntobege.png';
import produto12foto2 from '@/assets/produto12-foto2-conjuntobege.png';
import produto12foto3 from '@/assets/produto12-foto3-conjuntobege.png';

const camisetas = [
  { id: 1, name: "Camiseta Amarela", description: "Tudo Posso", images: [produto1foto1, produto1foto2, produto1foto3, produto1foto4] },
  { id: 2, name: "Camiseta Roxa", description: "Leveza", images: [produto2foto1, produto2foto2, produto2foto3, produto2foto4] },
  { id: 3, name: "Camiseta Verde", description: "God is Good", images: [produto3foto1, produto3foto2, produto3foto3] },
  { id: 4, name: "Camiseta Rosa", description: "A Paz", images: [produto4foto1, produto4foto2, produto4foto3] },
  { id: 5, name: "Camiseta Marrom", description: "Entre Flores e Processos", images: [produto5foto1, produto5foto2, produto5foto3] },
  { id: 6, name: "Camiseta Off-White", description: "Coragem", images: [produto6foto1, produto6foto2, produto6foto3] },
  { id: 7, name: "Camiseta Off-White", description: "Floresça", images: [produto7foto1, produto7foto2, produto7foto3] },
  { id: 8, name: "Camiseta Preta", description: "Seja forte", images: [produto8foto1, produto8foto2, produto8foto3] },
];

const conjuntos = [
    { id: 9, name: "Conjunto Rosa", description: "", images: [produto9foto1, produto9foto2, produto9foto3, produto9foto4] },
    { id: 10, name: "Conjunto Verde", description: "", images: [produto10foto1, produto10foto2, produto10foto3, produto10foto4] },
    { id: 11, name: "Conjunto Preto", description: "", images: [produto11foto1, produto11foto2, produto11foto3] },
    { id: 12, name: "Conjunto Bege", description: "", images: [produto12foto1, produto12foto2, produto12foto3] },
];

export function ProductsSection() {
  return (
    <section id="colecoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-4">
            NOSSA COLEÇÃO
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light">
            Descubra peças que celebram sua identidade com elegância e sofisticação.
          </p>
        </div>

        {/* Seção Camisetas */}
        <div id="camisetas" className="mb-20">
          <h3 className="text-3xl font-light text-primary text-center mb-10 tracking-widest">CAMISETAS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {camisetas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Seção Conjuntos */}
        <div id="conjuntos">
          <h3 className="text-3xl font-light text-primary text-center mb-10 tracking-widest">CONJUNTOS</h3>
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

