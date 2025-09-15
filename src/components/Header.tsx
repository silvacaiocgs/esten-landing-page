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
    { href: "#sobre", label: "Descubra a Esten" },
  ];

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

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="/" className="z-10">
          <img src={EstenLogoHorizontal} alt="Esten Logo" className="h-8" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
                  {navLinks.map((link) => (
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
