import React from "react";
import profile from "../../data/profile";
import { Mail, Phone, MapPin, Linkedin, GraduationCap, Send, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-32 pb-32 bg-white min-h-screen relative overflow-hidden">
      {/* Background Engineering Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0A2A66 1px, transparent 1px), linear-gradient(90deg, #0A2A66 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="custom-container relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Contact Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2A66] tracking-tighter uppercase leading-none mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2A66] to-accent">Collaborate</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-medium">
            Open for research partnerships, academic discourse, and innovative engineering solutions. Let's bridge the gap between theory and practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-12"
          >
            {[
              { 
                icon: <Mail size={24} />, 
                label: "Electronic Mail", 
                value: profile.contact.email, 
                href: `mailto:${profile.contact.email}`,
                color: "text-blue-600"
              },
              { 
                icon: <Phone size={24} />, 
                label: "Direct Contact", 
                value: profile.contact.phone, 
                href: `tel:${profile.contact.phone}`,
                color: "text-indigo-600"
              },
              { 
                icon: <MapPin size={24} />, 
                label: "Official Base", 
                value: profile.contact.location, 
                href: null,
                color: "text-slate-700"
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group flex items-start gap-8 p-6 rounded-[32px] hover:bg-gray-50 transition-all duration-300">
                <div className={`p-5 bg-white shadow-xl shadow-gray-200 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 mb-2">{item.label}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-xl font-black text-[#0A2A66] hover:text-accent transition-colors tracking-tighter">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-2xl font-black text-[#0A2A66] tracking-tighter">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Connection Cards */}
            <motion.div variants={itemVariants} className="pt-12 border-t border-gray-100">
               <h3 className="text-[11px] font-black text-[#0A2A66]/30 uppercase tracking-[0.5em] mb-10">Digital Presence Hub</h3>
               <div className="grid grid-cols-2 gap-4">
                  <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" 
                     className="flex flex-col gap-4 p-8 bg-gray-50 rounded-[40px] hover:bg-[#0A2A66] group transition-all duration-500">
                     <Linkedin size={24} className="text-[#0A2A66] group-hover:text-white transition-colors" />
                     <span className="font-black text-[#0A2A66] group-hover:text-white uppercase tracking-widest text-xs">LinkedIn</span>
                  </a>
                  <a href={profile.contact.googleScholar} target="_blank" rel="noreferrer" 
                     className="flex flex-col gap-4 p-8 bg-gray-50 rounded-[40px] hover:bg-accent group transition-all duration-500">
                     <GraduationCap size={24} className="text-[#0A2A66] group-hover:text-white transition-colors" />
                     <span className="font-black text-[#0A2A66] group-hover:text-white uppercase tracking-widest text-xs">Scholar</span>
                  </a>
               </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 relative"
          >
            {/* Form Decorative Element */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10"></div>
            
            <div className="p-12 bg-white rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group">
               {/* Animated Focus Border */}
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A2A66] via-accent to-[#0A2A66] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

               <div className="flex items-center gap-4 mb-12">
                  <div className="p-4 bg-gray-50 rounded-2xl text-accent">
                    <MessageCircle size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter">Contact Me <br/> <span className="text-gray-300">Here</span></h2>
               </div>

               <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#0A2A66]/30 uppercase tracking-[0.3em] ml-2">Operator Identity</label>
                      <input type="text" placeholder="Your Name" 
                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-[#0A2A66] focus:bg-white rounded-3xl transition-all duration-300 font-bold text-[#0A2A66] outline-none" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#0A2A66]/30 uppercase tracking-[0.3em] ml-2">Subject Header</label>
                      <input type="text" placeholder="Topic of Interest" 
                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent focus:border-[#0A2A66] focus:bg-white rounded-3xl transition-all duration-300 font-bold text-[#0A2A66] outline-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-[#0A2A66]/30 uppercase tracking-[0.3em] ml-2">Message Payload</label>
                    <textarea rows="6" placeholder="Project details or inquiry..." 
                      className="w-full px-8 py-6 bg-gray-50 border-2 border-transparent focus:border-[#0A2A66] focus:bg-white rounded-3xl transition-all duration-300 font-bold text-[#0A2A66] outline-none resize-none"></textarea>
                  </div>

                  <button type="submit" className="group relative w-full inline-flex items-center justify-center gap-4 px-12 py-6 bg-[#0A2A66] hover:bg-black text-white rounded-[28px] font-black uppercase tracking-[0.4em] text-xs transition-all duration-300 shadow-2xl shadow-blue-900/10 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-4">
                      Deploy Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
               </form>

               {/* Design synergy annotations */}
               <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-gray-200">Ref: COMMS-99</span>
                  <div className="flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent/20"></div>)}
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blueprint background annotations */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-5 hidden lg:block rotate-90 origin-left">
        <Sparkles size={400} className="text-[#0A2A66]" />
      </div>
    </div>
  );
};

export default ContactPage;
