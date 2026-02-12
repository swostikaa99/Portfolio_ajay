import React from "react";
import profile from "../../data/profile";
import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-xl md:text-3xl font-black text-[#0A2A66] mb-6 tracking-tighter uppercase">Professional Experience</h1>
          <div className="w-32 h-1 bg-accent mb-8"></div>
        </div>

        <div className="space-y-12 mb-10">
          {profile.experience.map((exp, index) => (
            <div key={index} className="relative pl-12 pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== profile.experience.length - 1 && (
                <div className="absolute left-[19px] top-[40px] bottom-0 w-0.5 bg-gray-100"></div>
              )}
              {/* Timeline Dot */}
              <div className="absolute left-0 top-[6px] w-10 h-10 bg-[#0A2A66] rounded-full flex items-center justify-center text-white ring-8 ring-gray-50">
                <Briefcase size={18} />
              </div>

              <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-[#0A2A66] tracking-tight">{exp.role}</h3>
                    <p className="text-xl font-bold text-gray-400">{exp.organization}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-bold text-[#0A2A66] shadow-sm">
                      <Calendar size={14} className="text-accent" /> {exp.period || "Current"}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <MapPin size={14} /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl">
                  {exp.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs">
                  <CheckCircle2 size={16} /> Verified Role
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-[#0A2A66] via-[#0A2A66] to-[#0d3580] text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        
        <div className="custom-container relative z-10">
          {/* Stylish Award Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:block z-0"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
              <img 
                src="/award.png" 
                alt="Award" 
                className="w-72 h-72 object-contain relative z-10 drop-shadow-2xl opacity-80"
              />
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <Sparkles size={18} className="text-accent fill-accent" />
                <span className="text-sm font-black uppercase tracking-[0.3em]">Let's Work Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
                Ready to Build Something <span className="text-accent">Extraordinary</span>?
              </h2>
              
              <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                Let's connect and explore how we can collaborate on innovative engineering solutions and impactful projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,107,53,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-10 py-5 bg-accent text-white font-black text-sm uppercase tracking-widest rounded-full shadow-2xl hover:shadow-accent/50 transition-all flex items-center gap-3"
                  >
                    Start A Conversation
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link to="/research">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/20 hover:border-white/40 transition-all"
                  >
                    View My Research
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Accent Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      </motion.section>
    </div>
  );
};

export default ExperiencePage;
