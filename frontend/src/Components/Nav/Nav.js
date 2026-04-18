import React from "react";
import "./nav.css"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="navbar">
      <ul className="home-ul">
        <li className="home-li">
          <Link to="/mainhome" className="active home-a">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/adduser" className="active home-a">
            <h1>ADD user</h1>
          </Link>
        </li>
        <li className="home-li">
          <Link to="/userdetails" className="active home-a">
            <h1>User details</h1>
            </Link>
        </li>
        <li className="home-li">
          <Link to="/register" className="active home-a">
            <button>Register</button>
            </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
