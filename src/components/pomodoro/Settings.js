import { useSelector, useDispatch } from 'react-redux';
// Actions
import {
  incrementBreak,
  incrementSession,
  decrementBreak,
  decrementSession,
} from '../../features/pomodoro/pomodoroSlice';
// Styles/Assets
import { SettingsContainer } from './Pomodoro.styled';
// Utils
import { intToPaddedString } from '../../utils/format';

const Settings = () => {
  // State
  const dispatch = useDispatch();
  const breakLength = useSelector((state) => state.pomodoro.breakLength);
  const sessionLength = useSelector((state) => state.pomodoro.sessionLength);

  return (
    <SettingsContainer>
      <div>
        <h3>Session</h3>
        <ul>
          <li>
            <button type="button" onClick={() => dispatch(decrementSession())}>
              -
            </button>
          </li>

          <li>
            <p>{intToPaddedString(sessionLength)}:00</p>
          </li>

          <li>
            <button type="button" onClick={() => dispatch(incrementSession())}>
              +
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h3>Break length</h3>
        <ul>
          <li>
            <button type="button" onClick={() => dispatch(decrementBreak())}>
              -
            </button>
          </li>

          <li>
            <p>{intToPaddedString(breakLength)}:00</p>
          </li>

          <li>
            <button type="button" onClick={() => dispatch(incrementBreak())}>
              +
            </button>
          </li>
        </ul>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
