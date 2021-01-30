import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Pomotime</Link>
      </div>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
