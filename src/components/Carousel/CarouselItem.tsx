import { carouselPositions } from '@/data/carouselPositions';
import React from 'react';
import styles from './CarouselItem.module.css';

type CarouselItemProps = {
  id: number;
  index: number;
  src: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ id, index, src }) => {
  const position = carouselPositions[index % carouselPositions.length];
  
  const itemStyle = {
    transform: position.transform,
    ...position.positionOverride
  };

  const imageClass = position.imageRotate 
    ? `${styles.carouselImage} ${styles.rotateImage}`
    : styles.carouselImage;

  return (
    <div className={styles.carouselItem} style={itemStyle}>
      <img 
        src={src} 
        alt={`Image ${id}`} 
        className={imageClass}
      />
    </div>
  );
};

export default CarouselItem;