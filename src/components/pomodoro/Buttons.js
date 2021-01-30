import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// State
import {
  selectTimeleft,
  reset,
  startStop,
  tick,
} from '../../features/pomodoro/pomodoroSlice';

const Actions = () => {
  // State
  const dispatch = useDispatch();
  const timeLeft = useSelector(selectTimeleft);
  const active = useSelector((state) => state.pomodoro.active);
  const timer = useSelector((state) => state.pomodoro.timer);
  // Actions/Effects
  useEffect(() => {
    const sound = document.querySelector('#alarm');
    if (timeLeft === '00:00') {
      sound.play();
    } else if (!active) {
      sound.pause();
      sound.timeLeft = 0;
    }
  }, [timeLeft, active, dispatch]);

  const handleStartStop = (active) => {
    if (active) {
      timer && clearInterval(timer);
      dispatch(startStop(null));
    } else {
      const newTimer = setInterval(() => dispatch(tick()), 1);
      dispatch(startStop(newTimer));
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleStartStop(active)}>
        {active ? 'Stop' : 'Start'}
      </button>

      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default Actions;
