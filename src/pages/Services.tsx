import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Cloud, Shield, BarChart3, Cpu, Code, Headphones, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations and reduce costs.",
    features: ["Cloud Migration", "Infrastructure Design", "Multi-cloud Strategy", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data and digital assets from evolving cyber threats.",
    features: ["Threat Assessment", "Security Audits", "Incident Response", "Compliance Management"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and business intelligence platforms.",
    features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage artificial intelligence and machine learning to automate processes and drive innovation.",
    features: ["Process Automation", "ML Solutions", "Chatbots & Virtual Assistants", "Predictive Maintenance"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions designed to meet your unique business requirements and goals.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
  },
  {
    icon: Headphones,
    title: "IT Support & Management",
    description: "24/7 technical support and managed services to keep your systems running smoothly and efficiently.",
    features: ["Help Desk Support", "Network Management", "System Monitoring", "Maintenance & Updates"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-32 lg:py-40 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The TechFlow Advantage
            </h2>
            <p className="text-muted-foreground text-lg">
              We combine technical expertise with a deep understanding of your business needs to deliver solutions that truly make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", description: "150+ certified professionals with deep industry expertise" },
              { title: "Proven Track Record", description: "500+ successful projects delivered across various industries" },
              { title: "24/7 Support", description: "Round-the-clock assistance to keep your business running" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can tailor our services to meet your specific business requirements.
          </p>
          <Button size="lg" variant="secondary" className="group" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;