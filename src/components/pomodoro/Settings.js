import { useSelector, useDispatch } from 'react-redux';
// Actions
import {
  incrementBreak,
  incrementSession,
  decrementBreak,
  decrementSession,
} from '../../features/pomodoro/pomodoroSlice';

const Settings = () => {
  // State
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.pomodoro.breakLength);
  const sessionLength = useSelector((state) => state.pomodoro.sessionLength);

  return (
    <section>
      <article>
        <button type="button" onClick={() => dispatch(decrementBreak())}>
          Left
        </button>

        <div>
          <h3>Break</h3>
          <p>{breakLength}</p>
        </div>

        <button type="button" onClick={() => dispatch(incrementBreak())}>
          Right
        </button>
      </article>

      <article>
        <button type="button" onClick={() => dispatch(decrementSession())}>
          Left
        </button>

        <div>
          <h3>Session</h3>
          <p>{sessionLength}</p>
        </div>

        <button type="button" onClick={() => dispatch(incrementSession())}>
          Right
        </button>
      </article>
    </section>
  );
};

export default Settings;
