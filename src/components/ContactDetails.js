import { FaGithub, FaRegUser, FaCode, FaRegFile } from 'react-icons/fa';
// Styles/Assets
import { Wrapper } from './ContactDetails.styled';

const ContactDetails = () => {
  return (
    <Wrapper>
      <article>
        <p className="icon">
          <FaRegUser />
        </p>
        <div className="details">
          <h3>Author name</h3>
          <p>John Doe</p>
        </div>
      </article>

      <article>
        <p className="icon">
          <FaGithub />
        </p>
        <div className="details">
          <h3>Github</h3>
          <p>Johndoe309</p>
        </div>
      </article>

      <article>
        <p className="icon">
          <FaRegFile />
        </p>
        <div className="details">
          <h3>Github</h3>
          <p>Velit odio auctor malesuada nulla odio nunc amet ac tempus.</p>
        </div>
      </article>

      <article>
        <p className="icon">
          <FaCode />
        </p>
        <div className="details">
          <h3>Stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
          </ul>
        </div>
      </article>
    </Wrapper>
  );
};

export default ContactDetails;
