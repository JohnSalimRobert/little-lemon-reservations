import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Menu</Link>
        </li>
        <li>
          <Link to='/bookingTable'>Reservations</Link>
        </li>
        <li>
          <Link>Order Online</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
