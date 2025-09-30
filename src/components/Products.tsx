import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const wheelSizes = [
    { aro: "13", description: "Ideal para carros populares e economia", image: "/products/aro-13-wheel-new.png" },
    { aro: "14", description: "Perfeito para compactos e sedans", image: "/products/aro-14-wheel-new.png" },
    { aro: "15", description: "Ótima opção para sedans médios", image: "/products/aro-15-wheel-new.png" },
    { aro: "16", description: "Excelente para SUVs compactos", image: "/products/aro-16-wheel-new.png" },
    { aro: "17", description: "Premium para sedans e SUVs", image: "/products/aro-17-wheel.png" },
    { aro: "18", description: "Esportivo para carros de performance", image: "/products/aro-18-wheel.png" },
    { aro: "19", description: "Luxury para veículos premium", image: "/products/aro-19-wheel.png" },
    { aro: "20", description: "Alto padrão para SUVs grandes", image: "/products/aro-20-wheel-new.png" },
    { aro: "21", description: "Exclusivo para veículos de luxo", image: "/products/aro-21-wheel.png" },
    { aro: "22", description: "Top de linha para grandes SUVs", image: "/products/aro-22-wheel.png" },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ampla variedade de rodas esportivas e originais, além de pneus 
              importados e nacionais para todos os tipos de veículos.
            </p>
          </div>

          <Tabs defaultValue="rodas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="rodas">Rodas</TabsTrigger>
              <TabsTrigger value="pneus">Pneus</TabsTrigger>
            </TabsList>

            <TabsContent value="rodas">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Rodas por aro
                </h3>
                <p className="text-muted-foreground text-center mb-8">
                  Do aro 13 ao 22 - encontre o tamanho perfeito para seu veículo
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {wheelSizes.map((wheel) => (
                  <Card key={wheel.aro} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Aro {wheel.aro}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {wheel.image ? (
                        <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                          <img 
                            src={wheel.image} 
                            alt={`Roda aro ${wheel.aro}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-primary font-bold">{wheel.aro}"</span>
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground mb-4">
                        {wheel.description}
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://wa.me/5583999060703"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Consultar
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Rodas esportivas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Design moderno e agressivo</li>
                      <li>• Maior performance e estilo</li>
                      <li>• Várias cores e acabamentos</li>
                      <li>• Marcas reconhecidas mundialmente</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Rodas originais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Especificações de fábrica</li>
                      <li>• Compatibilidade garantida</li>
                      <li>• Durabilidade comprovada</li>
                      <li>• Melhor custo-benefício</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pneus">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      Pneus importados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pneus de alta performance das melhores marcas internacionais
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Tecnologia avançada</li>
                      <li>• Maior durabilidade</li>
                      <li>• Performance superior</li>
                      <li>• Aderência otimizada</li>
                      <li>• Menor ruído e vibração</li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <a
                        href="https://wa.me/5583999060703"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar preços
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      Pneus nacionais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Pneus de qualidade das principais marcas brasileiras
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Excelente custo-benefício</li>
                      <li>• Adaptados ao clima brasileiro</li>
                      <li>• Ampla disponibilidade</li>
                      <li>• Garantia nacional</li>
                      <li>• Fácil reposição</li>
                    </ul>
                    <Button className="mt-4" asChild>
                      <a
                        href="https://wa.me/5583999060703"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar preços
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-muted/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Como escolher o pneu ideal?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">1. Tamanho correto</h4>
                    <p className="text-sm text-muted-foreground">
                      Verifique as especificações do seu veículo
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2. Tipo de uso</h4>
                    <p className="text-sm text-muted-foreground">
                      Urbano, rodoviário ou misto
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">3. Orçamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Encontramos a melhor opção para você
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Products;