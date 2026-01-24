import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Home />
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
