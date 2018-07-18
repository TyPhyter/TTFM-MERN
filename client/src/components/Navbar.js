import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {

    redirect(path) {
        console.log('redirect', path);
        this.props.history.push(path);
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey lighten-4">
                        <div className="container">
                            <div onClick={() => { this.redirect('/') }} className="brand-logo">
                                <img id="ttfmLogo" src="img/ttfm-logo-clr.svg" alt="TestThisForMe Logo" width="50" />
                                <span className="hide-on-med-and-down" id="navTitle">TestThisFor.Me</span>
                            </div>

                            <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
                                <i className="material-icons">menu</i>
                            </Link>
                            <ul className="right hide-on-med-and-down indigo-text text-darken-4">
                                <li>
                                    <a onClick={() => { this.redirect('/all') }}>All Projects</a>
                                </li>
                                <li>
                                    <a onClick={() => { this.redirect('/') }}>My Projects</a>
                                </li>
                                <li>
                                    <a onClick={() => { this.redirect('/') }}>My Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    {/* <!--Mobile Main Nav --> */}
                    <li>
                        <a onClick={() => { this.redirect('/all') }}>All Projects</a>
                    </li>
                    <li>
                        <a onClick={() => { this.redirect('/') }}>My Projects</a>
                    </li>
                    <li>
                        <a onClick={() => { this.redirect('/') }}>My Profile</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Navbar);
