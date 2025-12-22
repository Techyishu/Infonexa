import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    client: "TechCorp Inc.",
    description: "Migrated 500+ servers to AWS with zero downtime",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
    tech: ["AWS", "Docker", "Kubernetes"],
    metrics: "2x Faster Performance",
    costReduction: "40% Cost Reduction",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Platform",
    client: "DataFlow Systems",
    description: "Built real-time analytics dashboard with ML predictions",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "React"],
    metrics: "10M+ Data Points",
    costReduction: "60% Faster Insights",
  },
  {
    id: 3,
    title: "Cybersecurity Overhaul",
    client: "SecureBank",
    description: "Implemented zero-trust security architecture",
    thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
    tech: ["SIEM", "Firewall", "MFA"],
    metrics: "99.9% Uptime",
    costReduction: "Zero Breaches",
  },
  {
    id: 4,
    title: "Digital Transformation",
    client: "RetailMax",
    description: "Modernized legacy systems with microservices architecture",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    tech: ["Node.js", "PostgreSQL", "Redis"],
    metrics: "5x Scalability",
    costReduction: "50% Faster Deployment",
  },
  {
    id: 5,
    title: "DevOps Automation",
    client: "StartupXYZ",
    description: "CI/CD pipeline reducing deployment time by 90%",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    tech: ["Jenkins", "GitLab", "Terraform"],
    metrics: "90% Time Saved",
    costReduction: "Zero Manual Errors",
  },
  {
    id: 6,
    title: "Mobile App Development",
    client: "HealthTech Pro",
    description: "Cross-platform mobile app with 100K+ downloads",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    tech: ["React Native", "Firebase", "Stripe"],
    metrics: "4.8★ Rating",
    costReduction: "100K+ Users",
  },
];

export const FeaturedProjects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses with cutting-edge technology solutions
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-[0_0_calc(100%-2rem)] sm:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-1.5rem)] min-w-0"
                >
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden border-2 hover:border-primary/50">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardDescription className="text-sm font-medium text-primary/80">
                        {project.client}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg">
                        <div>
                          <div className="text-xs text-muted-foreground">Performance</div>
                          <div className="text-sm font-semibold text-primary">{project.metrics}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Impact</div>
                          <div className="text-sm font-semibold text-primary">{project.costReduction}</div>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full group/btn"
                        asChild
                      >
                        <Link to={`/projects/${project.id}`}>
                          View Case Study
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-background border-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-background border-2 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

