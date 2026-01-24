import React, { useRef, useCallback, useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function Home() {
  const mainContentRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleNavClick = useCallback((section: string) => {
    if (mainContentRef.current) {
      const element = mainContentRef.current.querySelector(`#${section}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(section);
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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['about', 'experience', 'projects'];
    sections.forEach((sectionId) => {
      const element = mainContentRef.current?.querySelector(`#${sectionId}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Sidebar onNavClick={handleNavClick} activeSection={activeSection} />
      <MainContent ref={mainContentRef} onMouseMove={handleMouseMove} />
    </>
  );
}