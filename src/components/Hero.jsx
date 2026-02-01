import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-surface relative overflow-hidden pt-20"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg z-0" />

      <div className="custom-container z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1 bg-secondary/10 text-secondary font-semibold rounded-full mb-4"
          >
            Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-2"
          >
            Ajay Yadav
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-secondary/90 mb-6"
          >
            Civil Engineer | Researcher | Published Author
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg text-slate-500 mb-8 max-w-lg italic border-l-4 border-accent pl-4"
          >
            “Engineering Infrastructure. Advancing Knowledge. Creating Impact.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Contact Me <ArrowRight size={20} />
            </a>
            <a
              href="/AjayYadavCV.pdf"
              className="px-8 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors flex items-center gap-2"
            >
              Download CV <Download size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-slate-200 flex items-center justify-center">
            {/* Avatar Image or Placeholder Icon */}
            <img
              src="/favicon.ico"
              alt="Avatar"
              className="w-full h-full object-cover absolute inset-0"
              onError={(e) => {
                e.target.style.display = "none";
                if (e.target.nextSibling)
                  e.target.nextSibling.style.display = "block";
              }}
              style={{ display: "block" }}
            />
            <User
              size={120}
              className="text-secondary/80"
              style={{ display: "none" }}
            />

            {/* Overlay if image is missing */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full -z-10 blur-xl opacity-60" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-xl opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
