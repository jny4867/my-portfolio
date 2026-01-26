import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import profileImg from '../assets/img1.jpg';
import React, { useState } from 'react';

const SidebarContainer = styled.aside<{ $isDark: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 380px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  overflow-y: auto;

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    height: auto;
    padding: 2rem;
    flex-direction: column;
    justify-content: flex-start;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img<{ $isDark: boolean }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background: ${(props) =>
    props.$isDark
      ? 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)'
      : 'linear-gradient(135deg, #e0e0e0 0%, #f0f0f0 100%)'};
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
  border: 2px solid ${(props) => props.theme.colors.border};
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Bio = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  line-height: 1.6;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.button<{ $isDark: boolean; $isActive: boolean }>`
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 5%;
    transform: translateX(0%);
    width: ${(props) => (props.$isActive ? '40%' : '0%')};
    height: 0.5px;
    background: ${(props) => props.theme.colors.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 40%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 2rem;
    margin-top: 2rem;
  }
`;

const SocialLink = styled.a<{ $isDark: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: transparent;

  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)'};
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 6px 20px rgba(255, 255, 255, 0.15)'
        : '0 6px 20px rgba(0, 0, 0, 0.15)'};
  }
`;

interface SidebarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

export default function Sidebar({ onNavClick, activeSection }: SidebarProps) {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "jny200067@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      alert("이메일 주소가 복사되었습니다!"); // 간단한 알림
      
      // 2초 후 복사 상태 초기화
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <SidebarContainer $isDark={isDarkMode}>
      <div>
        <ProfileSection>
          <ProfileImage src={profileImg} alt='Profile' $isDark={isDarkMode}></ProfileImage>
          <Name>yon</Name>
          <Bio>
            {t.sidebar.bio.title}
            <br />
            {t.sidebar.bio.description}
          </Bio>
        </ProfileSection>
        <Navigation>
          <NavItem
            $isDark={isDarkMode}
            $isActive={activeSection === 'about'}
            onClick={() => onNavClick('about')}
          >
            ABOUT
          </NavItem>
          <NavItem
            $isDark={isDarkMode}
            $isActive={activeSection === 'experience'}
            onClick={() => onNavClick('experience')}
          >
            EXPERIENCE
          </NavItem>
          <NavItem
            $isDark={isDarkMode}
            $isActive={activeSection === 'projects'}
            onClick={() => onNavClick('projects')}
          >
            PROJECTS
          </NavItem>
        </Navigation>
      </div>
      <SocialLinks>
        <SocialLink
          $isDark={isDarkMode}
          href="https://github.com/jny4867"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </SocialLink>
        <SocialLink
          $isDark={isDarkMode}
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </SocialLink>
        <SocialLink
          $isDark={isDarkMode}
          href="https://velog.io/@stonedchild/posts"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blog"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17h-2v-7h2v7zm-1-8c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm9 8h-2v-4c0-1.104-.896-2-2-2s-2 .896-2 2v4H8v-7h2v1.225c.618-1.146 1.884-1.925 3.25-1.925 2.209 0 4 1.791 4 4v3.7z" />
          </svg>
        </SocialLink>
        <SocialLink
          as='button'
          $isDark={isDarkMode}
          onClick={handleCopyEmail}
          aria-label="Copy Email"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </SocialLink>
      </SocialLinks>
    </SidebarContainer>
  );
}

