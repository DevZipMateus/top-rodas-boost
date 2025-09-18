import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                  src="/logo-top-rodas.png"
                  alt="Top Rodas"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-accent-foreground/80 mb-4">
                Realizamos o upgrade que sua máquina merece. Especialistas em rodas 
                esportivas e originais, com pneus importados e nacionais.
              </p>
              <div className="text-sm text-accent-foreground/60">
                <p>CNPJ: 42.481.263/0001-00</p>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">Contato</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-accent-foreground/80">
                    Rua Projetada Nossa Senhora, 20<br />
                    Cajazeiras-PB
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href="https://wa.me/5583999060703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-foreground/80 hover:text-primary"
                  >
                    (83) 99906-0703
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:toprodascz@gmail.com"
                    className="text-accent-foreground/80 hover:text-primary"
                  >
                    toprodascz@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-primary" />
                  <a
                    href="https://instagram.com/toprodaseaccessorios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-foreground/80 hover:text-primary"
                  >
                    @toprodaseacessorios
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">Funcionamento</h3>
              <div className="space-y-2 text-sm text-accent-foreground/80">
                <div>
                  <p className="font-medium">Segunda a sexta</p>
                  <p>7:30 às 17:30</p>
                </div>
                <div>
                  <p className="font-medium">Sábados</p>
                  <p>7:30 às 12:00</p>
                </div>
                <div>
                  <p className="font-medium">Domingos</p>
                  <p>Fechado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-accent-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-accent-foreground/60 mb-4 md:mb-0">
                © {new Date().getFullYear()} Top Rodas. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-accent-foreground/80">
                <span>Rodas • Pneus • Aros 13 ao 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;