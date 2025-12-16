import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    tagline: "IT Solutions & Services",
    title: "Empowering Business Through Technology",
    description: "We deliver innovative IT solutions that drive digital transformation, enhance productivity, and accelerate your business growth."
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    tagline: "Cloud Solutions",
    title: "Secure & Scalable Cloud Infrastructure",
    description: "Transform your business with enterprise-grade cloud solutions designed for performance, security, and reliability."
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    tagline: "Cybersecurity",
    title: "Protect Your Digital Assets",
    description: "Comprehensive cybersecurity solutions to safeguard your business from evolving threats and vulnerabilities."
  }
];

export const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => emblaApi.scrollNext(), 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative min-h-[90vh] pt-20">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative min-h-[90vh] flex items-center">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent" />
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl">
                  <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
                    {slide.tagline}
                  </p>

                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-transparent border-white/30 text-white hover:bg-white/10"
                      asChild
                    >
                      <Link to="/services">
                        Our Services
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};