import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-9xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>
         <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl text-slate-600 mb-8"
        >
          Page Not Found
        </motion.p>
        <motion.a 
          href="/"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors inline-block"
        >
          Return Home
        </motion.a>
      </div>
    </div>
  );
};

export default NotFound;
