import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-primary text-brand-bg py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl"
          >
            <h1 className="heading-xl mb-6">The Steel <br /> Magnolia Story</h1>
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-brand-accent">Est. 2012 in Longview, TX</p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-xs underline underline-offset-8 decoration-4 decoration-brand-secondary">Our Mission</span>
              <h2 className="text-4xl font-serif font-bold text-brand-accent leading-tight">Southern Hospitality Meets Modern Mastery</h2>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Founded with the vision of creating a salon that feels like a home, Steel Magnolia represents the strength and beauty of the modern Texan woman. We aren't just here to provide a service; we are here to celebrate your individuality.
              </p>
              <p className="text-brand-text/70 text-lg leading-relaxed">
                Our name reflects our philosophy: bold, resilient, and undeniably elegant. Just like the magnolia flower, we believe in blossoming with grace and leaving a lasting impression.
              </p>
              <div className="flex items-center space-x-6 py-6 border-y border-brand-bg">
                <div className="text-center">
                   <h4 className="text-3xl font-serif font-bold text-brand-primary">2012</h4>
                   <p className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mt-1">Established</p>
                </div>
                <div className="w-px h-12 bg-brand-secondary/30" />
                <div className="text-center">
                   <h4 className="text-3xl font-serif font-bold text-brand-primary">100%</h4>
                   <p className="text-[10px] uppercase tracking-widest text-brand-text/50 font-bold mt-1">Quality Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1527799822367-a233b47b41e5?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl aspect-[3/4] object-cover" />
                <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl aspect-square object-cover" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl aspect-square object-cover" />
                <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-xl aspect-[3/4] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-brand-accent mb-6">Why Clients Trust Us</h2>
            <p className="text-brand-text/60">Our commitment to excellence extends beyond the stylist chair.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Continuous Education", desc: "Our team regularly attends global beauty summits to master new techniques." },
              { title: "Clean Beauty", desc: "We select products that are as kind to your body as they are effective." },
              { title: "Inclusive Environment", desc: "A welcoming space where everyone can feel their most beautiful self." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-brand-primary border border-brand-secondary/20">
                   <Star size={24} />
                </div>
                <h4 className="text-xl font-bold text-brand-accent">{v.title}</h4>
                <p className="text-brand-text/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center space-y-10">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-accent">Meet Your Beauty Partners</h2>
           <p className="max-w-2xl mx-auto text-lg text-brand-text/60">
             Our stylists aren't just professionals—they're artists who are passionate about their craft and your satisfaction.
           </p>
           <Link to="/booking" className="inline-block bg-brand-primary text-white px-12 py-5 rounded-full font-bold hover:bg-brand-accent transition-all shadow-xl">
             Book with a Specialist
           </Link>
        </div>
      </section>
    </div>
  );
}
