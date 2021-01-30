import { useSelector } from 'react-redux';
// Components
import Display from './Display';
import Settings from './Settings';
import Buttons from './Buttons';

const Pomodoro = () => {
  const timeLeftType = useSelector((state) => state.pomodoro.timeLeftType);

  return (
    <div>
      <h3>{timeLeftType}</h3>
      <Display />
      <Settings />
      <Buttons />
    </div>
  );
};

export default Pomodoro;
