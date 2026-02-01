import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Globe } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-12 h-12 text-accent" />,
    title: "Geo-tec Award",
    description: "Secured highest marks in Soil Mechanics, Foundation Engineering, and Geology.",
  },
  {
    icon: <Star className="w-12 h-12 text-accent" />,
    title: "University Topper",
    description: "Achieved perfect 4.0 SGPA in 2nd & 3rd Year University Board Exams.",
  },
  {
    icon: <Award className="w-12 h-12 text-accent" />,
    title: "Merit Scholarship",
    description: "Recipient of the full merit-based scholarship from Pokhara University.",
  },
  {
    icon: <Globe className="w-12 h-12 text-accent" />,
    title: "B+NeSDG Participant",
    description: "Selected for European Union co-funded Erasmus+ program.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="custom-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Honors & Achievements</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-xl border border-secondary shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
