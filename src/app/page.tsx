'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PerspectiveScroll from '@/components/PerspectiveScroll/PerspectiveScroll';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 2000);
      }
    )();
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && <PerspectiveScroll />}
    </main>
  );
}
