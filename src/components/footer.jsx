import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer id="footer" style={{ backgroundColor: "#1f6f8b" }}>
        <div className="row">
          <div className="text-left p-3 text-white col-md-6 copyright">
            &copy; {new Date().getFullYear()} All rights reserved by: Myfreecourse
          </div>

         {/* <div className="col-md-6 p-3 footer-text ">
            <NavLink to="/privacy"> Privacy Policy</NavLink>
            <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
          </div>*/}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
