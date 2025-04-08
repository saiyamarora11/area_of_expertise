"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import classes from './PerspectiveScroll.module.css';
import CarouselContainer from '../Carousel/CarouselContainer';
import ProfileSection from '../ProfileSection/ProfileSection';
import PresentationSection from '../PresentationSection/PresentationSection';

const PerspectiveScroll: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(
    scrollYProgress, 
    [0.2, 0.4, 0.55], 
    [0, 1, 0]
  );

  const mainTitleOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 0.85],
    [1, 1, 0]
  );

  const containerScale = useTransform(
    scrollYProgress,
    [0, 0.8, 0.95],
    [1, 1, 0.98]
  );

  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 0.95],
    [1, 1, 0]
  );

  const profileSectionY = useTransform(
    scrollYProgress,
    [0.75, 0.9, 1],
    ['100vh', '50vh', '0vh']
  );
  
  const profileSectionOpacity = useTransform(
    scrollYProgress, 
    [0.8, 0.9, 1], 
    [0, 0.5, 1]
  );

  const presentationSectionY = useTransform(
    scrollYProgress,
    [0.85, 0.95, 1],
    ['100vh', '50vh', '0vh']
  );
  
  const presentationSectionOpacity = useTransform(
    scrollYProgress, 
    [0.9, 0.95, 1], 
    [0, 0.5, 1]
  );

  return (
    <>
      <motion.div 
        className={classes.main} 
        ref={container}
      >
        <motion.div
          className={classes.contentContainer}
          style={{
            opacity: containerOpacity,
            scale: containerScale
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 50
          }}
        >
          <div className={classes.body}>
            <motion.div 
              className={classes.textContainer} 
              style={{ opacity: mainTitleOpacity }}
              transition={{ duration: 0.5 }}
            >
              <p className={classes.mainTitle}>Saiyam arora (Frontend Developer)</p>
            </motion.div>
            
            <motion.div 
              style={{ opacity: mainTitleOpacity }}
              transition={{ duration: 0.5 }}
            >
              <CarouselContainer scrollYProgress={scrollYProgress} />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className={classes.profileSectionWrapper}
          style={{ 
            y: profileSectionY,
          }}
          transition={{
            y: { 
              type: "spring", 
              stiffness: 30, 
              damping: 20
            },
            opacity: { duration: 0.8 }
          }}
        >
          <ProfileSection imagePath="/image.jpg" />
        </motion.div>
        
        <motion.div
          className={classes.presentationSectionWrapper}
          style={{ 
            y: presentationSectionY,
            opacity: presentationSectionOpacity,
            pointerEvents: scrollYProgress.get() > 0.95 ? 'auto' : 'none'
          }}
          transition={{
            y: { 
              type: "spring", 
              stiffness: 25, 
              damping: 25
            },
            opacity: { duration: 1 }
          }}
        >
          <PresentationSection />
        </motion.div>
      </motion.div>
    </>
  );
};

export default PerspectiveScroll;