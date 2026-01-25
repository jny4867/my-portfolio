import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const MainContainer = styled.main<{ $isDark: boolean }>`
  margin-left: 380px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 3rem 4rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 2rem 1.5rem;
  }
`;

const Section = styled.section<{ $isDark: boolean }>`
  margin-bottom: 5rem;
  padding: 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.$isDark
        ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
        : 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 0, 0, 0.02) 0%, transparent 50%)'};
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  /* &:hover::before {
    opacity: 1;
  } */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${(props) =>
      props.theme.colors.text === '#ffffff'
        ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent)'
        : 'linear-gradient(90deg, rgba(0, 0, 0, 0.8), transparent)'};
  }
`;

const SectionContent = styled.div`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.9;
`;

const ExperienceItem = styled.div<{ $isDark: boolean }>`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  /* border-left: 3px solid ${(props) => props.theme.colors.border}; */
  transition: all 0.3s ease;

  /* &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%)'
        : 'linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0%, transparent 100%)'};
    transform: translateX(5px);
  } */
  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.015) 0%, rgba(0, 0, 0, 0.005) 100%)'};
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
`;

const ProjectItem = styled.div<{ $isDark: boolean }>`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  /* border: 1px solid ${(props) => props.theme.colors.border}; */
  transition: all 0.3s ease;

  /* &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)'};
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 8px 24px rgba(255, 255, 255, 0.1)'
        : '0 8px 24px rgba(0, 0, 0, 0.1)'};
  } */
        &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.015) 0%, rgba(0, 0, 0, 0.005) 100%)'};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.85;
  margin-bottom: 0.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span<{ $isDark: boolean }>`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  background: ${(props) =>
    props.$isDark
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.05)'};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  align-items: center;
`;

const LinkIcon = styled.a<{ $isDark: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) =>
    props.$isDark
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.03)'};

  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.04) 100%)'};
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 4px 12px rgba(255, 255, 255, 0.15)'
        : '0 4px 12px rgba(0, 0, 0, 0.15)'};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const PdfButton = styled.a<{ $isDark: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) =>
    props.$isDark
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
      : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)'};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  /* &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)'};
    transform: translateY(-2px);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 6px 20px rgba(255, 255, 255, 0.2)'
        : '0 6px 20px rgba(0, 0, 0, 0.2)'};
  } */
        &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.015) 0%, rgba(0, 0, 0, 0.005) 100%)'};
  }

  &:active {
    transform: translateY(0);
  }
`;

interface MainContentProps {
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
}

const MainContent = forwardRef<HTMLElement, MainContentProps>(
  ({ onMouseMove }, ref) => {
    const { isDarkMode } = useTheme();
    const { t } = useLanguage();

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (onMouseMove) {
        onMouseMove(e);
      }
    };

    const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const section = e.currentTarget;
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty('--mouse-x', `${x}%`);
      section.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
      <MainContainer
        ref={ref}
        $isDark={isDarkMode}
        onMouseMove={handleMouseMove}
      >
        <Section id="about" $isDark={isDarkMode} onMouseMove={handleSectionMouseMove}>
          <SectionTitle>{t.sections.about.title}</SectionTitle>
          <SectionContent>
            {t.sections.about.content.map((paragraph, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                <p>{paragraph}</p>
              </React.Fragment>
            ))}
          </SectionContent>
        </Section>

        <Section id="experience" $isDark={isDarkMode} onMouseMove={handleSectionMouseMove}>
          <SectionTitle>{t.sections.experience.title}</SectionTitle>
          {t.sections.experience.items.map((item, index) => (
            <ExperienceItem key={index} $isDark={isDarkMode}>
              <ExperienceTitle>{item.title}</ExperienceTitle>
              <ExperiencePeriod>{item.period}</ExperiencePeriod>
              <ExperienceDescription>{item.description}</ExperienceDescription>
              {(item.website || item.github) && (
                <LinkContainer>
                  {item.website && (
                    <LinkIcon
                      $isDark={isDarkMode}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13h2v2h-2v-2zm0-8h2v6h-2V7z" />
                      </svg>
                    </LinkIcon>
                  )}
                  {item.github && (
                    <LinkIcon
                      $isDark={isDarkMode}
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </LinkIcon>
                  )}
                </LinkContainer>
              )}
            </ExperienceItem>
          ))}
          <PdfButton
            $isDark={isDarkMode}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            {t.sections.experience.viewAllResume}
          </PdfButton>
        </Section>

        <Section id="projects" $isDark={isDarkMode} onMouseMove={handleSectionMouseMove}>
          <SectionTitle>{t.sections.projects.title}</SectionTitle>
          {t.sections.projects.items.map((item, index) => (
            <ProjectItem key={index} $isDark={isDarkMode}>
              <ProjectTitle>{item.title}</ProjectTitle>
              <ProjectDescription>{item.description}</ProjectDescription>
              <ProjectTech>
                {item.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex} $isDark={isDarkMode}>
                    {tech}
                  </TechTag>
                ))}
              </ProjectTech>
              {(item.website || item.github) && (
                <LinkContainer>
                  {item.website && (
                    <LinkIcon
                      $isDark={isDarkMode}
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                      </svg>
                    </LinkIcon>
                  )}
                  {item.github && (
                    <LinkIcon
                      $isDark={isDarkMode}
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </LinkIcon>
                  )}
                </LinkContainer>
              )}
            </ProjectItem>
          ))}
          <PdfButton
            $isDark={isDarkMode}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            {t.sections.projects.viewAllPortfolio}
          </PdfButton>
        </Section>
      </MainContainer>
    );
  }
);

MainContent.displayName = 'MainContent';

export default MainContent;

