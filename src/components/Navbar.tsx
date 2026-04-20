import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Portfolio", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const targetId = id === "Portfolio" ? "projects" : id.toLowerCase();
    const el = document.getElementById(targetId);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between py-5 px-6 md:px-12">
        <span className="text-2xl font-heading font-bold text-foreground italic">
          Portfolio<span className="text-primary">.</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-body font-medium transition-colors duration-200 ${
                active === item ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20 animate-fade-in-up">
          <div className="container max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-left text-sm font-body font-medium py-2 transition-colors duration-200 ${
                  active === item ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
