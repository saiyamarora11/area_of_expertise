"use client";

import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import classes from '../PerspectiveScroll/PerspectiveScroll.module.css';
import { carouselImages } from '@/data/carouselPositions';
import CarouselItem from './CarouselItem';

type CarouselContainerProps = {
  scrollYProgress: MotionValue<number>;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({ scrollYProgress }) => {
  const carouselOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.75],
    [0, 1, 0]
  );

  const carouselScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    [0.5, 0.75, 1.2, 2, 2.5, 3, 3]
  );

  const carouselRotate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.75, 1],
    ["45deg", "-30deg", "-90deg", "-145deg","-180deg"]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px", "100px", "0px"]
  );

  return (
    <div className={classes.carouselContainer}>
      <motion.div 
        className={classes.carousel}
        style={{
          opacity: carouselOpacity,
          scale: carouselScale,
          rotate: carouselRotate,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          translateZ: translateZ,
        }}
      >
        {carouselImages.map((image, index) => (
          <CarouselItem 
            key={image.id} 
            id={image.id} 
            src={image.src}
            index={index} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselContainer;