// Components
import Content from './pages';
import Navbar from './layout/Navbar';
import Toggler from './layout/Toggler';
// Styles/Assets
import { Wrapper } from './App.styled';

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <main>
        <Toggler />
        <Content />
      </main>
    </Wrapper>
  );
};

export default App;
