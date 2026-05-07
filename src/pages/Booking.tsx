import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, ArrowRight } from "lucide-react";

export default function Booking() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Hair Styling & Cut",
    "Dimensional Color",
    "Bridal Package",
    "Nail Art (Gel)",
    "Acrylic Extensions",
    "Spa Pedicure",
    "Special Consultation"
  ];

  return (
    <div className="pt-20 min-h-screen bg-brand-bg">
      <section className="bg-brand-primary text-brand-bg py-32 relative overflow-hidden">
        <div className="container mx-auto px-12 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Book Your <br /> Visit</h1>
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-brand-accent">Excellence in every reservation</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Side */}
            <div className="lg:w-1/3 space-y-8">
              <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent">Self-Care Reservation</span>
              <h2 className="text-4xl font-serif italic text-brand-text mb-6 leading-tight">Southern Hospitality</h2>
              <p className="text-brand-text/70 leading-relaxed text-sm">
                Step into a world of elegance. Select your preferred service and time, and we'll handle the rest.
              </p>
              
              <div className="space-y-6 pt-10">
                <div className="flex items-center space-x-4">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm border border-brand-primary/5">
                      <Clock size={16} />
                   </div>
                   <div>
                      <h4 className="font-bold text-[10px] uppercase tracking-widest text-brand-text">Best Availability</h4>
                      <p className="text-[10px] text-brand-text/40 uppercase">Tue–Sat • 9am–7pm</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-12 rounded-[2rem] shadow-xl border border-brand-secondary/20 text-center space-y-8"
                  >
                     <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mx-auto">
                        <CheckCircle size={48} />
                     </div>
                     <h2 className="text-3xl font-serif font-bold text-brand-accent">Request Received!</h2>
                     <p className="text-brand-text/70 text-lg leading-relaxed">{message}</p>
                     <button 
                       onClick={() => setIsSuccess(false)}
                       className="bg-brand-primary text-white px-12 py-5 rounded-full font-bold hover:bg-brand-accent transition-all"
                     >
                       Make Another Booking
                     </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-brand-secondary/20 space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Full Name</label>
                          <div className="relative">
                            <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />
                            <input 
                              required
                              type="text"
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              placeholder="First & Last Name"
                              className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                            />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Email Address</label>
                          <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />
                            <input 
                              required
                              type="email"
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              placeholder="your@email.com"
                              className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                            />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />
                            <input 
                              required
                              type="tel"
                              value={formState.phone}
                              onChange={(e) => setFormState({...formState, phone: e.target.value})}
                              placeholder="(903) 000-0000"
                              className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                            />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Service Type</label>
                          <select 
                            required
                            value={formState.service}
                            onChange={(e) => setFormState({...formState, service: e.target.value})}
                            className="w-full bg-brand-bg border-none rounded-2xl py-4 px-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent appearance-none"
                          >
                            <option value="">Select Service</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Preferred Date</label>
                          <div className="relative">
                            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />
                            <input 
                              required
                              type="date"
                              value={formState.date}
                              onChange={(e) => setFormState({...formState, date: e.target.value})}
                              className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                            />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Preferred Time</label>
                          <div className="relative">
                            <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary" />
                            <input 
                              required
                              type="time"
                              value={formState.time}
                              onChange={(e) => setFormState({...formState, time: e.target.value})}
                              className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                            />
                          </div>
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Additional Notes (Optional)</label>
                        <div className="relative">
                          <FileText size={18} className="absolute left-4 top-6 text-brand-primary" />
                          <textarea 
                            rows={4}
                            value={formState.notes}
                            onChange={(e) => setFormState({...formState, notes: e.target.value})}
                            placeholder="Please tell us if you have any special requirements or if it's for a special event."
                            className="w-full bg-brand-bg border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                          />
                        </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full h-16 text-sm flex items-center justify-center space-x-4 rounded-none shadow-none"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Request appointment</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-brand-text/40 uppercase tracking-widest">
                      Your privacy is safe with us. We only use your data to manage your booking.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
