import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
// Components
import Content from './pages';
import Navbar from './layout/Navbar';
import Toggler from './layout/Toggler';
// Styles/Assets
import { Wrapper } from './App.styled';
import { GlobalStyle } from './app/theme';

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <main className="grid">
          <Toggler />
          <Content />
        </main>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
