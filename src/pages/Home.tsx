import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle, Shield, Heart, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Artisan Hair Styling",
    desc: "From precision cuts to high-fashion styling for any occasion.",
    price: "45",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Dimensional Color",
    desc: "Balayage, highlights, and full transformations by master colorists.",
    price: "120",
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Luxury Nail Art",
    desc: "Bespoke hand-painted designs and precision gel applications.",
    price: "65",
    img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    text: "The best salon experience in Longview. My hair has never looked better, and the atmosphere is so relaxing.",
    rating: 5
  },
  {
    name: "Amanda Rivera",
    text: "Obsessed with my nails! The attention to detail is unmatched. I won't go anywhere else for my nail art.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    text: "A truly luxury feel from the moment you walk in. The stylists are professional and really listen to what you want.",
    rating: 5
  }
];

const gallery = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503107383181-0420790176cd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1527799822367-a233b47b41e5?auto=format&fit=crop&q=80&w=800"
];

const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "While we do our best to accommodate walk-ins, we highly recommend booking in advance to ensure your preferred time and specialist are available."
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours notice for cancellations. This allows us to offer the appointment time to other clients on our waiting list."
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes! We offer comprehensive hair and nail packages for brides and bridal parties. Contact us for a personalized consultation."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-brand-primary text-brand-bg py-2 px-4 text-center text-[10px] tracking-[0.2em] uppercase font-semibold z-50">
        Book Your Beauty Appointment Today • Premium Hair & Nail Services in Longview, TX
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-bg">
        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-5"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">
                Est. in Longview
              </span>
              <h1 className="heading-xl text-brand-text mb-8">
                Refining the <br /> Art of <span className="font-sans not-italic font-extralight block">Self-Care</span>
              </h1>
              <p className="text-sm leading-relaxed text-brand-text/60 mb-10 max-w-sm">
                A premium salon and spa sanctuary where modern techniques meet Southern hospitality. We specialize in luxury hair transformations and artisanal nail design.
              </p>
              
              <div className="flex items-center space-x-8">
                <Link 
                  to="/services" 
                  className="group relative cursor-pointer"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-brand-text pb-2 transition-all group-hover:pr-4">View Services</span>
                </Link>
                <div className="h-[1px] w-12 bg-brand-accent"></div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-brand-text/40">Starting at $45</span>
              </div>
            </motion.div>

            <div className="col-span-12 lg:col-span-7 bg-brand-secondary p-8 relative flex items-center min-h-[600px] rounded-3xl lg:rounded-none lg:-mr-12">
              <div className="grid grid-cols-2 gap-6 w-full h-full min-h-[500px]">
                <div className="col-span-1 row-span-2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-accent/10 z-10"></div>
                  <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Hair Treatment" />
                  <div className="absolute bottom-4 left-4 z-20 text-[9px] uppercase tracking-widest text-white font-bold">Color Expertise</div>
                </div>
                <div className="col-span-1 row-span-1 relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Nail Art" />
                  <div className="absolute top-4 right-4 z-20 text-[9px] uppercase tracking-widest text-white font-bold">Artisanal Nails</div>
                </div>
                <div className="col-span-1 row-span-1 flex flex-col space-y-6">
                  <div className="flex-1 bg-brand-bg p-6 flex flex-col justify-end border-l-4 border-brand-accent">
                     <span className="text-xs font-serif italic mb-2 text-brand-accent">Our Mission</span>
                     <p className="text-[10px] leading-relaxed uppercase tracking-wider font-semibold">
                       To empower every client through confidence and refined beauty.
                     </p>
                  </div>
                  <div className="h-1/3 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-30" alt="Salon Interior" />
                  </div>
                </div>
              </div>
              
              {/* Floating Quote */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 -left-12 bg-brand-primary text-brand-bg p-8 max-w-[240px] shadow-2xl z-30 hidden md:block"
              >
                <div className="text-3xl font-serif mb-2 leading-none">"</div>
                <p className="text-xs leading-relaxed opacity-90 mb-4 italic">
                  The best hair and nail experience I've had in East Texas. Sophisticated atmosphere and world-class stylists.
                </p>
                <span className="text-[9px] uppercase tracking-widest font-bold text-brand-accent">— Sarah Jenkins</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Stylist at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-secondary/30 rounded-2xl -z-10" />
              <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-brand-primary/20 rounded-2xl -z-10" />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent leading-tight">
                Crafting Personal Style with Precision & Heart
              </h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                At Steel Magnolia, we believe beauty isn't just about how you look—it's about how you feel. Our team of expert stylists and nail artists are dedicated to creating a bespoke experience that highlights your unique personality.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-accent text-xl">15+ Years</h4>
                  <p className="text-sm text-brand-text/60 uppercase tracking-widest">Collective Experience</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-brand-accent text-xl">5,000+</h4>
                  <p className="text-sm text-brand-text/60 uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center space-x-2 text-brand-primary font-bold hover:translate-x-2 transition-transform">
                <span>Discover Our Story</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs">Premium Care</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-4 mb-6">Our Signature Services</h2>
            <p className="text-brand-text/60">Using only the finest products to ensure your hair and nails stay healthy and vibrant.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-2 rounded-2xl overflow-hidden shadow-sm border border-brand-primary/5 flex flex-col group"
              >
                <div className="h-72 overflow-hidden relative rounded-xl">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-brand-primary text-brand-bg px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                    From ${service.price}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col text-center">
                  <h3 className="text-2xl font-serif italic text-brand-text mb-4 underline decoration-brand-accent decoration-1 underline-offset-4">{service.title}</h3>
                  <p className="text-[11px] uppercase tracking-widest leading-relaxed text-brand-text/50 font-medium mb-8 flex-1">
                    {service.desc}
                  </p>
                  <Link to="/booking" className="text-brand-accent font-bold text-[10px] uppercase tracking-[0.2em] border-t border-brand-bg pt-6 hover:opacity-70 transition-opacity">
                    Reserve Session
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link to="/services" className="btn-primary">
              View Service Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="w-full lg:w-1/2 space-y-10">
                <div className="space-y-4">
                  <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs">Excellence Guaranteed</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent leading-tight">What Makes Us <br /> The Preferred Choice</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <Star size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-brand-accent">Master Stylists</h4>
                    <p className="text-sm text-brand-text/60">Our team undergoes continuous training in the latest global trends.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <Shield size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-brand-accent">Hygienic Standards</h4>
                    <p className="text-sm text-brand-text/60">Strict sterilization protocols for your safety and peace of mind.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <Heart size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-brand-accent">Bespoke Care</h4>
                    <p className="text-sm text-brand-text/60">No two clients are the same. We tailor every treatment to your needs.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="font-bold text-lg text-brand-accent">Premium Products</h4>
                    <p className="text-sm text-brand-text/60">Exclusively using professional-grade, cruelty-free beauty lines.</p>
                  </div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 relative">
                <div className="bg-brand-secondary/10 rounded-[3rem] p-10 relative">
                   <img 
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1000" 
                    alt="Happy Client" 
                    className="rounded-[2rem] shadow-2xl relative z-10"
                   />
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary shadow-2xl rounded-full flex flex-col items-center justify-center text-white p-4 text-center z-20">
                      <Star fill="white" size={24} className="mb-2" />
                      <span className="text-xs font-bold uppercase tracking-tighter">Voted Best in Longview</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent">Client Love</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-brand-secondary/10 flex flex-col">
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#8C5E58" stroke="#8C5E58" className="mr-1" />
                  ))}
                </div>
                <div className="flex-1">
                  <Quote size={40} className="text-brand-secondary/20 mb-4" />
                  <p className="text-brand-text/80 italic leading-relaxed text-lg mb-6">"{t.text}"</p>
                </div>
                <h5 className="font-bold text-brand-accent">— {t.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
           <div className="bg-brand-primary p-12 md:p-24 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=2000" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 scale-105 group-hover:scale-100 transition-transform duration-1000" 
              />
              <div className="relative z-10 max-w-2xl mx-auto text-center space-y-10">
                <h2 className="text-4xl md:text-7xl font-serif italic text-brand-bg leading-tight">Ready for your transformation?</h2>
                <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-brand-accent">Excellence in every detail</p>
                <Link to="/booking" className="inline-block bg-brand-bg text-brand-primary px-12 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-secondary transition-all shadow-2xl">
                  Schedule Your Visit
                </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs underline decoration-brand-secondary decoration-4 underline-offset-8">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent mt-8">Bespoke Creations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            {gallery.map((img, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden aspect-square shadow-lg"
              >
                <img src={img} className="w-full h-full object-cover" alt="Gallery item" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-serif font-bold text-brand-accent text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
             {faqs.map((faq, i) => (
               <details key={i} className="group bg-white p-6 rounded-2xl shadow-sm border border-brand-secondary/10 cursor-pointer">
                 <summary className="font-bold text-brand-accent flex justify-between items-center list-none">
                    <span>{faq.q}</span>
                    <span className="transform group-open:rotate-180 transition-transform"><Star size={16} /></span>
                 </summary>
                 <p className="mt-4 text-brand-text/70 leading-relaxed pt-4 border-t border-brand-bg">
                   {faq.a}
                 </p>
               </details>
             ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-brand-secondary/20 relative">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.328330761214!2d-94.75089852331584!3d32.530752573859664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636395ec1dabbb1%3A0xe54e3ed919e13d7e!2s2318%20Judson%20Rd%20Ste%20C%2C%20Longview%2C%20TX%2075605%2C%20USA!5e0!3m2!1sen!2suk!4v1715100000000!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </section>
    </div>
  );
}
