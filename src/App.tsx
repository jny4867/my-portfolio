import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import FlashlightEffect from './components/FlashlightEffect';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GlobalStyle />
        <FlashlightEffect />
        <Home />
        <ThemeToggle />
        <LanguageToggle />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
