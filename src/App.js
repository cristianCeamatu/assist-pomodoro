// Components
import Content from './pages';
import Navbar from './layout/Navbar';
import Toggler from './layout/Toggler';

const App = () => {
  console.log('Content :>> ', Content);
  return (
    <div>
      <Navbar />
      <Content />
      <Toggler />
    </div>
  );
};

export default App;
