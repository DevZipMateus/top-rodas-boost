import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Projetos reais da Top Rodas
  const projects = [
    {
      id: 1,
      image: "/projects/golf-gti.jpg",
      title: "Golf GTI",
      description: "Rodas esportivas de alta performance"
    },
    {
      id: 2,
      image: "/projects/hilux.jpg", 
      title: "Toyota Hilux",
      description: "Rodas off-road para máxima resistência"
    },
    {
      id: 3,
      image: "/projects/polo-branco.jpg",
      title: "Volkswagen Polo",
      description: "Upgrade moderno e elegante"
    },
    {
      id: 4,
      image: "/projects/suv-branco-1.jpg",
      title: "SUV Premium",
      description: "Rodas de luxo para maior imponência"
    },
    {
      id: 5,
      image: "/projects/suv-branco-2.jpg",
      title: "SUV Executivo",
      description: "Design sofisticado e performance"
    },
    {
      id: 6,
      image: "/projects/jeep-compass.jpg",
      title: "Jeep Compass",
      description: "Estilo aventureiro com elegância urbana"
    },
    {
      id: 7,
      image: "/projects/suv-branco-3.jpg",
      title: "SUV Moderno",
      description: "Tecnologia e design em harmonia"
    },
    {
      id: 8,
      image: "/projects/gol-vermelho.jpg",
      title: "Volkswagen Gol",
      description: "Transformação esportiva completa"
    },
    {
      id: 9,
      image: "/projects/suv-branco-4.jpg",
      title: "SUV Contemporâneo", 
      description: "Inovação em cada detalhe"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + projects.length) % projects.length);
    }
  };

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projetos realizados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos. Cada projeto é único e feito 
              com muito cuidado e atenção aos detalhes.
            </p>
          </div>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Quer ver seu veículo transformado como estes? Entre em contato conosco!
            </p>
            <Button size="lg" asChild>
              <a
                href="https://wa.me/5583999060703"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar orçamento
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <img
              src={projects[selectedImage].image}
              alt={projects[selectedImage].title}
              className="w-full h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-center">
              <h3 className="font-semibold">{projects[selectedImage].title}</h3>
              <p className="text-sm opacity-90">{projects[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;