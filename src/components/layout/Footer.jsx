import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Ajay Yadav</h2>
            <p className="text-white">Civil Engineer | Researcher | Author</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center text-sm text-white">
             <Link to="/" className="hover:text-accent transition-colors">Home</Link>
             <Link to="/about" className="hover:text-accent transition-colors">About</Link>
             <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
             <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
        
        <div className="border-t border-white mt-8 pt-8 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Ajay Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
