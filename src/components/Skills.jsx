import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Structural Analysis & Design", level: 90 },
  { name: "Soil Mechanics & Foundation Eng.", level: 85 },
  { name: "Concrete Technology", level: 90 },
  { name: "AutoCAD & Engineering Software", level: 80 },
  { name: "Project Management", level: 75 },
  { name: "Technical Writing & Publishing", level: 95 },
  { name: "Research Methodology", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="custom-container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
            <p className="text-secondary/80 text-lg leading-relaxed mb-8">
              My technical expertise spans across core civil engineering disciplines and modern research methodologies. I combine theoretical depth with practical software skills to solve complex engineering problems.
            </p>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="font-semibold text-xl mb-2 text-accent">Continuous Learning</h3>
              <p className="text-secondary/80">
                Always actively engaged in learning new technologies and staying updated with the latest advancements in construction materials and structural analysis.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-secondary/70">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-accent rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-white/20 transform skew-x-12 animate-shimmer"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
