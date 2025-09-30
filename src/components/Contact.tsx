import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você! Solicite seu orçamento ou tire suas dúvidas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    Localização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Rua Projetada Nossa Senhora, 20<br />
                    Jardim paraíso<br />
                    Cajazeiras-PB
                  </p>
                  <Button variant="outline" size="sm">
                    Ver no mapa
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/5583999060703"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      (83) 99906-0703
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fixo</p>
                    <a
                      href="tel:+5583999052411"
                      className="text-muted-foreground hover:text-primary"
                    >
                      (83) 99905-2411
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:toprodascz@gmail.com"
                    className="text-primary hover:underline"
                  >
                    toprodascz@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    Horário de funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a sexta:</span>
                    <span className="font-semibold">7:30 às 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados:</span>
                    <span className="font-semibold">7:30 às 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingos:</span>
                    <span className="text-muted-foreground">Fechado</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Instagram className="h-5 w-5 text-primary" />
                    Redes sociais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://instagram.com/toprodaseacessorios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @toprodaseacessorios
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Área de ação e informações adicionais */}
            <div className="space-y-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Solicite seu orçamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Nossa equipe está pronta para ajudar você a encontrar as rodas 
                    e pneus perfeitos para seu veículo. Atendimento personalizado 
                    e orçamento sem compromisso.
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#1fa851]" asChild>
                      <a
                        href="https://wa.me/5583999060703"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <img 
                          src="/whatsapp-icon.png" 
                          alt="WhatsApp" 
                          className="h-5 w-5"
                        />
                        WhatsApp - Orçamento rápido
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="mailto:toprodascz@gmail.com">
                        E-mail - Orçamento detalhado
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Área de entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Nordeste</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Entregamos em todos os estados do Nordeste com frete competitivo.
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                        <span>• Paraíba</span>
                        <span>• Pernambuco</span>
                        <span>• Ceará</span>
                        <span>• R. G. Norte</span>
                        <span>• Alagoas</span>
                        <span>• Sergipe</span>
                        <span>• Bahia</span>
                        <span>• Maranhão</span>
                        <span>• Piauí</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">São Paulo</h4>
                      <p className="text-sm text-muted-foreground">
                        Região metropolitana de São Paulo com entrega rápida e segura.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Por que escolher a Top Rodas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Mais de 10 anos de experiência</li>
                    <li>✓ Produtos originais e garantidos</li>
                    <li>✓ Atendimento especializado</li>
                    <li>✓ Entregas em todo Nordeste e SP</li>
                    <li>✓ Parcelamento facilitado</li>
                    <li>✓ Pós-venda diferenciado</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;