import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  { icon: Mail, label: "Email", value: "Zarnabahmed043@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 3155558945" },
  { icon: MapPin, label: "Location", value: "Pakistan" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-14">
            Contact <span className="text-primary">Me!</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT — Info & Social */}
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Let's <span className="text-primary">Talk</span>
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Feel free to reach out for collaborations, freelance projects, or just a friendly chat about web development.
                </p>
              </div>

              {/* Contact info rows */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-[0_0_15px_hsl(174,100%,50%,0.3)] transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-body">{item.label}</p>
                      <p className="text-foreground font-body font-medium text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div>
                <p className="text-sm font-body text-muted-foreground mb-3">Follow Me</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="w-10 h-10 rounded-full border-2 border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(174,100%,50%,0.4)] hover:-translate-y-1"
                    >
                      <item.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Contact Form */}
          <ScrollReveal delay={200}>
            <form
              className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 space-y-5 hover:border-primary/20 transition-colors duration-300"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Email Subject"
                  className="bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold hover:shadow-[0_0_25px_hsl(174,100%,50%,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
