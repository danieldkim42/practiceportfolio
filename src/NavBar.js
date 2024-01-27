import { Link } from "react-router-dom";
import './NavBar.css';
import { useEffect } from "react";

function NavBar(props) {

  useEffect(()=> {
    console.log('props.vis: ', props.vis)
  },[props.vis])

  return (
    <nav>
      <ul id="primary-navigation" data-visible={props.vis ? "true" : "false"} className={`primary-navigation flex`}>
        <li className="active">
          <Link to="/" className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span aria-hidden="true">00</span>Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="ff-sans-cond uppercase text-white letter-spacing-2">
            <span aria-hidden="true">01</span>Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;