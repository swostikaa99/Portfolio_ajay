import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, PenTool, Award, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Program Participant",
    organization: "B+NeSDG Program",
    period: "2023",
    description: "Participated in the European Union co-funded Erasmus+ program focused on sustainable development goals and international collaboration.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    role: "Engineering Researcher",
    organization: "Independent Research",
    period: "2023 - Present",
    description: "Conducting ongoing research in concrete technology and infrastructure development resilience, aiming for sustainable engineering solutions.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    role: "Author & Contributor",
    organization: "Academic Publications",
    period: "2023 - 2024",
    description: "Authored multiple textbooks and reference materials for engineering students at Pokhara University, enhancing academic resources.",
    icon: PenTool,
    color: "bg-accent",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -mr-64 -mt-64 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -ml-64 -mb-64 opacity-50"></div>

      <div className="custom-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-3 block">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Enhanced Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-ml-0.25 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot with Glow */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-[0_0_0_4px_rgba(212,165,60,0.2)] z-20 md:-ml-2 mt-8"
                  ></motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                    className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Empty block for spacing on desktop */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Content Card */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                      <div className="group relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-secondary/10 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                        {/* Status bar */}
                        <div className={`absolute top-0 inset-x-0 h-1.5 ${exp.color}`}></div>
                        
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className={`p-3 rounded-xl ${exp.color} bg-opacity-10 text-primary`}>
                              <Icon size={24} className={exp.color.replace('bg-', 'text-')} />
                            </div>
                            <div className="flex items-center gap-1.5 text-secondary/60 text-sm font-medium">
                              <Calendar size={14} />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors leading-tight">
                              {exp.role}
                            </h3>
                            <h4 className="text-accent font-bold text-sm uppercase tracking-wider mb-4">
                              {exp.organization}
                            </h4>
                            <p className="text-secondary leading-relaxed text-sm md:text-base">
                              {exp.description}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-secondary/5 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-secondary/40 uppercase tracking-widest">NEC Graduate</span>
                            <div className="flex -space-x-2">
                              {[1, 2, 3].map((_, i) => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-secondary/10"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Hover Decorative Element */}
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

