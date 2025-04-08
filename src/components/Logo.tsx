"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.div 
      style={{
        position: 'fixed',
        bottom: '2.5%',
        left: '2.5%',
        zIndex: 9999
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], 
        delay: 0.5 
      }}
    >
      <Image 
        src="/simply-jet-logo.svg" 
        alt="Simply Jet SA" 
        width={80} 
        height={80} 
      />
    </motion.div>
  );
};

export default Logo;
