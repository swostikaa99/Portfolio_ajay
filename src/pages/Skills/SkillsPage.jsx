import React from "react";
import { Link } from "react-router-dom";
import profile from "../../data/profile";
import { Laptop, Code, HardHat, Cpu, Sparkles, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const categories = [
    { 
      title: "Engineering Tools", 
      skills: profile.skills.engineeringTools, 
      icon: <HardHat size={32} />,
      color: "text-blue-600",
      accent: "bg-blue-600",
      pos: "lg:top-20 lg:left-0"
    },
    { 
      title: "Programming & ML", 
      skills: profile.skills.programmingML, 
      icon: <Cpu size={32} />,
      color: "text-indigo-600",
      accent: "bg-indigo-600",
      pos: "lg:top-60 lg:right-0"
    },
    { 
      title: "General Software", 
      skills: profile.skills.software, 
      icon: <Laptop size={32} />,
      color: "text-slate-700",
      accent: "bg-slate-700",
      pos: "lg:bottom-20 lg:left-1/4"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden">
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0A2A66 1px, transparent 1px), linear-gradient(90deg, #0A2A66 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Blueprint Annotations */}
      <div className="absolute top-32 left-8 text-[10px] font-mono text-[#0A2A66]/20 uppercase tracking-[0.2em] hidden lg:block">
        Ref: SK-2025-AJY | Scale: 1:1 Civil-ML Hybrid
      </div>
      <div className="absolute bottom-8 right-8 text-[10px] font-mono text-[#0A2A66]/20 uppercase tracking-[0.2em] hidden lg:block text-right">
        Coordinates: 32.7314° N, 97.1077° W (UTA)<br/>
        Draft Date: {new Date().toLocaleDateString()}
      </div>

      <div className="custom-container pt-40 pb-32 relative z-10">
        {/* Minimal Header */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent">Technical Schematic</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2A66] leading-none mb-8 tracking-tighter uppercase">
            Technical <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A2A66] to-accent">Skills Framework</span>
          </h1>
        </div>

        {/* Blueprint Canvas */}
        <div className="relative min-h-[800px]">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative lg:absolute ${cat.pos} w-full lg:w-[450px] mb-20 lg:mb-0`}
            >
              {/* Category Hub - No Box */}
              <div className="flex items-center gap-6 mb-12">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-full border-2 border-dashed border-[#0A2A66]/20 flex items-center justify-center ${cat.color} bg-white shadow-xl`}
                >
                  {cat.icon}
                </motion.div>
                <div>
                  <h2 className="text-3xl font-black text-[#0A2A66] uppercase tracking-tighter leading-none mb-2">
                    {cat.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${cat.accent}`}></div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Module 0{index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Radiating Skills - Interconnected feel */}
              <div className="space-y-6 lg:pl-10">
                {cat.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                    className="group flex items-center gap-4"
                  >
                    {/* Leader Line Illustration */}
                    <div className="relative w-12 h-px bg-gray-200 group-hover:bg-accent transition-colors hidden sm:block">
                      <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-accent transition-colors"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-3 px-6 py-3 border-b border-gray-100 group-hover:border-accent transition-all">
                        <span className="text-lg font-bold text-[#0A2A66] group-hover:text-accent transition-colors">
                          {skill}
                        </span>
                        <MoveRight size={14} className="text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Schematic Vectors */}
              <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none hidden lg:block">
                 <Sparkles size={200} />
              </div>
            </motion.div>
          ))}

          {/* Connected SVG Lines (Simplified conceptual visual) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05] hidden lg:block">
             <motion.path 
               d="M 100,200 Q 300,400 500,600" 
               stroke="#0A2A66" 
               strokeWidth="1" 
               fill="none" 
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, repeat: Infinity }}
             />
             <motion.circle cx="100" cy="200" r="3" fill="#0A2A66" />
             <motion.circle cx="500" cy="600" r="3" fill="#0A2A66" />
          </svg>
        </div>

        {/* Technical Specification Seal - Styled for Blueprint */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 border-y border-dashed border-gray-200 py-12 flex flex-col items-center group"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></div>
            <h3 className="text-xs font-black text-[#0A2A66] uppercase tracking-[0.6em]">Professional Validation</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 mb-12">
            {[
              { label: "Standard", value: "Industry Expert", detail: "Level 4/5" },
              { label: "Mindset", value: "Research Driven", detail: "Sustainable" },
              { label: "Approach", value: "AI-Integrated", detail: "Next-Gen" },
              { label: "Method", value: "Iterative Learning", detail: "Continuous" }
            ].map((spec, i) => (
              <div key={i} className="text-center">
                 <span className="block text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2">{spec.label}</span>
                 <span className="block text-sm font-black text-[#0A2A66] uppercase group-hover:text-accent transition-colors">{spec.value}</span>
                 <span className="block text-[8px] font-bold text-accent/50 group-hover:text-accent transition-all">{spec.detail}</span>
              </div>
            ))}
          </div>

          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] max-w-lg text-center leading-relaxed">
            Data integrity verified through peer-reviewed publications and certified engineering projects across Nepal and USA territories.
          </p>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Link 
              to="/contact" 
              className="relative px-12 py-5 bg-[#0A2A66] text-white rounded-full font-black uppercase tracking-[0.3em] text-sm flex items-center gap-4 hover:bg-black transition-all"
            >
              Collaborate on Projects
              <MoveRight className="text-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <p className="mt-8 text-gray-400 font-bold text-[10px] uppercase tracking-[0.5em]">
            Available for Research & Consultation
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
