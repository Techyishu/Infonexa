import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Target, Eye, Lightbulb, Users, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, treating their challenges as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We focus on creating measurable difference for our clients.",
  },
];

const timeline = [
  { year: "2009", title: "Founded", description: "Started with 5 passionate technologists" },
  { year: "2013", title: "First Major Client", description: "Secured Fortune 500 partnership" },
  { year: "2017", title: "Global Expansion", description: "Opened offices in Europe and Asia" },
  { year: "2020", title: "Cloud Pioneer", description: "Multi-cloud solutions provider" },
  { year: "2024", title: "Industry Leader", description: "Top IT services company globally" },
];

const About = () => {
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
              Who We Are
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About TechFlow
            </h1>
            <p className="text-lg text-white/70">
              Empowering businesses through technology since 2009. We're passionate about transforming ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Building the Future of Technology
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, TechFlow began with a simple mission: to help businesses harness the power of technology. What started as a small team of five passionate technologists has grown into a global company serving clients across 40+ countries.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of digital transformation, helping organizations of all sizes navigate the complexities of modern technology landscapes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Mission</h3>
                    <p className="text-xs text-muted-foreground">Empower with innovative solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">Vision</h3>
                    <p className="text-xs text-muted-foreground">Most trusted tech partner globally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl -z-10 hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Our Values
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our core values shape every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-5 lg:p-6 text-center border border-border hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Milestones
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
              
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-4 sm:gap-6 mb-6 last:mb-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                    {item.year.slice(2)}
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-4 border border-border">
                    <p className="text-xs text-primary font-semibold mb-1">{item.year}</p>
                    <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Meet the talented team behind our success.
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