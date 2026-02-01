import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, BookOpen, GraduationCap, Star, CheckCircle } from 'lucide-react';

const Education = () => {
  const achievements = [
    {
      title: "University Topper",
      desc: "Ranked #1 with multiple perfect 4.0 SGPA semesters.",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      title: "Full Scholarship",
      desc: "Merit-based complete tuition waiver recipient.",
      icon: Award,
      color: "text-blue-500",
    },
    {
      title: "Dean's List",
      desc: "Consistent recognition for superior academic standing.",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ];

  return (
    <section id="education" className="py-24 bg-surface relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="custom-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-3 block opacity-80">Academic Excellence</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Education & Honors</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full shadow-[0_0_15px_rgba(212,165,60,0.4)]"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Primary Degree Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-secondary/10 relative overflow-hidden group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] transition-transform group-hover:scale-110 duration-700"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">Bachelor's Degree</h3>
                    <p className="text-accent font-bold tracking-wide">Civil Engineering</p>
                  </div>
                </div>

                <div className="space-y-6 mb-10 text-secondary leading-relaxed text-lg">
                  <div className="flex items-center gap-3">
                    <BookOpen size={20} className="text-secondary/50" />
                    <span className="font-semibold text-primary">Pokhara University</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-secondary/50" />
                    <span className="font-medium italic">Class of 2024 • Nepal Engineering College</span>
                  </div>
                </div>

                <p className="text-secondary/80 text-lg leading-relaxed mb-8 italic border-l-4 border-accent/30 pl-6 py-2">
                  "Dedicated to mastering the principles of structural integrity and sustainable urban development through rigorous academic inquiry and practical application."
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-secondary/5">
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Status</p>
                    <p className="text-primary font-bold">NEC Scholar</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">GPA</p>
                    <p className="text-primary font-bold">Top Tier Performance</p>
                  </div>
                  <div className="hidden md:block col-span-1 text-right">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-primary">
                        <Award size={24} />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex-grow flex items-center gap-6 bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-secondary/10 shadow-lg hover:shadow-xl hover:-translate-x-2 transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-inner flex items-center justify-center border border-secondary/5 group-hover:scale-110 transition-transform ${item.color}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary group-hover:text-secondary transition-colors">{item.title}</h4>
                      <p className="text-secondary/70 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

