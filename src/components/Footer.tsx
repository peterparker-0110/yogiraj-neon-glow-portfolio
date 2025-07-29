import { Instagram, Linkedin, Eye } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Behance", icon: Eye, url: "https://behance.net" },
    { name: "Dribbble", icon: Eye, url: "https://dribbble.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" }
  ];

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border bg-portfolio-black/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <button 
              onClick={scrollToTop}
              className="font-heading font-bold text-3xl text-foreground mb-4 hover:text-primary transition-colors duration-300"
            >
              Yogiraj <span className="text-primary">Kamble</span>
            </button>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Product Designer, UI Designer, and Graphic Designer creating meaningful digital experiences 
              that connect brands with their audiences.
            </p>
            <p className="text-sm text-muted-foreground">
              Based in India • Available for freelance projects worldwide
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-block relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 glow-green-hover"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Contact */}
            <div className="mt-8">
              <h5 className="font-semibold text-primary mb-3">Get In Touch</h5>
              <a 
                href="mailto:yogiraj@example.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                yogiraj@example.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Yogiraj Kamble. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & developed with <span className="text-primary">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;