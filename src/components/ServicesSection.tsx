import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Monitor, Smartphone, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Custom Website Design",
      price: "Starting at $25/hr",
      description: "Modern, responsive websites that captivate your audience and drive conversions."
    },
    {
      icon: Smartphone,
      title: "Custom Mobile Application Design",
      price: "Starting at $25/hr", 
      description: "Intuitive mobile experiences that engage users and enhance brand loyalty."
    },
    {
      icon: Palette,
      title: "Custom Logo Design",
      price: "Contact for pricing",
      description: "Memorable brand identities that make lasting impressions and stand out."
    },
    {
      icon: Zap,
      title: "Custom Brand Identity Design",
      price: "Contact for pricing",
      description: "Complete brand systems that tell your story and connect with your audience."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            <span className="text-gradient-green">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to elevate your brand and engage your audience.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-portfolio flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-6 flex-1">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <p className="text-primary font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>
              
              <Button 
                variant="outline"
                className="flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:glow-green"
              >
                View Service
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <Button className="btn-neon">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;