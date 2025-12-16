import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their challenges as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to customer service.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We focus on creating solutions that make a real, measurable difference for our clients.",
  },
];

const timeline = [
  { year: "2009", title: "Founded", description: "Started with a small team of 5 passionate technologists" },
  { year: "2013", title: "First Major Client", description: "Secured our first Fortune 500 partnership" },
  { year: "2017", title: "Global Expansion", description: "Opened offices in Europe and Asia" },
  { year: "2020", title: "Cloud Pioneer", description: "Became a certified multi-cloud solutions provider" },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top IT services company globally" },
];

const About = () => {
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
              About TechFlow
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Empowering businesses through technology since 2009. We're passionate about transforming ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 hero-gradient rounded-2xl -z-10" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2009, TechFlow began with a simple mission: to help businesses harness the power of technology. What started as a small team of five passionate technologists has grown into a global company serving clients across 40+ countries.
              </p>
              <p className="text-muted-foreground mb-8">
                Today, we're proud to be at the forefront of digital transformation, helping organizations of all sizes navigate the complexities of modern technology landscapes. Our success is measured not just by our growth, but by the success we create for our clients.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">To empower businesses with innovative technology solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">To be the most trusted technology partner globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold shrink-0">
                    {item.year.slice(2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-primary font-semibold mb-1">{item.year}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Want to Learn More?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Meet the talented team behind our success and discover what makes TechFlow different.
          </p>
          <Button size="lg" variant="secondary" className="group" asChild>
            <Link to="/team">
              Meet Our Team
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;