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
      image: "/projects/golf-gti.jpg"
    },
    {
      id: 2,
      image: "/projects/hilux.jpg"
    },
    {
      id: 3,
      image: "/projects/polo-branco.jpg"
    },
    {
      id: 4,
      image: "/projects/suv-branco-1.jpg"
    },
    {
      id: 5,
      image: "/projects/suv-branco-2.jpg"
    },
    {
      id: 6,
      image: "/projects/jeep-compass.jpg"
    },
    {
      id: 7,
      image: "/projects/suv-branco-3.jpg"
    },
    {
      id: 8,
      image: "/projects/gol-vermelho.jpg"
    },
    {
      id: 9,
      image: "/projects/midia-17.jpg"
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
                    alt={`Projeto Top Rodas ${project.id}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Quer ver seu veículo transformado como estes? Entre em contato conosco!
            </p>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1fa851]" asChild>
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
              alt={`Projeto Top Rodas ${projects[selectedImage].id}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;