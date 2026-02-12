import React from "react";
import Hero from "../components/Hero";
import profile from "../data/profile";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, GraduationCap, Globe, Fingerprint } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Academic Profile - Redesigned as a Technical Identity Portal */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden group/section">
        {/* Schematic Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#0A2A66 1px, transparent 1px), linear-gradient(90deg, #0A2A66 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Blueprint Decorative Elements */}
        <div className="absolute top-10 left-10 text-[10px] font-mono text-[#0A2A66]/10 uppercase tracking-[0.2em] hidden lg:block">
          SEC: PROFILE_V2.0 // IDENT: SYSTEM_ACTIVATE
        </div>

        <div className="custom-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Mission & Manifesto */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-accent"></div>
                  <span className="text-sm font-black uppercase tracking-[0.4em] text-accent">Academic Snapshot</span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-black text-[#0A2A66] mb-10 uppercase tracking-tighter leading-tight">
                  WHO {" "} 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2A66] to-accent">AM I ?</span>
                </h2>

                <div className="relative">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-12 relative overflow-hidden group">
                    <span className="relative z-10">{profile.aboutSummary}</span>
                    {/* Scanning Line Effect */}
                    <motion.div 
                      animate={{ top: ["-100%", "200%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-20 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-0"
                    />
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link 
                    to="/about" 
                    className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#0A2A66] hover:bg-black text-white rounded-full font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 shadow-xl shadow-blue-900/10 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Explore Full Profile <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </Link>

                  <div className="hidden sm:flex items-center gap-3 text-gray-300 font-mono text-[10px] uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    System Validated
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Technical Identity Card */}
            <div className="lg:col-span-1 border-l border-dashed border-gray-100 hidden lg:block h-64 mx-auto"></div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-4"
            >
              <div className="relative group/card">
                {/* Card Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-blue-500 rounded-[48px] opacity-0 group-hover/card:opacity-10 transition duration-1000 blur-2xl"></div>
                
                <div className="relative bg-white border border-gray-100 p-10 rounded-[44px] shadow-[0_40px_80px_rgba(0,0,0,0.03)] overflow-hidden">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-gray-50 rounded-2xl text-[#0A2A66]">
                      <Fingerprint size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">ID Status</div>
                      <div className="text-[10px] font-black text-accent uppercase tracking-tighter">AUTHENTICATED</div>
                    </div>
                  </div>

                  {/* Identity Stats */}
                  <div className="space-y-8">
                    {[
                      { label: "Research Expertise", value: 94, color: "bg-accent" },
                      { label: "Project Integrity", value: 98, color: "bg-[#0A2A66]" },
                      { label: "Publication Impact", value: 89, color: "bg-blue-400" }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between items-end text-[10px] font-black text-[#0A2A66] uppercase tracking-widest">
                          <span>{stat.label}</span>
                          <span className="text-gray-300">{stat.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${stat.value}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + (i * 0.1) }}
                            className={`h-full ${stat.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-gray-50 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Citations</div>
                      <div className="text-xl font-black text-[#0A2A66]">150+</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">H-Index</div>
                      <div className="text-xl font-black text-[#0A2A66]">8</div>
                    </div>
                  </div>

                  {/* Decorative Scanline for Card */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>
                </div>

                {/* Satellite Technical Markers */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-accent/20 rounded-tr-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#0A2A66]/20 rounded-bl-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Research - Redesigned as an Astonishing Gallery */}
      <section className="py-24 bg-[#0A2A66]/[0.02] relative overflow-hidden">
        {/* Visual Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="custom-container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-accent"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Knowledge Base</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0A2A66] uppercase tracking-tighter">Featured Research</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/research" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#0A2A66]/40 hover:text-[#0A2A66] transition-all">
                Access All Archives <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {profile.featuredResearch.map((paper, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col h-full bg-white border border-gray-100 rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:border-accent/30 transition-all duration-500"
              >
                {/* Technical Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-transparent group-hover:border-accent/20 rounded-tr-[32px] transition-colors duration-500"></div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 bg-gray-50 text-[10px] font-mono font-black text-[#0A2A66]/40 uppercase tracking-widest rounded-full">
                      REF: {paper.year} // {paper.journal.split(' ')[0]}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2A66] mb-4 leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">
                    {paper.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <Link 
                    to="/research" 
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0A2A66] hover:text-accent group/link flex-none"
                  >
                    Examine Abstract 
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Milestones - Redesigned with Glassmorphism and Schematic Style */}
      <section className="py-24 bg-[#0A2A66] text-white relative overflow-hidden">
        {/* Schematic Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="custom-container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, title: "Dean’s List Award", desc: "Academic Excellence", id:"001" },
              { icon: Award, title: "Geo-Tech Award", desc: "Research Recognition", id:"002" },
              { icon: BookOpen, title: "5 Textbooks Authored", desc: "Academic Contribution", id:"003" },
              { icon: Globe, title: "Full Scholarship", desc: "Merit-Based", id:"004" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden hover:bg-white/10 hover:border-accent/40 transition-all duration-500"
              >
                {/* Visual Anchor Crosshair */}
                <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-white/20 group-hover:border-accent/50 transition-colors"></div>
                <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 group-hover:border-accent/50 transition-colors"></div>
                
                {/* ID Tag */}
                <div className="absolute top-8 right-8">
                  <span className="text-[8px] font-mono font-bold text-white/20 uppercase tracking-widest">{item.id}</span>
                </div>

                <div className="relative z-10 text-center flex flex-col h-full items-center">
                  <div className="relative mb-8">
                    {/* Icon Glow Hub */}
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-500">
                      <item.icon className="text-accent" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">{item.desc}</p>
                  
                  {/* Technical Progress Line */}
                  <div className="mt-8 w-12 h-0.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-accent transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned for High Impact and Technical Style */}
      <section className="pt-20 pb-10 bg-white relative overflow-hidden group">
        {/* Subtle Schematic Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#0A2A66 1px, transparent 1px), linear-gradient(90deg, #0A2A66 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        </div>
        
        <div className="custom-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content: Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1 bg-accent"></div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Collaboration Opportunity</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#0A2A66] mb-8 leading-[1.1] tracking-tighter uppercase">
                Ready to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2A66] to-accent">Innovate Together?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-12 max-w-xl leading-relaxed font-medium">
                I am actively seeking research collaborations, PhD opportunities, and academic partnerships focused on Sustainable Infrastructure and AI-driven Engineering.
              </p>
              
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#0A2A66] hover:bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-sm transition-all duration-300 shadow-[0_20px_50px_rgba(10,42,102,0.15)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Initialize Contact <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </Link>

              {/* Technical Ref Tag */}
              <div className="mt-12 flex items-center gap-4 opacity-10">
                <span className="text-[10px] font-mono font-black text-[#0A2A66]">CTX: COLLAB_REFL_2024</span>
                <div className="flex-1 h-px bg-[#0A2A66]"></div>
              </div>
            </motion.div>

            {/* Right Content: Research Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Image Glow Effect */}
              <div className="absolute -inset-4 bg-accent/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Technical Container Frame */}
              <div className="relative p-3 bg-white border border-gray-100 rounded-[40px] shadow-[0_50px_120px_rgba(0,0,0,0.06)] overflow-hidden">
                <img 
                  src="/research.png" 
                  alt="Research Leadership" 
                  className="w-full h-auto rounded-[32px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual Anchors (Engineering Style) */}
                <div className="absolute top-8 left-8 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-100 shadow-xl hidden sm:block">
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Project Focus</div>
                  <div className="text-[11px] font-black text-[#0A2A66] uppercase">Geo-Analysis</div>
                </div>

                <div className="absolute bottom-8 right-8 p-3 bg-accent text-white rounded-xl shadow-xl hidden sm:block">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Verified Excellence</span>
                </div>
              </div>

              {/* Satellite Decorative Elements */}
              <div className="absolute -top-12 right-1/4 w-24 h-24 border border-dashed border-accent/20 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute -bottom-10 left-12 w-16 h-16 bg-accent/5 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
