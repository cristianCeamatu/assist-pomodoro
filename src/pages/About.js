import ContactDetails from '../components/ContactDetails';
import { Wrapper } from './About.styled.js';

const About = () => {
  return (
    <Wrapper>
      <h1>About App</h1>
      <ContactDetails />
    </Wrapper>
  );
};

export default About;
