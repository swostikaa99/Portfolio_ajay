import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="custom-container flex justify-between items-center">
        {/* Authoritative Logo */}
        <Link to="/" className="group relative flex items-center gap-2">
          <div className="flex flex-col">
            <span
              className={`text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-primary"
              }`}
            >
              AJAY YADAV
            </span>
            <span
              className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-accent/80" : "text-secondary/60"
              }`}
            >
              Civil Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <ul className="flex items-center space-x-8 mr-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === item.href
                      ? "text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                      : isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-primary/70 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-accent origin-left ${
                    location.pathname === item.href ? "scale-x-100" : ""
                  }`}
                  initial={{ scaleX: location.pathname === item.href ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </li>
            ))}
          </ul>

          <motion.div
            className="flex items-center"
            initial={false}
          >
            <Link
              to="/contact"
              className={`px-8 py-3 font-black text-sm uppercase tracking-widest rounded-full flex items-center gap-2 shadow-xl hover:bg-opacity-90 transition-all ${
                location.pathname === "/contact"
                  ? "bg-[#D4AF37] text-white"
                  : "bg-accent text-white"
              }`}
            >
              <motion.span 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden relative z-50 p-2 rounded-xl transition-colors ${
            isScrolled || isOpen
              ? "text-white bg-white/10"
              : "text-primary bg-primary/5"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Astonishing Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-primary flex flex-col items-center justify-center"
          >
            {/* Background Text Overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex items-center justify-center">
              <span className="text-[20vw] font-black leading-none rotate-90 whitespace-nowrap">
                NAVIGATION
              </span>
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className={`text-4xl md:text-5xl font-black transition-colors tracking-tighter ${
                      location.pathname === item.href
                        ? "text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                        : "text-white hover:text-accent"
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12"
              >
                <Link
                  to="/contact"
                  className={`px-12 py-5 font-black text-xl uppercase tracking-widest rounded-full shadow-2xl hover:bg-opacity-90 transition-all flex items-center gap-3 ${
                    location.pathname === "/contact"
                      ? "bg-[#D4AF37] text-white"
                      : "bg-accent text-white"
                  }`}
                  onClick={handleNavClick}
                >
                  <span>Hire Me</span>
                  <ArrowRight size={24} />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Footer Info */}
            <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-2 text-white/30">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                Professional Engineer
              </span>
              <div className="w-12 h-0.5 bg-accent/30 rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
