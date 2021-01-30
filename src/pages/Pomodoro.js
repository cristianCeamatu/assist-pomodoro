// Components
import DisplayTitle from '../components/pomodoro/DisplayTitle';
import Display from '../components/pomodoro/Display';
import Settings from '../components/pomodoro/Settings';
import Buttons from '../components/pomodoro/Buttons';

const Pomodoro = () => {
  return (
    <section>
      <DisplayTitle />
      <Display />
      <Settings />
      <Buttons />
    </section>
  );
};

export default Pomodoro;
