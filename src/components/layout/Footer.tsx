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
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/WhatsApp_Image_2025-12-25_at_14.56.43-removebg-preview.png"
                alt="Infonexa logo"
                className="h-32 sm:h-40 lg:h-48 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 mb-6 max-w-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into reality through innovation and expertise.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@infonexa.in"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@infonexa.in</span>
              </a>
              <a
                href="mailto:bhawesh.kumar@infonexa.in"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <span>bhawesh.kumar@infonexa.in</span>
              </a>
              <a
                href="tel:9354146137"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>9354146137</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Karolbagh, New Delhi</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Services</h4>
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
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">Solutions</h4>
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
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Infonexa. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors border border-blue-700/50"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5 text-blue-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};