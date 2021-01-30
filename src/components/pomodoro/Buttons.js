import { useSelector, useDispatch } from 'react-redux';
// Styles/Assets
import { ButtonsContainer } from './Pomodoro.styled';
// State
import { reset, startStop, tick } from '../../features/pomodoro/pomodoroSlice';

const Actions = () => {
  // State
  const dispatch = useDispatch();
  const active = useSelector((state) => state.pomodoro.active);
  const timer = useSelector((state) => state.pomodoro.timer);
  // Actions/Effects
  const handleStartStop = (active) => {
    if (active) {
      timer && clearInterval(timer);
      dispatch(startStop(null));
    } else {
      const newTimer = setInterval(() => dispatch(tick()), 1000);
      dispatch(startStop(newTimer));
    }
  };

  return (
    <ButtonsContainer>
      <button
        className="gradient"
        type="button"
        onClick={() => handleStartStop(active)}
      >
        {active ? 'Pause' : 'Start'}
      </button>

      <button
        className="default"
        type="button"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </ButtonsContainer>
  );
};

export default Actions;
