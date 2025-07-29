import { Button } from "@/components/ui/button";
import heroImage from "@/assets/yogiraj-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-green-glow rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-green-glow rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6 leading-tight">
              Yogiraj{" "}
              <span className="text-gradient-green block">Kamble</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Based in India, I am a <span className="text-primary font-semibold">Product Designer</span>, 
              <span className="text-primary font-semibold"> UI Designer</span>, and 
              <span className="text-primary font-semibold"> Graphic Designer</span> with over 
              <span className="text-primary font-semibold"> 2 years of experience</span>.
            </p>
            
            <Button 
              className="btn-neon text-lg px-8 py-6 animate-pulse-glow hover:animate-none"
              onClick={() => {
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Talk
            </Button>
          </div>
          
          {/* Right Column - Image & Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-green-glow rounded-full blur-xl opacity-50 animate-pulse-glow"></div>
              <img
                src={heroImage}
                alt="Yogiraj Kamble - Product Designer"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/30 glow-green-hover transition-all duration-500"
              />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full max-w-lg">
              <div className="card-portfolio">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">200+</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Happy Clients</div>
              </div>
              
              <div className="card-portfolio">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">325+</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Completed Projects</div>
              </div>
              
              <div className="card-portfolio">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">95%</div>
                <div className="text-sm font-body text-muted-foreground uppercase tracking-wider">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;