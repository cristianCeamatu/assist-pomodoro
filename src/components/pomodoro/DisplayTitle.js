import { useSelector } from 'react-redux';

const DisplayTitle = () => {
  // State
  const timeLeftType = useSelector((state) => state.pomodoro.timeLeftType);

  return <h3>{timeLeftType}</h3>;
};

export default DisplayTitle;
