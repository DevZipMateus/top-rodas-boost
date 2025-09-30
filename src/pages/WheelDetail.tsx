import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WheelDetail = () => {
  const { aro } = useParams<{ aro: string }>();

  const wheelInfo: Record<string, { title: string; description: string; images: string[] }> = {
    "13": {
      title: "Rodas Aro 13",
      description: "Ideal para carros populares e economia",
      images: [
        "/products/aro-13/roda-1.jpg",
        "/products/aro-13/roda-2.jpg",
        "/products/aro-13/roda-3.jpg"
      ]
    },
    "14": {
      title: "Rodas Aro 14",
      description: "Perfeito para compactos e sedans",
      images: [
        "/products/aro-14/roda-1.jpg",
        "/products/aro-14/roda-2.jpg",
        "/products/aro-14/roda-3.jpg",
        "/products/aro-14/roda-4.jpg",
        "/products/aro-14/roda-5.jpg",
        "/products/aro-14/roda-6.jpg",
        "/products/aro-14/roda-7.jpg",
        "/products/aro-14/roda-8.jpg",
        "/products/aro-14/roda-9.jpg",
        "/products/aro-14/roda-10.jpg"
      ]
    },
    "15": {
      title: "Rodas Aro 15",
      description: "Ótima opção para sedans médios",
      images: []
    },
    "16": {
      title: "Rodas Aro 16",
      description: "Excelente para SUVs compactos",
      images: []
    },
    "17": {
      title: "Rodas Aro 17",
      description: "Premium para sedans e SUVs",
      images: []
    },
    "18": {
      title: "Rodas Aro 18",
      description: "Esportivo para carros de performance",
      images: []
    },
    "19": {
      title: "Rodas Aro 19",
      description: "Luxury para veículos premium",
      images: []
    },
    "20": {
      title: "Rodas Aro 20",
      description: "Alto padrão para SUVs grandes",
      images: []
    },
    "21": {
      title: "Rodas Aro 21",
      description: "Exclusivo para veículos de luxo",
      images: []
    },
    "22": {
      title: "Rodas Aro 22",
      description: "Top de linha para grandes SUVs",
      images: []
    }
  };

  const info = wheelInfo[aro || "13"];

  if (!info) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <p className="text-center">Aro não encontrado</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <Link to="/#produtos">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para produtos
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{info.title}</h1>
            <p className="text-xl text-muted-foreground">{info.description}</p>
          </div>

          {info.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {info.images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-border bg-muted/30 p-4">
                  <img
                    src={image}
                    alt={`${info.title} - Imagem ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-lg">
              <p className="text-muted-foreground text-lg">
                Imagens em breve. Entre em contato para mais informações.
              </p>
              <Button className="mt-6" asChild>
                <a
                  href="https://wa.me/5583999060703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          )}

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Interessado neste modelo?
            </h2>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco para consultar preços e disponibilidade
            </p>
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5583999060703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default WheelDetail;
