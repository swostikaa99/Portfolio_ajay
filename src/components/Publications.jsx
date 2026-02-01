import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ArrowUpRight } from 'lucide-react';

const publications = [
  {
    title: "STRUCTURAL ANALYSIS–II (TOS-II)",
    type: "Textbook",
    description: "Comprehensive textbook based on Pokhara University syllabus covering advanced structural analysis concepts.",
    year: "2024",
  },
  {
    title: "Fluid Mechanics",
    type: "Reference Book",
    description: "Detailed solutions to past questions and theoretical concepts for civil engineering students.",
    year: "2023",
  },
  {
    title: "Structural Analysis (TOS-I)",
    type: "Reference Book",
    description: "Foundational guide to structural analysis principles and problem-solving techniques.",
    year: "2023",
  },
  {
    title: "Design of Steel & Timber",
    type: "Reference Book",
    description: "Practical design guide for steel and timber structures according to standard codes.",
    year: "2024",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-surface">
      <div className="custom-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Publications & Books</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-secondary/90 max-w-2xl mx-auto">
            Contributing to the academic community through textbooks and reference materials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="bg-secondary/10 px-3 py-1 rounded-full text-secondary text-sm font-semibold">
                  {pub.type}
                </div>
                <span className="text-secondary/80 font-medium">{pub.year}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors relative z-10">
                {pub.title}
              </h3>
              
              <p className="text-secondary/90 mb-6 relative z-10">
                {pub.description}
              </p>
              
              <div className="flex gap-4 relative z-10">
                <button className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                  <BookOpen size={18} />
                  <span>View Details</span>
                </button>
                <button className="flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
                   <Download size={18} /> 
                  <span>Sample</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
