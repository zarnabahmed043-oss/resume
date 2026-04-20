import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import wordpressImg from "@/assets/service-wordpress.jpg";
import woocommerceImg from "@/assets/service-woocommerce.jpg";
import htmlcssImg from "@/assets/service-htmlcss.jpg";
import bootstrapImg from "@/assets/service-bootstrap.jpg";

const servicesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  details: string;
}> = {
  wordpress: {
    title: "WordPress Development",
    tagline: "Custom Themes & Plugins for Modern Websites",
    description: "We build high-performance WordPress websites tailored to your brand. From custom themes to complex plugin development, we deliver solutions that are fast, secure, and easy to manage.",
    image: wordpressImg,
    features: [
      "Custom Theme Development",
      "Plugin Development & Customization",
      "Speed & Performance Optimization",
      "SEO-Friendly Architecture",
      "Security Hardening & Maintenance",
      "Responsive & Mobile-First Design",
    ],
    details: "Our WordPress development services cover everything from simple blogs to complex enterprise websites. We follow modern WordPress coding standards, utilize the block editor (Gutenberg), and ensure your site is optimized for search engines and fast loading times. Whether you need a brand-new website or want to revamp an existing one, we've got you covered.",
  },
  woocommerce: {
    title: "WooCommerce Solutions",
    tagline: "Complete E-Commerce Store Setup & Management",
    description: "Transform your business with a powerful WooCommerce store. We handle everything from product setup to payment gateway integration, creating seamless shopping experiences for your customers.",
    image: woocommerceImg,
    features: [
      "Complete Store Setup & Configuration",
      "Payment Gateway Integration",
      "Product Management & Inventory",
      "Shipping & Tax Configuration",
      "Custom Checkout Flows",
      "Order Management & Analytics",
    ],
    details: "Our WooCommerce expertise enables us to build scalable online stores that drive sales. We integrate popular payment gateways, configure shipping options, and set up product catalogs that are easy to manage. From single-product stores to large marketplaces, we create e-commerce solutions that convert visitors into customers.",
  },
  "html-css": {
    title: "HTML & CSS Development",
    tagline: "Pixel-Perfect, Semantic & Responsive Markup",
    description: "We craft clean, semantic HTML and CSS that ensures your website looks perfect on every device. Our hand-coded approach guarantees lightweight, fast-loading pages with accessibility in mind.",
    image: htmlcssImg,
    features: [
      "Semantic HTML5 Markup",
      "CSS3 Animations & Transitions",
      "Responsive Design (All Devices)",
      "Cross-Browser Compatibility",
      "Accessibility (WCAG) Compliance",
      "PSD/Figma to HTML Conversion",
    ],
    details: "Our HTML/CSS development ensures your designs are translated into pixel-perfect, standards-compliant code. We write clean, maintainable markup that loads fast and renders consistently across all modern browsers. Whether you have a design file or need us to code from scratch, we deliver responsive layouts that look stunning on every screen size.",
  },
  bootstrap: {
    title: "Bootstrap Development",
    tagline: "Rapid UI Development with Responsive Grids",
    description: "Leverage the power of Bootstrap for rapid, responsive web development. We build beautiful interfaces using Bootstrap's grid system and component library, ensuring consistency and speed.",
    image: bootstrapImg,
    features: [
      "Responsive Grid Layouts",
      "Custom Bootstrap Themes",
      "Component-Based UI Development",
      "Mobile-First Approach",
      "Bootstrap 5 Integration",
      "Rapid Prototyping & Development",
    ],
    details: "Bootstrap is our go-to framework for building responsive, mobile-first websites quickly without sacrificing quality. We customize Bootstrap themes to match your brand identity, extend components as needed, and ensure your site looks great on all devices. Our Bootstrap development approach delivers professional results in shorter timelines.",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Go Back Home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background scroll-smooth">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <Link to="/#skills" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-lg text-primary font-body mb-6">{service.tagline}</p>
                <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-[0_0_40px_hsl(174,100%,50%,0.08)]">
                <img src={service.image} alt={service.title} className="w-full h-auto object-cover" loading="lazy" width={800} height={512} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/30">
        <div className="container max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-10 text-center">
              What We <span className="text-primary">Offer</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {service.features.map((feature, i) => (
              <ScrollReveal key={feature} delay={i * 100}>
                <div className="flex items-start gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/40 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-body text-sm">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                More <span className="text-primary">Details</span>
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed text-base">{service.details}</p>
              <div className="mt-8">
                <Link
                  to="/contact"   // ✅ Contact page pe jayega
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-body font-semibold rounded-full hover:shadow-[0_0_25px_hsl(174,100%,50%,0.3)] transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;