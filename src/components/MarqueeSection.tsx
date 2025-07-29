import { Star } from "lucide-react";

const MarqueeSection = () => {
  const services = [
    "Graphic Designer",
    "Product Designer", 
    "UI Designer",
    "Brand Identity",
    "Web Design",
    "Mobile App Design"
  ];

  const MarqueeContent = ({ reverse = false }) => (
    <div className={`flex items-center space-x-8 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...services, ...services, ...services].map((service, index) => (
        <div key={index} className="flex items-center space-x-8 whitespace-nowrap">
          <span className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
            {service}
          </span>
          <Star className="w-6 h-6 text-primary fill-current" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-12 overflow-hidden border-y border-primary/20 bg-portfolio-black/50 backdrop-blur-sm">
      <div className="space-y-6">
        {/* First marquee */}
        <div className="overflow-hidden">
          <MarqueeContent />
        </div>
        
        {/* Second marquee - reverse direction */}
        <div className="overflow-hidden">
          <MarqueeContent reverse />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;