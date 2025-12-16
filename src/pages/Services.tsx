import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Cloud, Shield, BarChart3, Cpu, Code, Headphones, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    features: ["Cloud Migration", "Infrastructure Design", "Multi-cloud Strategy", "Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your data from evolving cyber threats.",
    features: ["Threat Assessment", "Security Audits", "Incident Response", "Compliance Management"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics platforms.",
    features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description: "Leverage artificial intelligence to automate processes and drive innovation.",
    features: ["Process Automation", "ML Solutions", "Chatbots", "Predictive Maintenance"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions designed to meet your unique business requirements.",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
  },
  {
    icon: Headphones,
    title: "IT Support",
    description: "24/7 technical support and managed services to keep your systems running smoothly.",
    features: ["Help Desk", "Network Management", "System Monitoring", "Maintenance"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <p className="text-blue-300 font-medium text-sm tracking-wider uppercase mb-4">
              What We Offer
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/70">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The TechFlow Advantage
            </h2>
            <p className="text-muted-foreground">
              We combine technical expertise with deep understanding of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { number: "150+", title: "Experts", description: "Certified professionals" },
              { number: "500+", title: "Projects", description: "Successfully delivered" },
              { number: "24/7", title: "Support", description: "Round-the-clock" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 bg-card rounded-xl border border-border">
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{item.number}</p>
                <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Let's discuss how we can tailor our services to meet your specific requirements.
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