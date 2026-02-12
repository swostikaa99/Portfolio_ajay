import React from "react";
import profile from "../../data/profile";
import { Trophy, Star, ShieldCheck, Users, Rocket, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AwardsPage = () => {
  return (
    <div className="pt-32 pb-0 bg-gradient-to-b from-white via-gray-50 to-[#0A2A66] min-h-screen">
      <div className="custom-container">
        {/* Hero Section - Astonishing Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-accent"
            />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Excellence Portfolio</span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-accent"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0A2A66] mb-6 tracking-tighter uppercase leading-none">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#0A2A66]">Recognition</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive showcase of distinctions, honors, and leadership milestones throughout my engineering career.
          </p>
        </motion.div>

        {/* Awards Timeline Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <Sparkles className="text-accent fill-accent" size={24} />
            <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter">Honors Timeline</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Animated Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-gray-200 to-transparent -translate-x-1/2 hidden md:block origin-top"
            />
            
            <div className="space-y-20">
              {profile.awards.map((award, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-accent rounded-2xl z-10 hidden md:flex items-center justify-center group shadow-lg hover:shadow-2xl transition-all"
                  >
                    <Trophy size={24} className="text-accent group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>

                  <div className="w-full md:w-[45%]">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -8 }}
                      className={`p-10 bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all relative group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    >
                      {/* Corner Accents */}
                      <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-gray-100 group-hover:border-accent/40 transition-colors"></div>
                      <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-gray-100 group-hover:border-accent/40 transition-colors"></div>

                      <div className={`inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent/5 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Star size={14} className="text-accent fill-accent" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">{award.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-[#0A2A66] mb-4 leading-tight group-hover:text-accent transition-colors">{award.title}</h3>
                      
                      <div className={`flex items-center gap-2 text-gray-400 text-sm font-bold ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <ShieldCheck size={16} className="text-accent" />
                        <span>Official Recognition</span>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-20"
          >
            <Rocket className="text-accent" size={24} />
            <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter">Leadership Journey</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative flex flex-col p-10 bg-blue-50/50 rounded-[48px] border border-blue-100/50 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all overflow-hidden"
              >
                {/* Background Gradient Glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all">
                    {index % 2 === 0 ? <Rocket size={36} className="text-accent" /> : <Users size={36} className="text-accent" />}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">{item.period}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#0A2A66] mb-4 leading-tight group-hover:text-accent transition-colors">{item.role}</h3>
                  <p className="text-base font-bold text-gray-500 group-hover:text-gray-700 transition-colors mb-8">
                    {item.project}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-100 text-gray-400 group-hover:text-accent transition-colors">
                    <Lightbulb size={18} />
                    <span className="text-xs font-black uppercase tracking-widest">Initiative Lead</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <Sparkles size={18} className="text-accent fill-accent" />
                <span className="text-sm font-black uppercase tracking-[0.3em]">Let's Collaborate</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-tight">
                Ready to Build Something <span className="text-accent">Extraordinary</span>?
              </h2>
              
              <p className="text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                Let's connect and explore how we can collaborate on innovative engineering solutions and academic research.
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

export default AwardsPage;
