import { ExternalLink } from "lucide-react";
import mobileAppProject from "@/assets/project-mobile-app.jpg";
import chatbotProject from "@/assets/project-chatbot.jpg";
import dashboardProject from "@/assets/project-dashboard.jpg";
import socialMediaProject from "@/assets/project-social-media.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image: mobileAppProject,
      description: "Modern mobile banking interface with intuitive user experience"
    },
    {
      id: 2,
      title: "AI Chatbot Interface",
      category: "Product Design",
      image: chatbotProject,
      description: "Conversational AI interface with seamless interaction flow"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      category: "Web Design",
      image: dashboardProject,
      description: "Data visualization dashboard with real-time insights"
    },
    {
      id: 4,
      title: "Social Media Platform",
      category: "UI Design",
      image: socialMediaProject,
      description: "Modern social platform with engaging user interface"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Featured <span className="text-gradient-green">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work showcasing modern design solutions and user-centered approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative card-portfolio overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-black via-portfolio-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                          {project.category}
                        </p>
                      </div>
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom info - always visible */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;