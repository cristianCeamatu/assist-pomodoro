import { useSelector } from 'react-redux';
// State
import { selectTimeleft } from '../../features/pomodoro/pomodoroSlice';

const Display = () => {
  // State
  const timeLeft = useSelector(selectTimeleft);

  return <div>{timeLeft}</div>;
};

export default Display;
