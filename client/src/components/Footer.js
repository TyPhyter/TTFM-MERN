import React from "react";

export default () => {
  return (
    <footer className="page-footer black main">
    <div className="footer-copyright">
        <div className="container">
        Copyright &copy; {new Date().getFullYear()} TestThisFor.Me, All rights reserved. Tyler Jenkins, Grace Ho, Thomas Mosley, and Allan Jones
            <a className="grey-text text-lighten-4 right" href="https://github.com/TyPhyter/ttfm-mern" target="_blank">View Code</a>
        </div>
    </div>
</footer>
  );
};
