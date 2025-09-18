import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Target, Truck, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Alinhamento",
      description: "Alinhamento profissional para garantir dirigibilidade e economia de combustível",
      features: [
        "Equipamentos de precisão",
        "Técnicos especializados",
        "Teste de direção",
        "Relatório detalhado"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Balanceamento",
      description: "Balanceamento de rodas para eliminar vibrações e aumentar a vida útil dos pneus",
      features: [
        "Balanceamento eletrônico",
        "Controle de qualidade",
        "Chumbo ecológico",
        "Garantia do serviço"
      ]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Entrega",
      description: "Entregamos seus produtos com segurança em todo Nordeste e região de São Paulo",
      features: [
        "Embalagem segura",
        "Rastreamento online",
        "Prazos garantidos",
        "Frete competitivo"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Além da venda de rodas e pneus, oferecemos serviços especializados 
              para garantir a melhor performance do seu veículo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Por que escolher nossos serviços?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Equipamentos modernos</h4>
                      <p className="text-sm text-muted-foreground">
                        Utilizamos equipamentos de última geração para garantir precisão
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Profissionais qualificados</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe possui anos de experiência no setor automotivo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Garantia total</h4>
                      <p className="text-sm text-muted-foreground">
                        Todos os nossos serviços possuem garantia e pós-venda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-6 mb-6">
                  <h4 className="text-2xl font-bold text-primary mb-2">Horário de funcionamento</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Segunda a sexta:</strong> 7:30 às 17:30</p>
                    <p><strong>Sábados:</strong> 7:30 às 12:00</p>
                    <p><strong>Domingos:</strong> Fechado</p>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <a
                    href="https://wa.me/5583999060703"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar serviço
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;