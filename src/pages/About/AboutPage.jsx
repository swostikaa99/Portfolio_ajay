import React from "react";
import profile from "../../data/profile";
import { GraduationCap, Award, Globe, Heart } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="custom-container">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0A2A66] mb-6 tracking-tighter uppercase">About Me</h1>
          <div className="w-32 h-2 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Bio & Vision */}
          <div className="lg:col-span-2">
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#0A2A66] mb-6 flex items-center gap-3">
                <Heart className="text-accent" /> Academic Biography
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {profile.aboutSummary}
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border-l-8 border-[#0A2A66]">
                <h3 className="text-lg font-bold text-[#0A2A66] mb-4 uppercase tracking-wider">Professional Vision</h3>
                <p className="text-lg text-gray-600 italic">
                  "{profile.visionStatement}"
                </p>
              </div>
            </section>

            {/* Academic Interests */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-[#0A2A66] mb-6 flex items-center gap-3">
                <Globe className="text-accent" /> Research Interests
              </h2>
              <div className="flex flex-wrap gap-4">
                {profile.academicInterests.map((interest, index) => (
                  <span key={index} className="px-6 py-3 bg-white border border-gray-200 text-[#0A2A66] font-bold rounded-full shadow-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-2xl font-bold text-[#0A2A66] mb-8 flex items-center gap-3">
                <GraduationCap className="text-accent" /> Education
              </h2>
              {profile.education.map((edu, index) => (
                <div key={index} className="mb-8 p-8 bg-[#0A2A66] text-white rounded-3xl shadow-xl">
                  <span className="text-accent font-bold text-sm block mb-2">{edu.period}</span>
                  <h3 className="text-xl font-black mb-1 leading-tight">{edu.degree}</h3>
                  <p className="text-white/70 text-sm mb-6">{edu.institution}</p>
                  <ul className="space-y-3">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                        <Award size={16} className="text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* International Program */}
              <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl">
                <h3 className="text-lg font-bold text-[#0A2A66] mb-4 uppercase tracking-tight">International Programs</h3>
                {profile.internationalPrograms.map((prog, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-[#0A2A66] mb-2">{prog.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{prog.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
