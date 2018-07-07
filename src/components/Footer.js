import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="page-footer black main">
    <div className="footer-copyright">
        <div className="container">
        Copyright &copy; {new Date().getFullYear()} TestThisFor.Me, All rights reserved. Tyler Jenkins, Grace Ho, Thomas Mosley, and Allan Jones
            <Link className="grey-text text-lighten-4 right" to="https://github.com/TyPhyter/TestThisFor.Me" target="_blank">View Code</Link>
        </div>
    </div>
</footer>
  );
};
