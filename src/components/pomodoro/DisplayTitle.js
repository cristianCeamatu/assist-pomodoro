import { useSelector } from 'react-redux';
// Styles/Assets
import { Title } from './Pomodoro.styled';

const DisplayTitle = () => {
  // State
  const timeLeftType = useSelector((state) => state.pomodoro.timeLeftType);

  return <Title>{timeLeftType}</Title>;
};

export default DisplayTitle;
