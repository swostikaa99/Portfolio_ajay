import React from "react";
import profile from "../../data/profile";
import { Linkedin, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0A2A66] text-white pt-10 pb-6 relative border-t border-white/5">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-24 mb-8">
          
          {/* Brand & Identity Segment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl font-black tracking-tighter uppercase">AJAY YADAV</h2>
            
            <div className="w-12 h-1 bg-accent -mt-5"></div>
          
            <p className="text-white/60 text-lg max-w-md leading-relaxed">
              Advancing the future of Civil Engineering through Sustainable Infrastructure and Machine Learning integration. Committed to technical excellence and professional integrity.
            </p>
          </motion.div>

          {/* Memberships Segment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xs font-black text-accent uppercase tracking-[0.3em]">Professional Validations</h3>
            <div className="space-y-4">
              {[
                "Nepal Engineering Council (NEC)",
                "American Society of Civil Engineers (ASCE)"
              ].map((membership, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/80">
                  <Award size={16} className="text-accent" />
                  <span>{membership}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Connect Segment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xs font-black text-accent uppercase tracking-[0.3em]">Connect</h3>
            <div className="flex flex-col gap-4">
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-3 text-sm font-bold text-white/60 hover:text-white transition-all uppercase tracking-widest">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
              <a href={profile.contact.googleScholar} target="_blank" rel="noreferrer" 
                 className="flex items-center gap-3 text-sm font-bold text-white/60 hover:text-white transition-all uppercase tracking-widest">
                <GraduationCap size={18} /> Google Scholar
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
          <p>
            &copy; {new Date().getFullYear()} Ajay Yadav. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Academic Integrity</span>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            <span>Sustainable Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
