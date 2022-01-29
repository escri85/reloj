import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss'
const Navbar = () => {
    return <nav className="">
    <div className="container">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link" to="/clock">
            reloj
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/crono">
            crono
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/countdown">
            cuenta atras
          </Link>
        </li>
      </ul>
    </div>
  </nav>
};

export default Navbar;
