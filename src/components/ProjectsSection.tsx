import project1 from "@/assets/p1.png";
import project2 from "@/assets/p2.png";
import project3 from "@/assets/p3.jpg";
import project4 from "@/assets/p4.png";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { 
    title: "UTMPS Hosting Platform", 
    image: project1,
    link: "https://utmps.wpenginepowered.com/"
  },
  { 
    title: "Coconut Loans About Us", 
    image: project2,
    link: "https://coconutloans.co.nz/about-us/"
  },
  { 
    title: "MW Diamond Jewellers", 
    image: project3,
    link: "https://mwdiamondjeweller.co.nz/"
  },
  { 
    title: "Mergen Compass Perspectives", 
    image: project4,
    link: "https://mergen-compass.awsy.sg-host.com/perspectives/"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container px-4 mx-auto">

        {/* Heading */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Latest <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        {/* Projects Container with Horizontal Scroll */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-2">
            
            {projects.map((project, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative w-[280px] rounded-xl overflow-hidden border border-border group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] flex-shrink-0">
                  
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* TITLE (Always visible at bottom) */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center py-2 text-sm font-semibold">
                    {project.title}
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-xs border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Visit Website
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;