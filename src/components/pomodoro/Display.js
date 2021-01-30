import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// Styles/Assets
import { DisplayContainer } from './Pomodoro.styled';
// State
import { selectTimeleft } from '../../features/pomodoro/pomodoroSlice';

const Display = () => {
  // State
  const timeLeft = useSelector(selectTimeleft);
  const sessionLength = useSelector((state) => state.pomodoro.sessionLength);
  const breakLength = useSelector((state) => state.pomodoro.breakLength);
  const timeLeftType = useSelector((state) => state.pomodoro.timeLeftType);
  const [strokeOffset, setStrokeOffset] = useState(0);
  // Actions/Effects
  useEffect(() => {
    const totalTimePerTurn =
      timeLeftType === 'Session' ? sessionLength * 60 : breakLength * 60;
    if (totalTimePerTurn % (totalTimePerTurn / 100) === 0)
      setStrokeOffset((prevState) => (prevState += 0.5));
  }, [timeLeft, breakLength, sessionLength, timeLeftType]);

  return (
    <DisplayContainer>
      <h1>{timeLeft}</h1>
      <svg id="circle" viewBox="0 0 100 100" width="100" height="100">
        <circle
          r="45"
          cx="50%"
          cy="50%"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="0, 0"
        />
        <circle
          id="success-value"
          r="42"
          cx="50%"
          cy="50%"
          stroke="rgba(109, 215, 185, 0.65)"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`194, ${strokeOffset}`}
          strokeDashoffset="0"
        />
      </svg>
    </DisplayContainer>
  );
};

export default Display;
