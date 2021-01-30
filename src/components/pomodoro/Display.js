import { useSelector } from 'react-redux';
// Styles/Assets
import { DisplayContainer } from './Pomodoro.styled';
// State
import { selectTimeleft } from '../../features/pomodoro/pomodoroSlice';

const Display = () => {
  // State
  const timeLeft = useSelector(selectTimeleft);

  return (
    <DisplayContainer>
      <h1>{timeLeft}</h1>
    </DisplayContainer>
  );
};

export default Display;
