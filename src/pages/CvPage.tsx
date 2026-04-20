import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, GraduationCap, Code2, Mail, Phone, MapPin, Globe, Calendar, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const personalInfo = {
  name: "Zarmeen Ahmed",
  title: "WordPress & WooCommerce Developer",
  email: "Zarnabahmed@gmail.com",
  phone: "+92 300 1234567",
  location: "Pakistan",
  website: "www.zarnab.dev",
};

const experienceData = [
  { year: "2026 - Present", role: "Senior WordPress Developer", company: "DIONE", description: "Building custom themes, plugins & WooCommerce stores for international clients." },
  { year: "2026", role: "Frontend Developer", company: "DIONE", description: "Developed responsive websites using HTML, CSS, Bootstrap & WordPress." },
  { year: "2026", role: "Junior Web Developer", company: "DIONE", description: "Worked on client websites, landing pages, and e-commerce solutions." },
];

const educationData = [
  { degree: "BS Information Technology", institution: "Virtual University" },
  { degree: "Graphic Design", institution: "Globle", grade: "Certified" },
  { degree: "WooCommerce Mastery", institution: "DIONE Software House", grade: "Certified" },
];

const skillsData = [
  { name: "WordPress", level: 95 },
  { name: "WooCommerce", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "Bootstrap", level: 88 },
  { name: "JavaScript", level: 80 },
  { name: "PHP", level: 75 },
  { name: "Elementor", level: 92 },
  { name: "SEO", level: 85 },
];

const languages = ["English", "Urdu"];

const CvPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-b border-border/50">
        <div className="container px-4 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-lg font-heading font-bold text-foreground">
            My <span className="text-primary">CV</span>
          </h1>
        </div>
      </div>

      <div className="container px-4 py-12 max-w-4xl mx-auto space-y-12">
        {/* Personal Info */}
        <ScrollReveal>
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              {personalInfo.name}
            </h2>
            <p className="text-primary font-body font-semibold text-lg">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground font-body">
              <span className="inline-flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary" />{personalInfo.email}</span>
              <span className="inline-flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" />{personalInfo.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" />{personalInfo.location}</span>
              <span className="inline-flex items-center gap-1.5"><Globe className="w-4 h-4 text-primary" />{personalInfo.website}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Experience */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Experience</h3>
            </div>
            <div className="relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />
              <div className="space-y-5">
                {experienceData.map((item, i) => (
                  <div key={i} className="group relative flex gap-5 animate-fade-in" style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}>
                    <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary/10 border-2 border-primary items-center justify-center z-10 group-hover:bg-primary group-hover:shadow-[0_0_15px_hsl(174,100%,50%,0.4)] transition-all duration-300">
                      <Briefcase className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1 bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-5 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(174,100%,50%,0.08)] hover:-translate-y-1 transition-all duration-300">
                      <span className="inline-flex items-center gap-1 text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                        <Calendar className="w-3 h-3" /> {item.year}
                      </span>
                      <h4 className="text-foreground font-body font-semibold text-base">{item.role}</h4>
                      <p className="text-primary/80 font-body text-sm mb-1">{item.company}</p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Education</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {educationData.map((item, i) => (
                <div
                  key={i}
                  className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(174,100%,50%,0.08)] hover:-translate-y-2 transition-all duration-300 text-center animate-scale-in"
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-foreground font-body font-semibold text-sm">{item.degree}</h4>
                  <p className="text-muted-foreground font-body text-xs mt-1">{item.institution}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-body">
                    <Award className="w-3 h-3" /> {item.grade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Skills</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {skillsData.map((skill, i) => (
                <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-body font-medium text-sm">{skill.name}</span>
                    <span className="text-primary font-body font-semibold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/30">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000 ease-out shadow-[0_0_8px_hsl(174,100%,50%,0.4)]"
                      style={{ width: `${skill.level}%`, transitionDelay: `${i * 100 + 300}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Languages */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Languages</h3>
            </div>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <span key={lang} className="px-5 py-2 rounded-full bg-primary/10 text-primary font-body font-medium text-sm border border-primary/20">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CvPage;
