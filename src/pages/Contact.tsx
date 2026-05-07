import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [respMessage, setRespMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setRespMessage(data.message);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <section className="bg-brand-bg py-24 border-b border-brand-primary/10">
        <div className="container mx-auto px-12 text-center max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-brand-accent">Reach Out</span>
          <h1 className="heading-xl text-brand-text mt-8 mb-12">Get In <br /> Touch</h1>
          <p className="text-sm uppercase tracking-widest text-brand-text/50 max-w-2xl mx-auto leading-loose">
            Have a question about our services or want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
               <div className="bg-brand-bg p-8 rounded-3xl border border-brand-secondary/10 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-accent">Our Location</h4>
                  <p className="text-brand-text/60 text-sm">2318 Judson Rd Ste C,<br />Longview, TX 75605</p>
               </div>
               <div className="bg-brand-bg p-8 rounded-3xl border border-brand-secondary/10 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-accent">Call Us</h4>
                  <p className="text-brand-text/60 text-sm hover:text-brand-primary transition-colors cursor-pointer">+1 903-238-9938</p>
               </div>
               <div className="bg-brand-bg p-8 rounded-3xl border border-brand-secondary/10 space-y-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-brand-accent">Email Support</h4>
                  <p className="text-brand-text/60 text-sm">hello@steelmagnolia.com</p>
               </div>
               
               <div className="flex space-x-4 pt-4">
                  <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-colors cursor-pointer">
                    <Instagram size={24} />
                  </div>
                  <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-primary transition-colors cursor-pointer">
                    <Facebook size={24} />
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-bg/50 p-12 rounded-[2rem] border-2 border-brand-secondary/20 text-center space-y-8"
                  >
                     <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white mx-auto shadow-xl">
                        <Send size={32} />
                     </div>
                     <h2 className="text-3xl font-serif font-bold text-brand-accent">Message Sent!</h2>
                     <p className="text-brand-text/70 text-lg">{respMessage}</p>
                     <button 
                       onClick={() => setIsSuccess(false)}
                       className="bg-brand-primary text-white px-12 py-5 rounded-full font-bold hover:bg-brand-accent transition-all"
                     >
                       Send Another Message
                     </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Your Name</label>
                        <input 
                          required
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          placeholder="Jane Doe"
                          className="w-full bg-brand-bg border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          placeholder="jane@example.com"
                          className="w-full bg-brand-bg border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Subject</label>
                      <input 
                        required
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        placeholder="Inquiry about bridal services"
                        className="w-full bg-brand-bg border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-text/40 ml-1">Message</label>
                      <textarea 
                        required
                        rows={6}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        placeholder="Your message here..."
                        className="w-full bg-brand-bg border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all text-brand-accent"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-primary w-full h-16 text-sm flex items-center justify-center space-x-4 shadow-none"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Send Message</span>
                          <MessageSquare size={16} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-[600px] w-full border-t border-brand-bg">
        <iframe 
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.328330761214!2d-94.75089852331584!3d32.530752573859664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636395ec1dabbb1%3A0xe54e3ed919e13d7e!2s2318%20Judson%20Rd%20Ste%20C%2C%20Longview%2C%20TX%2075605%2C%20USA!5e0!3m2!1sen!2suk!4v1715100000000!5m2!1sen!2suk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          className="grayscale"
        />
      </section>
    </div>
  );
}
