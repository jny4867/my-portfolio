import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const MainContainer = styled.main<{ $isDark: boolean }>`
  margin-left: 300px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 3rem 4rem;
  transition: background-color 0.3s ease, color 0.3s ease;
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

  &:hover::before {
    opacity: 1;
  }
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
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.9;
`;

const ExperienceItem = styled.div<{ $isDark: boolean }>`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 3px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%)'
        : 'linear-gradient(90deg, rgba(0, 0, 0, 0.02) 0%, transparent 100%)'};
    transform: translateX(5px);
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
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.85;
`;

const ProjectItem = styled.div<{ $isDark: boolean }>`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.01) 100%)'};
    transform: translateY(-3px);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 8px 24px rgba(255, 255, 255, 0.1)'
        : '0 8px 24px rgba(0, 0, 0, 0.1)'};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
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

interface MainContentProps {
  onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
}

const MainContent = forwardRef<HTMLElement, MainContentProps>(
  ({ onMouseMove }, ref) => {
    const { isDarkMode } = useTheme();

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
          <SectionTitle>ABOUT</SectionTitle>
          <SectionContent>
            <p>
              저는 디자인과 사용자의 편의성을 모두 중시하는 프론트엔드 개발자입니다.
              React를 중심으로 개발하며, 못생긴 UI와 불편한 UX를 세상에서 제일 싫어하며
              사용자의 경험을 향상시키는 방법을 항상 고민하고 있습니다.
            </p>
            <br />
            <p>
              사용자 중심의 사고를 바탕으로 직관적이고 아름다운 인터페이스를 만드는 것을
              목표로 하고 있습니다. 최신 기술 트렌드를 학습하고 적용하는 것에 관심이 많으며,
              코드의 가독성과 유지보수성을 중요하게 생각합니다.
            </p>
          </SectionContent>
        </Section>

        <Section id="experience" $isDark={isDarkMode} onMouseMove={handleSectionMouseMove}>
          <SectionTitle>EXPERIENCE</SectionTitle>
          <ExperienceItem $isDark={isDarkMode}>
            <ExperienceTitle>프론트엔드 개발자</ExperienceTitle>
            <ExperiencePeriod>2024 - 현재</ExperiencePeriod>
            <ExperienceDescription>
              React와 TypeScript를 활용한 웹 애플리케이션 개발. 사용자 경험을 개선하기 위한
              UI/UX 디자인 및 구현. 성능 최적화 및 접근성 향상에 기여.
            </ExperienceDescription>
          </ExperienceItem>
          <ExperienceItem $isDark={isDarkMode}>
            <ExperienceTitle>웹 개발 인턴</ExperienceTitle>
            <ExperiencePeriod>2023 - 2024</ExperiencePeriod>
            <ExperienceDescription>
              다양한 웹 프로젝트에 참여하며 프론트엔드 개발 역량을 키웠습니다.
              협업 도구 활용 및 코드 리뷰를 통한 개발 프로세스 학습.
            </ExperienceDescription>
          </ExperienceItem>
        </Section>

        <Section id="projects" $isDark={isDarkMode} onMouseMove={handleSectionMouseMove}>
          <SectionTitle>PROJECTS</SectionTitle>
          <ProjectItem $isDark={isDarkMode}>
            <ProjectTitle>포트폴리오 웹사이트</ProjectTitle>
            <ProjectDescription>
              React와 TypeScript를 사용하여 제작한 개인 포트폴리오 웹사이트입니다.
              다크모드 지원 및 반응형 디자인을 구현했습니다.
            </ProjectDescription>
            <ProjectTech>
              <TechTag $isDark={isDarkMode}>React</TechTag>
              <TechTag $isDark={isDarkMode}>TypeScript</TechTag>
              <TechTag $isDark={isDarkMode}>Styled Components</TechTag>
            </ProjectTech>
          </ProjectItem>
          <ProjectItem $isDark={isDarkMode}>
            <ProjectTitle>프로젝트 예시 2</ProjectTitle>
            <ProjectDescription>
              추가 프로젝트 설명을 여기에 작성하실 수 있습니다.
            </ProjectDescription>
            <ProjectTech>
              <TechTag $isDark={isDarkMode}>React</TechTag>
              <TechTag $isDark={isDarkMode}>Node.js</TechTag>
            </ProjectTech>
          </ProjectItem>
        </Section>
      </MainContainer>
    );
  }
);

MainContent.displayName = 'MainContent';

export default MainContent;

