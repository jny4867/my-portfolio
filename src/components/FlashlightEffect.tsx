import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const FlashlightOverlay = styled.div<{ $isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  background: ${(props) =>
    props.$isDark
      ? 'radial-gradient(circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 40%, transparent 70%)'
      : 'radial-gradient(circle 500px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)'};
  mix-blend-mode: ${(props) => (props.$isDark ? 'screen' : 'normal')};
  transition: background 0.15s ease-out;
`;

export default function FlashlightEffect() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const { isDarkMode } = useTheme();
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (overlayRef.current) {
          overlayRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          overlayRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return <FlashlightOverlay ref={overlayRef} $isDark={isDarkMode} />;
  }