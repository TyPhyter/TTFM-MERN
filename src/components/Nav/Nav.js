import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className="navbar-fixed">
    <nav>
        <div className="container">
            <div className="nav-wrapper ">
                <a href="#!" className="brand-logo">TestThisFor.Me</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Available Projects</a></li>
                    <li><a href="sass.html">My Projects</a></li>
                    <li><a href="sass.html">My Profile</a></li>
                    <li><a href="badges.html">Login/Sign In</a></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
)



export default Nav;