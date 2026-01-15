import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useRef } from "react";

interface Slide {
  video: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    video: "/2516160-hd_1920_1080_24fps.mp4",
    title: "Cloud Computing Excellence",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
  },
  {
    video: "/2792370-hd_1920_1080_30fps.mp4",
    title: "Digital Transformation",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
  },
  {
    video: "/6963744-hd_1920_1080_25fps.mp4",
    title: "Cybersecurity Solutions",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
  },
  {
    video: "/7253660-uhd_4096_2160_30fps.mp4",
    title: "AI & Data Intelligence",
    subtitle: "Infonexa",
    description: "Transforming Businesses with Modern IT Solutions",
  },
];

const stats = [
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "98%", label: "Success Rate" },
];

export function HeroVideoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const playVideo = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(newIndex);

      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }

      videoRefs.current.forEach((video, idx) => {
        if (video) {
          video.pause();
          if (idx !== newIndex) video.currentTime = 0;
        }
      });

      playVideo(newIndex);

      autoplayTimeoutRef.current = setTimeout(() => {
        emblaApi.scrollNext();
      }, 10000);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      if (autoplayTimeoutRef.current) clearTimeout(autoplayTimeoutRef.current);
    };
  }, [emblaApi, playVideo]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center"
            >
              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay={index === 0}
                muted
                playsInline
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4 drop-shadow-lg">
                      {slide.subtitle}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>

                    <p className="text-xl sm:text-2xl text-white mb-8 font-semibold drop-shadow-lg">
                      {slide.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
                      {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl md:text-4xl font-black text-white mb-1 drop-shadow-lg">
                            {stat.value}
                          </div>
                          <div className="text-sm text-white font-bold uppercase tracking-wider drop-shadow-lg">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 shadow-lg hover:scale-105 transition-transform font-bold"
                        asChild
                      >
                        <Link to="/contact">
                          Get Free Consultation
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-black/40 backdrop-blur-sm border-white/40 text-white hover:bg-black/60 hover:scale-105 transition-transform font-bold"
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
        {slides.map((_, index) => (
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
    </section>
  );
}
