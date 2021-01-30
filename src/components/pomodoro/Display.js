import { useSelector } from 'react-redux';
// State
import { selectTimeleft } from '../../features/pomodoro/pomodoroSlice';

const Display = () => {
  // State
  const timeLeft = useSelector(selectTimeleft);

  return (
    <div>
      <section>{timeLeft}</section>
    </div>
  );
};

export default Display;
