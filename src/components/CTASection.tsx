import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-green-glow rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-8 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          
          {/* Heading */}
          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Let's{" "}
            <span className="text-gradient-green relative">
              Collaborate
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"></div>
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's create something amazing together. 
            I'm here to help you build digital experiences that make an impact.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="btn-neon text-lg px-10 py-6 group"
              onClick={() => window.open('mailto:yogiraj@example.com', '_blank')}
            >
              Work With Me
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-6"
              onClick={() => {
                const projects = document.getElementById('projects');
                projects?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Email</h4>
                <p className="text-muted-foreground">yogiraj@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">India</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Response Time</h4>
                <p className="text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;