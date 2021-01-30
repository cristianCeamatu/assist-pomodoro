// Components
import Content from './pages';
import Navbar from './layout/Navbar';
import Toggler from './layout/Toggler';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Toggler />
        <Content />
      </main>
    </>
  );
};

export default App;
