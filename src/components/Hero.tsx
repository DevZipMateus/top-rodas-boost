import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="inicio" className="pt-16 min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: 'url(/hero-background.jpg)'
  }}>
      {/* Overlay para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img src="/logo-top-rodas.png" alt="Top Rodas - Rodas e Acessórios" className="h-32 w-auto mx-auto mb-6" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Top Rodas
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Especialistas em rodas esportivas e originais, com pneus importados e nacionais. 
            Realizamos o upgrade que sua máquina merece.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1fa851]" asChild>
              <a href="https://wa.me/5583999060703" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <img src="/whatsapp-icon.png" alt="WhatsApp" className="h-4 w-4" />
                Solicitar orçamento
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => {
            const element = document.getElementById("produtos");
            if (element) element.scrollIntoView({
              behavior: "smooth"
            });
          }} className="border-white text-white hover:text-black bg-zinc-50">
              Ver produtos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Aro 13 ao 22</h3>
              <p className="text-white/80">Ampla variedade de tamanhos</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Envio Nordeste + SP</h3>
              <p className="text-white/80">Entregamos em todo Nordeste e região metropolitana de São Paulo</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Jardim Paraíso</h3>
              <p className="text-white/80">Localização estratégica na Paraíba</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;