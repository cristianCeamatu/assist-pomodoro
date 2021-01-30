import { useSelector, useDispatch } from 'react-redux';
// Actions
import {
  incrementBreak,
  incrementSession,
  decrementBreak,
  decrementSession,
} from '../../features/pomodoro/pomodoroSlice';
// Utils
import { intToPaddedString } from '../../utils/format';

const Settings = () => {
  // State
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.pomodoro.breakLength);
  const sessionLength = useSelector((state) => state.pomodoro.sessionLength);

  return (
    <section>
      <div>
        <h3>Break length</h3>
        <div>
          <button type="button" onClick={() => dispatch(decrementBreak())}>
            -
          </button>

          <div>
            <p>{intToPaddedString(breakLength)}:00</p>
          </div>

          <button type="button" onClick={() => dispatch(incrementBreak())}>
            +
          </button>
        </div>
      </div>

      <div>
        <button type="button" onClick={() => dispatch(decrementSession())}>
          Left
        </button>

        <div>
          <h3>Session</h3>
          <p>{intToPaddedString(sessionLength)}:00</p>
        </div>

        <button type="button" onClick={() => dispatch(incrementSession())}>
          Right
        </button>
      </div>
    </section>
  );
};

export default Settings;
