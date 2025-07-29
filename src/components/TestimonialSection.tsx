import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Yogiraj is a great communicator, works efficiently, and always completes work to the highest quality. He explains his design process clearly, making him a pleasure to work with.",
      author: "Albert Flores",
      position: "President of Sales",
      company: "TechFlow Inc.",
      rating: 5
    },
    {
      id: 2,
      quote: "Outstanding design work! Yogiraj delivered exactly what we needed for our mobile app. His attention to detail and user experience expertise really showed in the final product.",
      author: "Sarah Mitchell",
      position: "Product Manager",
      company: "InnovateTech",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with Yogiraj was seamless from start to finish. His creative vision and technical skills helped transform our brand identity completely. Highly recommend!",
      author: "Michael Chen",
      position: "CEO",
      company: "StartupXYZ",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Client <span className="text-gradient-green">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what my clients say about working with me and the results we've achieved together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-portfolio text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Navigation */}
            <div className="absolute top-6 right-6 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </Button>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 mt-4">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading leading-relaxed text-foreground mb-8 max-w-3xl mx-auto">
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-semibold text-primary mb-1">
                {current.author}
              </h4>
              <p className="text-muted-foreground">
                {current.position}
                {current.company && (
                  <>
                    <span className="mx-2">•</span>
                    {current.company}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;