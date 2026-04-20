import { useState } from "react";
import { Briefcase, GraduationCap, Code2, Calendar, MapPin, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experienceData = [
  { year: "2026 - Present", role: "Junior WordPress Developer", company: "DIONE", location: "on-site", description: "Building custom themes, plugins & WooCommerce stores for international clients." },
  { year: "2026 - Present", role: "Frontend Developer", company: "DIONE", location: "PK", description: "Developed responsive websites using HTML, CSS, Bootstrap & WordPress." },
  { year: "2026", role: "Junior Web Developer", company: "DIONE", location: "PK", description: "Worked on client websites, landing pages, and e-commerce solutions." },
];

const educationData = [
  { degree: "BS Information Technology", institution: "virtual University" },
  { degree: "Graphic Design", institution: "Globle", grade: "Certified" },
  { degree: "WordPress Development", institution: "Dione Software House", grade: "Certified" },
];

const skillsData = [
  { name: "WordPress", level: 95 },
  { name: "WooCommerce", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "Bootstrap", level: 88 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Elementor", level: 92 },
  { name: "SEO", level: 80 },
];

const tabConfig = [
  { label: "Experience", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "Skills", icon: Code2 },
];

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-primary font-body font-semibold mb-6">
              WordPress & WooCommerce Developer!
            </p>
            <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
              I'm a passionate web developer specializing in crafting beautiful, functional websites
              using <strong className="text-foreground">WordPress</strong>,{" "}
              <strong className="text-foreground">WooCommerce</strong>,{" "}
              <strong className="text-foreground">HTML</strong>,{" "}
              <strong className="text-foreground">CSS</strong>, and{" "}
              <strong className="text-foreground">Bootstrap</strong>. I build responsive,
              user-friendly digital experiences that help businesses grow and succeed online.
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:shadow-[0_0_20px_hsl(174,100%,50%,0.3)] transition-all duration-300"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>

            {/* Expandable tabs section */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                expanded ? "max-h-[1200px] opacity-100 mt-10" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              {/* Tab buttons */}
              <div className="flex gap-3 mb-8 flex-wrap">
                {tabConfig.map((tab, i) => (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-body font-medium transition-all duration-300 border ${
                      activeTab === i
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(174,100%,50%,0.25)] scale-105"
                        : "bg-background/50 text-foreground/70 border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content with animation */}
              <div className="animate-fade-in" key={activeTab}>
                {/* Experience Tab */}
                {activeTab === 0 && (
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />
                    
                    <div className="space-y-6">
                      {experienceData.map((item, i) => (
                        <div
                          key={i}
                          className="group relative flex gap-5 animate-fade-in"
                          style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                        >
                          {/* Timeline dot */}
                          <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary items-center justify-center z-10 group-hover:bg-primary group-hover:shadow-[0_0_15px_hsl(174,100%,50%,0.4)] transition-all duration-300">
                            <Briefcase className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                          </div>
                          
                          {/* Card */}
                          <div className="flex-1 bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(174,100%,50%,0.08)] hover:-translate-y-1 transition-all duration-300">
                            {(item.year || item.location) && (
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              {item.year && (
                               <span className="inline-flex items-center gap-1 text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full">
                                 <Calendar className="w-3 h-3" /> {item.year}
                               </span>
                              )}
                              {item.location && (
                               <span className="inline-flex items-center gap-1 text-xs font-body text-muted-foreground">
                                 <MapPin className="w-3 h-3" /> {item.location}
                               </span>
                              )}
                            </div>
                            )}
                            <h4 className="text-foreground font-body font-semibold text-base">{item.role}</h4>
                            <p className="text-primary/80 font-body text-sm mb-2">{item.company}</p>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === 1 && (
                  <div className="grid sm:grid-cols-3 gap-5">
                    {educationData.map((item, i) => (
                      <div
                        key={i}
                        className="group bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(174,100%,50%,0.08)] hover:-translate-y-2 transition-all duration-300 text-center animate-scale-in"
                        style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                      >
                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_15px_hsl(174,100%,50%,0.3)] transition-all duration-300">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-foreground font-body font-semibold text-sm mt-2">{item.degree}</h4>
                        <p className="text-muted-foreground font-body text-xs mt-1">{item.institution}</p>
                        <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-body">
                          <Award className="w-3 h-3" /> {item.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 2 && (
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                    {skillsData.map((skill, i) => (
                      <div
                        key={skill.name}
                        className="animate-fade-in"
                        style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-body font-medium text-sm">{skill.name}</span>
                          <span className="text-primary font-body font-semibold text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/30">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out shadow-[0_0_8px_hsl(174,100%,50%,0.4)]"
                            style={{
                              width: expanded ? `${skill.level}%` : "0%",
                              transitionDelay: `${i * 100 + 300}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
