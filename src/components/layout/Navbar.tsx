import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Booking", path: "/booking" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass py-3 shadow-sm" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-baseline space-x-1">
          <span className="text-2xl font-serif italic tracking-tighter text-brand-text">
            Steel
          </span>
          <span className="text-2xl font-light uppercase tracking-[0.15em] text-brand-text ml-1">
            Magnolia
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "transition-opacity hover:opacity-100",
                location.pathname === link.path ? "opacity-100 border-b border-brand-primary" : "opacity-60"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="btn-primary"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="lg:hidden p-2 text-brand-text"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-secondary/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium py-2",
                    location.pathname === link.path ? "text-brand-primary" : "text-brand-text"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-4">
                <Link
                  to="/booking"
                  className="btn-primary text-center"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+19032389938"
                  className="flex items-center justify-center space-x-2 text-brand-primary text-[11px] uppercase tracking-widest font-bold py-2"
                >
                  <Phone size={14} />
                  <span>903-238-9938</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
