import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg text-brand-text/60 pt-24 pb-12 border-t border-brand-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-[11px] uppercase tracking-[0.15em]">
          <div className="space-y-8">
            <Link to="/" className="flex items-baseline space-x-1">
              <span className="text-2xl font-serif italic tracking-tighter text-brand-text">
                Steel
              </span>
              <span className="text-2xl font-light uppercase tracking-[0.15em] ml-1 text-brand-text">
                Magnolia
              </span>
            </Link>
            <p className="normal-case text-sm leading-relaxed max-w-xs opacity-70">
              A premium salon and spa sanctuary where modern techniques meet Southern hospitality.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-brand-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-brand-accent transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-8 tracking-[0.25em]">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/booking" className="hover:text-brand-accent transition-colors">Booking</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-8 tracking-[0.25em]">Opening Hours</h4>
            <ul className="space-y-4 font-semibold text-brand-text">
              <li>Tue - Sat: 9am - 7pm</li>
              <li>Sun: By Appointment</li>
              <li>Mon: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text font-bold mb-8 tracking-[0.25em]">Contact</h4>
            <ul className="space-y-5">
              <li className="normal-case text-sm">2318 Judson Rd Ste C,<br />Longview, TX 75605</li>
              <li>+1 903-238-9938</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] uppercase opacity-40">
          <p>&copy; {currentYear} Steel Magnolia Hair & Nails.</p>
          <p className="mt-4 md:mt-0 font-bold">Developed by Serwizen.</p>
        </div>
      </div>
    </footer>
  );
}
