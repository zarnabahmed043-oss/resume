import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import profileAvatar from "@/assets/profile-avatar.png";

const roles = [
  "WordPress Developer",
  "WooCommerce Expert",
  "Frontend Developer",
  "Bootstrap Specialist",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const displayText = roles[roleIndex].substring(0, charIndex);

  return (
    <section id="home" className="min-h-screen flex items-center bg-background relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Cyan glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />
      {/* Subtle glow left */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      {/* 3D Portfolio watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="portfolio-3d-text text-[8rem] md:text-[12rem] lg:text-[16rem] font-heading font-black uppercase tracking-wider">
          Portfolio
        </span>
      </div>

      <div className="container px-6 md:px-12 py-20 mt-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Text content - LEFT side */}
          <div className="flex-1 animate-fade-in-up text-center md:text-left order-2 md:order-1">
            <p className="text-base md:text-lg font-heading font-semibold text-foreground/90 mb-3 italic">
              Hello, It's Me
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-4 tracking-tight leading-tight">
              Zarmeen Ahmed
            </h1>
            <p className="text-xl md:text-2xl font-heading font-semibold">
              And I'm a{" "}
              <span className="text-primary">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </p>
            <p className="text-muted-foreground font-body mt-6 leading-relaxed max-w-lg">
              Building responsive, user-friendly digital experiences that help businesses grow and succeed online.
            </p>

            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(174,100%,50%,0.4)] hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <Link to="/cv" className="mt-8 inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold hover:shadow-[0_0_25px_hsl(174,100%,50%,0.4)] transition-all duration-300 hover:-translate-y-0.5">
              Download CV
            </Link>
          </div>

          {/* Image - RIGHT side */}
          <div className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2">
            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
              {/* Glowing border */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  background: "linear-gradient(135deg, hsl(174 100% 50%), hsl(174 100% 30%))",
                }}
              />
              {/* Image container */}
              <div
                className="absolute inset-[6px]"
                style={{
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={profileAvatar}
                  alt="Zarmeen Ahmed"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Outer glow */}
              <div className="absolute -inset-8 bg-primary/20 blur-[60px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
