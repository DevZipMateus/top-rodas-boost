import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/logo-top-rodas.png"
              alt="Top Rodas - Rodas e Acessórios"
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Top Rodas
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Especialistas em rodas esportivas e originais, com pneus importados e nacionais. 
            Realizamos o upgrade que sua máquina merece.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5583999060703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
              const element = document.getElementById("produtos");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Ver produtos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Aro 13 ao 22</h3>
              <p className="text-muted-foreground">Ampla variedade de tamanhos</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Envio Nordeste + SP</h3>
              <p className="text-muted-foreground">Entregamos em todo Nordeste e região metropolitana de São Paulo</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cajazeiras-PB</h3>
              <p className="text-muted-foreground">Localização estratégica na Paraíba</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;