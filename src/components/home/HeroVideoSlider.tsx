import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";

const videoSlides = [
  {
    video: "/Futuristic_Data_Center_Video_Generation.mp4",
    title: "Cloud Computing Excellence",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
    overlay: "from-blue-600/10 via-purple-600/5 to-pink-600/5",
  },
  {
    video: "/Digital_City_Transformation_Video.mp4",
    title: "Digital Transformation",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
    overlay: "from-indigo-600/10 via-blue-600/5 to-cyan-600/5",
  },
  {
    video: "/Cybersecurity_Network_Visualization_Video.mp4",
    title: "Cybersecurity Solutions",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
    overlay: "from-emerald-600/10 via-teal-600/5 to-cyan-600/5",
  },
  {
    video: "/Dynamic_AI_Analytics_Dashboard_Animation.mp4",
    title: "AI & Data Intelligence",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
    overlay: "from-purple-600/10 via-pink-600/5 to-rose-600/5",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 98, suffix: "%", label: "Success Rate" },
];

export const HeroVideoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(newIndex);
      // Pause all videos
      videoRefs.current.forEach((video) => {
        if (video) video.pause();
      });
      // Play current video
      if (videoRefs.current[newIndex]) {
        videoRefs.current[newIndex]?.play();
      }
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Initialize

    // Auto-play carousel
    const autoplay = setInterval(() => emblaApi.scrollNext(), 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {videoSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center"
            >
              {/* Video Background */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={(e) => {
                  if (index === 0) {
                    (e.target as HTMLVideoElement).play();
                  }
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Gradient Overlay for Better Text Visibility */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4 animate-float drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {slide.subtitle}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                      {slide.title}
                    </h1>

                    <p className="text-xl sm:text-2xl text-white mb-8 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {slide.description}
                    </p>

                    {/* Stats Counter */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
                      {stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="text-center animate-fade-in-up"
                          style={{ animationDelay: `${statIndex * 0.2}s` }}
                        >
                          <div className="text-3xl md:text-4xl font-black text-white mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                            {stat.value}{stat.suffix}
                          </div>
                          <div className="text-sm text-white font-bold uppercase tracking-wider drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="group bg-white text-black hover:bg-white/90 border-0 shadow-[0_4px_14px_0_rgba(255,255,255,0.39)] hover:scale-105 transition-all duration-300 font-bold"
                        asChild
                      >
                        <Link to="/contact">
                          Get Free Consultation
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-black/40 backdrop-blur-sm border-white/40 text-white hover:bg-black/60 hover:border-white/60 hover:scale-105 transition-all duration-300 font-bold"
                        asChild
                      >
                        <Link to="/services">
                          <Play className="mr-2 w-4 h-4" />
                          View Our Work
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${index === selectedIndex
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

