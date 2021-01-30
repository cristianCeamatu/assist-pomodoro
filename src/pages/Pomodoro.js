// Components
import DisplayTitle from '../components/pomodoro/DisplayTitle';
import Display from '../components/pomodoro/Display';
import Settings from '../components/pomodoro/Settings';
import Buttons from '../components/pomodoro/Buttons';
// Styles/Assets
import { GridSection } from './Pomodoro.styled';

const Pomodoro = () => {
  return (
    <GridSection>
      <DisplayTitle />
      <Display />
      <Settings />
      <Buttons />
    </GridSection>
  );
};

export default Pomodoro;
