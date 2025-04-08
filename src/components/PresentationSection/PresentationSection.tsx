import React, { useRef, useEffect, useState } from 'react';
import styles from './PresentationSection.module.css';

const PresentationSection: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3; 

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin.includes('google.com') && iframeRef.current) {
        console.log('Received message from presentation:', event.data);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handlePrevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
      if (iframeRef.current) {
        iframeRef.current.src = `https://docs.google.com/presentation/d/1RhOUpgDyN7Et2S6HwIpGpOB3Bw0JOp1ML_VpI1BIuO8/embed?start=false&loop=false&delayms=3000&slide=${currentSlide - 1}`;
      }
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
      if (iframeRef.current) {
        iframeRef.current.src = `https://docs.google.com/presentation/d/1RhOUpgDyN7Et2S6HwIpGpOB3Bw0JOp1ML_VpI1BIuO8/embed?start=false&loop=false&delayms=3000&slide=${currentSlide + 1}`;
      }
    }
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    } else if (iframeRef.current?.parentElement) {
      iframeRef.current.parentElement.requestFullscreen().then(() => setIsFullscreen(true));
    }
  };

  return (
    <div className={styles.presentationSection}>
      <div className={styles.container}>
        <div className={styles.presentationWrapper}>
          <iframe 
            ref={iframeRef}
            src="https://docs.google.com/presentation/d/1RhOUpgDyN7Et2S6HwIpGpOB3Bw0JOp1ML_VpI1BIuO8/embed?start=false&loop=false&delayms=3000" 
            frameBorder="0" 
            allowFullScreen
            title="About Me Presentation"
            className={styles.iframe}
          />
        </div>
        
        <div className={styles.controls}>
          <button 
            onClick={handlePrevSlide} 
            disabled={currentSlide === 1}
            className={styles.controlButton}
          >
            Previous
          </button>
          
          <div className={styles.slideInfo}>
            Slide {currentSlide} of {totalSlides}
          </div>
          
          <button 
            onClick={handleNextSlide} 
            disabled={currentSlide === totalSlides}
            className={styles.controlButton}
          >
            Next
          </button>
          
          <button 
            onClick={toggleFullscreen}
            className={`${styles.controlButton} ${styles.fullscreenButton}`}
          >
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationSection;
