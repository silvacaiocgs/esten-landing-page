import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const whatsappNumber = "5544997432870"; // Número de telefone atualizado
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre a Esten");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-light tracking-wider">esten</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Moda que inspira, fortalece e eleva. Criada especialmente para 
              a mulher cristã que busca expressar sua fé com elegância.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/esten" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/esten" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#colecoes" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Nossas Coleções
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Atendimento WhatsApp
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sábado</p>
              <p>9h às 18h</p>
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: (44) 99743-2870
              </a>
              <p className="text-sm mt-4">
                CNPJ: 00.000.000/0001-00<br />
                Liberty Business LTDA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 space-y-4">
          <div className="text-center">
            <p className="text-primary-foreground/60 italic mb-2">
              "Através da moda, buscamos construir uma comunidade onde cada mulher possa brilhar e influenciar positivamente seu entorno."
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <p>© 2024 Esten - Todos os direitos reservados.</p>
            <p>Desenvolvido com ♡ para mulheres de fé</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
