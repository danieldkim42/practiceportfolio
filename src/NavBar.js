import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <nav>
      <ul id="primary-navigation" className="primary-navigation flex">
        <li className="active">
          <Link to="/">
            <span aria-hidden="true">00</span>Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span aria-hidden="true">01</span>Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;