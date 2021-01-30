import { Switch, Route } from 'react-router-dom';
// Components
import Pomodoro from './Pomodoro';
import About from './About';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route path="/" component={Pomodoro} />
    </Switch>
  </main>
);
export default Content;
