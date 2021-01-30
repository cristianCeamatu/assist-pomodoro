import { useSelector } from 'react-redux';
// Styles/Assets
import { H3 } from './Pomodoro.styled';

const DisplayTitle = () => {
  // State
  const timeLeftType = useSelector((state) => state.pomodoro.timeLeftType);

  return <H3>{timeLeftType}</H3>;
};

export default DisplayTitle;
