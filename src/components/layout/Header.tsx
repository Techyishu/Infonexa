import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-blue-700 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl py-1 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2025-12-25_at_14.56.43-removebg-preview.png"
              alt="Infonexa logo"
              className="h-32 sm:h-40 lg:h-48 w-auto object-contain brightness-0 invert -my-8 sm:-my-10 lg:-my-12"
            />
            <span className="sr-only">Infonexa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-semibold text-white hover:text-blue-200 transition-colors"
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
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Simple Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-24 sm:top-28 left-0 right-0 z-40 border-b border-blue-700 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl py-6 flex flex-col gap-3">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg py-1.5 text-white hover:text-blue-200"
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