import React from "react";
import { motion } from "framer-motion";
import { MapPin, BookOpen, GraduationCap, Target, Users, Award, ChevronRight } from "lucide-react";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const stats = [
    { label: "University Topper", value: "PU", icon: Award, color: "text-blue-500" },
    { label: "Research Focus", value: "Sizable", icon: Target, color: "text-indigo-500" },
    { label: "Collaboration", value: "EU Erasmus+", icon: Users, color: "text-accent" },
  ];

  return (
    <div className="bg-background">
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Artistic Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/2 rounded-full blur-[100px] -ml-64 -mb-64"></div>
        
        <div className="custom-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Discovery</span>
            <h2 className="text-3xl md:text-6xl font-black text-primary mb-6 tracking-tight">
              Crafting The Future of <br />
              <span className="text-secondary opacity-90 italic">Infrastructure</span>
            </h2>
            <div className="w-32 h-2 bg-accent rounded-full mb-8 shadow-sm"></div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Story Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/50 via-transparent to-transparent"></div>
                <h3 className="text-3xl font-bold text-primary mb-8 leading-tight">
                  A Dedicated Narrative of <br /> Engineering Excellence.
                </h3>
                <div className="space-y-6 text-secondary text-lg leading-relaxed">
                  <p>
                    I am a passionate Civil Engineering graduate from <span className="text-primary font-bold">Pokhara University</span>, recognized as a top-performing scholar with a commitment to technical precision and structural innovation.
                  </p>
                  <p>
                    My work bridges the gap between traditional engineering principles and modern concrete technology. As a published author, I dedicate my expertise to simplifying complex concepts for the next generation of engineers while pursuing rigorous research in infrastructure resilience.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-8 items-center">
                   <div className="flex items-center gap-3 py-3 px-6 bg-surface border border-secondary/10 rounded-2xl shadow-sm">
                      <MapPin className="text-accent" size={24} />
                      <div>
                        <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest leading-none mb-1">Based In</p>
                        <p className="text-primary font-bold">Kirtipur, Nepal</p>
                      </div>
                   </div>
                   
                   <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary font-bold group"
                   >
                     <span>Let's talk about a project</span>
                     <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" />
                   </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Visual Stats Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-5 grid gap-6"
            >
              <div className="relative p-10 bg-primary rounded-[2.5rem] shadow-2xl overflow-hidden group">
                 {/* Decorative Light */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100%]"></div>
                 
                 <GraduationCap className="w-16 h-16 text-accent/20 absolute -bottom-4 -right-4 rotate-12" />
                 
                 <h4 className="text-white text-2xl font-bold mb-6 relative z-10">High Impact Core</h4>
                 
                 <div className="space-y-8 relative z-10">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                          <BookOpen className="text-accent" />
                       </div>
                       <div>
                          <p className="text-white font-bold">Academic Topper</p>
                          <p className="text-white/60 text-sm">Consistent 4.0 SGPA candidate at Pokhara University.</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                          <Users className="text-accent" />
                       </div>
                       <div>
                          <p className="text-white font-bold">Global Contributor</p>
                          <p className="text-white/60 text-sm">EU Erasmus+ B+NeSDG Program active representative.</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="mt-10 pt-10 border-t border-white/10 flex justify-between items-center text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
                    <span>Researcher Id</span>
                    <span>18804@nec</span>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-surface border border-secondary/10 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                   <Target className="text-accent mb-4" />
                   <p className="text-primary font-bold text-lg leading-tight mb-2">Structural Analysis</p>
                   <p className="text-secondary/60 text-xs">Modern modeling & design specialized.</p>
                </div>
                <div className="p-8 bg-surface border border-secondary/10 rounded-3xl hover:-translate-y-2 transition-transform duration-500">
                   <Award className="text-accent mb-4" />
                   <p className="text-primary font-bold text-lg leading-tight mb-2">Published Author</p>
                   <p className="text-secondary/60 text-xs">Engineering textbooks & research items.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Integrated Sections with High Precision Spacing */}
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
        <Education />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
      </div>
      <Experience />
    </div>
  );
};

export default About;

