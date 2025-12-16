import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "David Mitchell",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Visionary leader with 25+ years in technology. David founded TechFlow with a mission to democratize enterprise technology.",
  },
  {
    name: "Jennifer Park",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Former Google engineer leading our technical strategy. Jennifer drives innovation across all our solution offerings.",
  },
  {
    name: "Marcus Thompson",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Operations expert ensuring seamless delivery. Marcus has scaled operations across 40+ countries.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "Director of Engineering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Cloud Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Watson",
    role: "Director of Security",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Kim",
    role: "Head of AI & ML",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lisa Anderson",
    role: "Director of Client Success",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Brown",
    role: "Head of DevOps",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const Team = () => {
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
              Our Team
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Meet the talented individuals who make TechFlow exceptional. Our diverse team brings together expertise from across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Executive Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Experienced leaders driving our vision forward with decades of combined industry expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                        <Linkedin className="w-5 h-5 text-primary-foreground" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                        <Twitter className="w-5 h-5 text-primary-foreground" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 lg:py-32 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Department Heads
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key Players
            </h2>
            <p className="text-muted-foreground text-lg">
              Our department leaders bring specialized expertise and passion to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
                <p className="text-muted-foreground text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Life at TechFlow
              </h2>
              <p className="text-muted-foreground mb-6">
                We believe in fostering an environment where innovation thrives and every voice matters. Our culture is built on collaboration, continuous learning, and a shared passion for technology.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Flexible work arrangements",
                  "Continuous learning & development",
                  "Inclusive & diverse workplace",
                  "Regular team events & retreats",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/contact">
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                alt="Office environment"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
                alt="Team meeting"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                alt="Team discussion"
                className="rounded-2xl w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us or join our team, we'd love to hear from you.
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

export default Team;