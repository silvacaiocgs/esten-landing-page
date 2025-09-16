import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import WhatsappIcon from '@/assets/whatsapp-icon.png';
import { MessageCircle } from "lucide-react";

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
        <Button asChild className="mt-auto w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-colors">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="WhatsApp Icon" className="mr-2 h-4 w-4" />
            Comprar por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}

