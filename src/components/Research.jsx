import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, FileText, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Roles of Infrastructure for Livelihood",
    subtitle: "Case Study of Changunarayan Municipality Ward No: 4",
    type: "Final Year Project",
    description:
      "A comprehensive study analyzing how infrastructure development impacts the socio-economic status and livelihood of residents in Changunarayan Municipality. The research involved extensive field surveys, data analysis, and correlation studies between infrastructure accessibility and quality of life metrics.",
    outcome:
      "Provided actionable recommendations for municipal planning and identified key infrastructure gaps affecting local communities.",
  },
  {
    title: "Survey Camp Report",
    subtitle: "Field Experience Documentation",
    type: "Academic Project",
    description:
      "Detailed documentation of a 10-day intensive survey camp. Included topographic mapping, road alignment survey, and bridge site survey. The report features detailed calculations, maps, and error analysis.",
    outcome:
      "Successfully mapped 50 hectares of land and designed a preliminary road alignment with bridge crossing.",
  },
];

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-secondary/20 hover:shadow-md transition-shadow"
    >
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-secondary text-sm font-bold uppercase tracking-wider mb-2 block">
              {project.type}
            </span>
            <h3 className="text-2xl font-bold text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-secondary/80 font-medium">{project.subtitle}</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary/5 text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-slate-200 mt-4">
                <p className="text-secondary/90 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-accent">
                  <h4 className="font-semibold text-primary mb-1">
                    Key Outcome
                  </h4>
                  <p className="text-secondary/90 text-sm">{project.outcome}</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <button className="text-primary font-semibold flex items-center gap-2 hover:text-secondary text-sm">
                    <FileText size={16} /> Read Full Report
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <p className="text-secondary/90 line-clamp-2 mt-4">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Research = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="custom-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Research & Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="custom-container space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
