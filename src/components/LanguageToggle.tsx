import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ToggleButton = styled.button<{ $isDark: boolean }>`
  position: fixed;
  top: 2rem;
  right: 5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) =>
    props.$isDark
      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
      : 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 100%)'};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 600;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: ${(props) =>
      props.$isDark
        ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)'
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)'};
    transform: scale(1.1);
    box-shadow: ${(props) =>
      props.$isDark
        ? '0 6px 20px rgba(255, 255, 255, 0.2)'
        : '0 6px 20px rgba(0, 0, 0, 0.2)'};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function LanguageToggle() {
  const { isDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleButton
      $isDark={isDarkMode}
      onClick={toggleLanguage}
      aria-label="언어 토글"
    >
      {language === 'kr' ? 'ENG' : 'KR'}
    </ToggleButton>
  );
}

