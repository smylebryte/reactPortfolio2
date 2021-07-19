import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/contactme">Contact Me</Link>
          </li>
        </ul>
      </nav>
      <h1>Alicia Hughes</h1>
      <h3>My Portfolio</h3>
    </div>
  );
}

export default Header;
