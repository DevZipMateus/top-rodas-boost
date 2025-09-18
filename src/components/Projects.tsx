import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Projetos de exemplo - em uma implementação real, estas imagens viriam de uma API ou CMS
  const projects = [
    {
      id: 1,
      title: "Civic Si - Aro 18",
      description: "Transformação completa com rodas esportivas aro 18 e pneus de alta performance",
      category: "Esportivo",
      wheel: "Aro 18"
    },
    {
      id: 2,
      title: "Hilux - Aro 20",
      description: "Upgrade premium com rodas off-road aro 20 para maior imponência",
      category: "SUV/Pickup",
      wheel: "Aro 20"
    },
    {
      id: 3,
      title: "Corolla - Aro 16",
      description: "Modernização elegante com rodas originais aro 16 e pneus nacionais",
      category: "Sedan",
      wheel: "Aro 16"
    },
    {
      id: 4,
      title: "Golf GTI - Aro 19",
      description: "Performance máxima com rodas esportivas aro 19 e pneus importados",
      category: "Hatch Premium",
      wheel: "Aro 19"
    },
    {
      id: 5,
      title: "Tracker - Aro 17",
      description: "SUV compacto com visual renovado usando rodas aro 17",
      category: "SUV Compacto",
      wheel: "Aro 17"
    },
    {
      id: 6,
      title: "Fusca - Aro 15",
      description: "Clássico restaurado com rodas vintage aro 15 respeitando o estilo original",
      category: "Clássico",
      wheel: "Aro 15"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
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
              Conheça alguns dos projetos que realizamos. Cada transformação é única 
              e feita com muito cuidado e atenção aos detalhes.
            </p>
          </div>

          {/* Projeto em destaque */}
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-3xl font-bold text-primary">
                        {projects[currentProject].wheel}
                      </span>
                    </div>
                    <div className="text-sm text-primary font-semibold mb-2">
                      {projects[currentProject].category}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Projeto #{projects[currentProject].id}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevProject}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                    <Button
                      variant="outline" 
                      size="sm"
                      onClick={nextProject}
                      className="flex items-center gap-2"
                    >
                      Próximo
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Grid de todos os projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  index === currentProject ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setCurrentProject(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary font-semibold">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.wheel}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Quer ver seu veículo transformado? Entre em contato conosco!
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
    </section>
  );
};

export default Projects;