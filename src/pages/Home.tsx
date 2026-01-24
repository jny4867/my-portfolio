import React, { useRef, useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function Home() {
  const mainContentRef = useRef<HTMLElement>(null);

  const handleNavClick = useCallback((section: string) => {
    if (mainContentRef.current) {
      const element = mainContentRef.current.querySelector(`#${section}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (mainContentRef.current) {
      const rect = mainContentRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      mainContentRef.current.style.setProperty('--mouse-x', `${x}%`);
      mainContentRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, []);

  return (
    <>
      <Sidebar onNavClick={handleNavClick} />
      <MainContent ref={mainContentRef} onMouseMove={handleMouseMove} />
    </>
  );
}