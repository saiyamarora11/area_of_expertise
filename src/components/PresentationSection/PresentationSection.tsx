import React, { useRef, useEffect, useState } from 'react';
import styles from './PresentationSection.module.css';

const PresentationSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className={styles.presentationSection}>
      <div className={styles.container}>
        <div className={styles.presentationWrapper}>
          <iframe 
            ref={iframeRef}
            src="https://docs.google.com/presentation/d/e/2PACX-1vQEnWoT6Ai3ZHr0tjEUGJL5qJAjf9-2BX4FON8MNFGFn9SygEc1djVFrWQ-9CuWVd8WcvjK1BXF7KFc/embed?start=false&loop=false&delayms=3000" 
            frameBorder="0" 
            allowFullScreen
            title="About Me Presentation"
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
