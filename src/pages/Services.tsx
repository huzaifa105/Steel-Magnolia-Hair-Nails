import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Scissors, Sparkles, Heart, Crown, Waves } from "lucide-react";

const categories = [
  {
    title: "Hair Services",
    icon: Scissors,
    services: [
      { name: "Consultation & Hair Analysis", price: "Free", duration: "15 min" },
      { name: "Precision Designer Cut", price: "45+", duration: "60 min" },
      { name: "Full Dimensional Balayage", price: "180+", duration: "180 min" },
      { name: "Modern Highlights (Half/Full)", price: "120+", duration: "150 min" },
      { name: "Luxury Deep Conditioning", price: "35+", duration: "30 min" },
      { name: "Formal Hair Styling & Updo", price: "75+", duration: "90 min" }
    ]
  },
  {
    title: "Nail Art & Care",
    icon: Sparkles,
    services: [
      { name: "Bespoke Hand Painted Art", price: "80+", duration: "120 min" },
      { name: "Sculpted Acrylic Enhancements", price: "95+", duration: "150 min" },
      { name: "Premium Gel Overlay", price: "65+", duration: "90 min" },
      { name: "Luxury Spa Pedicure", price: "55", duration: "60 min" },
      { name: "Botanical Manicure", price: "35", duration: "45 min" }
    ]
  },
  {
    title: "Bridal & Formal",
    icon: Crown,
    services: [
      { name: "Bridal Hair Trial", price: "95", duration: "90 min" },
      { name: "Bridal Day Styling", price: "150+", duration: "120 min" },
      { name: "Bridal Party Package", price: "Custom", duration: "-" },
      { name: "Bridesmaid Styling", price: "85", duration: "60 min" }
    ]
  },
  {
    title: "Spa & Treatment",
    icon: Waves,
    services: [
      { name: "Scalp Detox Massage", price: "45", duration: "45 min" },
      { name: "Keratin Smoothing Treatment", price: "250+", duration: "180 min" },
      { name: "Hair Color Toning/Refresh", price: "65", duration: "45 min" }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="bg-brand-bg py-24 border-b border-brand-primary/10">
        <div className="container mx-auto px-12 text-center max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent">Our Menu</span>
          <h1 className="heading-xl text-brand-text mt-8 mb-12">Signature <br /> Treatments</h1>
          <p className="text-sm uppercase tracking-widest text-brand-text/50 max-w-2xl mx-auto leading-loose">
            Curated beauty experiences using industry-leading products. Prices listed are starting estimates and may vary based on length and complexity.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
            {categories.map((cat, i) => (
              <div key={i} className="space-y-10 group">
                <div className="flex items-center space-x-4">
                   <div className="w-14 h-14 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      <cat.icon size={28} />
                   </div>
                   <h2 className="text-3xl font-serif font-bold text-brand-accent">{cat.title}</h2>
                </div>
                <div className="space-y-6">
                  {cat.services.map((s, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-end group/item">
                       <div className="flex-1 space-y-1">
                          <h4 className="font-bold text-brand-accent group-hover/item:text-brand-primary transition-colors">{s.name}</h4>
                          <p className="text-xs text-brand-text/40 tracking-widest uppercase">{s.duration}</p>
                       </div>
                       <div className="hidden sm:block flex-1 border-b border-dotted border-brand-secondary/40 mx-4" />
                       <div className="text-brand-primary font-bold whitespace-nowrap mt-2 sm:mt-0">
                          {s.price.startsWith('$') || s.price === 'Free' || s.price === 'Custom' ? s.price : `$${s.price}`}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-brand-accent text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-16 underline decoration-brand-primary decoration-4 underline-offset-8">Curated Beauty Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur text-left space-y-6">
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-serif font-bold">The Magnolia Glow</h3>
                   <span className="text-brand-secondary font-bold text-xl">$145</span>
                </div>
                <ul className="space-y-3 opacity-80 text-sm">
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Signature Haircut & Style</span>
                   </li>
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Luxury Scalp Treatment</span>
                   </li>
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Botanical Manicure</span>
                   </li>
                </ul>
                <Link to="/booking" className="block w-full text-center bg-white text-brand-accent py-4 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all">
                  Book This Package
                </Link>
             </div>
             
             <div className="bg-white text-brand-accent p-10 rounded-3xl shadow-2xl text-left space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-serif font-bold">Bridal Total Bliss</h3>
                   <span className="text-brand-primary font-bold text-xl">$295</span>
                </div>
                <ul className="space-y-3 opacity-80 text-sm">
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Formal Bridal Updo</span>
                   </li>
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Full Custom Gel Extensions</span>
                   </li>
                   <li className="flex items-center space-x-2">
                      <ArrowRight size={14} className="text-brand-primary" />
                      <span>Pedicure with Paraffin</span>
                   </li>
                </ul>
                <Link to="/booking" className="block w-full text-center bg-brand-primary text-white py-4 rounded-full font-bold hover:bg-brand-accent transition-all">
                  Book This Package
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-brand-accent mb-8">Not sure which treatment is right for you?</h2>
          <Link to="/contact" className="text-brand-primary font-bold underline underline-offset-8 decoration-2 decoration-brand-secondary hover:decoration-brand-primary transition-all">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
