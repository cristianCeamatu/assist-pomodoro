import { useSelector, useDispatch } from 'react-redux';
// Styles/Assets
import { Wrapper } from './Toggler.styled';
// State
import { toggleTheme } from '../features/theme/themeSlice';

const Toggler = () => {
  // State
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.mode);

  return (
    <Wrapper>
      <p className="active">Light</p>
      <form action="/index.html">
        <input
          type="checkbox"
          id="autoplay"
          className="checkbox"
          onChange={() => dispatch(toggleTheme())}
        />
        <label for="autoplay" className="switch" />
      </form>
      <p>Dark</p>
    </Wrapper>
  );
};

export default Toggler;
