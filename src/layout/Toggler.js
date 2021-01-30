import { useDispatch } from 'react-redux';
// Styles/Assets
import { Wrapper } from './Toggler.styled';
// State
import { toggleTheme } from '../features/theme/themeSlice';

const Toggler = () => {
  // State
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <p>Light</p>
      <form action="/index.html">
        <input
          type="checkbox"
          id="autoplay"
          className="checkbox"
          onChange={() => dispatch(toggleTheme())}
        />
        <label htmlFor="autoplay" className="switch" />
      </form>
      <p>Dark</p>
    </Wrapper>
  );
};

export default Toggler;
