import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="custom-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            Whether you have a question about my research, engineering projects,
            or just want to say hello, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="bg-red-100 p-3 rounded-full text-red-600 
                hover:bg-red-600 hover:text-white 
                transition-all duration-300"
                >
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-secondary">ajayy018804@nec.edu.np</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="bg-green-100 p-3 rounded-full text-green-600 
                hover:bg-green-600 hover:text-white 
                transition-all duration-300"
                >
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p className="text-secondary">+977 9845751227</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="bg-red-100 p-3 rounded-full text-red-600 
                hover:bg-red-600 hover:text-white 
                transition-all duration-300"
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p className="text-secondary">Kirtipur, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-primary mb-4">
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ajay-yadav-793461257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-[#0A66C2] rounded-full shadow-sm 
               hover:bg-[#0A66C2] hover:text-white 
               transition-all border border-gray-200 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin size={20} />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/rn.azay.yadav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-[#1877F2] rounded-full shadow-sm 
               hover:bg-[#1877F2] hover:text-white 
               transition-all border border-gray-200 hover:scale-110 hover:shadow-lg"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-secondary/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
