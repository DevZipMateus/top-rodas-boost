import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sobre a Top Rodas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos uma empresa especializada em rodas e pneus, oferecendo as melhores 
              soluções automotivas para transformar seu veículo com qualidade e estilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Nossa missão
                </h3>
                <p className="text-muted-foreground">
                  Realizar o upgrade que sua máquina merece, oferecendo produtos 
                  de qualidade superior e serviços especializados.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Qualidade garantida
                </h3>
                <p className="text-muted-foreground">
                  Trabalhamos apenas com marcas reconhecidas no mercado, 
                  garantindo durabilidade e performance em todos os produtos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Alcance regional
                </h3>
                <p className="text-muted-foreground">
                  Localizados em Cajazeiras-PB, atendemos todo o Nordeste 
                  e região metropolitana de São Paulo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Experiência e tradição
                </h3>
                <p className="text-muted-foreground mb-4">
                  A Top Rodas é referência em rodas esportivas e originais, oferecendo 
                  uma ampla gama de produtos que atendem desde carros populares até 
                  veículos de luxo.
                </p>
                <p className="text-muted-foreground mb-4">
                  Nosso catálogo inclui rodas dos aros 13 ao 22, além de pneus 
                  importados e nacionais das melhores marcas do mercado.
                </p>
                <p className="text-muted-foreground">
                  Além da venda, oferecemos serviços especializados como 
                  alinhamento e balanceamento, garantindo a performance e 
                  segurança do seu veículo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">13-22</div>
                  <div className="text-sm text-muted-foreground">Aros disponíveis</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Qualidade garantida</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Atendimento online</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">9 Estados</div>
                  <div className="text-sm text-muted-foreground">Área de entrega</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;