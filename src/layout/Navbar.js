import { Link } from 'react-router-dom';
// Styles/Assets
import { Nav } from './Navbar.styled';

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-brand">
        <Link to="/">Pomotime</Link>
      </div>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
