import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2025-12-16_at_22.56.21-removebg-preview.png"
              alt="Infonexa logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
            />
            <span className="sr-only">Infonexa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-semibold text-foreground hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {/* Simple Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b bg-background">
          <div className="container mx-auto px-4 pb-4 flex flex-col gap-3">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg py-1.5 text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <Button asChild className="w-full mt-2">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};