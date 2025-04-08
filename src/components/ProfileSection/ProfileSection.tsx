import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProfileSection.module.css';

type ProfileSectionProps =  {
  imagePath: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ imagePath }) => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className={styles.imageWrapper}>
            <Image 
              src={imagePath} 
              alt="Saiyam Arora" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.infoContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h1 className={styles.name}>Saiyam Arora</h1>
          <h2 className={styles.title}>Frontend Developer</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;
