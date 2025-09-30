import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname === "/") {
      // Se já estiver na home, apenas scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Se estiver em outra página, navegar para home com hash
      navigate(`/#${sectionId}`);
      // Após navegar, fazer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/logo-top-rodas.png"
              alt="Top Rodas Logo"
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => navigateToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => navigateToSection("produtos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => navigateToSection("projetos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => navigateToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => navigateToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center">
            <Button asChild variant="default" className="bg-[#25D366] hover:bg-[#1fa851]">
              <a
                href="https://wa.me/5583999060703"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <img 
                  src="/whatsapp-icon.png" 
                  alt="WhatsApp" 
                  className="h-4 w-4"
                />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-2 px-3 py-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <>
                <X size={20} />
                <span className="text-sm font-medium">Fechar</span>
              </>
            ) : (
              <>
                <Menu size={20} />
                <span className="text-sm font-medium">Menu</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigateToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => navigateToSection("sobre")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => navigateToSection("produtos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Produtos
              </button>
              <button
                onClick={() => navigateToSection("projetos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => navigateToSection("servicos")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => navigateToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button asChild variant="default" className="w-fit bg-[#25D366] hover:bg-[#1fa851]">
                <a
                  href="https://wa.me/5583999060703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <img 
                    src="/whatsapp-icon.png" 
                    alt="WhatsApp" 
                    className="h-4 w-4"
                  />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;