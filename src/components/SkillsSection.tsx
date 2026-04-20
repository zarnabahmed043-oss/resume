import { Code, ShoppingCart, Layout, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "WordPress", icon: Layout, description: "Custom themes & plugins development with modern WordPress standards.", slug: "wordpress" },
  { name: "WooCommerce", icon: ShoppingCart, description: "E-commerce solutions with product management, payments & shipping.", slug: "woocommerce" },
  { name: "HTML/CSS", icon: Code, description: "Semantic, responsive markup and pixel-perfect styling.", slug: "html-css" },
  { name: "Bootstrap", icon: Layers, description: "Rapid UI development with responsive grid layouts.", slug: "bootstrap" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Our <span className="text-primary">Services</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 150}>
              <div className="group bg-card rounded-xl p-8 text-center border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(174,100%,50%,0.1)] hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-body font-semibold text-foreground mb-3">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {skill.description}
                </p>
                <Link to={`/service/${skill.slug}`} className="mt-5 inline-block px-5 py-2 text-xs border border-primary text-primary rounded-full font-body hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Read More
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;