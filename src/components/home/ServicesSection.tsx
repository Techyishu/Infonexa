import { Link } from "react-router-dom";
import { Cloud, Shield, BarChart3, Cpu, Code, Headphones, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data and digital assets from threats.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics platforms.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage artificial intelligence to automate processes and drive innovation.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions designed to meet your unique business requirements.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "24/7 technical support and managed services to keep your systems running smoothly.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From cloud infrastructure to cybersecurity, we provide end-to-end technology solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};