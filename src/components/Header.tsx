import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import EstenLogoHorizontal from '@/assets/logohorizontalesten.png';
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#camisetas", label: "Camisetas" },
    { href: "#conjuntos", label: "Conjuntos" },
  ];

  const ctaLink = { href: "#sobre", label: "Descubra a Esten" };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  // Define a cor do texto com base no estado de scroll
  const textColor = isScrolled ? "text-foreground" : "text-white";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-manrope",
      isScrolled ? "bg-background/90 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="/" className="z-10">
          <img 
            src={EstenLogoHorizontal} 
            alt="Esten Logo" 
            // Aplica um filtro para tornar o logo branco quando o header for transparente
            className={cn("h-8 transition-all", !isScrolled && "brightness-0 invert")} 
          />
        </a>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={cn(
                "text-sm font-medium transition-colors",
                textColor,
                isScrolled ? "hover:text-primary" : "hover:text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
          <Button asChild 
            variant={isScrolled ? "outline" : "default"} 
            size="sm" 
            className={cn(
              "transition-colors",
              isScrolled 
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary"
            )}
          >
            <a href={ctaLink.href}>
              {ctaLink.label}
            </a>
          </Button>
        </nav>

        {/* Gatilho da Navegação Mobile */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={textColor}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col h-full p-6">
                <a href="/" onClick={handleLinkClick} className="mb-8">
                    <img src={EstenLogoHorizontal} alt="Esten Logo" className="h-8" />
                </a>
                <nav className="flex flex-col gap-6 text-lg">
                  {[...navLinks, ctaLink].map((link) => (
                    <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

