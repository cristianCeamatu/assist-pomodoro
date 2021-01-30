import { useSelector } from 'react-redux';
// State
import { selectTimeleft } from '../../features/pomodoro/pomodoroSlice';

const Display = () => {
  // State
  const timeLeft = useSelector(selectTimeleft);

  return <h1>{timeLeft}</h1>;
};

export default Display;
