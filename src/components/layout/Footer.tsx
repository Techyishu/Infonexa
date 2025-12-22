import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/contact" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Cloud Solutions", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
    { name: "Data Analytics", href: "/services" },
    { name: "IT Consulting", href: "/services" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <span className="text-2xl font-bold tracking-wide">Infonexa</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into reality through innovation and expertise.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@infonexa.in"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@infonexa.in</span>
              </a>
              <a
                href="mailto:bhawesh.kumar@infonexa.in"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>bhawesh.kumar@infonexa.in</span>
              </a>
              <a
                href="tel:9354146137"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>9354146137</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>Karolbagh, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "AI & Data Analytics",
                "Digital Acceleration",
                "Application Modernization",
                "Database Modernization",
                "Infrastructure Modernization",
                "Cybersecurity",
                "Site Reliability Services",
                "Automation",
                "Staffing & IT Consulting",
              ].map((name) => (
                <li key={name}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {[
                "Robotic Process Automation",
                "Data & AI",
                "Cloud & DevOps",
                "Snowflake & Informatica",
                "ServiceNow",
                "ERP",
                "CRM",
                "Adobe Experience Manager",
                "Optimizely",
              ].map((name) => (
                <li key={name}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Infonexa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};