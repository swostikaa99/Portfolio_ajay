import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, GraduationCap as GoogleScholar } from "lucide-react";
import profile from "../data/profile";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20"
    >
      {/* Background Decor - Subtle academic feel */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0A2A66]/5 skewed-bg z-0" />
      
      <div className="custom-container z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-8xl font-black text-[#0A2A66] mb-4 tracking-tighter"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl font-bold text-gray-500 mb-8 leading-tight tracking-tight uppercase"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium"
          >
            "{profile.tagline}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <Link
              to="/research"
              className="px-8 py-4 bg-[#0A2A66] text-white font-black rounded-lg hover:bg-accent transition-all flex items-center gap-2 shadow-2xl hover:-translate-y-1"
            >
              View Research <ArrowRight size={20} />
            </Link>
            <a
              href="/AjayYadavCV.pdf"
              className="px-8 py-4 bg-white text-[#0A2A66] border-2 border-[#0A2A66] font-black rounded-lg hover:bg-[#0A2A66] hover:text-white transition-all flex items-center gap-2"
            >
              Download CV <Download size={20} />
            </a>
            
            <div className="flex gap-4 ml-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="text-[#0A2A66] hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={profile.contact.googleScholar} target="_blank" rel="noreferrer" className="text-[#0A2A66] hover:text-accent transition-colors">
                <GoogleScholar size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Image Holder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-[16px] border-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A2A66]/20 to-transparent"></div>
          
            <div className="w-full h-full flex items-center justify-center text-[#0A2A66]/10">
              <img src="/public/bg.png" alt="Civil Engineer" className="w-full h-full object-cover object-right" />
            </div>
          </div>
          
          {/* Decorative bits */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#0A2A66]/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
