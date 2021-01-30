import { FaGithub, FaRegUser, FaCode, FaRegFile } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div>
      <article className="contact">
        <p>
          <FaRegUser />
        </p>
        <div>
          <h3>Author name</h3>
          <p>John Doe</p>
        </div>
      </article>

      <article className="contact">
        <p>
          <FaGithub />
        </p>
        <div>
          <h3>Github</h3>
          <p>Johndoe309</p>
        </div>
      </article>

      <article className="contact">
        <p>
          <FaRegFile />
        </p>
        <div>
          <h3>App Description</h3>
          <p>Velit odio auctor malesuada nulla odio nunc amet ac tempus.</p>
        </div>
      </article>

      <article className="contact">
        <p>
          <FaCode />
        </p>
        <div>
          <h3>Stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ContactDetails;
