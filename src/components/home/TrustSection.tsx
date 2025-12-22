import { StatsCounter } from "./StatsCounter";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

const clientLogos = [
  { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
];

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "M+", label: "Revenue Generated" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
];

export const TrustSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-background dark:from-slate-900 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos Carousel */}
        <div className="mb-16 animate-fade-in-up">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-12">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex-[0_0_200px] min-w-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain w-full"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to text if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.logo-text')) {
                        const textDiv = document.createElement('div');
                        textDiv.className = 'logo-text text-lg font-semibold text-muted-foreground whitespace-nowrap';
                        textDiv.textContent = client.name;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clientLogos.map((client, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-[0_0_200px] min-w-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain w-full"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to text if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.logo-text')) {
                        const textDiv = document.createElement('div');
                        textDiv.className = 'logo-text text-lg font-semibold text-muted-foreground whitespace-nowrap';
                        textDiv.textContent = client.name;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

