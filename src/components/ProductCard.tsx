import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappNumber = "5544997432870";
  const message = `Olá! Tenho interesse no produto: ${product.name} - ${product.description}. Pode me dar mais detalhes?`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-card rounded-lg overflow-hidden border flex flex-col group">
      <Carousel className="relative" opts={{ loop: true }}>
        <CarouselContent>
          {product.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[3/4] bg-muted">
                <img 
                  src={image} 
                  alt={`${product.name} - foto ${index + 1}`} 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>

      <div className="p-4 text-center flex flex-col flex-grow">
        <h3 className="font-playfair text-lg font-semibold text-primary">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
        <Button asChild className="mt-auto w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Comprar por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

