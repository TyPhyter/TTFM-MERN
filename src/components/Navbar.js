import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <div>
        <nav>
        <div className="nav-wrapper grey lighten-4">
            <div className="container">
                <Link to="#" className="brand-logo">
                    <img id="ttfmLogo" src="img/ttfm-logo-clr.svg" alt="TestThisForMe Logo" width="50"/>
                    <span className="hide-on-med-and-down" id="navTitle">TestThisFor.Me</span>
                </Link>
                
                <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </Link>
                <ul className="right hide-on-med-and-down indigo-text text-darken-4">
                    <li>
                        <Link to="/all">Available Projects</Link>
                    </li>
                    <li>
                        <Link to="/detail">My Projects</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/">Login/Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
        {/* <!--Mobile Main Nav --> */}
        <li>
            <Link to="/all">Available Projects</Link>
        </li>
        <li>
            <Link to="/dashboard">My Projects</Link>
        </li>
        <li>
            <Link to="/profile">My Profile</Link>
        </li>
        <li>
            <Link to="#">Login/Sign Up</Link>
        </li>
    </ul>
    </div>
    );
  }
}

export default Navbar;
